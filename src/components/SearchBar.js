import '../App.css';
import { Icon, InlineIcon } from '@iconify/react';
import bxSearchAlt from '@iconify-icons/bx/bx-search-alt';


const SearchBar = () => (
    <form id="NSB" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s" 
        />
        <button type="submit" id="SearchButton" ><Icon icon={bxSearchAlt} width="2em" height="2em" /></button>
    </form>
)


export default SearchBar;