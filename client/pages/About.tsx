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
            Our Mission & Story
          </h1>
          <p className="text-lg text-foreground/60">
            Empowering artisans to create and share their passion through the
            art of fragrance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="prose dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Who We Are
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                PerfumeArt is more than just a fragrance brand—it's a community
                dedicated to celebrating artisanal excellence and creative
                expression. We believe that everyone deserves the opportunity to
                pursue their passions and share their talents with the world.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Founded with the vision of empowering artisans, PerfumeArt
                started as a simple idea: create a platform where talented
                individuals can showcase their handcrafted perfumes and connect
                with fragrance enthusiasts worldwide. What began as a passion
                project has evolved into a thriving community of creators and
                loyal customers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Passion</h3>
                  <p className="text-foreground/60 text-sm">
                    Every fragrance is created with genuine love and dedication
                    to the craft.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Users className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Community</h3>
                  <p className="text-foreground/60 text-sm">
                    We believe in supporting and uplifting our artisans and
                    customers.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Zap className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Quality</h3>
                  <p className="text-foreground/60 text-sm">
                    We never compromise on ingredients or craftsmanship.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-2">
                    Sustainability
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Environmental responsibility is at the heart of everything
                    we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-foreground/60 mb-6">
                Discover our collection of artisanal perfumes and support
                talented creators.
              </p>
              <Link to="/products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 h-11">
                  Shop Now
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
