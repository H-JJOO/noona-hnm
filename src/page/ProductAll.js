import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // combineReducer 를 썼다면 어느 리듀서에 있는 state 가져올건지 알려줘야 함
  const productList = useSelector((state) => state.product.productList);
  console.log("productList : ", productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  // 미들웨어를 불러와야함
  const getProducts = async () => {
    let searchQuery = query.get("q") || ""; // q 라고 시작하는 아이템을 넣어줌
    console.log("searchQuery : ", searchQuery);
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    // 프로젝트 시작하고 딱 한번만 실행
    getProducts();
  }, [query]); // query 값이 변경될 때마다 실행
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
