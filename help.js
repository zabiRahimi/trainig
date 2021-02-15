//محتویات این فایل جهت راحتی نوشتن دروس ایجاد شده اند

//
/*
*/

//پارگراف فارسی
/*
<p class="fa"></p>
*/


//پارگراف انگلیسی
/*
<pre class="en"></pre>
*/

//نوشتن متن انگلیسی در پارگراف فارسی
/*
<i class="enS"></i>
*/

//نوشتن کامنت در کدها
/*
<i class="comment"></i>
*/

//نوشتن نکته ها در پارگراف فارسی
/*
<p class="fa"><i class="note"></i></p>
*/

//نوشتن آدرس فایل در کدها
/*
<i class="file"></i>
*/

// لینک سرفصل هر درس
/* 
        // دقت شود برای هر قسمت درس یک آی دی داده ایم که باید به این متد
        داده شود
          <a onClick={()=>toChunkLesson('')}></a>

 */

//ایجاد قسمت هر درس
/*  
        دقت شود باید برای هر قسمت یک آی دی متفاوت قرار دهیم
        <div className='chunkLesson' id="">
          <div className="titleLesson fa" ># </div>
          <div className="articleLesson">
          </div>
        </div> {/* end .chunkLesson */}
*/

//نمونه کامل اسکلت بندی یک در
//نکته در این نمونه همه کامنت ها حذف شده است ، برای دسترسی به کامنتها به 
//فایل زیر بروید
//src\components\LessonsDeveloper\laravel\StartLaravel.js
/*

import { Link } from "react-router-dom";
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const StartLaravel = () => {
  useChengeDocumentTitle('my title lesson');
  const {toChunkLesson}=useToChunkLesson();
  return (
    <div className="lessonSinglePage notShow" id="lessonSinglePage">
      <div className="typeSpellTranslateTitle fontEn">
        <h3>lesson developer start laravel</h3>
      </div>
      <div className="menuPage">
        <Link to='/' >home</Link>
        <Link to='/lessonsDeveloper' >go back</Link>
      </div>

     
      <div className="divTitleLesson">
        <div className="titleLesson"># titles lesson</div>

        
        <div className="listTitleLesson" id="listTitleLesson">
          <a onClick={()=>toChunkLesson('myIdLesson')}>start laravel</a>
          

        </div>

      </div>
      
      <div className="bodyLesson" id="bodyLesson"> 

        <div className='chunkLesson' id="myIdLesson">
          <div className="titleLesson fa " ># title lesson </div>
          <div className="articleLesson">body lesson</div>
        </div>
        


      </div>

    </div>//end document .lessonSinglePage
  );
}
export default StartLaravel;

*/
