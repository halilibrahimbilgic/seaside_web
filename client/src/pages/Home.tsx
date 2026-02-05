import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Instagram, ChevronRight, Star, Anchor, ChevronDown } from "lucide-react";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useTranslation } from "react-i18next";

/**
 * Seaside Beach - Ana Sayfa
 * Mobil ölçeklendirme optimizasyonu - Tüm cihazlarda aktif ve stabil
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { events, loading, error } = useGoogleSheet();
  const { t, i18n } = useTranslation();
  const language = i18n.language as 'tr' | 'en';

  // Schema Markup for Local Business
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Seaside Beach",
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/khlTOFBXzeDQfJBm.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yukarıyapıcı, Mustafa Kemal Atatürk Cad No:1",
        "addressLocality": "Erdek",
        "addressRegion": "Balıkesir",
        "postalCode": "10502",
        "addressCountry": "TR"
      },
      "telephone": "+905322063531",
      "email": "seaside@seaside-camping.com",
      "url": "https://seaside-beach.com",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "24:00"
        }
      ],
      "sameAs": [
        "https://instagram.com/seasidecbbc",
        "https://maps.app.goo.gl/YsS7q56yQhhRg69s9"
      ]
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

  const reviews = [
    {
      name: "Alper Murat",
      rating: 5,
      text: "2025 senesini full Akdeniz ve Ege'de kamp yaparak geçirmiş biri olarak söyleyebilirim ki örnek alınması gereken bir işletme."
    },
    {
      name: "Sibel Köse",
      rating: 5,
      text: "Bayıldımmmmmm ☺️ Harika bir deneyim yaşadık. Tuvalet ve duş tesisleri çok temiz ve modern."
    },
    {
      name: "Damla Türk",
      rating: 5,
      text: "Çok güzel bir mekan, işletmecileri aile sıcaklığını veriyor. Tekrar tekrar geleceğiz!"
    }
  ];

  const faqItems = [
    {
      question: "Açılış saatleri nedir?",
      answer: "Beach: 09:00 - 20:00 | Beach Restaurant: 09:00 - 21:00 | Cafe Bar: 09:00 - 24:00. Tüm alanlar her gün açıktır."
    },
    {
      question: "Rezervasyon nasıl yapılır?",
      answer: "Telefon: 0532 206 3531 | WhatsApp: Rezervasyon sayfasından | Email: seaside@seaside-camping.com. Hafta sonları önceden rezervasyon önerilir."
    },
    {
      question: "Ücretler nedir?",
      answer: "Fiyatlar mevsime ve hizmet türüne göre değişir. Detaylı bilgi için lütfen bize telefon veya email yoluyla ulaşın."
    },
    {
      question: "Etkinlikler hakkında bilgi?",
      answer: "Hafta sonları canlı müzik, tema geceleri ve özel kokteyl saatleri düzenlenır. Instagram sayfamızdan güncel etkinlikleri takip edebilirsiniz."
    },
    {
      question: "Kamp alanında neler vardır?",
      answer: "Modern tuvalet ve duş tesisleri, elektrik bağlantıları, su tesisatı, piknik masaları ve güvenlik görevlileri mevcuttur."
    },
    {
      question: "Deniz sporları aktiviteleri var mı?",
      answer: "Evet! Marina'da jet ski, tekne kiralama ve diğer deniz sporları aktiviteleri profesyonel rehberlik altında sunulmaktadır."
    }
  ];

  const galleryPhotos = [
    { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/khlTOFBXzeDQfJBm.jpg', alt: 'Seaside Beach plajında arkadaşlarla yemek' },
    { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/gtgflnrhHUYiLeLJ.jpg', alt: 'Deniz kenarında yemek servisi' },
    { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/HMLPjixfNmjghCcT.jpg', alt: 'Kamp ateşi ve gece eğlencesi' },
    { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/eSAFWysCujSqLXyZ.jpg', alt: 'Plaj barında kokteyl ve müzik' },
    { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/hPflCfsoaoCsmvUN.jpg', alt: 'Seaside Beach sosyal ortam' },
    { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/UPPsDAPmwSVoavPX.jpg', alt: 'Plaj barı ve deniz manzarası' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/todKCkZaMvNEJdCJ.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll', WebkitBackgroundSize: 'cover'}}>

        <div className="container relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
          {/* Hero yazısı boş bırakıldı */}
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section id="about" className="so-beach-section bg-black border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="so-beach-section-title text-left text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('about.title')}</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {t('about.description')}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 w-full">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/gtgflnrhHUYiLeLJ.jpg" 
                alt="Seaside Beach restoran" 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section - Mobile Optimized */}
      <section id="experiences" className="so-beach-section bg-gradient-to-b from-black to-[#1a1a1a] border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="so-beach-section-title text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('experiences.title')}</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { title: t('experiences.beach'), icon: "🏖️" },
              { title: t('experiences.bar'), icon: "🎵" },
              { title: t('experiences.gastronomy'), icon: "🍽️" },
              { title: t('experiences.camping'), icon: "⛺" },
            ].map((exp) => (
              <div key={exp.title} className="so-beach-card text-center hover:scale-105 transition-transform p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{exp.icon}</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">{exp.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {t('experiences.memories')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section - Mobile Optimized */}
      <section id="events" className="so-beach-section bg-black border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="so-beach-section-title text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('events.title')}</h2>
          
          {loading && <p className="text-center text-gray-400">{t('events.loading')}</p>}
          {error && <p className="text-center text-red-400">{t('events.error')}</p>}
          
          {events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {events.map((event, idx) => (
                <div key={idx} className="so-beach-card p-4 sm:p-6 overflow-hidden">
                  {event.imageUrl && (
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="w-full h-40 object-cover rounded-lg mb-4 sm:mb-6"
                    />
                  )}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-2 sm:mb-3">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">{event.date} • {event.time}</p>
                  <p className="text-sm sm:text-base text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          ) : (
            !loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="so-beach-card p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">🎶 Canlı Müzik</h3>
                  <p className="text-sm sm:text-base text-gray-300">Hafta sonları canlı müzik performansları</p>
                </div>
                <div className="so-beach-card p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">🎉 Tema Gecesi</h3>
                  <p className="text-sm sm:text-base text-gray-300">Özel tema ve kostüm geceleri</p>
                </div>
                <div className="so-beach-card p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">🍾 Kokteyl Saati</h3>
                  <p className="text-sm sm:text-base text-gray-300">Günlük özel kokteyl promosyonları</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Gallery Section - Mobile Optimized */}
      <section id="gallery" className="so-beach-section bg-gradient-to-b from-black to-[#1a1a1a] border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="so-beach-section-title text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('gallery.title')}</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Mobile Optimized */}
      <section id="reviews" className="so-beach-section bg-black border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="so-beach-section-title text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('reviews.title')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="so-beach-card p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-white text-sm sm:text-base">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marina Section - Mobile Optimized */}
      <section id="marina" className="so-beach-section bg-gradient-to-b from-black to-[#1a1a1a] border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="so-beach-section-title text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('marina.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-4 sm:mb-6">Deniz Sporları</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Seaside Beach Marina'da jet ski, tekne kiralama ve diğer deniz sporları aktiviteleri mevcuttur. Profesyonel ekibimiz tüm güvenlik önlemleriyle hizmet vermektedir.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Anchor className="text-accent flex-shrink-0" size={20} />
                  <span>Tekne Kiralama</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Anchor className="text-accent flex-shrink-0" size={20} />
                  <span>Jet Ski Aktiviteleri</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Anchor className="text-accent flex-shrink-0" size={20} />
                  <span>Profesyonel Rehberlik</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 w-full">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663331252774/HMLPjixfNmjghCcT.jpg" 
                alt="Marina ve deniz sporları" 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section id="faq" className="so-beach-section bg-black border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container max-w-3xl px-4 sm:px-6">
          <h2 className="so-beach-section-title text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('faq.title')}</h2>
          
          <div className="space-y-2 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="so-beach-card p-0 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-[#2a2a2a] transition gap-2"
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-left">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-accent transition-transform flex-shrink-0 ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {expandedFaq === idx && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-300 border-t border-accent/20">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section id="contact" className="so-beach-section bg-gradient-to-b from-black to-[#1a1a1a] border-b border-accent/20 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="so-beach-section-title text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-12" style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>{t('contact.title')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <div className="so-beach-card text-center p-4 sm:p-6">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('contact.phone')}</h3>
              <a href="tel:+905322063531" className="text-accent hover:underline text-sm sm:text-base md:text-lg font-semibold">
                0532 206 3531
              </a>
            </div>
            
            <div className="so-beach-card text-center p-4 sm:p-6">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('contact.email')}</h3>
              <a href="mailto:seaside@seaside-camping.com" className="text-accent hover:underline text-xs sm:text-sm md:text-base break-all">
                seaside@seaside-camping.com
              </a>
            </div>
            
            <div className="so-beach-card text-center p-4 sm:p-6">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('contact.location')}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Yukarıyapıcı, Mustafa Kemal Atatürk Cad No:1<br />
                10502 Erdek/Balıkesir
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://instagram.com/seasidecbbc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-white transition text-sm sm:text-base"
            >
              <Instagram size={20} />
              {t('contact.instagram')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-accent/20 py-6 sm:py-8 text-center text-xs sm:text-sm text-gray-500">
        <p>&copy; 2025 Seaside Beach. {t('footer.copyright')}</p>
      </footer>
    </div>
  );
}
