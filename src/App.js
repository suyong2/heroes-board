import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import HeroWritePage from "./component/page/HeroWritePage";
import HeroViewPage from "./component/page/HeroViewPage";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
        <MainTitleText>히어로즈 명예의 전당</MainTitleText>
        <Routes>
            <Route index element={<MainPage />} />
            <Route path="hero-write" element={<HeroWritePage />} />
            <Route path="hero/:heroId" element={<HeroViewPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
