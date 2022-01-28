import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Create = () => {
  const dispatch = useDispatch();

  const wordRef = useRef('');
  const defRef = useRef('');
  const exstrRef = useRef('');

  const addCardList = () => {
    dispatch();
  };

  return (
    <CreateWrap>
      <CreateTitle>단어 추가하기</CreateTitle>
      <FormWrap>
        <InputWrap>
          <InputTitle for="input_word">단어</InputTitle>
          <Input id="input_word" ref={wordRef}></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle for="input_def">설명</InputTitle>
          <Input id="input_def" ref={defRef}></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle for="input_exstr">예시</InputTitle>
          <Input id="input_exstr" ref={exstrRef}></Input>
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

export default Create;