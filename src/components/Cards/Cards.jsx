import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export function Card({ title }) {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const togglePageById = () => {
    navigate(`/cards/${id}`);
  };

  const increment = () => {
    console.log("+");
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div onClick={togglePageById} className="card">
      <h2>{title}</h2>
      <img
        src="https://avatars.mds.yandex.net/i?id=2a0000017a152c478837c91d459a40b6e0b7-4568174-images-thumbs&n=13&exp=1"
        alt=""
      />
      <div className="container">
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
