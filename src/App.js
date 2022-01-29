import { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

import CardList  from './CardList';
import Create from "./Create";
import Update from "./Update";
import { loadCardFB } from './redux/modules/card';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCardFB());
  }, []);

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
  border-bottom: 1px solid black;
`;

const LogoText = styled.h1`
  font-size: 28px;
`;

export default App;
