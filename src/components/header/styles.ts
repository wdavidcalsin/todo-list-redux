import styled from 'styled-components';

export const HeaderStyle = styled.div`
  height: 80px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  /* padding: 10px 0; */
`;

export const Button = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  /* margin: 10px; */
  cursor: pointer;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.secundary};
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);

  &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }

  &.load {
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 200;
    color: ${(props) => props.theme.colors.text};
  }

  & > svg {
    font-size: 40px;
    color: ${(props) => props.theme.colors.iconsColor};
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* margin: 10px; */
  border-radius: 2px;
  background: ${(props) => props.theme.colors.secundary};
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);

  align-items: center;
  justify-content: space-around;

  overflow: hidden;

  &.load {
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 200;
    color: ${(props) => props.theme.colors.text};
  }

  & > svg {
    font-size: 40px;
    color: ${(props) => props.theme.colors.iconsColor};
  }

  button {
    cursor: pointer;
    font-size: 1.5em;
    outline: none;
    border: none;
    background: none;
    width: 50%;
    height: 100%;

    color: ${(props) => props.theme.colors.text};

    &:hover {
      opacity: 0.9;
      color: rgb(0, 153, 255);
    }

    /* width: 100%;
    height: 100%; */
  }
`;
