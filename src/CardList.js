import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { completeCardFB, deleteCardFB } from './redux/modules/card';



const CardList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.card.list);

  const completeCard = (card_index, card_completed) => {
    dispatch(completeCardFB(data[card_index].id, card_completed));
  }

  const deleteClick = (card_index) => {
    dispatch(deleteCardFB(data[card_index].id));
  }

  return (
    <HomeWrap>
      <CardWrap>
        {data.map((list, idx) => {
          return (
            <CardTemp
              style={{
                backgroundColor: list.completed ? 'green' : 'white'
              }}
              complete={list.completed}
              className="list_item"
              key={idx}
            >
              <ButtonWrap>
                <button
                  onClick={() => {
                    completeCard(idx, list.completed);
                  }}
                >a</button>
                <button 
                  onClick={() => {
                    navigate("/Update");
                  }} 
                >b
                </button>
                <button onClick={() => {
                  deleteClick(idx);
                }}>c</button>
              </ButtonWrap>
              <h1>{list.word}</h1>
              <p>{list.def}</p>
              <p style={{color:"blue"}}>{list.exstr}</p>
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