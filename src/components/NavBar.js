import MemeLogo from "../images/meme-face.png";
export default function NavBar() {
  return (
    <nav className="navbar">
      <span className="logo">
        <img src={MemeLogo} alt="logo meme face" className="" />
        Meme Generator
      </span>
      <span className="nav-menu">React Course - Project 3</span>
    </nav>
  );
}
