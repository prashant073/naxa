import { Link } from "react-scroll";

const MenuItem = ({ id, title }) => (
  <li>
    <Link to={id} smooth={true}>
      {title}
    </Link>
  </li>
);

export default MenuItem;
