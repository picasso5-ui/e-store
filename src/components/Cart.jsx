import React from "react";
import useCartStore from "../store/useCartStore";
import CartCard from "./CartCard";
import { Row, Col } from "react-bootstrap";

function Cart() {
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0) {
    return(<p className="text-dark " style={{fontWeight:"bold"}}>No item in cart</p>)
  }

  return (
    <div className="container">
      <h2 className="text-center mb-4 shop">Your Shopping Cart</h2>
      <Row>
        {cart?.map((item) => (
          <Col sm={12} md={6} lg={4} key={item._id}>
            <CartCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cart;
