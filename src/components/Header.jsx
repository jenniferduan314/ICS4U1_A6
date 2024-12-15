import "./Header.css";
import WebFlix from "../images/weblogo.png";
import Search from "../images/search.png";
import { useNavigate } from "react-router";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
            <div>
                <img src={WebFlix} alt="webflix logo" width="50" id="logo" />
                <div className="header-text"  onClick={() => navigate(`/`)}>
                    <div className="webtitle">WEBFLIX</div>
                </div>
            </div>
            <div className="header-frame">
                <input type="text" id="search-bar" height="30" placeholder="Search" />
                <button id="search-button">
                    <img src={Search} alt="search button" height="30" />
                </button>
            </div>
        </div>
    )
}

export default Header;