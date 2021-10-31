import styled from 'styled-components/macro';
import partlycloudy from '../../images/cloudy.png';
import rain from '../../images/rain.png';
import snow from '../../images/snow.png';
import fog from '../../images/fog.png';
import storms from '../../images/storms.png';
import sunny from '../../images/sunny.png';

export const PartlyCloudyImage = styled.div`
  background-image: url(${partlycloudy});
  height: 100px;
  width: 100px;
  background-size: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

export const RainImage = styled.div`
  background-image: url(${rain});
  height: 100px;
  width: 100px;
  background-size: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

export const StormImage = styled.div`
  background-image: url(${storms});
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  background-size: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

export const SnowImage = styled.div`
  background-image: url(${snow});
  height: 100px;
  width: 100px;
  background-size: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

export const FogImage = styled.div`
  background-image: url(${fog});
  height: 100px;
  width: 100px;
  background-size: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

export const SunnyImage = styled.div`
  background-image: url(${sunny});
  height: 100px;
  width: 100px;
  background-size: 100%;
  margin-top: 20px;
  cursor: pointer;
`;
