import styled from 'styled-components';
import { darken } from 'polished';

export const Main = styled.header`
   display: flex;
   justify-content: center;
   padding: 0 15px;
   width: 100%;
   height: 60px;
   background: linear-gradient(#5e2563, ${darken(0.1, '#5e2563')});
`;
export const Container = styled.div`
   display: flex;
   flex: 1;
   justify-content: space-between;
   align-items: center;
   max-width: 1024px;
   height: 100%;
`;
export const Logo = styled.div`
   a {
      display: flex;
      align-items: center;
      width: 250px;
      height: 100%;
      color: #fff;
      text-decoration: none;
      font-variant: small-caps;
      svg {
         margin-right: 10px;
      }
   }
`;
export const Search = styled.div`
   background: #fff;
   width: 300px;
   height: 70%;
   border-radius: 5px;
   margin-left: -200px;
   display: flex;
   align-items: center;
   padding: 0 5px;
   input {
      border: none;
      height: 35px;
      width: 90%;
   }
   button {
      display: flex;
      border: none;
      background: none;
      padding: 10px;
      border-radius: 15px;
      justify-content: center;
      align-items: center;
      color: #9e9e9e;
      &:hover {
         background: #eee;
      }
   }
`;

export const Button = styled.button`
   border: none;
   background: none;
   color: #fff;
`;
