import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import { useState } from "react";
import { X, Menu as MenuIcon } from "lucide-react";

/**
 * Seaside Beach - So Beach Tasarımı
 * Sade ve şık butonlar, SEASIDE BEACH yukarıda
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/menu"} component={Menu} />
      <Route path={"/reservation"} component={Reservation} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<'tr' | 'eng'>('tr');

  const menuItems = [
    { label: "HAKKIMIZDA", href: "/#about" },
    { label: "DENEYİMLER", href: "/#experiences" },
    { label: "ETKİNLİK & EĞLENCE", href: "/#events" },
    { label: "YEME – İÇME", href: "/menu" },
    { label: "GALERİ", href: "/#gallery" },
    { label: "MARİNA", href: "/#marina" },
    { label: "SSS", href: "/#faq" },
    { label: "İLETİŞİM", href: "/#contact" },
    { label: "REZERVASYON", href: "/reservation", isMobileOnly: true },
  ];

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="flex min-h-screen bg-black text-white relative">
            {/* Header - Top Navigation */}
            <header className="fixed top-0 left-0 right-0 z-40">
              <div className="container px-4 sm:px-6 py-4 flex items-center justify-between">
                {/* Hamburger Menu - Left */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className={`p-2 hover:bg-white/10 rounded-lg transition ${
                    sidebarOpen ? "hidden" : "block"
                  }`}
                  aria-label="Menüyü aç"
                >
                  <MenuIcon size={24} className="text-white" />
                </button>

                {/* Center Logo - Hidden on Mobile */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-widest whitespace-nowrap" style={{ fontFamily: "Emmylou Signature, serif", letterSpacing: "0.2em", fontWeight: "300" }}>
                    SEASIDE BEACH
                  </h1>
                </div>
                
                {/* Mobile Center Logo */}
                <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
                  <h1 className="text-xl font-light text-white tracking-widest whitespace-nowrap" style={{ fontFamily: "Emmylou Signature, serif", letterSpacing: "0.2em", fontWeight: "300" }}>
                    SEASIDE BEACH
                  </h1>
                </div>

                {/* Right Buttons */}
                <div className="flex items-center gap-3 sm:gap-4 ml-auto">
                  {/* Language Button */}
                  <button 
                    onClick={() => setLanguage(language === 'tr' ? 'eng' : 'tr')}
                    className="px-4 py-2 text-xs sm:text-sm font-light border border-white/40 rounded-none hover:border-white/70 transition text-white/70 hover:text-white cursor-pointer" 
                    style={{ fontFamily: "Boiling, sans-serif" }}
                  >
                    {language === 'tr' ? 'TR' : 'ENG'}
                  </button>

                  {/* Reservation Button - Hidden on Mobile */}
                  <a
                    href="/reservation"
                    className="hidden sm:block px-4 py-2 text-xs sm:text-sm font-light border border-white/40 rounded-none hover:border-white/70 transition text-white/70 hover:text-white" 
                    style={{ fontFamily: "Boiling, sans-serif" }}
                  >
                    REZERVASYON
                  </a>
                </div>
              </div>
            </header>

            {/* Sidebar - Overlay Backdrop */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black/60 z-30 transition-opacity"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Sidebar */}
            <aside
              className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#f5f1ed] to-[#e8e4e0] text-black p-8 overflow-y-auto z-40 transition-transform duration-300 ease-in-out ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/10 rounded-lg transition"
                aria-label="Menüyü kapat"
              >
                <X size={24} />
              </button>

              {/* Logo */}
              <div className="mb-12 mt-4">
                <h1 className="text-3xl font-bold text-[#d97b5c] tracking-wider" style={{ fontFamily: "Emmylou Signature" }}>
                  SEASIDE
                </h1>
              </div>

              {/* Navigation */}
              <nav className="space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="block text-sm font-medium text-black/70 hover:text-black transition"
                    style={{ fontFamily: "Boiling" }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="w-full">
              <Router />
            </main>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
