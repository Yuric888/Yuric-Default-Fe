import { Button, Card, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  url: string;
};
const StoreItem = ({ id, name, price, url }: StoreItemProps) => {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } =
    useShoppingCart();
  const quantity: number = getQuantity(id);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={url}
        alt={name}
        style={{ objectFit: "cover", height: "200px" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between mb-3">
          <span className="text-capitalize fs-3">{name}</span>
          <span>{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text className="mt-2">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseQuantity(id)}
              className="text-capitalize w-100"
            >
              + add to card
            </Button>
          ) : (
            <Stack gap={2} className="align-items-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                {quantity} in Cart
                <Button onClick={() => increaseQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant="danger">
                Remove
              </Button>
            </Stack>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
