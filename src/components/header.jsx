import { Product } from "./product";
import "./style.css";

function Header(props) {
  return (
    <>
      <section className="header">
        <div className="container-banner">
          <img
            className="logo-banner"
            src="https://i.pinimg.com/736x/ce/56/99/ce5699233cbc0f142250b520d967dff7.jpg"
            alt=""
          />
          <h1 className="title-banner">STORE</h1>

          <nav className="nav-banner">
            <ul>
              <li>Home</li>
              <li>Content Us</li>
              <li>Store</li>
              <li>About</li>
              <li>
                <span>in order({props.count})</span>
                <span><img src="https://icon-icons.com/downloadimage.php?id=181878&root=2869/PNG/32/&file=order_confirmation_icon_181878.png" alt="" /></span>
              </li>
            </ul>
          </nav>
        </div>
        <Product />
        <Product />
        <Product />
      </section>
    </>
  );
}

export default Header;
