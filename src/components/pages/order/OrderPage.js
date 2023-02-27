import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  //state
  const { userName } = useParams();

  //behavior

  //render
  return (
    <div>
      <h1>Bonjour {userName}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  );
}
