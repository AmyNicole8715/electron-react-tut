import tlm from "../assets/images/tlm.png";
import SearchBar from './SearchBar';
import '../App.css';


function TopBar () {
    return (
        <div id="TopBar" style={{
            
            
        }}>
            <img href="/" src={tlm} id="tlmLogo" />
            <SearchBar />
        </div>
    );

    
}

export default TopBar;