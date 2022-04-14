import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Products } from "./components/Products/Products";
import { PageCard } from "./components/Page/Card/PageCard";
import { Main } from "./components/Main/Main";
import { Settings } from "./components/Settings/Settings";
import { Posts } from "./components/Posts/Posts";
import { store } from "./store.js";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header count={count} />
      <div className="wrapper">
        <Aside />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="settings" element={<Settings />} />
            <Route
              path="products"
              element={<Products count={count} setCount={setCount} />}
            />
            <Route path="cards/:id" element={<PageCard />} />
            <Route
              path="posts"
              element={
                <Posts posts={store.posts} addPost={store.creatNewPost} />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}
