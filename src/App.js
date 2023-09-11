import { useEffect, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인페이지, 상세상품페이지
// 1-1. 네비게이션 바 만들기
// 2. 전체상품페이지에서 전체 상품을 볼 수 있다.
// 3-1. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 3-2. 상품을 클릭했을 때, 로그인이 되어있지 않는경우 로그인 페이지가 나온다.
// 4. 로그인이 되어 있을 경우에는 상품 디테일 페이지가 나온다.
// 5-1. 로그인 상태에서 로그아웃 버튼을 누르면 로그아웃이 된다.
// 5-2. 로그아웃을 누르면 로그인 페이지로 돌아온다.
// 6. 로그인을 하면 로그아웃 버튼이 보이고, 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색 할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true: 로그인, false: 로그아웃
  useEffect(() => {
    console.log("authenticate : ", authenticate);
  }, [authenticate]); // authenticate 값이 변경될 때마다 실행
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
