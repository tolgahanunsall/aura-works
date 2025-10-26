import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import productsData from "../../products_data.json";

interface Product {
  urun_adi: string;
  kategori: string;
  euro_fiyat: number;
  marka: string;
  orijinal_referans: string;
}

const Products = () => {
  const allProducts: Product[] = productsData;

  const manProducts = allProducts.filter((p) => p.kategori === "MAN");
  const womanProducts = allProducts.filter((p) => p.kategori === "WOMAN");
  const unisexProducts = allProducts.filter((p) => p.kategori === "UNISEX");

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

      {/* Products by Category */}
      <section className="py-16 px-4">
        <div className="container mx-auto space-y-20">
          {/* Man Section */}
          {manProducts.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Man</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
                <p className="text-foreground/60 mt-2">{manProducts.length} ürün</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {manProducts.map((product, index) => renderProductCard(product, index))}
              </div>
            </div>
          )}

          {/* Woman Section */}
          {womanProducts.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Woman</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
                <p className="text-foreground/60 mt-2">{womanProducts.length} ürün</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {womanProducts.map((product, index) => renderProductCard(product, index))}
              </div>
            </div>
          )}

          {/* Unisex Section */}
          {unisexProducts.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Unisex</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
                <p className="text-foreground/60 mt-2">{unisexProducts.length} ürün</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {unisexProducts.map((product, index) => renderProductCard(product, index))}
              </div>
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
