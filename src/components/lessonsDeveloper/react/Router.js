import { Link } from 'react-router-dom';
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const Router = () => {
   useChengeDocumentTitle('router in react');
   const {toChunkLesson}=useToChunkLesson();
   return (
      <div className='lessonSinglePage notShow' id='lessonSinglePage'>
         <div className='typeSpellTranslateTitle fontEn'>
            <h3>lesson developer start laravel</h3>
         </div>
         <div className='menuPage'>
            <Link to='/' >home</Link>
            <Link to='/lessonsDeveloper' >go back</Link>
         </div>

        <div className='divTitleLesson'>
           <div className='titleLesson'># titles lesson</div>
           <div className='listTitleLesson' id='listTitleLesson'>
              <button className='buttonA fontEn'  onClick={() => toChunkLesson('addRouter')}>نحوه اضافه کردن react-router-dom</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('nestedRouter')}>ایجاد کردن روتهای تودرتو</button>
           </div>
        </div>
        <div className='bodyLesson' id='bodyLesson'> 
           <div className='chunkLesson' id='addRouter'>
              <div className='titleLesson fa ' ># نحوه اضافه کردن react-router-dom </div>
              <div className='articleLesson'>
                 body lesson
              </div>
           </div>

           <div className='chunkLesson' id='nestedRouter'>
           <div className='titleLesson fa' ># ایجاد کردن روتهای تودرتو </div>
           <div className='articleLesson'>
               <p className='fa'>
                   فرضا می خواهیم پوشه ای به نام user ایجاد کنیم و کامپوننتهای login , register , porfile را در آن قرار دهیم و سپس در همین پوشه فایلی به نام index ایجاد کنیم که از طریق آن به با url های مختص هر کامپوننت به کامپوننت ها درسترسی داشته باشیم، در ضمن در فایل مربوط به روتهای اپلیکیشن فقط کامپوننت index را وارد کنیم و از این کامپوننت به کامپوننتهای زیر مجموعه user دسترسی داشته باشیم ، محتویات پوشه user به صورت زیر است و سپس در ادامه به کدها توجه کنید.
               </p>
               <pre className='en'>
                   user
                   <br/>
                      --index.js
                   <br/>
                      --login.js
                   <br/>
                      --register.js
                   <br/>
                      porfile.js
                
               </pre>
               <p className='fa'>
               فرض می کنیم روتهای اپلیکیشن در کامپوننت app.js به صورت زیر مدیریت می شود، که در آن فایل index.js از زیر مجموعه پوشه user که حاوی کامپوننت User است نیز وارد شده است
               </p>
           </div>
           </div> {/* end .chunkLesson */}

         </div>
      </div>
   );
}
export default Router;