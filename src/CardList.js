import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardList = () => {
  const navigate = useNavigate();

  const [MemoWord, setMemoWord] = useState({
    word: "하하",
    pinyin: "[하하]",
    def: "웃는 소리",
    ex_cn: "I'm haha",
    ex_ko: "나는 하하 웃었다."
  });

  return (
    <HomeWrap>
      <CardWrap>
        <Card>
          <ButtonWrap>
            <button>a</button>
            <button>b</button>
            <button>b</button>
          </ButtonWrap>
          <h1>{MemoWord.word}</h1>
          <p>{MemoWord.pinyin}</p>
          <p>{MemoWord.def}</p>
          <div>{MemoWord.ex_cn}</div>
          <div>{MemoWord.ex_ko}</div>
        </Card>
      </CardWrap>
      <CreateButton onClick={() => {
        navigate('/Create');
      }} />
    </HomeWrap>
  );
};

const HomeWrap = styled.div`

`;

const CardWrap = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Card = styled.article`
  position: relative;
  width: calc((100% - 40px) / 3);
  border: 1px solid black;
  border-radius: 5px;
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
`;

const CreateButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50px;
`;

export default CardList;