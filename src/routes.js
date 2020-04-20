import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Verse from './pages/Verse';
import Version from './pages/Version';

export default function Routers() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/">
               <Main />
            </Route>
            <Route path="/:version/books" component={Version}>
               <Version />
            </Route>
            <Route path="/:version/:verse" component={(Version, Verse)}>
               <Verse />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}
