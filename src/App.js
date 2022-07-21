import React from 'react'
import {Route} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return(
    <div>
      <MainNavigation/>
      <Route>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage/>} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </div>
  );
}

export default App;
