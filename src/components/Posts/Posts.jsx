import { useState } from "react";
import { store } from "../../store.js";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store.js";

export function Posts({ posts, addPost }) {
  const [post, setPost] = useState([
    { id: 1, text: "привет как дела" },
    { id: 2, text: "какой умны статус" }
  ]);
  const [newPostText, setNewPostText] = useState("");

  // const addPost = () => {
  //   setPost([...post, { id: "3", text: newPostText }]);
  //   setNewPostText("");
  // };

  return (
    <div>
      <input
        type="text"
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
      />

      <button
        onClick={() => {
          // addPost(newPostText);
          store.dispatch({ type: "LOG" });
        }}
      >
        создать
      </button>

      {post.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.text}</span>
            <button>удалить</button>
          </div>
        );
      })}
    </div>
  );
}
