import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === null) return null;
  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={3}>
      <img
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        src={item?.url}
        alt={item?.name}
        className="rounded"
      />
      <div className="text-capitalize">
        {item?.name}{" "}
        {quantity > 1 && (
          <span className="text-muted " style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        )}
      </div>
      <div className="ms-auto ">
        <span>{item?.price && formatCurrency(item?.price)}</span>
        <Button
          onClick={() => removeFromCart(id)}
          className="ms-2"
          size="sm"
          variant="outline-danger"
        >
          x
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
