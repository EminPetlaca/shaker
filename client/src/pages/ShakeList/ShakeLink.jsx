import { Link } from "react-router-dom";

export default function ShakeLink(props) {
  return (
    <>
      <Link to={`/shakes/${props._id}`}>
        <p>{props.type} Shake</p>
      </Link>
    </>
  );
}
