import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product.js";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Need to make function within useEffect because axios request needs to be async
    const fetchProducts = async () => {
      // const res -> destructured -> const {data}
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
