import {Link} from "react-router-dom";
import updateImp from './SearchFilter';
import './NavBar.css';
export default function NavBar(){  
    return(
       <nav className="navbar">
        <ul>
            <li><Link to="/" onClick={()=>(updateImp(""))}>הוספת תרומה</Link></li>
            <li><Link to="/contributions">רשימת תרומות</Link></li>
        </ul>
        <img src="src/assets/image/קמפיין1.jpg" alt="" id="imgNavBar"/>
        
        
       </nav>
    )
}
