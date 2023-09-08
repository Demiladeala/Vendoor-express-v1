"use client"
import { useEffect, useState } from "react";
import AdBanner from "@/components/AdBanner";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import SellerStore from "@/components/SellerStore";
import SellerStoreThree from "@/components/SellerStoreThree";
import SellerStoreTwo from "@/components/SellerStoreTwo";
import ShopByCategory from "@/components/ShopByCategory";
import ShopByStore from "@/components/ShopByStore";
import TopFastFood from "@/components/TopFastFood";
import TopGaming from "@/components/TopGaming";
import TopPhone from "@/components/TopPhone";
import TopSelling from "@/components/TopSelling";
import TopShoes from "@/components/TopShoes";
import { AiOutlineArrowUp } from "react-icons/ai";



export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
   <>
    <div>

      <section id="hero">
        <Hero />
      </section>

      <section id="category">
       <Category />
      </section>

      <section id="topSelling">
        <TopSelling />
      </section>

      {/* <section id="shopByCategory">
        <ShopByCategory />
      </section> */}

      <section id="topPhone">
        <TopPhone />
      </section>

      <section id="topFastFood">
        <TopFastFood />
      </section>

      <section id="topShoes">
        <TopShoes />
      </section>

      <section id="topGaming">
        <TopGaming />
      </section>

      <section id="adBanner">
        <AdBanner />
      </section>

      {/* <section id="shopByStore">
        <ShopByStore />
      </section> */}

      <section id="sellerStore">
        <SellerStore />
      </section>

      <section id="sellerStoreTwo">
        <SellerStoreTwo />
      </section>

      <section id="sellerStoreThree">
        <SellerStoreThree />
      </section>

    </div>
    <button
          className='hidden fixed bottom-5 right-7 z-[90] border-none outline-none bg-foundation-red-active p-2 cursor-pointer rounded hover:bg-opacity-90'
          onClick={handleScrollToTop}
          style={{ display: showButton ? 'block' : 'none' }}
        >
          <AiOutlineArrowUp size={20}/>
      </button>
    
   </>
  )
}
