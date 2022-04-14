import { useEffect, useState } from "react";
import { getAlbom } from "../../api/getPosts";

export function Albom() {
  const [alboms, setAlboms] = useState([]);

  useEffect(() => {
    getAlbom().then((answer) => setAlboms(answer));
  }, []);

  return <div></div>;
}
