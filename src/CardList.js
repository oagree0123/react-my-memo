import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const CardList = (props) => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.card.list);

  return (
    <HomeWrap>
      <CardWrap>
        {data.map((list, idx) => {
          return (
            <CardTemp
              complete={list.completed}
              className="list_item"
              key={idx}
            >
              <ButtonWrap>
                <button>a</button>
                <button onClick={() => {
                  navigate("/Update");
                }}>b</button>
                <button>c</button>
              </ButtonWrap>
              <h1>{list.word}</h1>
              <p>{list.def}</p>
              <p>{list.exstr}</p>
            </CardTemp>
          );
        })}
        
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
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const CardTemp = styled.article`
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