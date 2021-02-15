import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LessonsDeveloper from "./LessonsDeveloper";
import TypeSpellTranslate from "./TypeSpellTranslate";
import RouteTypeSpellTranslate from "./RouteTypeSpellTranslate";
import RouteLessonsDeveloper from "./RouteLessonsDeveloper";
import NotFound from "./NotFound";
import Home from "./home.js";
import usescrollToTop from './uses/useScrollToTop'
import '../css/App.css';

// import './zabi.js';


// const n='./zabi';

// console.log(zabi);
// require('./zabi');
// let zabi=[
//   'zabi','nabi','mo'
// ]

// function App() {

// //  const Zabi= React.lazy(() => import(`./zabi`));
//   return (
//     <div>
//       <Word1/>
//       {/* <Helmet>
//         <script type='text/javascript' src='../src/components/zabi.js' />
//       </Helmet> */}
//      {/* {zabi.map((item, index) => 
//        <h1 key={index}>{item} df</h1>)
//      } */}

//     </div>
//   );
// }

// const importView ='mmmm'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         zabi training n na

//       </header>
//     </div>
//   );
// }


const App = () => {
  const { scrollToTop } = usescrollToTop();




  return (
    <Router>
      {/* 
     * جهت دکمه ای که ما را به بالای صفح می برد. این تگ در صفحه فیکست هست 
     */}
      <div className="scrollToTop" id="scrollToTop">
        <a onClick={scrollToTop}>بالا</a>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/lessonsDeveloper">
            <LessonsDeveloper />
          </Route>
          {RouteLessonsDeveloper}
          <Route exact path="/typeSpellTranslate">
            <TypeSpellTranslate />
          </Route>
          {RouteTypeSpellTranslate}
          <Route path="*" component={NotFound}></Route>
        </Switch>

      </div>
    </Router>
  );

}

export default App;
