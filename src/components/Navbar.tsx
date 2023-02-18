import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
const Navbar = () => {
  const { cartsQuantity, openCart } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm w-100 mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartsQuantity > 0 && (
          <Button
            variant="outline-primary"
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            onClick={openCart}
          >
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.9061 13.8889H9.18281L9.46688 15.2778H21.117C21.7854 15.2778 22.2809 15.8985 22.1327 16.5503L21.8933 17.604C22.7045 17.9977 23.2639 18.8293 23.2639 19.7917C23.2639 21.1459 22.1563 22.2415 20.7976 22.222C19.5032 22.2033 18.4386 21.1529 18.4037 19.8588C18.3846 19.1519 18.6678 18.5112 19.133 18.0555H10.0337C10.4841 18.4967 10.7639 19.1114 10.7639 19.7917C10.7639 21.1724 9.6125 22.2843 8.21745 22.2195C6.97873 22.162 5.97131 21.1612 5.90621 19.9228C5.85595 18.9665 6.35916 18.1235 7.1237 17.6838L4.07478 2.77778H1.04167C0.466363 2.77778 0 2.31142 0 1.73611V1.04167C0 0.466363 0.466363 0 1.04167 0H5.49171C5.98655 0 6.41306 0.348134 6.51224 0.832899L6.91007 2.77778H23.9579C24.6263 2.77778 25.1218 3.39848 24.9737 4.0503L22.9219 13.0781C22.8141 13.5523 22.3925 13.8889 21.9061 13.8889ZM17.7083 7.29167H15.625V5.55556C15.625 5.17201 15.3141 4.86111 14.9306 4.86111H14.2361C13.8526 4.86111 13.5417 5.17201 13.5417 5.55556V7.29167H11.4583C11.0748 7.29167 10.7639 7.60256 10.7639 7.98611V8.68056C10.7639 9.06411 11.0748 9.375 11.4583 9.375H13.5417V11.1111C13.5417 11.4947 13.8526 11.8056 14.2361 11.8056H14.9306C15.3141 11.8056 15.625 11.4947 15.625 11.1111V9.375H17.7083C18.0919 9.375 18.4028 9.06411 18.4028 8.68056V7.98611C18.4028 7.60256 18.0919 7.29167 17.7083 7.29167Z" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex algin-items-center justify-content-center"
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                transform: "translate(25%,25%)",
              }}
            >
              {cartsQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
