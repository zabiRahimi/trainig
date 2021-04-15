import { Link } from 'react-router-dom';
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const Seeder = () => {
   useChengeDocumentTitle('lesson seeder');
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
              <button className='buttonA fontEn'  onClick={() => toChunkLesson('detailSeeder')}>معرفی سیدرها</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('createSeeder')}>ایجاد سیدر</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('editSeeder')}>آماده سازی و ویرایش seeder، تعداد رکوردها، استفاده از فکتوری</button>

           </div>
        </div>
        <div className='bodyLesson' id='bodyLesson'> 
           <div className='chunkLesson' id='detailSeeder'>
              <div className='titleLesson fa ' ># معرفی سیدرها </div>
              <div className='articleLesson'>
                 <p className='fa'>
                     از سیدرها برای پر کردن دیتابیس که اصطلاحا داده ریزی و بذری پاشی گفته می شود استفاده می شود. داده ریزی جداول برای تست کردن برنامه می باشد. مثلا برای ایجاد 50 رکورد در یک جدول به صورت دستی نیاز به صرف زمان است اما با سیدرها این کار به آسانی و کمترین زمان انجام می شود. برای ساختن داده ها معمولا از model factory استفاده می شود، آموزش ایجاد و استفاده از model factory در درس factory است.
                 </p>
              </div>
           </div>

           <div className='chunkLesson' id='createSeeder'>
           <div className='titleLesson fa' ># نحوه ایجاد سیدر </div>
           <div className='articleLesson'>
               <p className='fa'>
                   برای ایجاد سیدر از دستور زیر استفاده می شود
               </p>
               <pre className='en'>
                   php artisan make:seeder ModelSeeder
               </pre>
               <p className='fa'>
   نام گذاری سیدرها به این صورت است که ابتدا نام مدل و سپس کلمه Seeder نوشته می شود، دقت شود که هر دو کلمه حرف اولشان بزرگ باشد و بدون فاصله بهم چسبیده باشند. <br/> پس از اجرای دستور بالا یک فایل با همان نامی که دادیم در دایرکتوری <i className='enInPFa'>{`database > seeders `}</i> ایجاد می شود.
               </p>
           </div>
           </div> {/* end .chunkLesson */}

            <div className='chunkLesson' id='editSeeder'>
            <div className='titleLesson fa' ># آماده سازی و ویرایش seeder از قبیل تعداد رکوردها و استفاده از فکتوری ها </div>
            <div className='articleLesson'>
                <p className='fa'>
   پس از ایجاد سیدر لازم است که تعداد رکوردهایی که سیدر باید ایجاد کند مشخص شود و همچنین نوع داده ها و فیلدهای جدول نیز مشخص گردد و در صورت لزوم فکتوری مربوط به سیدر فراخوانی شده و مورد استفاده قرار گیرد، برای ویرایش seeder به مسیر <i className='enInPFa'>{`database > seeders`}</i> رفته و فایل seeder مورد نظر را باز کنید. <br/> اکنون باید در قدم اول مدل مربوط به seeder را به فایل use کنید، حال نوبت آن است که با فراخوانی مدل و فکتوری وهمچنین مشخص کردن تعداد رکوردها کار را پیش برید، برای این منظور فرض می کنیم می خواهیم تعدادی رکورد در جدول users ایجاد کنیم، طبیعتا ابتدا باید model factory مربوط به مدل User را ایجاد نمایید، باز فرض می کنیم از قبل این فکتوری را ایجاد کرده ایم.
   <br/><br/>
   اکنون با این دستور سیدر مدل User را ایجاد کنید <i className='enInPFa'>php artisan make:seeder UserSeeder</i> معمولا این سیدر بطور پیش فرض موجود است. <br/> فایل ایجاد شده را باز کنید و مدل user را به کلاس use کنید، سپس متد run را به صورت زیر ویرایش کنید
                </p>
                <pre className='en'>
                    {`public function run()
    {
        User::factory()
        ->count(3)
        ->create();
    }`}
                </pre>

            </div>
            </div> {/* end .chunkLesson */}
         </div>
      </div>
   );
}
export default Seeder;