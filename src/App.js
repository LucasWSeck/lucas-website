import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

import lucas from "./lucas.png";

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
`;

const Image = styled.img`
  margin-bottom: 120px;
  width: 400px;
  height: auto;
`;

const App = () => {
  return (
    <div className="App">
      <h1>Lucas Seck</h1>
      <header className="App-header">
        <Image src={lucas} className="App-logo" alt="logo" />
        <p>Yoo Leute. Meine Page!</p>
        <IconContainer>
          <Button
            type="circle"
            icon={<InstagramOutlined />}
            href="https://www.instagram.com/lucasseck_"
            target="_blank"
          />
          <Button
            type="circle"
            icon={<TwitterOutlined />}
            href="https://twitter.com/Lucas12413672"
            target="_blank"
          />
          <Button
            type="circle"
            icon={<GithubOutlined />}
            href="https://github.com/LucasWSeck"
            target="_blank"
          />
        </IconContainer>
      </header>
    </div>
  );
};

export default App;
