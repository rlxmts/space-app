import { createGlobalStyle } from 'styled-components';

import GandhiSansRegular from '../Fonts/GandhiSans-Regular.otf';


export const EstiloGlobal = createGlobalStyle`

@font-face {
  font-family: 'GandhiSansRegular';
  src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  font-family: 'GandhiSansRegular';
}

`