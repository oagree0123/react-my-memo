import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { updateCardFB } from './redux/modules/card';
import { editCardFB } from './redux/modules/edit';

const Update = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wordRef = useRef('');
  const defRef = useRef('');
  const exstrRef = useRef('');

  const params = useParams();
  const card_id = {card_id : params.card_id};

  const card_data = useSelector(state => state.edit.list);
  
  const updateCardList = (card_id) => {
    dispatch(updateCardFB(card_id, {
      word: wordRef.current.value,
      def: defRef.current.value,
      exstr: exstrRef.current.value,
    }));
    navigate('/');
  };

  const _card = card_data.filter(v => {
    return v.id === card_id.card_id;
  })

  useEffect(() => {
    dispatch(editCardFB(card_id));
  },[]);

  return (
      <UpdateWrap>
      <UpdateTitle>단어 수정하기</UpdateTitle>
      <FormWrap action="">
      <InputWrap>
          <InputTitle >단어</InputTitle>
          <Input id="input_word" ref={wordRef} defaultValue={_card[0].word}></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle>설명</InputTitle>
          <Input id="input_def" ref={defRef} defaultValue={_card[0].def}></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle>예시</InputTitle>
          <Input id="input_exstr" ref={exstrRef} defaultValue={_card[0].exstr}></Input>
        </InputWrap>
        <FormButton type='button' onClick={() => {
          updateCardList(card_id);
        }}>
          수정하기
        </FormButton>
      </FormWrap>
    </UpdateWrap>
  );
};

const UpdateWrap = styled.div`
  max-width: 400px;
  margin: 80px auto;
`;

const UpdateTitle = styled.h2`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.label`

`;

const Input = styled.input`
  height: 28px;
  border: none;
  border-bottom: 1px solid black;

  &:focus {
    outline: none;
  }
`;

const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  font-size: 16px;
  align-self: center;
`;

export default Update;