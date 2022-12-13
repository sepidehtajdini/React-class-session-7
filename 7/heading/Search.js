import Button from "../shared/Button";
import "./heading.css";

function Search({ search, inp }) {

    function onKeyDown() { inp.focus() });
    }
    return (
        <div className="header__bar__searchBar">
            <input ref={inp} placeholder="متن برای جستجو" name="searchBox" autoFocus
                onKeyDown={onKeyDown} />
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
