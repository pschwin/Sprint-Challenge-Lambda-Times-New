import styled from 'styled-components';

const HeaderDiv = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

`;

const HeaderH1 = styled.h1`

  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;

`;

const HeaderSpan = styled.span`

  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

`;

export {HeaderDiv, HeaderH1, HeaderSpan};


