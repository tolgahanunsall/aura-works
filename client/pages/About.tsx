import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Zap, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Misyonumuz & Hikayemiz
          </h1>
          <p className="text-lg text-foreground/60">
            Koku sanatı aracılığıyla zanaatkarları tutkularını yaratmaya ve paylaşmaya güçlendiriyoruz.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="prose dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Biz Kimiz
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                PerfumeArt, sadece bir parfüm markası olmanın ötesinde; zanaatkârlığı, yaratıcılığı ve insan ruhunun güzelliğini kutlayan bir topluluktur.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Down sendromlu bireylerin topluma aktif olarak katılmalarını, üretken yönlerini ortaya koymalarını ve hayatın her alanında yer almalarını destekliyoruz.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Her bireyin tutkularını gerçekleştirme ve yeteneklerini dünyayla paylaşma hakkına sahip olduğuna inanıyoruz. PerfumeArt olarak, farklılıkların yarattığı güzelliği ve her bireyin kendi kokusuyla hayata kattığı benzersiz değeri önemsiyoruz.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Hikayemiz
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                PerfumeArt, "her bireyin yaratıcılığı değerlidir" inancıyla doğdu.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Down sendromlu bireylerin el emeğiyle hazırladıkları parfümleri sergileyebilecekleri, özgüvenlerini artırabilecekleri ve dünya çapındaki koku tutkunlarıyla buluşabilecekleri bir platform oluşturma vizyonuyla yola çıktık.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Zamanla bu fikir, üretkenliği teşvik eden, ilham veren ve sevgiyle büyüyen bir topluluğa dönüştü. Bugün PerfumeArt, sadece parfüm değil; her damlasında umut, emek ve kapsayıcılık taşıyan bir yaşam felsefesi sunuyor.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Misyonumuz
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                PerfumeArt olarak misyonumuz; down sendromlu bireylerin sanatsal potansiyellerini keşfetmelerine, özgüvenlerini güçlendirmelerine ve topluma aktif şekilde katılmalarına olanak sağlamak.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                El emeğiyle üretilen her parfüm, sadece bir koku değil, aynı zamanda bir hikâyenin ve bir emeğin sembolüdür. Biz, bu hikâyeleri dünyayla paylaşarak hem bireylerin hem de toplumun farkındalığını artırmayı hedefliyoruz.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Vizyonumuz
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Vizyonumuz; kapsayıcılığı, yaratıcılığı ve sosyal sorumluluğu merkezine alan global bir marka olmaktır.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                PerfumeArt, down sendromlu bireylerin üretim süreçlerinde yer aldığı, sanatı ve zanaatı birleştiren ilham verici bir ekosistem yaratmayı amaçlar.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Dünya genelinde herkesin, kokular aracılığıyla sevgi, saygı ve birlikte üretmenin güzelliğini hissedebileceği bir gelecek inşa ediyoruz.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Değerlerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Kapsayıcılık</h3>
                  <p className="text-foreground/60 text-sm">
                    Her bireyin topluma katkı sağlayabileceğine inanıyor, farklılıkları kutluyoruz.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Users className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Yaratıcılık</h3>
                  <p className="text-foreground/60 text-sm">
                    Her parfüm, bir sanat eseri ve özgün bir ifade biçimidir.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Zap className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Sosyal Sorumluluk</h3>
                  <p className="text-foreground/60 text-sm">
                    Topluma değer katan, dönüştürücü ve sürdürülebilir bir model sunuyoruz.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">
                    Sevgi & Emek
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Her ürün, özveri, sabır ve el emeğiyle hazırlanır.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Topluluğumuza Katılmaya Hazır mısınız?
              </h2>
              <p className="text-foreground/60 mb-6">
                Sanatsal parfüm koleksiyonumuzu keşfedin ve yetenekli yaratıcıları destekleyin.
              </p>
              <Link to="/products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 h-11">
                  Alışverişe Başla
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
