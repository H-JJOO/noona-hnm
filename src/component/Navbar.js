import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    console.log("authenticate : ", authenticate);
    navigate("/");
  };
  const search = (event) => {
    // 읽어 오고자하는 값이 event 에 있다.

    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url 을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-section">
        <img
          onClick={goToHome}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input placeholder="제품검색" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
