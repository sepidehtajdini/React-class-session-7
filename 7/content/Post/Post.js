import "./post.css";
import Button from "../../shared/Button";
function Post({ id, title, body, bookmarkId, setBookmarkId, searchText }) {
    let bookmarkClass;
    let foundClass;
    function changeBookmark() {
        setBookmarkId(id)
    }
    if (bookmarkId === id) {
        bookmarkClass = 'post--bookmarked'
    }
    if (searchText !== "" && title.includes(searchText) || body.includes(searchText)) {
        foundClass = 'post--found';
    }
    function foundInBody(str) {
        if (body.includes(str)) {
            // const words =body.split(" ");
            // const start = words.toString().indexOf(str);
            return `found ${str} in body`
        }
        else { return "" }
    }
    function founInTitle(str) {
        if (title.includes(str)) {
            return `found ${str} in title`
        }
        else {
            return ""
        }
    }
    return (
        <div className={`post ${bookmarkClass} ${foundClass}`} >
            <div className="post__header">
                <span className="post__title" dangerouslySetInnerHTML={{
                    __html:
                        `<div class="highlight">
           ${founInTitle(searchText)}
           </div> ${title}`
                }} />
                <Button
                    className="bookmark primary_btn"
                    type="button"
                    onClick={changeBookmark} />
            </div>
            <div className="post__body" dangerouslySetInnerHTML={{
                __html:
                    `<div class="highlight">
           ${foundInBody(searchText)}
           </div> ${body}`
            }} />
        </div>
    )
}
export default Post;