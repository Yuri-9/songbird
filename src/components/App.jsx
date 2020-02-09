import React from 'react';
import './app.scss';

// import ArticleList from './ArticleList';
import KindBirdList from './KindBirdList/index';
import Main from './Main/index';
// import articles from '../fixture';
import kindsBirds from '../data/kindsBird';


// console.log(articles);

function App() {
  return (
    <div className="wrapper">
      <h1>App name</h1>
      <KindBirdList kindsBirds={kindsBirds} />
      <Main />
    </div>
  );
}

export default App;
