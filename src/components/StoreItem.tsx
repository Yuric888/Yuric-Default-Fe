import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  url: string;
};
const StoreItem = ({ id, name, price, url }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        alt={name}
        src={url}
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title className="text-capitalize d-flex justify-content-between">
          <span className="fs-3">{name.toLowerCase()}</span>
          <span className="text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text className="mt-3">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseQuantity(id)}>-</Button>{" "}
                {quantity} in Cart{" "}
                <Button onClick={() => increaseQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
