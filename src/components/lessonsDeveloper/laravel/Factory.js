import { Link } from 'react-router-dom';
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const Factory = () => {
   useChengeDocumentTitle('lesson factory');
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
              <button className='buttonA fontEn'  onClick={() => toChunkLesson('detailFacroy')}>شرح مختصر model factory</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('createFactory')}>ایجاد فکتوری و انتصاب به مدل</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('createData')}>نحوه ایجاد داده در فکتوری </button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('farsiDataFaker')}>ایجاد داده های فارسی با faker</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('relation')}> ایجاد دیتای فیلدهای روابط بین جدولها در فکتوری</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('dataLorem')}>ایجاد داده های کلمه، پاراگراف، متن</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('email')}>ایجاد داده های ایمیل و اینترنت</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('password')}>ایجاد پسورد</button>
              <button className='buttonA fontEn' onClick={()=>toChunkLesson('color')}>ایجاد رنگ ها</button>
           </div>
        </div>
        <div className='bodyLesson' id='bodyLesson'> 
           <div className='chunkLesson' id='detailFacroy'>
              <div className='titleLesson fa ' ># شرح مختصر فکتوری </div>
              <div className='articleLesson'>
                  <p className='fa'>
                     وظیفه مدل فکتوری ایجاد داده برای مدل می باشد، این داده ها در سیدرها مورد استفاده قرار می گیرند،می توان برای هر مدل یک فکتوری ایجاد کرد.
                  </p>
              </div>
           </div>

           <div className='chunkLesson' id='createFactory'>
           <div className='titleLesson fa' ># ایجاد فکتوری </div>
           <div className='articleLesson'>
              <p className='fa'>
                  برای ایجاد فکتوری از دستور زیر استفاده می کنیم
              </p> 
              <pre className='en'>
                  php artisan make:factory PostFactory --model=Post
              </pre>
              <p className='fa'>
                  با دستور بالا یک فکتوری به نام PostFactory درست کردیم که با فلَگ --model آن را به مدل Post منصوب کردیم.
              </p>
           </div>
           </div> {/* end .chunkLesson */}

           <div className='chunkLesson' id='createData'>
           <div className='titleLesson fa' ># نحوه ایجاد داده در فکتوری </div>
           <div className='articleLesson'>
               <p className='fa'>
                   هنگام ساخت فکتوری با دستور آرتیزان که در بالا توضیح داده شد، یک کلاس فکتوری با همان نامی که دادیم ایجاد می شود، این کلاس در مسیر <i className='enInPFa'>{`database > factories`}</i> ساخته می شود. چنانچه کلاس مورد نظر را باز کنید، یک خصوصیت یا پراپرتی با نام <i className='enInPFa'>protected $model</i> مشاهده می کنید که مقدار آن همان مدلی هست که فکتوری به آن منصوب شده است. و همچنین یک متد با نام <i className='enInPFa'>public function definition</i> ایجاد شده که یک آرایه خالی را return می کند. حال برای هر داده که می خواهیم بسازیم در این آرایه یک کلید و مقدار قرار می دهیم، کلید آرایه نام فیلد داده و مقدار آن داده مورد نظر می باشد. لاراول برای ساخت داده های فیک از کتابخانه faker استفاده می کند. این کتابخانه انواع داده های فیک را ایجاد می کند. برای روشن تر شدن قضیه فرض می کنیم می خواهیم برای فیلدهای <i className='enInPFa'> name , email , address</i> توسط کتابخانه faker داده ایجاد کنیم، جهت اینکار به صورت زیر عمل می کنیم
               </p>
               <pre className='en'>
                   {`public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'address' => $this->faker->address,
    }`}
               </pre>
               <p className='fa'>
                  همان طور که ذکر شد کتابخانه faker انواع داده ها را ایجاد می کند، برای مشاهده چگونگی ایجاد داده ها به صفحه گیت هاب faker بروید، برای رفتن به این صفحه کافیست در گوگل faker github را جستجو کنید و از نتایج بدست آمده صفحه مربوط به <i className='enInPFa'> fzaninotto /
Faker </i> را باز کنید. در آنجا انواع دادها ها را مشاهده خواهید کرد. در ادامه همین درس نیز تعدادی از داده های پر کاربرد ذکر خواهد شد.
               </p>
           </div>
           </div> {/* end .chunkLesson */}

            <div className='chunkLesson' id='farsiDataFaker'>
            <div className='titleLesson fa' ># ایجاد داده های فارسی با faker </div>
            <div className='articleLesson'>
                <p className='fa'>
                    از دو روش می توان با کتابخانه faker داده فارسی ایجاد کرد.
                    <ol>
   <li>تغییر مقدار <i className='enInPFa'>{`'faker_locale' => 'en_US',`}</i> به <i className='enInPFa'>{`'faker_locale' => 'fa_IR',`}</i> در فایل <i className='enInPFa'>{`config > app.php`}</i></li>
                       <li>استفاده از کلاس <i className='enInPFa'>\Faker\Factory::create('fa_IR');</i> در هر جایی که می خواهیم دیتای فارسی ایجاد کنیم</li>
                    </ol>
   می توانیم در فایل <i className='enInPFa'>{`config > app.php`}</i> مقدار کلید <i className='enInPFa'> 'faker_locale'</i> را تغییر دهیم و مقدار <i className='enInPFa'>'fa_IR'</i> را جایگزین کنیم ، با این کار هنگام استفاده از داده های کتابخانه faker برخی از داده ها به صورت فارسی ایجاد می شوند. لازم است یادآوری شود که هرگاه یکی از فایلهای دایرکتوری config را ویرایش می کنیم باید دستور <i className='enInPFa'>{`php artisan config:cache`}</i> را اجرا کنیم. 
                </p>
                <p className='fa'>
                    و اما استفاده از روش دوم به این صورت است که در داخل متد <i className='enInPFa'>public function definition</i> یک خصوصیت ایجاد کرده و مقدار آن را <i className='enInPFa'>\Faker\Factory::create('fa_IR');</i> قرار دهید حال در این متد هر فیلدی که لازم است مقدار فارسی داشته باشد از این پراپرتی استفاده نمایید، باز هم متذکر می شود که کتابخانه faker تنها برخی از داده ها را به صورت فارسی ایجاد می کند، برای درک بهتر استفاده از روش دوم به قطعه کد زیر توجه کنید
                </p>
                <pre className='en'>
                    {`public function definition()
    {
    $fakerFarsi = \\Faker\\Factory::create('fa_IR'); 

        return [
            'title' => $fakerFarsi->title,
            'name' => $fakerFarsi->name,
            'body' => $this->faker->paragraph,
            'price' => $this->faker->numberBetween(5000, 60000),
            'image' => 'dfg12sfgzzz',
        ];
    }`}
                </pre>
                <p className='fa'>
                    در مثال بالا فیلدهای <i className='enInPFa'>title , name</i> به صورت فارسی مقدار دهی می شوند و مابقی فیلدها لاتین مقدار دهی می شوند.
                </p>
                <p className='fa'>
                    <i className='note'>نکته : با توجه به اینکه faker تنها برخی از داده ها را فارسی ایجاد می کند و همچنین گاهی لازم است همزمان داده های لاتین و فارسی ایجاد شود؛ به نطر می رسد استفاده از روش دوم بهتر است.</i>
                </p>

            </div>
            </div> {/* end .chunkLesson */}

            <div className='chunkLesson' id='relation'>
            <div className='titleLesson fa' ># نحوه ایجاد رابطه ها در فکتوری </div>
            <div className='articleLesson'>
                
            </div>
            </div> {/* end .chunkLesson */}

            <div className='chunkLesson' id='dataPerson'>
            <div className='titleLesson fa' ># ایجاد داده های شخص (person) </div>
            <div className='articleLesson'>
               <pre className='en'>
               {`title($gender = null|'male'|'female')     // 'Ms.'
titleMale                                 // 'Mr.'
titleFemale                               // 'Ms.'
suffix                                    // 'Jr.'
name($gender = null|'male'|'female')      // 'Dr. Zane Stroman'
firstName($gender = null|'male'|'female') // 'Maynard'
firstNameMale                             // 'Maynard'
firstNameFemale                           // 'Rachel'
lastName                                  // 'Zulauf'`}
               </pre>                
            </div>
            </div> {/* end .chunkLesson */}

            <div className='chunkLesson' id='dataLorem'>
            <div className='titleLesson fa' ># داده های کلمه، پاراگراف، متن </div>
            <div className='articleLesson'>
                <pre className='en'>
               {`word                                             // 'aut'
words($nb = 3, $asText = false)                  // array('porro', 'sed', 'magni')
sentence($nbWords = 6, $variableNbWords = true)  // 'Sit vitae voluptas sint non voluptates.'
sentences($nb = 3, $asText = false)              // array('Optio quos qui illo error.', 'Laborum vero a officia id corporis.', 'Saepe provident esse hic eligendi.')
paragraph($nbSentences = 3, $variableNbSentences = true) // 'Ut ab voluptas sed a nam. Sint autem inventore aut officia aut aut blanditiis. Ducimus eos odit amet et est ut eum.'
paragraphs($nb = 3, $asText = false)             // array('Quidem ut sunt et quidem est accusamus aut. Fuga est placeat rerum ut. Enim ex eveniet facere sunt.', 'Aut nam et eum architecto fugit repellendus illo. Qui ex esse veritatis.', 'Possimus omnis aut incidunt sunt. Asperiores incidunt iure sequi cum culpa rem. Rerum exercitationem est rem.')
text($maxNbChars = 200)                          // 'Fuga totam reiciendis qui architecto fugiat nemo. Consequatur recusandae qui cupiditate eos quod.'`}
                </pre>
            </div>
            </div> {/* end .chunkLesson */}

            <div className='chunkLesson' id='email'>
            <div className='titleLesson fa' ># ایجاد داده های ایمیل و اینترنت </div>
            <div className='articleLesson'>
                <pre className='en'>
                    {`email                   // 'tkshlerin@collins.com'
safeEmail               // 'king.alford@example.org'
freeEmail               // 'bradley72@gmail.com'
companyEmail            // 'russel.durward@mcdermott.org'
freeEmailDomain         // 'yahoo.com'
safeEmailDomain         // 'example.org'
userName                // 'wade55'
password                // 'k&|X+a45*2['
domainName              // 'wolffdeckow.net'
domainWord              // 'feeney'
tld                     // 'biz'
url                     // 'http://www.skilesdonnelly.biz/aut-accusantium-ut-architecto-sit-et.html'
slug                    // 'aut-repellat-commodi-vel-itaque-nihil-id-saepe-nostrum'
ipv4                    // '109.133.32.252'
localIpv4               // '10.242.58.8'
ipv6                    // '8e65:933d:22ee:a232:f1c1:2741:1f10:117c'
macAddress              // '43:85:B7:08:10:CA'`}
                </pre>
            </div>
            </div> {/* end .chunkLesson */}

            <div className='chunkLesson' id='password'>
            <div className='titleLesson fa' ># ایجاد پسورد </div>
            <div className='articleLesson'>
                
            </div>
            </div> {/* end .chunkLesson */}
         
            <div className='chunkLesson' id='color'>
            <div className='titleLesson fa' ># ایجاد رنگ ها </div>
            <div className='articleLesson'>
                <pre className='en'>
                    {`hexcolor               // '#fa3cc2'
rgbcolor               // '0,255,122'
rgbColorAsArray        // array(0,255,122)
rgbCssColor            // 'rgb(0,255,122)'
safeColorName          // 'fuchsia'
colorName              // 'Gainsbor'
hslColor               // '340,50,20'
hslColorAsArray        // array(340,50,20)`}
                </pre>
            </div>
            </div> {/* end .chunkLesson */}
         </div>
      </div>
   );
}
export default Factory;