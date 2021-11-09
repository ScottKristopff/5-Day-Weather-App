import styled from 'styled-components/macro';
import { mobile } from '../../../../reponsive';

export const Date = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  color: #848484;
  position: relative;
`;

export const City = styled.h2`
  font-size: 2.8rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  /* bottom: 100px; */
`;

export const Conditions = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;

export const WeatherImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const WeekdayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const WeekdayConditions = styled.p`
  font-size: 1.2rem;
  padding-left: 12px;
`;

export const Temp = styled.h1`
  font-size: 12rem;
  margin-left: 50px;
  padding-left: -50px;
  height: min-content;
  width: min-content;
  cursor: pointer;
  ${mobile({
    fontSize: '4rem',
    margin: 0,
    paddingLeft: 0
  })}
`;

export const TodayHigh = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 10px;
  ${mobile({
    fontSize: '1rem'
  })}
`;

export const WeekDays = styled.p`
  font-size: 2rem;
  padding-left: 10px;
`;

export const FutureTemps = styled.h1`
  font-size: 3rem;
  /*   padding-top: 45px; */
  padding-left: 20px;
`;
