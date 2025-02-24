import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
    >
      <div style={{ fontWeight: "bold" }}>My Company</div>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
