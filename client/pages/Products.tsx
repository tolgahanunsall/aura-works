import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Search } from "lucide-react";
import { useState } from "react";

interface Product {
  urun_adi: string;
  kategori: string;
  euro_fiyat: number;
  marka: string;
  orijinal_referans: string;
}

// *** EKLENMESİ GEREKEN productsData DİZİSİ BURADADIR ***
const productsData: Product[] = [
  {
    urun_adi: "Gül ve Vanilya",
    kategori: "WOMAN",
    euro_fiyat: 49.90,
    marka: "Esansia",
    orijinal_referans: "Chanel Coco Mademoiselle Parfüm Muadili"
  },
  {
    urun_adi: "Derin Deniz",
    kategori: "MAN",
    euro_fiyat: 54.50,
    marka: "Aroma Art",
    orijinal_referans: "Dior Sauvage Parfüm Muadili"
  },
  {
    urun_adi: "Orman Fısıltısı",
    kategori: "UNISEX",
    euro_fiyat: 62.00,
    marka: "Niche Scent",
    orijinal_referans: "Tom Ford Oud Wood Parfüm Muadili"
  },
  {
    urun_adi: "Beyaz Çiçek Bahçesi",
    kategori: "WOMAN",
    euro_fiyat: 47.90,
    marka: "Esansia",
    orijinal_referans: "Lancôme La Vie Est Belle Parfüm Muadili"
  },
  {
    urun_adi: "Baharatlı Tütün",
    kategori: "MAN",
    euro_fiyat: 58.00,
    marka: "Aroma Art",
    orijinal_referans: "Maison Francis Kurkdjian Baccarat Rouge 540 Muadili"
  },
  {
    urun_adi: "Misk ve Amber",
    kategori: "UNISEX",
    euro_fiyat: 69.50,
    marka: "Niche Scent",
    orijinal_referans: "Creed Aventus Parfüm Muadili"
  },
  {
    urun_adi: "Şekerli Yasemin",
    kategori: "WOMAN",
    euro_fiyat: 51.00,
    marka: "Femina",
    orijinal_referans: "Yves Saint Laurent Black Opium Parfüm Muadili"
  },
  {
    urun_adi: "Taze Narenciye",
    kategori: "MAN",
    euro_fiyat: 45.00,
    marka: "Aqua Cool",
    orijinal_referans: "Giorgio Armani Acqua Di Gio Parfüm Muadili"
  },
  {
    urun_adi: "Sandal Ağacı",
    kategori: "UNISEX",
    euro_fiyat: 59.90,
    marka: "Niche Scent",
    orijinal_referans: "Le Labo Santal 33 Parfüm Muadili"
  },
  {
    urun_adi: "Tropikal Meyve",
    kategori: "WOMAN",
    euro_fiyat: 53.50,
    marka: "Esansia",
    orijinal_referans: "Thierry Mugler Alien Parfüm Muadili"
  },
  {
    urun_adi: "Yoğun Vetiver",
    kategori: "MAN",
    euro_fiyat: 61.50,
    marka: "Aroma Art",
    orijinal_referans: "Terre d'Hermès Parfüm Muadili"
  },
  {
    urun_adi: "Pudra ve İris",
    kategori: "WOMAN",
    euro_fiyat: 48.00,
    marka: "Femina",
    orijinal_referans: "Dior J'adore Parfüm Muadili"
  },
];
// *** productsData DİZİSİ SONU ***


const Products = () => {
  const allProducts: Product[] = productsData;
  const [selectedCategory, setSelectedCategory] = useState("woman");
  const [searchQuery, setSearchQuery] = useState("");

  const manProducts = allProducts.filter((p) => p.kategori === "MAN");
  const womanProducts = allProducts.filter((p) => p.kategori === "WOMAN");
  const unisexProducts = allProducts.filter((p) => p.kategori === "UNISEX");

  const filterProducts = () => {
    let filtered = allProducts;
    
    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.kategori === selectedCategory.toUpperCase());
    }
    
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) => 
        p.urun_adi.toLowerCase().includes(query) ||
        p.marka.toLowerCase().includes(query) ||
        p.orijinal_referans.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  const filteredProducts = filterProducts();

  const getGradient = (index: number) => {
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      "linear-gradient(135deg, #ffc3a0 0%, #ffafbd 100%)",
    ];
    return gradients[index % gradients.length];
  };

  const renderProductCard = (product: Product, index: number) => (
    <div
      key={index}
      className="group rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card"
    >
      {/* Product Image */}
      <div
        className="h-56 relative overflow-hidden bg-gradient-to-br"
        style={{ backgroundImage: getGradient(index) }}
      >
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
        <h3 className="text-lg font-bold text-foreground mb-2">
          {product.urun_adi}
        </h3>
        <p className="text-xs text-foreground/50 mb-1">
          {product.marka}
        </p>
        <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
          {product.orijinal_referans}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-primary">
            €{product.euro_fiyat}
          </span>
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Sepete Ekle
          </Button>
        </div>
      </div>
    </div>
  );

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

      {/* Search and Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Ürün adı, marka veya referans ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory("woman")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === "woman"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              Kadın ({womanProducts.length})
            </button>
            <button
              onClick={() => setSelectedCategory("man")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === "man"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              Erkek ({manProducts.length})
            </button>
            <button
              onClick={() => setSelectedCategory("unisex")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === "unisex"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              Unisex ({unisexProducts.length})
            </button>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              Tüm Ürünler ({allProducts.length})
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => renderProductCard(product, index))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-foreground/60 mb-2">Ürün bulunamadı</p>
              <p className="text-foreground/40">Arama kriterlerinizi değiştirip tekrar deneyin</p>
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
