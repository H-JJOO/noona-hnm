import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card-shape" onClick={showDetail}>
      <img width={300} src={item.img} />
      <div>{item.choice ? "Conscious choice" : ""}</div>
      <div>{item.title}</div>
      <div>{item.price}원</div>
      <div>{item.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
