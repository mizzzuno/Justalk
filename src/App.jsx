import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecorderPage from "./pages/RecorderPage";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Analysis from "./pages/Analysis";
import SpeechChart from "./SpeechChart";
import MenuButton from "./components/MenuButton";
import Menu from "./components/Menu";
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const storedUsers = localStorage.getItem("selectedUsers");
    if (storedUsers) {
      setSelectedUsers(JSON.parse(storedUsers));
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // ここに録音ロジックを追加
  };

  return (
    <Router>
      <div className="main-content relative min-h-screen bg-gray-900">
        <MenuButton toggleMenu={toggleMenu} />
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <div className="main-title text-center text-4xl font-bold text-white py-8">
          JustTalk
        </div>

        {/* メンバーチップ表示 */}
        <div className="member-chips flex justify-center mb-8">
          {selectedUsers.length === 0 ? (
            <div className="text-white opacity-50 text-sm">
              メンバーが選択されていません
            </div>
          ) : (
            <>
              <div className="member-chip bg-blue-500 bg-opacity-50 px-4 py-2 rounded-full mr-2">
                <i className="fas fa-users mr-2"></i>
                {selectedUsers.length}人のメンバーを選択中
              </div>
              {selectedUsers.map((user, index) => (
                <div key={index} className="member-chip bg-gray-700 px-4 py-2 rounded-full mx-1">
                  <div className="member-avatar inline-block w-6 h-6 bg-gray-500 rounded-full text-center mr-2">
                    {user[0].toUpperCase()}
                  </div>
                  {user}
                </div>
              ))}
            </>
          )}
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4">
                <div className="chart w-72 h-72 mb-8 mx-auto">
                  <SpeechChart />
                </div>

                {/* 録音ボタン */}
                <div className="flex justify-center">
                  <button
                    className={`record-button ${isRecording ? "recording" : ""}`}
                    onClick={toggleRecording}
                  >
                    <div className={`record-icon ${isRecording ? "bg-red-700" : "bg-red-600"}`} />
                  </button>
                </div>
              </div>
            }
          />
          <Route path="/recorder" element={<RecorderPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;