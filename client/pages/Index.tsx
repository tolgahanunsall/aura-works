import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Palette } from "lucide-react";

const Index = () => {
  const featured = [
    {
      id: 1,
      name: "Gül Bahçesi",
      description: "Pembe güller ve kehribarın narin karışımı",
      price: "₺450",
      image:
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      category: "Çiçeksi",
    },
    {
      id: 2,
      name: "Vanilya Rüyası",
      description: "Misk notalarıyla sıcak vanilya",
      price: "₺400",
      image:
        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      category: "Tatlı",
    },
    {
      id: 3,
      name: "Okyanus Esintisi",
      description: "Taze narenciye ve okyanus notaları",
      price: "₺480",
      image:
        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      category: "Ferah",
    },
    {
      id: 4,
      name: "Gece Yasemini",
      description: "Odunsu tonlarla lüks yasemin",
      price: "₺550",
      image:
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "Oryantal",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10 pt-16 pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full w-fit">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Handcrafted Excellence
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Artisanal Perfumes,{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Made with Love
                </span>
              </h1>

              <p className="text-lg text-foreground/70 max-w-lg">
                Discover our exclusive collection of handcrafted perfumes created
                with passion and care. Each bottle tells a story of dedication,
                quality, and artistic expression.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base font-semibold gap-2 w-full sm:w-auto">
                    Shop Now <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="px-8 h-12 text-base font-semibold border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-sm text-foreground/60">Handmade</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Natural</div>
                  <p className="text-sm text-foreground/60">Ingredients</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">✓</div>
                  <p className="text-sm text-foreground/60">Eco-Friendly</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative h-full bg-gradient-to-br from-primary/40 to-accent/40 rounded-3xl border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="space-y-4 text-center text-white">
                  <Heart className="w-24 h-24 mx-auto animate-pulse" />
                  <p className="text-lg font-semibold">Premium Fragrances</p>
                  <p className="text-sm opacity-90">Crafted for You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-4">
              <Palette className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Our Collection
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Fragrances
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Explore our handpicked selection of signature perfumes, each
              carefully crafted to deliver a unique sensory experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="h-48 sm:h-56 relative overflow-hidden bg-gradient-to-br"
                  style={{ backgroundImage: product.image }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 bg-primary hover:bg-primary/90 transition-all duration-300 text-white gap-2">
                      View <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-5 bg-card">
                  <div className="inline-block px-2 py-1 bg-secondary/20 rounded text-xs font-medium text-secondary mb-3">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-12">
            <Link to="/products">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 h-12 text-base font-semibold gap-2"
              >
                View All Products <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Handcrafted with Care
              </h3>
              <p className="text-foreground/60">
                Every bottle is carefully crafted by artisans dedicated to
                creating exceptional fragrances.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Premium Ingredients
              </h3>
              <p className="text-foreground/60">
                We use only the finest natural ingredients sourced responsibly
                from around the world.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Unique Designs
              </h3>
              <p className="text-foreground/60">
                Each fragrance is a unique creation, blending artistry with
                olfactory excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
              Join hundreds of fragrance enthusiasts who have discovered their
              signature scent. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base font-semibold gap-2 w-full sm:w-auto">
                  Browse Collection <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <button className="btn-3d w-full sm:w-auto">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
