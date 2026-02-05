import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

/**
 * Seaside Beach - Menü Sayfası
 * Bar, Kafe ve Restoran menüsü
 * SEO Optimized
 */

export default function Menu() {
  // Schema Markup for Restaurant Menu
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Seaside Beach",
      "url": "https://seaside-beach.com/menu",
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/khlTOFBXzeDQfJBm.jpg",
      "description": "Seaside Beach'in bar, kafe ve restoran menüsü. Kokteyl, kahvaltı, deniz ürünleri ve özel yemekler.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yukarıyapıcı, Mustafa Kemal Atatürk Cad No:1",
        "addressLocality": "Erdek",
        "addressRegion": "Balıkesir",
        "postalCode": "10502",
        "addressCountry": "TR"
      },
      "telephone": "+905322063531",
      "priceRange": "$$"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const barMenu = [
    { name: "Soğuk İçecekler", items: ["Limonata", "Meyve Suyu", "Iced Coffee", "Smoothie"] },
    { name: "Sıcak İçecekler", items: ["Türk Kahvesi", "Espresso", "Cappuccino", "Çay"] },
    { name: "Kokteyl", items: ["Mojito", "Margarita", "Pina Colada", "Daiquiri"] },
  ];

  const cafeMenu = [
    { name: "Kahvaltı", items: ["Menemen", "Sucuk & Ekmek", "Peynir Tabağı", "Tost"] },
    { name: "Atıştırmalık", items: ["Hummus", "Tarama", "Meze Tabağı", "Tatlı"] },
    { name: "Tatlılar", items: ["Baklava", "Künefe", "Cheesecake", "Pasta"] },
  ];

  const restaurantMenu = [
    { name: "Deniz Ürünleri", items: ["Grilled Fish", "Calamari", "Shrimp Saganaki", "Sea Bass"] },
    { name: "Ege Mutfağı", items: ["Zeytinyağlı Enginar", "Fava", "Salatalar", "Mezeler"] },
    { name: "Ana Yemekler", items: ["Lamb Chops", "Grilled Vegetables", "Pasta Frutti di Mare", "Risotto"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-2xl font-bold text-accent">SEASIDE</div>
              <div className="text-sm text-muted-foreground">BEACH</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-foreground hover:text-accent transition">Hakkımızda</Link>
            <Link href="/#experiences" className="text-foreground hover:text-accent transition">Deneyimler</Link>
            <Link href="/menu" className="text-foreground hover:text-accent transition font-semibold">Menü</Link>
            <Link href="/#gallery" className="text-foreground hover:text-accent transition">Galeri</Link>
            <Link href="/#contact" className="text-foreground hover:text-accent transition">İletişim</Link>
          </nav>

          <Link href="/reservation">
            <button className="seaside-button text-sm">Rezervasyon</button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/10 to-background py-16">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Menü</h1>
          <p className="text-xl text-muted-foreground">Lezzet ve Kaliteli Seçenekler</p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="seaside-section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Bar Menu */}
            <div>
              <h2 className="text-3xl font-bold text-accent mb-8">🍹 Bar & Kafe</h2>
              {barMenu.map((category, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-accent/30">
                    {category.name}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Cafe Menu */}
            <div>
              <h2 className="text-3xl font-bold text-accent mb-8">☕ Kahvaltı & Atıştırmalık</h2>
              {cafeMenu.map((category, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-accent/30">
                    {category.name}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Restaurant Menu */}
            <div>
              <h2 className="text-3xl font-bold text-accent mb-8">🍽️ Restoran</h2>
              {restaurantMenu.map((category, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-accent/30">
                    {category.name}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-secondary/30 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Rezervasyon Yap</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Lezzet dolu bir deneyim için bizi arayın
          </p>
          <a href="tel:+905322063531" className="seaside-button text-lg">
            📞 0532 206 3531
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">SEASIDE BEACH</h4>
              <p className="text-sm opacity-80">Bandırma'nın en şık plajı</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/" className="hover:opacity-100">Ana Sayfa</Link></li>
                <li><Link href="/menu" className="hover:opacity-100">Menü</Link></li>
                <li><Link href="/reservation" className="hover:opacity-100">Rezervasyon</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sosyal Medya</h4>
              <a href="https://instagram.com/seasidecbbc" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
                Instagram @seasidecbbc
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <p className="text-sm opacity-80">
                📞 0532 206 3531<br />
                ✉️ seaside@seaside-camping.com
              </p>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2025 Seaside Beach - Tüm Hakları Saklıdır</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
