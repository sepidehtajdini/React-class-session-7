import Button from "../shared/Button";
import "./heading.css";

function Search({ search, inp }) {
    return (
        <div className="header__bar__searchBar">
            <input ref={inp} placeholder="متن برای جستجو" name="searchBox" autoFocus
                onKeyDown={()=> inp.focus()} />
            <Button
                type="button"
                onClick={search}
                className="secondary_btn"
                text="جستجو"
            />
        </div>
    )
}
export default Search
