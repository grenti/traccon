import React from 'react';
import Footer from './Footer';
import AddTrack from './containers/AddTrack';
import VisibleTrackList from './containers/VisibleTrackList';

const App = () => (
  <div>
    <AddTrack />
    <VisibleTrackList />
    <Footer />
  </div>
);

export default App;
