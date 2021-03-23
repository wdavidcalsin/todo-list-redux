import styled from 'styled-components';

import { Field, Form, FormProps, FormRenderProps } from 'react-final-form';
import { FormEvent } from 'react';

export const DivList = styled.form`
  display: flex;
  align-items: center;
  padding: 20px 0;
  height: 70px;

  input {
    width: 100%;
    margin-right: 10px;
    padding: 10px 10px;
    border: none;
    outline: none;
    border-radius: 2px;
    border-radius: 2px;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.third};
    /* text-transform: uppercase; */

    font-family: 'Inter', sans-serif;

    &::placeholder {
      color: ${(props) => props.theme.colors.textSecundary};
    }

    &:focus {
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
    }
  }
`;

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  padding: 20px 0;
  height: 70px;

  input {
    width: 100%;
    margin-right: 10px;
    padding: 10px 10px;
    border: none;
    outline: none;
    border-radius: 2px;
    border-radius: 2px;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.third};
    /* text-transform: uppercase; */

    font-family: 'Inter', sans-serif;

    &::placeholder {
      color: ${(props) => props.theme.colors.textSecundary};
    }

    &:focus {
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
    }
  }
`;

export const Button = styled.button`
  width: 100px;
  margin-left: 10px;
  background-color: ${(props) => props.theme.colors.third};
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  color: ${(props) => props.theme.colors.text};
  height: 100%;
  border: 1px dashed ${(props) => props.theme.colors.inversColor};
  z-index: 1;
  /* padding: 10px 10px; */
  display: block;

  &:before {
    transition: all 5s;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`;
