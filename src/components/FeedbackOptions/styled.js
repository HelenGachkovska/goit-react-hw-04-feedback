import styled from 'styled-components';

export const ContaiherBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  gap: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: rgb(132, 176, 180);
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.03em;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    font-size: 20px;
    width: 105px;
    height: 43px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
