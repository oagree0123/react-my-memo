import styled from "styled-components";
import { Routes, Route, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";

import CardList  from './CardList';
import Create from "./Create";
import Update from "./Update";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Logo onClick={() => {
        navigate('/');
      }}>
        <LogoText>
          나만의 메모장
        </LogoText>
      </Logo>
      <AppWrap>
        <Routes>
          <Route path='/' element={<CardList />}/>
          <Route path='/Create' element={<Create />}/>
          <Route path='/Update/:card_id/edit' element={<Update />}/>
        </Routes>
      </AppWrap>
    </div>
  );
}

const AppWrap = styled.div`
  padding: 0 50px;
  margin-top: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
`;

const Logo = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0;
  background-color: #fff;
  border-bottom: 1px solid black;
  z-index: 1000;
`;

const LogoText = styled.p`
  font-family: 'Gaegu', cursive;
  font-size: 34px;
`;

export default App;
