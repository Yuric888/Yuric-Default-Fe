import { Offcanvas, Stack } from "react-bootstrap";
import { CartItems } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";
type ShoppingCartProps = {
  open: boolean;
  close: () => void;
  cartItems: CartItems[];
};

const ShoppingCart = ({ open, close, cartItems }: ShoppingCartProps) => {
  return (
    <Offcanvas show={open} onHide={close} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.length > 0 &&
            cartItems.map((item) => <CartItem key={item.id} {...item} />)}
          <div className="ms-auto fw-bold fs-5 d-flex" style={{ gap: "1rem" }}>
            <span>Total:</span>
            {formatCurrency(
              cartItems.reduce((total, items) => {
                const item = storeItems.find((i) => i.id === items.id);
                return total + (item?.price || 0) * items.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
