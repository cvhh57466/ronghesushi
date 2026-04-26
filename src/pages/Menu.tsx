import React from "react";
import { Helmet } from "react-helmet-async";

export default function Menu() {
  return (
    <>
      <Helmet>
        <title>最新菜單 | 榮禾壽司 - 桃園人氣外帶壽司</title>
        <meta name="description" content="瀏覽榮禾壽司精選菜單。包含新鮮平價生魚片、精緻握壽司、豪華盛盤與會議日式餐盒等豐富選擇，立即透過 Foodpanda 與 UberEats 外送平台訂購桃園必吃壽司。" />
        <meta name="keywords" content="榮禾壽司菜單, 桃園壽司品項, 平價生魚片, 壽司盛盤推薦, 生魚片便當, 桃園外賣壽司, 桃園區會議餐盒, 日式料理外帶" />
      </Helmet>
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-border)] mt-24">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16 relative">
            <div className="space-y-4">
               <span className="text-xs font-bold text-[var(--color-sushi-red)] uppercase tracking-widest">Selected Menu</span>
               <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                 菜單亮點
               </h2>
            </div>
            <div className="hidden md:block z-0 absolute right-0 top-0">
                <span className="font-serif text-8xl opacity-10 font-bold">03</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "盛合刺身", subtitle: "Sashimi Assortment", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1964&auto=format&fit=crop" },
            { title: "精緻握壽司", subtitle: "Premium Nigiri", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2064&auto=format&fit=crop" },
            { title: "豪華盛盤", subtitle: "Luxury Platter", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop" }
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
          <p className="text-xs text-gray-500 tracking-widest uppercase font-bold mb-4">更多豐富餐點，請至外送平台查看完整菜單</p>
          <div className="flex gap-4 justify-center">
            <a 
                href="https://www.ubereats.com/tw/store/%E6%A6%AE%E7%A6%BE%E5%A3%BD%E5%8F%B8/K8PDGqMZX4aOcZAWMcP4qg" 
                target="_blank" rel="noopener noreferrer"
                className="bg-[#06C167] text-white px-6 py-2 rounded-full font-bold text-xs uppercase"
            >
                UberEats
            </a>
            <a 
                href="https://www.foodpanda.com.tw/restaurant/tce0/rong-he-shou-si"
                target="_blank" rel="noopener noreferrer"
                className="bg-[#D70F64] text-white px-6 py-2 rounded-full font-bold text-xs uppercase"
            >
                Foodpanda
            </a>
          </div>
        </div>
      </section>
    </>
  );
}