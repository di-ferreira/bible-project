import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Verse, Books, RefBook } from './styles';

import Header from '../../Components/Header';

export default class Main extends Component {
   render() {
      return (
         <>
            <Header />
            <Container>
               <h1>Versículos Diários</h1>

               <Verse>
                  Ordenou o rei, e foram trazidos aqueles homens que tinham
                  acusado a Daniel, e foram lançados na cova dos leões, eles,
                  seus filhos e suas mulheres; e ainda não tinham chegado ao
                  fundo da cova, e já os leões se apoderaram deles, e lhes
                  esmigalharam todos os ossos.
               </Verse>

               <RefBook>
                  <Link to="/chapter">Daniel 6:24</Link>
               </RefBook>

               <Verse>
                  Vigiai, estai firmes na fé; portai-vos varonilmente, e
                  fortalecei-vos.
               </Verse>
               <RefBook>
                  <Link to="/">I Coríntios 16:13</Link>
               </RefBook>

               <h2>Biblias</h2>
               <Books>
                  <li>
                     <Link to="/">Nova Versão Internacional</Link>
                  </li>
                  <li>
                     <Link to="/">Almeida Corrigida e Fiel</Link>
                  </li>
               </Books>
            </Container>
         </>
      );
   }
}
