import { Col, Row } from "react-bootstrap";
import StoreItem from "../../components/StoreItem";
import storeItems from "../../data/items.json";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row lg={3} md={2} xs={1} className="g-3 py-5 ">
        {storeItems.length > 0 &&
          storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Store;
