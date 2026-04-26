import React from "react";
import { Route } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Location() {
  const mapLink = "https://maps.app.goo.gl/rFrKLUZgqzX9dZwi6";

  return (
    <>
      <Helmet>
        <title>門市位置 | 榮禾壽司 - 桃園外帶壽司</title>
        <meta name="description" content="榮禾壽司店址位於桃園市桃園區上海路15號。查看我們的門市營業時間與交通導航。歡迎親臨外帶最新鮮的生魚片與握壽司，或使用 UberEats 與 Foodpanda 訂購桃園最好吃的外送壽司。" />
        <meta name="keywords" content="榮禾壽司地址, 桃園區上海路美食, 桃園好吃的壽司店, 桃園生魚片外帶, 桃園壽司營業時間, 桃園外帶便當, 壽司店位置" />
      </Helmet>
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[var(--color-sushi-border)] mt-24">
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
                  <p className="text-sm font-medium">330桃園市桃園區上海路15號</p>
               </div>
               <div className="flex flex-col gap-1">
                  <p className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Hours</p>
                  <p className="text-sm font-medium">以 Google 商家資訊與外送平台顯示為準</p>
               </div>
            </div>

            <div className="pt-4">
              <a 
                href={mapLink}
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
                  <iframe 
                    src="https://maps.google.com/maps?q=榮禾壽司+330桃園市桃園區上海路15號&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
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
    </>
  );
}