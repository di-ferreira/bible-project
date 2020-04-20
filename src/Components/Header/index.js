import React from "react";

import { Main, Container, Logo, Search, Button } from "./styles";
import { FaCross, FaSearch, FaBars } from "react-icons/fa";

export default function Header() {
   return (
      <Main>
         <Container>
            <Logo>
               <FaCross size={28} />
               <h1>Biblia Online</h1>
            </Logo>
            <Search>
               <input type="search" placeholder="Buscar" />
               <button type="button">
                  <FaSearch />
               </button>
            </Search>
            <Button type="button">
               <FaBars size={28} />
            </Button>
         </Container>
      </Main>
   );
}
