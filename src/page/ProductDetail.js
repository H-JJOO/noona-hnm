import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/H-JJOO/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img width={400} src={product?.img} />
        </Col>
        <Col className="info-choice">
          <div>{product?.title}</div>
          <div>{product?.price}원</div>
          <div>{product?.choice ? "Conscious choice" : ""}</div>
          <select>
            <option>사이즈 선택</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <div>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
