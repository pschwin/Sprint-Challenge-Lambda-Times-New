import styled from 'styled-components';
import TopBar from './TopBar'

const TopBar = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  `;

 const TopBarContainer = styled.div`
 
 width: 100%;
 display: flex;
 justify-content: none;
 align-items: none;
 flex-direction: row;
 color: #fff;
 letter-spacing: 1px;
 padding: 0 10px;
 `;

 const TopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  `;

  const TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  `;

  const TopBarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  `;

  export {TopBar, TopBarContainer, TopBarContainerCenter, TopBarContainerLeft, TopBarContainerRight}