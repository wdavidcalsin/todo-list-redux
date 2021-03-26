import styled from 'styled-components';

export const IsEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5em 0;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px dashed ${(props) => props.theme.colors.borderColor};

  svg {
    font-size: 4em;
  }
`;
