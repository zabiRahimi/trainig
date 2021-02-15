// import React from 'react';
// import '../css/main.css';
import {Link} from "react-router-dom";
import useChengeDocumentTitle from './uses/useChengeDocumentTitle';

import '../css/home.css';

const Home = () => {
  useChengeDocumentTitle(`training`);
  return (
    <div>
      <div className="indexPage notShow" id="indexPage">
        <Link className="indexA fontEn" to='/lessonsDeveloper'>lessons developer</Link>
        <Link className="indexA fontEn" to='/typeSpellTranslate'>type and spell and translate</Link>
      </div>
    </div>
  );
}
export default Home;