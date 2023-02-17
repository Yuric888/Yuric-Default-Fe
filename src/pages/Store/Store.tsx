import { Col, Row } from "react-bootstrap";
import StoreItem from "../../components/StoreItem";
import storeItems from "../../data/items.json";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row className="mt-5 g-3 pb-5" lg={3} md={2} xs={1}>
        {storeItems.length > 0 &&
          storeItems.map((item) => {
            return (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Store;
