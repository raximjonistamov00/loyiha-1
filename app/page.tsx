import Banner from "./_components/Banner"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import Hero from "./_components/Hero"
import Section from "./_components/Section"

function page() {
  return (
    <div className="bg-gray-50">
      <Header/>
      <Hero/>
      <Section/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default page
