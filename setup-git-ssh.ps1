# setup-git-ssh.ps1

$sshPath = "$env:USERPROFILE\.ssh\id_ed25519"

if (-Not (Test-Path $sshPath)) {
    Write-Host "🔐 SSH anahtarı oluşturuluyor..."
    ssh-keygen -t ed25519 -C "tolgahan.nsal@gmail.com"
    Write-Host "`n📋 Public key (GitHub'a ekle):"
    Get-Content "$sshPath.pub"
    Write-Host "`nGitHub > Settings > SSH and GPG keys > New SSH key kısmına yapıştır."
    pause
} else {
    Write-Host "✅ SSH anahtarı zaten mevcut."
}

Write-Host "`n🚀 Git işlemleri başlatılıyor..."
git add .
git commit -m "Otomatik güncelleme: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin main
Write-Host "✅ GitHub'a başarıyla gönderildi."
