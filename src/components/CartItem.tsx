import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import stroreItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id?: number;
  quantity?: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = stroreItems.find((item) => item.id === id);
  return (
    <Stack direction="horizontal" gap={3}>
      <img
        className="rounded"
        src={item?.url}
        alt={item?.name}
        style={{ width: "150px", height: "75px", objectFit: "cover" }}
      />
      <div className="d-flex align-items-center justify-content-between flex-fill">
        <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
          <span className="text-capitalize">{item?.name}</span>
          <span className="text-muted">x{quantity}</span>
        </div>
        <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
          <span>{item?.price && formatCurrency(item?.price)}</span>
          {id && (
            <Button onClick={() => removeFromCart(id)} variant="outline-danger">
              x
            </Button>
          )}
        </div>
      </div>
    </Stack>
  );
};

export default CartItem;
