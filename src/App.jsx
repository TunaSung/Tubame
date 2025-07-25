import './normalize.css'
import './App.css'
import './variable.css'
import Navbar from './sections/1_Navbar/Navbar'
import Brand from './sections/2_Brand/Brand'
import Service from './sections/3_Service/Service'
import Operation from './sections/4_Operation/Operation'
import Evaluate from './sections/5_Evaluate/Evaluate'
import Contact from './sections/6_Contact/Contact'
import Footer from './sections/7_Footer/Footer'


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
