import BottomBar from './components/BottomBar'
import Footer from './components/Sections/Footer'
import Advertisement from './components/Sections/Advertisement'
import Brands from './components/Sections/Brands'
import Categories from './components/Sections/Categories'
import Header from './components/Sections/Header'
import Hero from './components/Sections/Hero'
import Newsletter from './components/Sections/Newsletter'
import ProductContainer from './components/Sections/ProductContainer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <main>
        <ProductContainer withFilter={true} />
        <Advertisement />
        <ProductContainer withFilter={false} />
        <Advertisement />
        <Brands />
        <ProductContainer withFilter={false} />
      </main>
      <Newsletter />
      <Footer />
      <BottomBar />
    </>
  )
}

export default App
