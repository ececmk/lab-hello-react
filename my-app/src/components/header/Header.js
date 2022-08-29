import './Header.css'
import IronhackLogo from "../../images/ironhack-logo.png"
import HamburgerLogo from "../../images/hamburger-icon.png"
function Heading() {
    return (
        <div className='head-container'>
            <nav className="navbar">
                <img className='logo' src= {IronhackLogo} alt="ironhack-logo"/>
                <img className='logo' src= {HamburgerLogo} alt="ironhack-menu"/>
             </nav>
            <div className="hello-container">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button className='btn'>Awesome!</button>
            </div>   
        </div>
    )
  }
  
  export default Heading;
  