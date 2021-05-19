import { Link } from 'react-router-dom';
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const AddReactInLaravel = () => {
   useChengeDocumentTitle('add react in laravel');
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
              <button className='buttonA fontEn'  onClick={() => toChunkLesson('addReact')}>نصب ری اکت بر روی لاراول </button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('runNpm')}></button>

           </div>
        </div>
        <div className='bodyLesson' id='bodyLesson'> 
           <div className='chunkLesson' id='addReact'>
              <div className='titleLesson fa ' ># نصب ری اکت بر روی لاراول </div>
              <div className='articleLesson'>
                 <p className='fa'>
                     جهت نصب ری اکت بر روی لاراول دستورات زیر را در cmd اجرا کنید
                 </p>
                 <pre className='en'>
                 composer require laravel/ui
                 <br/>
                 php artisan ui react
                 <br/>
                 php artisan ui react --auth
                 <br/>
                 npm install
                 <br/>
                 npm run dev
                 <br/>
                 </pre>
              </div>
            </div>
            <div className='chunkLesson' id='runNpm'>
              <div className='titleLesson fa' ># ران کردن npm و mix کردن کدهای ویرایش شده </div>
              <div className='articleLesson'>
                  <p className='fa'>
                      با دو روش می شود کدها را mix کرد. 
                      <br/>
                      روش اول وارد کردن دستور <i className='enInPFa'>npm run dev </i> در این روش یک بار اطلاعات و کدها mix می شود و برنامه میکس کردن پایان می یابد و برای میکس کردن کدهای ویرایش شده جدید لازم است دوباره دستور را اجرا کرد
                      <br/>
                      روش دوم اجرا کردن کد <i className='enInPFa'>npm run watch </i>در این روش برنامه میکس کردن بسته نمی شود و با هر بار تغییر و ویرایش کدها برنامه به طور خودکار کدها را میکس می کند
                  </p>
              </div>
              </div> {/* end .chunkLesson */}

         </div>
      </div>
   );
}
export default AddReactInLaravel;