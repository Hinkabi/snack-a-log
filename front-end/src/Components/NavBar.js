import { Link } from "react-router-dom";


 function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/snacks">Snacks</Link>
      </h1>
    </nav>
  );
}

export default NavBar;