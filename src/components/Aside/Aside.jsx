import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import cn from "classnames";
import { useState } from "react";

export function Aside({ theme }) {
  const [currentLink, setCurrentLink] = useState(1);

  const links = [
    { id: 1, text: "Settings", path: "/settings" },
    { id: 2, text: "Products", path: "/products" },
    { id: 3, text: "Alboms", path: "/albom" },
    { id: 4, text: "Posts", path: "/posts" }
  ];

  return (
    <div className={cn(styles.aside, theme && styles.asideTwo)}>
      <nav>
        {links.map((link) => {
          return (
            <Link key={link.id} to={link.path}>
              {link.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
