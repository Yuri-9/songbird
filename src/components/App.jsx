import React from 'react';
import './app.scss';


import birdsDate from '../data/dateBirds';
import kindsBirds from '../data/kindsBird';
import KindBirdList from './KindBirdList/index';
import SectionSecretBird from './SectionSecretBird/index';
import SectionListBirds from './SectionListBirds/index';
import SectionDescriptionBird from './SectionDescriptionBird/index';
import ButtonNext from './ButtonNext/index'

function App() {
  return (
    <div className="wrapper">
      <h1>App name</h1>
      <KindBirdList kindsBirds={kindsBirds} />
      <main className="main">
        <SectionSecretBird />
        <SectionListBirds birdsDate={birdsDate} />
        <SectionDescriptionBird birdsDate={birdsDate} />
        <ButtonNext />
      </main>
    </div>
  );
}

export default App;
