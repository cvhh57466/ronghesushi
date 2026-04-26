import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold text-[var(--color-sushi-red)] uppercase tracking-widest">Est. 2024</span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-[var(--color-sushi-ink)]">
                職人手作<br/>新鮮直送
              </h1>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md font-medium">
              我們專注於提供高品質的外帶壽司，嚴選當季新鮮食材，以職人精神捏製每一貫壽司，讓您在家也能品嚐到純粹的日式美味。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#order"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-sushi-red)] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#a02628] transition-colors"
              >
                線上訂餐
                <ArrowRight size={16} />
              </a>
              <Link 
                to="/menu"
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-sushi-ink)] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[var(--color-sushi-ink)] hover:text-[var(--color-sushi-bg)] transition-colors"
              >
                查看菜單
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full"
          >
            <div className="absolute inset-0 bg-[#EFEBE3] rounded-sm transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop" 
              alt="榮禾壽司精選盛盤" 
              className="w-full h-full object-cover shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-6 max-w-[200px] border border-[var(--color-sushi-border)]">
               <p className="text-xs leading-relaxed font-serif text-[var(--color-sushi-ink)]">
                 "堅持每日採買新鮮漁獲，只為呈現最極致的鮮甜口感。"
               </p>
            </div>
            <div className="absolute bottom-0 right-0 p-8 z-10 hidden md:block">
               <span className="font-serif text-8xl opacity-10 font-bold">01</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}