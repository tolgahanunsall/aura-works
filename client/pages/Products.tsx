import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, Filter, Heart } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tüm Ürünler" },
    { id: "bayan", label: "Bayan" },
    { id: "erkek", label: "Erkek" },
    { id: "unisex", label: "Unisex" },
  ];

  const allProducts = [
    {
      id: 1,
      name: "Gül Bahçesi",
      category: "bayan",
      description: "Pembe güller ve kehribarın narin karışımı",
      price: 450,
      image:
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bestseller: true,
    },
    {
      id: 2,
      name: "Vanilya Rüyası",
      category: "bayan",
      description: "Misk notalarıyla sıcak vanilya",
      price: 400,
      image:
        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      bestseller: false,
    },
    {
      id: 3,
      name: "Okyanus Esintisi",
      category: "unisex",
      description: "Taze narenciye ve okyanus notaları",
      price: 480,
      image:
        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      bestseller: false,
    },
    {
      id: 4,
      name: "Gece Yasemini",
      category: "bayan",
      description: "Odunsu tonlarla lüks yasemin",
      price: 550,
      image:
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      bestseller: false,
    },
    {
      id: 5,
      name: "Lavanta Huzuru",
      category: "unisex",
      description: "Okaliptüs notalarıyla rahatlatıcı lavanta",
      price: 420,
      image:
        "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      bestseller: true,
    },
    {
      id: 6,
      name: "Bal Fısıltısı",
      category: "bayan",
      description: "Yumuşak çiçek notalarıyla altın bal",
      price: 460,
      image:
        "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      bestseller: false,
    },
    {
      id: 7,
      name: "Sedir Ormanı",
      category: "erkek",
      description: "Baharat aksanlarıyla derin sedir ağacı",
      price: 520,
      image:
        "linear-gradient(135deg, #8b7355 0%, #d4a574 100%)",
      bestseller: false,
    },
    {
      id: 8,
      name: "Narenciye Güneşi",
      category: "unisex",
      description: "Parlak bergamot ve greyfurt karışımı",
      price: 440,
      image:
        "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      bestseller: false,
    },
    {
      id: 9,
      name: "İpek & Misk",
      category: "erkek",
      description: "Kremsi bir baz ile duyusal misk",
      price: 580,
      image:
        "linear-gradient(135deg, #c471ed 0%, #f64f59 100%)",
      bestseller: true,
    },
    {
      id: 10,
      name: "Şakayık Çiçeği",
      category: "bayan",
      description: "Gül yapraklarıyla yumuşak şakayık",
      price: 450,
      image:
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bestseller: false,
    },
    {
      id: 11,
      name: "Paçuli Geceleri",
      category: "erkek",
      description: "Kehribar tonlarıyla zengin paçuli",
      price: 500,
      image:
        "linear-gradient(135deg, #8d4426 0%, #c9913d 100%)",
      bestseller: false,
    },
    {
      id: 12,
      name: "Nane Mojito",
      category: "unisex",
      description: "Limon kabuğuyla ferahlatıcı nane",
      price: 410,
      image:
        "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      bestseller: false,
    },
  ];

  const filtered =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Koleksiyonumuz
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            El yapımı parfümlerimizin tam koleksiyonunu keşfedin. Her koku,
            unutulmaz bir deneyim yaratmak için benzersiz bir şekilde harmanlanmıştır.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Kategoriye Göre Filtrele</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-border text-foreground hover:border-primary border border-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card"
              >
                {/* Product Image */}
                <div
                  className="h-56 relative overflow-hidden bg-gradient-to-br"
                  style={{ backgroundImage: product.image }}
                >
                  {product.bestseller && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Çok Satan
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center gap-3">
                    <Button className="opacity-0 group-hover:opacity-100 bg-primary hover:bg-primary/90 transition-all duration-300 text-white gap-2">
                      Hızlı Görüntüle <ArrowRight className="w-4 h-4" />
                    </Button>
                    <button className="opacity-0 group-hover:opacity-100 p-2 bg-accent hover:bg-accent/90 rounded-lg text-accent-foreground transition-all duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="inline-block px-2 py-1 bg-secondary/20 rounded text-xs font-medium text-secondary mb-3 capitalize">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-bold text-primary">
                      ₺{product.price}
                    </span>
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Sepete Ekle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">
                Bu kategoride ürün bulunamadı.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-primary/20">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            İlk Siparişinizde %15 İndirim Kazanın
          </h2>
          <p className="text-foreground/60 mb-6">
            Haber bültenimize abone olun ve özel teklifler, yeni ürün
            lansmanı ve koku ipucları alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 h-12">
              Abone Ol
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
