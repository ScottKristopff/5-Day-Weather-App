import styled from 'styled-components/macro';
import { mobile } from '../../../../reponsive';
import { Laptop } from '../../../../reponsive';
export const ReturnToHomepageButton = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;
`;

export const MainWeather = styled.div`
  grid-row: span 2 / auto;
  height: 610px;
  width: 610px;
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: '300px',
    width: '300px'
  })}
  ${Laptop({
    height: '610px',
    width: '550px'
  })}
`;
export const Today = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Tomorrow = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: '300px',
    width: '300px'
  })}
  ${Laptop({
    height: '300px',
    width: '290px'
  })}
`;
export const ThirdDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: '300px',
    width: '300px'
  })}
  ${Laptop({
    height: '300px',
    width: '290px'
  })}
`;
export const FourthDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: '300px',
    width: '300px'
  })}
  ${Laptop({
    height: '300px',
    width: '290px'
  })}
`;
export const FiveDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  /*   grid-column: span 2 / auto; */
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: '300px',
    width: '300px'
  })}
  ${Laptop({
    height: '300px',
    width: '290px'
  })}
`;

export const SixDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  /*   grid-column: span 2 / auto; */
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: '300px',
    width: '300px'
  })}
  ${Laptop({
    height: '300px',
    width: '290px'
  })}
`;

export const SevenDay = styled.div`
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  /*   grid-column: span 2 / auto; */
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: '300px',
    width: '300px'
  })}
  ${Laptop({
    height: '300px',
    width: '290px'
  })}
`;
