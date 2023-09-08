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


export default function Home() {
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

      <section id="shopByCategory">
        <ShopByCategory />
      </section>

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

      <section id="shopByStore">
        <ShopByStore />
      </section>

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
    
   </>
  )
}
