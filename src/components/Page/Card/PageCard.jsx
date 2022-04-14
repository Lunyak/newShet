import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostyBydId } from "../../../api/getPosts";

export function PageCard({ id }) {
  const param = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    getPostyBydId(param.id).then((json) => setCard(json));
  }, [param.id]);

  return (
    <div>
      card {param && param.id}
      <div>{card.title}</div>
    </div>
  );
}
