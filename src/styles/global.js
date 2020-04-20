import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Playfair+Display:wght@400;800&display=swap');

   *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing: border-box;
   }
   html, body, #root{
      min-height: 100%;
   }
   body{
      font-size:100%;
      -webkit-font-smoothing: antialiased !important;
   }
   body, input,button{
      color: #222;
      font-size: 14px;
      font-family: Oswald, Arial, Helvetica, sans-serif;
   }
   button{
      cursor: pointer;
   }
`;
