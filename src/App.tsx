/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Utensils, Star, Route, ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Shop Links
  const links = {
    uberEats: "https://www.ubereats.com/tw/store/%E6%A6%AE%E7%A6%BE%E5%A3%BD%E5%8F%B8/K8PDGqMZX4aOcZAWMcP4qg",
    foodPanda: "https://www.foodpanda.com.tw/restaurant/tce0/rong-he-shou-si",
    facebook: "https://www.facebook.com/people/%E6%A6%AE%E7%A6%BE%E5%A3%BD%E5%8F%B8%E5%A4%96%E5%B8%B6%E5%B0%88%E9%96%80%E5%BA%97%E4%B8%8A%E6%B5%B7%E8%B7%AF/61571083894912/#",
    maps: "https://maps.app.goo.gl/rFrKLUZgqzX9dZwi6",
    line: "https://linevoom.line.me/user/_dRBje4x4Lg5tPWG_KzZofpOMub8qT7D8vYFEgLQ"
  };

  return (
    <div className="min-h-screen bg-[var(--color-sushi-bg)] text-[var(--color-sushi-ink)] selection:bg-[var(--color-sushi-red)] selection:text-white pb-20 md:pb-0">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-sushi-bg)]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-6 pb-4 border-b border-[var(--color-sushi-ink)] flex justify-between items-end">
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-sushi-ink)]">
              榮禾壽司
            </h1>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] mt-1 opacity-60 font-bold whitespace-nowrap">Rong He Sushi • Takeout Specialty</p>
          </div>
          <div className="hidden lg:flex gap-10 text-xs font-bold tracking-widest uppercase items-center pb-1">
            <a href="#about" className="hover:text-[var(--color-sushi-red)] transition-colors">Story 品牌</a>
            <a href="#menu" className="hover:text-[var(--color-sushi-red)] transition-colors">Menu 菜單</a>
            <a href="#location" className="hover:text-[var(--color-sushi-red)] transition-colors">Location 門市</a>
            <a href="#order" className="text-[var(--color-sushi-red)] hover:opacity-80 transition-opacity">Order 線上訂餐</a>
          </div>
          <a href="#order" className="lg:hidden text-[var(--color-sushi-red)] text-xs font-bold tracking-widest uppercase pb-1">Order</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold text-[var(--color-sushi-red)] uppercase tracking-widest">Takeaway Specialty</span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                榮禾壽司<br/>
                外帶專門店
              </h1>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-sm">
                堅持職人手作精神，為您帶來最新鮮的味覺饗宴。<br/>
                在繁忙的日常中，也能品嚐到頂級的壽司風味。
              </p>
            </div>
            
            <div id="order" className="flex flex-col sm:flex-row gap-4">
              <a 
                href={links.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-sushi-ink)] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-opacity-90 flex items-center justify-center gap-2"
              >
                <span>UberEats 點餐</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href={links.foodPanda}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--color-sushi-ink)] text-[var(--color-sushi-ink)] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[var(--color-sushi-ink)] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Foodpanda 點餐</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:col-span-7 relative h-full min-h-[500px]"
          >
            <div className="absolute inset-0 bg-[#EFEBE3] rounded-sm flex items-center justify-center overflow-hidden p-4 md:p-8">
               <div className="absolute top-0 left-0 p-8">
                  <span className="font-serif text-8xl opacity-10 font-bold">01</span>
               </div>
               <img 
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sushi Preparation" 
                  className="w-full lg:w-4/5 h-4/5 object-cover border border-white/40 shadow-xl"
                  referrerPolicy="no-referrer"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-ink)]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-[3/4] bg-[#EFEBE3] p-4 md:p-8 rounded-sm relative">
                <div className="absolute top-0 right-0 p-8 z-10">
                  <span className="font-serif text-8xl opacity-10 font-bold">02</span>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop" 
                 alt="Sushi Detail" 
                 className="w-full h-full object-cover z-20 relative shadow-sm"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
               <span className="text-xs font-bold text-[var(--color-sushi-red)] uppercase tracking-widest">Philosophy</span>
               <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                 專注外帶，絕不妥協的品質
               </h2>
            </div>
            <div className="w-full h-[1px] bg-[var(--color-sushi-border)] my-8"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-500 max-w-xl">
              榮禾壽司致力於提供最高品質的外帶壽司體驗。我們深知現代人生活節奏緊湊，但這不意味著必須在美食上妥協。
              <br/><br/>
              嚴選當季新鮮漁獲，搭配職人精湛刀工與手捏技巧，為您呈現色香味俱全的日式經典。不論是家人的溫馨晚餐，或是辦公室的精緻午餐，榮禾都是您最好的選擇。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div>
                <Utensils className="w-5 h-5 mb-4 text-[var(--color-sushi-ink)]" strokeWidth={1.5} />
                <h4 className="font-bold text-base mb-2">嚴選食材</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">每日清晨抵達的鮮魚，保證最純粹的美味。</p>
              </div>
              <div>
                <Star className="w-5 h-5 mb-4 text-[var(--color-sushi-ink)]" strokeWidth={1.5} />
                <h4 className="font-bold text-base mb-2">職人手作</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">以細膩工法捏製每一貫壽司，呈現最道地的風味。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights (Visual) */}
      <section id="menu" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-border)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 relative">
           <div className="space-y-4 max-w-xl z-10">
              <span className="text-xs font-bold text-[var(--color-sushi-red)] uppercase tracking-widest">Selected Menu</span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">嚴選美味</h2>
              <p className="text-sm text-gray-500 leading-relaxed">多樣化的選擇，滿足您挑剔的味蕾。無論是經典握壽司還是精緻花壽司，皆由師傅精心製作。</p>
           </div>
           <div className="hidden md:block z-0 absolute right-0 top-0">
               <span className="font-serif text-8xl opacity-10 font-bold">03</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "盛合刺身", subtitle: "Sashimi Assortment", image: "https://images.unsplash.com/photo-1549589237-9e70b6be4da8?q=80&w=1964&auto=format&fit=crop" },
            { title: "精緻握壽司", subtitle: "Premium Nigiri", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2064&auto=format&fit=crop" },
            { title: "豪華盛盤", subtitle: "Luxury Platter", image: "https://images.unsplash.com/photo-1563612116625-3012372fcec8?q=80&w=2012&auto=format&fit=crop" }
          ].map((item, idx) => (
            <div key={idx} className="group relative flex flex-col gap-4">
               <div className="aspect-[4/5] bg-[#EFEBE3] overflow-hidden rounded-sm p-4">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <div>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{item.subtitle}</p>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 tracking-widest uppercase font-bold">更多豐富餐點，請至外送平台查看完整菜單</p>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
               <span className="text-xs font-bold text-[var(--color-sushi-red)] uppercase tracking-widest">Location</span>
               <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                 門市位置
               </h2>
               <p className="text-sm text-gray-500 leading-relaxed font-bold">榮禾壽司 外帶專門店</p>
            </div>
            
            <div className="space-y-6 pt-4">
               <div className="flex flex-col gap-1">
                  <p className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Address</p>
                  <p className="text-sm font-medium">桃園市桃園區上海路 124 號</p>
               </div>
               <div className="flex flex-col gap-1">
                  <p className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Hours</p>
                  <p className="text-sm font-medium">以 Google 商家資訊與外送平台顯示為準</p>
               </div>
            </div>

            <div className="pt-4">
              <a 
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--color-sushi-ink)] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[var(--color-sushi-ink)] hover:text-[var(--color-sushi-bg)] transition-colors"
              >
                <Route size={16} />
                查看 Google 地圖導航
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[400px]">
            <div className="absolute inset-0 bg-[#EFEBE3] rounded-sm flex items-center justify-center overflow-hidden p-4 md:p-8">
               <div className="absolute top-0 right-0 p-8 z-10 hidden md:block">
                  <span className="font-serif text-8xl opacity-10 font-bold">04</span>
               </div>
               <div className="w-full h-full bg-gray-200 border border-white/40 shadow-sm flex items-center justify-center relative overflow-hidden group">
                  {/* Google Map Embed */}
                  <iframe 
                    src="https://maps.google.com/maps?q=榮禾壽司+桃園市桃園區上海路124號&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store Location Map"
                  ></iframe>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 py-8 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-border)] flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] tracking-widest uppercase font-bold text-gray-500 gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto">
          <div>
            <p className="mb-1 text-gray-400">Address 地址</p>
            <p className="text-[var(--color-sushi-ink)]">桃園市桃園區上海路 124 號</p>
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
      <div className="fixed bottom-0 left-0 w-full md:w-auto md:bottom-8 md:right-8 md:left-auto z-50 flex md:flex-col items-center justify-center gap-1 md:gap-3 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t border-[var(--color-sushi-border)] md:border-none p-2 md:p-0">
        <a 
          href={links.uberEats}
          target="_blank" rel="noopener noreferrer"
          className="flex-1 md:flex-none flex items-center justify-center w-full md:w-auto bg-[#06C167] text-white px-2 md:px-5 py-3 rounded-md md:rounded-full md:shadow-lg md:hover:scale-105 transition-transform"
        >
          <span className="font-bold text-[10px] md:text-xs tracking-widest uppercase truncate whitespace-nowrap">UberEats</span>
        </a>
        <a 
          href={links.foodPanda}
          target="_blank" rel="noopener noreferrer"
          className="flex-1 md:flex-none flex items-center justify-center w-full md:w-auto bg-[#D70F64] text-white px-2 md:px-5 py-3 rounded-md md:rounded-full md:shadow-lg md:hover:scale-105 transition-transform"
        >
          <span className="font-bold text-[10px] md:text-xs tracking-widest uppercase truncate whitespace-nowrap">Foodpanda</span>
        </a>
        <a 
          href={links.line}
          target="_blank" rel="noopener noreferrer"
          className="flex-1 md:flex-none flex items-center justify-center w-full md:w-auto bg-[#00C300] text-white px-2 md:px-5 py-3 rounded-md md:rounded-full md:shadow-lg md:hover:scale-105 transition-transform"
        >
          <span className="font-bold text-[10px] md:text-xs tracking-widest uppercase truncate whitespace-nowrap">LINE 客服</span>
        </a>
      </div>
    </div>
  );
}
