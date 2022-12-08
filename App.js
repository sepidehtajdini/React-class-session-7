import { useEffect, useState, useRef } from "react";
import "./App.css";
import Heading from "./7/heading/Heading";
import Post from "./7/content/Post/Post";
import Spinner from "./7/content/Spinner/Spinner";
function App() {
  const [postList, setPostList] = useState([]);
  const [bookmarkId, setBookmarkId] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toStringJson, setToStringJson] = useState([]);
  const inp = useRef(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((res) => {
      setPostList(res);
      setIsLoading(false);
      setToStringJson(JSON.stringify(res));
      localStorage.setItem("loadedPosts", JSON.stringify(res));
    })
  })
  function search() {
    setSearchText(inp.current.value);
  }
  return (
    <div dir="rtl">
      <Heading postList={postList}
        setPostList={setPostList}
        setIsLoading={setIsLoading}
        search={search}
        inp={inp}
      />
      <div>
        <Spinner isLoading={isLoading} setIsLoading={setIsLoading} />
        {postList.map((post) =>
          <Post
            id={post.id}
            title={post.title}
            body={post.body}
            bookmarkId={bookmarkId}
            setBookmarkId={setBookmarkId}
            searchText={searchText}
          />)}
      </div>
    </div>
  );
}
export default App