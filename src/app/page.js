import Category from "@/components/Category";
import Hero from "@/components/Hero";


export default function Home() {
  return (
   <>
    <div className="bg-body-bg-color">

      <section id="hero">
        <Hero />
        <Category />
      </section>
    </div>
   </>
  )
}
