import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhoneBook from 'views/PhoneBookView/PhoneBookView';
import UpperBar from 'components/UpperBar/UpperBar';
import Navigation from 'components/Navigation/Navigation';
import PrivateMenu from 'components/PrivateMenu/PrivateMenu';
import HomeView from 'views/HomeView/HomePge';

function App() {
  return (
    <>
      <UpperBar>
        <Navigation />
        <PrivateMenu />
      </UpperBar>

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/phone-book">
          <PhoneBook />
        </Route>
        <Route>
          <div>not found</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
