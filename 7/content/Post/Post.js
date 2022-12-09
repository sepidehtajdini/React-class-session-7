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
    const titleHighlight = title.replace(searchText, `<strong style="color:red">${searchText}</strong>`)
    const bodyHighlight = body.replace(searchText, `<strong style="color:red">${searchText}</strong>`)
    return (
        <div className={`post ${bookmarkClass} ${foundClass}`} >
            <div className="post__header">
                <span className="post__title" dangerouslySetInnerHTML={{
                    __html: titleHighlight
                }} />
                <Button
                    className="bookmark primary_btn"
                    type="button"
                    onClick={changeBookmark} />
            </div>
            <div className="post__body" dangerouslySetInnerHTML={{
                __html: bodyHighlight
            }} />
        </div>
    )
}
export default Post;
