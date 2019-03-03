import React from 'react';
import {HeaderDiv, HeaderH1, HeaderSpan} from './Header-Styled-Comp';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpan>SMARCH 32, 2018</HeaderSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <span className="temp">98°</span>
    </HeaderDiv>
  )
}

export default Header