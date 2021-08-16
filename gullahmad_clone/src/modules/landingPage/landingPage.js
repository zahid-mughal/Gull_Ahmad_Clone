import './landingPage.css'
import Navbar1 from '../../commonComponent/navbar1/navbar1'
import LoboBar from '../../commonComponent/logoBar/logoBar'
import NavBar2 from '../../commonComponent/navBar2/navBar2'
import Slider from './slider/slider'



function LandingPage(){
    return(
        <div>
            <Navbar1 />
            <LoboBar />
            <NavBar2  />
            <Slider />
          

        </div>
    )
}
export default LandingPage;