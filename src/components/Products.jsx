import React, { useEffect } from "react";
import Cards from "./Card";
import { Row, Col } from "react-bootstrap";
import useProductStore from "../store/useProductStore";
import Loader from "../components/Loader";
import Hero from "./Hero";

function Products() {
  const { products, isLoading, getAllProducts } = useProductStore();

  useEffect(() => {
    getAllProducts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <div className="container max-h-100 max-w-100">
        <Row className="container">
          {products?.result?.map((product) => (
            <Col sm={12} md={6} lg={4} key={product._id}>
              <div className="mt-3">
                <Cards product={product} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Products;
