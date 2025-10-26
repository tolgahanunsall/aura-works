import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            İletişime Geçin
          </h1>
          <p className="text-lg text-foreground/60">
            Sorularınız mı var? Sizden haber almayı çok isteriz. Bize her zaman ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">E-posta</h3>
              <p className="text-foreground/60 mb-2">tolgahan.unsal@icloud.com</p>
              <p className="text-sm text-foreground/50">
                Genellikle 24 saat içinde yanıt veriyoruz
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border">
              <Phone className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Telefon</h3>
              <p className="text-foreground/60 mb-2">+90 (536) 483-6699</p>
              <p className="text-sm text-foreground/50">
                Pzt-Cuma, 09:00-17:00
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Ziyaret Edin</h3>
              <p className="text-foreground/60 mb-2">Koku Sokak No:123</p>
              <p className="text-sm text-foreground/50">
                İstanbul, Türkiye
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Bize Mesaj Gönderin
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  ✓ Teşekkürler! Mesajınız başarıyla gönderildi.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Ahmet Yılmaz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="ahmet@ornek.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Nasıl yardımcı olabiliriz?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mesaj
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Bize sorgunuz hakkında daha fazla bilgi verin..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 gap-2 flex items-center justify-center"
              >
                Mesaj Gönder <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Sosyal Medyada Takip Edin
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-semibold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg font-semibold transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg font-semibold transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
