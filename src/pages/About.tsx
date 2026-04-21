import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>品牌故事 | 榮禾壽司 - 外帶專門店</title>
        <meta name="description" content="了解榮禾壽司的品牌故事。堅持每日採買新鮮漁獲，只為呈現最極致的鮮甜口感。品味桃園上海路最推薦的手作壽司。" />
      </Helmet>
      
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-border)] mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative h-[600px] w-full order-2 lg:order-1">
             <div className="absolute inset-0 bg-[#EFEBE3] rounded-sm transform -translate-x-4 translate-y-4 -z-10"></div>
             <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 hover:opacity-100" alt="Sushi Preparation" referrerPolicy="no-referrer" />
          </div>
          
          <div className="lg:col-span-5 lg:col-start-8 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[var(--color-sushi-red)] uppercase tracking-widest">Philosophy</span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                專注於每一貫的<br/>純粹
              </h2>
            </div>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-medium">
              <p>
                「榮禾壽司」的誕生，源自於對日式傳統工藝的敬意與對食材本身的挑剔。我們相信，好的壽司不需要過多的調味，而是透過職人的雙手，將米飯的溫度與魚料的鮮甜達到完美的平衡。
              </p>
              <p>
                為了確保外帶的品質，我們特別選用了適合保持濕潤度的壽司米，並嚴格控管每一道處理工序。無論是作為午間的輕食，還是晚上的犒賞，希望榮禾壽司都能為您帶來最純粹的滿足感。
              </p>
            </div>
            
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-[var(--color-sushi-border)]">
               <div>
                 <p className="font-serif text-3xl font-bold text-[var(--color-sushi-ink)]">100%</p>
                 <p className="text-[10px] tracking-widest text-gray-400 uppercase mt-2 font-bold">新鮮保證</p>
               </div>
               <div>
                 <p className="font-serif text-3xl font-bold text-[var(--color-sushi-ink)]">手工</p>
                 <p className="text-[10px] tracking-widest text-gray-400 uppercase mt-2 font-bold">職人捏製</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
