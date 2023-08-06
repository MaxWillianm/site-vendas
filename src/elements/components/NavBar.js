import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="bg-green font-bold text-lg space-x-4 py-24">
      <Link class="hover:bg-purple bg-blue shadow-xl rounded-lg p-5" to="/">Home</Link>
      <Link class="hover:bg-purple bg-blue shadow-xl rounded-lg p-5" to="/contact">Contatos</Link>
    </nav>
  )
}

export default NavBar;
