import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

export const Button = styled.button`
  margin-left: 8px;
  font-weight: 700;
  background: #eee;
  padding: 4px;
  border-radius: 4px;
  border: none;
  transition: background 0.2s ease-in;

  &:hover {
    background: #F8FAFF;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 460px;
  margin: 0 auto;

  background: #eee;
  border-radius: 4px;
  padding: 16px;

  transition: background 0.2s ease-in;
  cursor: pointer;

  & + & {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 8px;
  }

  &:hover {
    background: #F8FAFF;
  }

  small {
    display: block;
  }
`;