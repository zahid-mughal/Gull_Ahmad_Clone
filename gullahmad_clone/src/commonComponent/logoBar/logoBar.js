import './logoBar.css'
import logo from '../../asset/logo.png'

 
function LoboBar(){
    return(
        <div className="d-flex justify-content-between logo-main">
            <div><img src={logo} alt="logo.png" /> </div>
            <div className="cart">My Cart</div>

        </div>
    )
}
export default LoboBar;