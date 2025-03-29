import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ isMenuOpen, toggleMenu }) => (
  <div
    id="menu"
    className={`absolute top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
      isMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="px-4 py-2 text-lg font-semibold">メニュー</div>
    <div className="flex flex-col p-2 space-y-3">
      <Link to="/user-register" className="text-white hover:text-blue-200">
        <i className="fas fa-user-plus mr-2"></i>メンバーを追加
      </Link>
      <Link to="/user-select" className="text-white hover:text-blue-200">
        <i className="fas fa-users mr-2"></i>メンバーを選択
      </Link>
      <Link to="/recorder" className="text-white hover:text-blue-200">
        <i className="fas fa-microphone mr-2"></i>録音画面を表示
      </Link>
      <Link to="/analysis" className="text-white hover:text-blue-200">
        <i className="fas fa-chart-bar mr-2"></i>フィードバックを表示
      </Link>
      <button onClick={toggleMenu} className="text-white hover:text-blue-200">
        <i className="fas fa-times mr-2"></i>閉じる
      </button>
    </div>
  </div>
);

export default Menu;