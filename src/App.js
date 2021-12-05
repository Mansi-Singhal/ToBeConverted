import './styles.css'
import logo from './images/logo.png'
import trophy from './images/trophy.png'
import congo from './images/congo.png'
import pro from './images/pro.png'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="f1container">
        <div className="fitem">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>

      <div className="f2container">
        <div className="tfitem">
          <img className="trophy" src={trophy} alt="trophy" />
        </div>
        <div className="cfitem">
          <h4>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{' '}
            </li>
          </ul>
          <img className="congo" src={congo} alt="congratulation" />
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      <div className="f3container">
        <h5 className="heading">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h5>

        <img className="pro" src={pro} alt="product" />

        <p className="para">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>

      <hr className="line"></hr>

      <div className="f4container">
        <h3 className="footerheading">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h3>
        <p className="footerpara">
          CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS|  PHARMA | SUGARS
          & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD &
          BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING |
          AGRICULTURE & RESIDENTIAL
        </p>
        <Footer />
      </div>
    </div>
  )
}

export default App
