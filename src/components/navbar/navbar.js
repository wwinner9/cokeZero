import './style.css';
import logoCoke from '../../assets/cokelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaBars} from 'react-icons/fa'

export default function navBar(){

    function handleMenu(e){
        e.preventDefault()
        document.querySelector('.menuTool').style.display='block';
    }
    
    
    return(
        <div className="contain">

            <div className="logo">
            <img src={logoCoke} id='logo' alt="logo da coka cola"/>
            </div>

            <nav>                
                <ul>
                    <li><a href=".leftSide">Home</a></li>
                    <li><a href=".leftSide">About</a></li>
                    <li><a href=".leftSide">Contacts</a></li>
                    <li><a href=".leftSide">Team</a></li>
                    <li><a href=".leftSide">Branding</a></li> 
                </ul>

                <div className="menu">  
                    <a href=".leftSide" onClick={handleMenu}><FaBars size={30} color="#1e98DC" /></a>
                </div>
            </nav>
            <button id='btnInfo'>Info</button>

        </div>
    );
}