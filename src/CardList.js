import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCardFB, completeCardFB, deleteCardFB } from './redux/modules/card';
import { useInView } from 'react-intersection-observer';
import localStorage from 'redux-persist/es/storage';

const CardList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.card.list);

  const [ref, inView] = useInView();
  const [item, setItem] = useState(13);

  useEffect(() => {
    if(inView) {
      setItem((prevState) => prevState + 4);
      dispatch(loadCardFB(item));
    };
  }, [inView]);

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
                backgroundColor: list.completed ? '#db2727' : '#eee'
              }}
              complete={list.completed}
              className="list_item"
              key={idx}
            >
              <ButtonWrap>
                <CardButton
                  onClick={() => {
                    completeCard(idx, list.completed);
                  }}
                >체크</CardButton>
                <CardButton 
                  onClick={() => {
                    navigate("/Update/" + list.id + "/edit");
                  }}
                >수정
                </CardButton>
                <CardButton onClick={() => {
                  deleteClick(idx);
                }}>삭제</CardButton>
              </ButtonWrap>
              <h1>{list.word}</h1>
              <p>{list.def}</p>
              <p style={{color:"#271ced"}}>{list.exstr}</p>
            </CardTemp>
          );
        })}
      </CardWrap>
      <MakeCont ref={ref}></MakeCont>
      <CreateButton onClick={() => {
        navigate('/Create');
      }}>추가</CreateButton>
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
  padding: 0 10px;
  position: relative;
  width: calc((100% - 98px) / 3);
  border: 1px solid black;
  border-radius: 5px;
`;

const MakeCont = styled.div`
  margin-top: 50px;
  height: 50px;
  background-color: #fff;
  z-index: 1000;
`;

const CardButton = styled.button`
  margin-right: 4px;
  font-size: 8px;
  border: 1px solid black;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  display: flex;
`;

const CreateButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: #9930c9;
  border-radius: 50px;
`;

export default CardList;