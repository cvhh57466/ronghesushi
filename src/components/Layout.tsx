import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = {
    uberEats: "https://www.ubereats.com/tw/store/%E6%A6%AE%E7%A6%BE%E5%A3%BD%E5%8F%B8/K8PDGqMZX4aOcZAWMcP4qg",
    foodPanda: "https://www.foodpanda.com.tw/restaurant/tce0/rong-he-shou-si",
    facebook: "https://www.facebook.com/people/%E6%A6%AE%E7%A6%BE%E5%A3%BD%E5%8F%B8%E5%A4%96%E5%B8%B6%E5%B0%88%E9%96%80%E5%BA%97%E4%B8%8A%E6%B5%B7%E8%B7%AF/61571083894912/#",
    maps: "https://maps.app.goo.gl/rFrKLUZgqzX9dZwi6",
    line: "https://linevoom.line.me/user/_dRBje4x4Lg5tPWG_KzZofpOMub8qT7D8vYFEgLQ"
  };

  return (
    <div className="min-h-screen bg-[var(--color-sushi-bg)] text-[var(--color-sushi-ink)] selection:bg-[var(--color-sushi-red)] selection:text-white pb-12">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-sushi-bg)]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-6 pb-4 md:border-b border-[var(--color-sushi-ink)] flex flex-col md:flex-row justify-between items-start md:items-end gap-5 md:gap-0">
          <Link to="/" className="flex flex-col flex-shrink-0 cursor-pointer">
            <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-sushi-ink)]">
              榮禾壽司
            </h1>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] mt-1 opacity-60 font-bold whitespace-nowrap">Rong He Sushi • Takeout Specialty</p>
          </Link>
          <div className="flex gap-6 md:gap-10 text-[10px] md:text-xs font-bold tracking-widest uppercase items-center md:pb-1 w-full md:w-auto overflow-x-auto border-b border-[var(--color-sushi-ink)] md:border-none pb-3 md:pb-0 hide-scrollbar">
            <Link to="/about" className="whitespace-nowrap hover:text-[var(--color-sushi-red)] transition-colors">Story 品牌</Link>
            <Link to="/menu" className="whitespace-nowrap hover:text-[var(--color-sushi-red)] transition-colors">Menu 菜單</Link>
            <Link to="/location" className="whitespace-nowrap hover:text-[var(--color-sushi-red)] transition-colors">Location 門市</Link>
            <a href="#order" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }} className="whitespace-nowrap text-[var(--color-sushi-red)] hover:opacity-80 transition-opacity">Order 線上訂餐</a>
          </div>
        </div>
      </nav>

      <main className="min-h-[80vh] flex flex-col">
        <Outlet />
      </main>

      <footer className="mt-12 py-8 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-border)] flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] tracking-widest uppercase font-bold text-gray-500 gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto">
          <div>
            <p className="mb-1 text-gray-400">Address 地址</p>
            <p className="text-[var(--color-sushi-ink)]">330桃園市桃園區上海路15號</p>
          </div>
          <div>
            <p className="mb-1 text-gray-400">Links 連結</p>
            <div className="flex gap-4 text-[var(--color-sushi-ink)]">
               <a href={links.line} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sushi-red)]">LINE</a>
               <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sushi-red)]">Facebook</a>
               <a href={links.uberEats} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sushi-red)]">UberEats</a>
               <a href={links.foodPanda} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sushi-red)]">Foodpanda</a>
            </div>
          </div>
        </div>
        <div className="text-left md:text-right w-full md:w-auto border-t md:border-t-0 border-[var(--color-sushi-border)] pt-4 md:pt-0">
          <span>© {new Date().getFullYear()} Rong He Sushi.<br className="hidden md:block"/> All Rights Reserved.</span>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex flex-col gap-3">
        {[
          { href: links.line, img: "https://img.icons8.com/color/48/line-me.png", name: "LINE 客服", color: "text-[#00C300]" },
          { href: links.foodPanda, img: "https://img.icons8.com/color/48/foodpanda.png", name: "Foodpanda", color: "text-[#D70F64]" },
          { href: links.uberEats, img: "https://img.icons8.com/color/48/uber-eats-app.png", name: "UberEats", color: "text-[#06C167]" },
          { href: links.facebook, img: "https://img.icons8.com/color/48/facebook-new.png", name: "Facebook", color: "text-[#1877F2]" }
        ].map((btn, idx) => (
          <a 
            key={idx}
            href={btn.href}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="bg-white w-[50px] h-[50px] md:w-[56px] md:h-[56px] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-100 flex-shrink-0 relative overflow-hidden">
              <img src={btn.img} alt={btn.name} className="w-[65%] h-[65%] object-contain" />
            </div>
            <span className={`bg-white px-3 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)] text-xs font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap border border-gray-100 pointer-events-none ${btn.color}`}>
              {btn.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
