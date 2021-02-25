import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  padding: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  padding: 10px 10px;
  border: none;
  outline: none;
  border-radius: 2px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.third};
  text-transform: uppercase;
  /* font-family: 'Inter', sans-serif; */
  /* font-family: 'Akaya Telivigala', cursive; */
  font-family: 'Inter', sans-serif;

  &::placeholder {
    color: ${(props) => props.theme.colors.text};
  }

  &:focus {
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
  }
`;

export const Button = styled.button`
  width: 100px;
  margin-left: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;
