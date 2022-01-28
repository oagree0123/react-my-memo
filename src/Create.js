import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { createCardFB } from './redux/modules/card';

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wordRef = useRef('');
  const defRef = useRef('');
  const exstrRef = useRef('');

  const addCardList = () => {
    dispatch(createCardFB({
      word: wordRef.current.value,
      def: defRef.current.value,
      exstr: exstrRef.current.value,
      completed: false,
    }));
    navigate('/');
  };

  return (
    <CreateWrap>
      <CreateTitle>단어 추가하기</CreateTitle>
      <FormWrap>
        <InputWrap>
          <InputTitle >단어</InputTitle>
          <Input type="text" id="input_word" ref={wordRef}></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle>설명</InputTitle>
          <Input type="text" id="input_def" ref={defRef}></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle>예시</InputTitle>
          <Input type="text" id="input_exstr" ref={exstrRef}></Input>
        </InputWrap>
        <FormButton type='submit' onClick={addCardList}>
          추가하기
        </FormButton>
      </FormWrap>
    </CreateWrap>
  );
};

const CreateWrap = styled.div`
  max-width: 400px;
  margin: 80px auto;
`;

const CreateTitle = styled.h2`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const FormWrap = styled.div`
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

export default Create;