import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
    <>
      <h1>Products:</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
