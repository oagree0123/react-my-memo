import React from 'react';
import styled from 'styled-components';

const Create = () => {
  return (
    <CreateWrap>
      <CreateTitle>단어 추가하기</CreateTitle>
      <FormWrap>
        <InputWrap>
          <InputTitle for="input_word">단어</InputTitle>
          <Input id="input_word"></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle for="input_pinyin">병음</InputTitle>
          <Input id="input_pinyin"></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle for="input_def">의미</InputTitle>
          <Input id="input_def"></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle for="input_ex_cn">예문</InputTitle>
          <Input id="input_ex_cn"></Input>
        </InputWrap>
        <InputWrap>
          <InputTitle for="input_ex_co">해석</InputTitle>
          <Input id="input_ex_co"></Input>
        </InputWrap>
        <FormButton type='submit'>저장하기</FormButton>
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