import { Link } from "react-router-dom";

import useChengeDocumentTitle from './uses/useChengeDocumentTitle';
import '../css/lessonsDeveloper.css'

const LessonsDeveloper = () => {
  useChengeDocumentTitle('lessons developer');
  const url='lessonsDeveloper';
  return (
    <div >
      <div className="lessonsDeveloperTitle">
        <h3>درسهای توسعه دهنده</h3>
      </div>
      <div className="menuPage">
        <Link to='/'>home</Link>
        <Link to={`${url}/addLesson`}>راهنمای اضافه کردن درس</Link>
      </div>

      <div className="divLessons">
        <div className="title">
          <h4 className="titleH4 fontEn">
            laravel
            </h4>
        </div>
        <div className="body">
          <Link to={`${url}/startLaravel`} className="pageA fontEn">start laravel</Link>
          <Link to={`${url}/api`} className="pageA fontEn">api</Link>
          <Link to={`${url}/model`} className="pageA fontEn">model</Link>
          <Link to={`${url}/migration`} className="pageA fontEn">migration</Link>
          <Link to={`${url}/factory`} className="pageA fontEn">factory</Link>
          <Link to={`${url}/seeder`} className="pageA fontEn">seeder</Link>

        </div>
      </div>

      <div className="divLessons">
        <div className="title">
          <h4 className="titleH4 fontEn">
            javascript
            </h4>
        </div>
        <div className="body">
          
        </div>
      </div>

      <div className="divLessons">
        <div className="title">
          <h4 className="titleH4 fontEn">
            universal
          </h4>
        </div>
        <div className="body">
        <Link to={`${url}/vscode`} className="pageA fontEn">vscode</Link>
          

        </div>
      </div>


    </div>
  );
}

export default LessonsDeveloper;