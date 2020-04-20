import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   display: flex;
   max-width: 1024px;
   padding: 0 25px;
   margin: 25px auto 0 auto;
   justify-content: center;
   flex-direction: column;

   h1 {
      flex: 1;
      font-family: Oswald, sans-serif;
      font-size: 3.5rem;
   }

   h2 {
      flex: 1;
      font-family: Oswald, sans-serif;
      font-size: 2.5rem;
   }
`;

export const Verse = styled.p`
   max-width: 800px;
   font-family: Playfair, serif;
   font-size: 1.4rem;
   margin-top: 25px;
`;

export const RefBook = styled.div`
   display: flex;
   flex: 1;
   justify-content: flex-end;
   max-width: 800px;
   margin-top: 10px;
   margin-bottom: 25px;

   a {
      font-family: Oswald, sans-serif;
      font-weight: 600;
      text-decoration: none;
      color: ${darken(0.05, '#5e2563')};
      font-size: 1.4rem;
      &:hover {
         color: #5e2563;
         text-decoration: underline;
      }
   }
`;

export const Books = styled.ul`
   list-style: none;
   margin-top: 15px;

   li {
      font-size: 1.4rem;
      margin-bottom: 10px;

      a {
         text-decoration: none;
         color: ${darken(0.05, '#5e2563')};
         &:hover {
            color: #5e2563;
            text-decoration: underline;
         }
      }
   }
`;
