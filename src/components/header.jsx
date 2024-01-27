import { Product } from "./product";
import "./style.css";

function Header() {
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
                <span>in order({})</span>
                <span>
                  <img
                    src="https://icon-icons.com/downloadimage.php?id=181878&root=2869/PNG/32/&file=order_confirmation_icon_181878.png"
                    alt=""
                  />
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <Product
          photoP="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUlJbPh0IS8P2wfc7Jxln60M6mpsHIdh9Kke6fBf9v3ZTmhA-QM609IY4jKvHn3yF6EQ&usqp=CAU"
          titleP="S24 Ultra 5G"
          desP="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt explicabo molestiae maiores tempore facilis corrupti eveniet necessitatibus adipisci nihil illo voluptate fuga accusamus reiciendis, debitis ullam deleniti alias dolorum id?"
          logoP="https://storage3.torob.com/backend-api/internet_shop/logos/13dea769fd4c.png"
          sellerP="ekala"
          priceP="2400000"
        />
        <Product
          photoP="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-14-pro-deep-purple.png?v=42"
          titleP="iPhone 14 Pro"
          desP="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt explicabo molestiae maiores tempore facilis corrupti eveniet necessitatibus adipisci nihil illo voluptate fuga accusamus reiciendis, debitis ullam deleniti alias dolorum id?"
          logoP="https://storage3.torob.com/backend-api/internet_shop/logos/aaca0b83ebf6.png"
          sellerP="ekala"
          priceP="2640000"
        />
                <Product
          photoP="https://i02.appmifile.com/274_operatorx_operatorx_opx/01/09/2023/935bb43c65b07d96c13ed1a03e95ad2a!348x348.png"
          titleP="Xiaomi Redmi 12 4G"
          desP="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt explicabo molestiae maiores tempore facilis corrupti eveniet necessitatibus adipisci nihil illo voluptate fuga accusamus reiciendis, debitis ullam deleniti alias dolorum id?"
          logoP="https://storage3.torob.com/backend-api/internet_shop/logos/85ef7ed7fd49.png"
          sellerP="ekala"
          priceP="650000"
        />
      </section>
    </>
  );
}

export default Header;

