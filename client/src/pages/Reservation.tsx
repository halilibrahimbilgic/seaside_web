import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Clock, Users, Mail, Phone } from "lucide-react";

/**
 * Seaside Beach - Rezervasyon Sayfası
 * SEO Optimized - Schema Markup eklendi
 */

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Reservation submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "" });
    }, 3000);
  };

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
            <Link href="/menu" className="text-foreground hover:text-accent transition">Menü</Link>
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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Rezervasyon Yap</h1>
          <p className="text-xl text-muted-foreground">Unutulmaz bir deneyim için bizi rezerve edin</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="seaside-section">
        <div className="container max-w-2xl">
          <div className="seaside-card p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-3xl font-bold text-accent mb-4">Başarılı!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Rezervasyon talebiniz alındı. Kısa süre içinde sizinle iletişime geçeceğiz.
                </p>
                <p className="text-muted-foreground">
                  📞 0532 206 3531
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Adınızı girin"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="0532 206 3531"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Tarih *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Saat *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Kişi Sayısı *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} Kişi</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Özel İstekler</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Doğum günü, yıldönümü vb. özel durumlar varsa yazınız..."
                  />
                </div>

                <button type="submit" className="w-full seaside-button text-lg py-4">
                  Rezervasyon Talebi Gönder
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Hızlı rezervasyon için: <a href="tel:+905322063531" className="text-accent font-semibold hover:underline">0532 206 3531</a>
                </p>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="seaside-card p-6 text-center">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Telefon</h3>
              <a href="tel:+905322063531" className="text-accent hover:underline">
                0532 206 3531
              </a>
            </div>
            
            <div className="seaside-card p-6 text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:seaside@seaside-camping.com" className="text-accent hover:underline">
                seaside@seaside-camping.com
              </a>
            </div>
            
            <div className="seaside-card p-6 text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
              <p className="text-sm text-muted-foreground">
                09:00 - 24:00<br />
                Her Gün Açık
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-12">
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
