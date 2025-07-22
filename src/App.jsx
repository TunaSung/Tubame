import './normalize.css'
import './App.css'
import Navbar from './sections/Navbar/Navbar'
import Brand from './sections/Brand/Brand'
import Service from './sections/Service/Service'
import Operation from './sections/Operation/Operation'
import Evaluate from './sections/Evaluate/Evaluate'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Brand />
      <Service />
      <Operation />
      <Evaluate />
      <Contact />
      <Footer />
    </>
  )
}

export default App
