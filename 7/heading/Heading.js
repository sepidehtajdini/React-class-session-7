import "./heading.css";
import Button from "../shared/Button";
import Search from "./Search";

function Heading({ setPostList, setIsLoading, search, inp}) {

    function cashLoading() {
            const toParseJSON = JSON.parse(localStorage.getItem("loadedPosts"));
            setPostList(toParseJSON);
            setIsLoading(false);
    }

    return (
        <div>
            <div className="header">
                <h2>بلاگ پست من</h2>
            </div>
            <div className="header__bar">
                <Search inp={inp} search={search} />
                <Button
                    type="button"
                    value="cashLoading"
                    onClick={cashLoading}
                    className="secondary_btn"
                    text="لود از کش" />
                <Button
                    type="button"
                    onClick={()=>localStorage.clear()}
                    className="secondary_btn"
                    text="پاک کردن کش" />
            </div>
        </div>
    )
}
export default Heading;