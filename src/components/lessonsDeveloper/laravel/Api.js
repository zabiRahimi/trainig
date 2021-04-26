import { Link } from "react-router-dom";
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const Api = () => {
  useChengeDocumentTitle('laravel api');
  const { toChunkLesson } = useToChunkLesson();
  return (
    <div className="lessonSinglePage notShow" id="lessonSinglePage">
      <div className="typeSpellTranslateTitle fontEn">
        <h3>lesson laravel api</h3>
      </div>
      <div className="menuPage">
        <Link to='/' >home</Link>
        <Link to='/lessonsDeveloper' >go back</Link>
      </div>


      <div className="divTitleLesson">
        <div className="titleLesson"># titles lesson</div>


        <div className="listTitleLesson" id="listTitleLesson">
          <button className='buttonA fontEn'  onClick={() => toChunkLesson('start')}>ابزار مورد نیاز برای تست api</button>
          <button className='buttonA fontEn'  onClick={() => toChunkLesson('routePlace')}>محل قرار گیری  route api  در لاراول</button>
          <button className='buttonA fontEn'  onClick={() => toChunkLesson('defineTableModel')}>تعریف و ایجاد مدل ، کنترلر و جدول برای درک بهتر کار با api</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('defineRouteApi')}>تعریف یک روت  api و نحوه اجرای آن در postman</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('apiMiddleware')}>میدلورهای سیستمی که بر روت ها اعمال می شوند </button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('versionApi')}>ورژن بندی api</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('versionRouteApi')}>ورژن بندی route ها</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('versionRouteApi')}></button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('versionControllerApi')}>ورژن بندی controller ها</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('getDataApi')}>نحوه ارسال دیتا برای api در کنترلر</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('startResourceApi')}>ساخت یک resource api</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('useResourceApi')}>نحوه استفاده از resource  ها در controller</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('manageResourceApi')}>محدود کردن و مدیریت ارسال دیتای api توسط resource ها</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('manageResourceCollectionApi')}>محدودیت و بهینه سازی ارسال اطلاعات در resource collection ها</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('sendDataApiSinglePage')}>ارسال دیتا به غیر از اطلاعات مدل در ریسورس</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('paginateApi')}>صفحه بندی و paginate در api laravel</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('startException')}>مدیریت خطاهای api در لاراول</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('apiToken')}>آماده سازی برنامه برای دریافت api_token</button>

        </div>

      </div>

      <div className="bodyLesson" id="bodyLesson">

        <div className='chunkLesson' id="start">
          <div className="titleLesson fa " ># ابزار مورد نیاز برای تست api </div>
          <div className="articleLesson"><p className="fa">برای تست کردن  api هایی که نوشتیم نیاز به frontEnd داریم ولی برای راحتی کار  ابزارهایی وجود دارد که یکی از آنها ابزاری به نام postman هست که بر روی کروم نصب می شود و به راحتی می توان از آن استفاده کرد. جهت استفاده از این ابزار باید آن را بر روی کروم نصب کنیم .</p><p className="fa">برای نصب کافیست در کروم وارد این قسمت شویم App / web store و در صفحه باز شده در کادر جستجو کلمه postman را تایپ نموده و برنامه  tabbed postman  را نصب نماییم.</p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="routePlace">
          <div className="titleLesson fa" >#محل قرار گیری  route api  در لاراول </div>
          <div className="articleLesson">
            <p className="fa">روتهای  api  لاراول در این مسیر قرار می گیرند routes &gt;  api.php</p>
            <p className="fa"> این فایل در کلاس سرویس پروایدرها پشتیبانی و بررسی می شود . این کلاس در این مسیر قرار دارد ، app &gt; Providers &gt; RoteServideProvider.php در این فایل متدی به نام <i className="enS">public function map()</i> وجود دارد که دو متد دیگر به نامهای <i className="enS">mapApiRoutes()</i> و <i className="enS">mapWebRoutes()</i> را فراخوانی می کند که در همان کلاس تعریف شده اند. چنانچه به متد <i className="enS">mapApiRoutes()</i>  سری بزنیم خواهیم دید که روتی در آن به شکل زیر فراخوانی شده است ، </p>
            <pre className="en"><i className="file"> app/Providers/RoteServideProvider.php</i> protected function mapApiRoutes(){`{\n    Route::prefix('api')\n    ->middleware('api')\n    ->namespace($this-&gt;namespace)\n    ->group(base_path('routes/api.php')); \n}`}</pre>
            <p className="fa">همان طور که مشاهده می شود به همه روتهای api  یک  prefix  و یا پیشوندی به اسم  api اضافه شده است همچنین یک میدلوری به نام  api  بر آنها اعمال گردیده است .<br /> <i className="note">نکته مهم : بخاطر همین prefix  هنگامی که می خواهیم یک روت  api  را فراخوانی کنیم باید حتما پیشوند  api را نیز ذکر کنیم به عنوان مثال ؛ برای فراخوانی روت  api یی به اسم  courses  به این صورت عمل می کنیم <i className="enS">/api/courses</i></i> </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="defineTableModel">
          <div className="titleLesson fa" ># تعریف و ایجاد مدل ، کنترلر و جدول برای درک بهتر کار با api </div>
          <div className="articleLesson">
            <p className="fa">برای اینکه درک بهتری از نحوه کار با api داشته باشیم نیاز داریم که درهمین ابتدای کار بطور مثالی مدل ، کنترلر و جدولی ایجاد کنیم، همچنین برای کار با مبحث relationship یا همان ارتباط بین جداول در api جداول و مدلهای مرتبط را نیز ایجاد و معرفی می کنیم.
            </p>
            <br />
            <p className="fa">تعریف مدل اصلی :
            </p>
            <p className="fa">مدلی با نام <i className="enS">Course</i>  ایجاد می کنیم.
            </p>
            <hr /><br />
            <p className="fa">تعریف کنترلر اصلی :
            </p>
            <p className="fa">کنترلی به نام <i className="enS">CourseController</i> ایجاد می کنیم، این کنترلر شامل متدهای زیر است
            </p>
            <pre className="en"><i className="file">app/Http/Controllers/Api/v1/CourseController.php</i>use App\\Models\\Course;\n\n<i className="comment">//جهت برگرداندن چندین رکورد از جدول , collection</i>{`public function index()\n{\n...\n}\n\n`}<i className="comment">//جهت برگرداندن یک رکورد از جدول ، singlePage</i>{`public function single(Course $course)\n{\n...\n}`}
            </pre>
            <p className="fa"><i className="note">نکته : همان طور که در کدهای بالا مشاهده می کنید CourseController.php در این مسیر ایجاد شده <i className="enS">App/Http/Controllers/Api/v1</i> پوشه Api جهت متمایز کردن کنترلرهای  api از کنترلرهای web است، همچنین پوشه v1 برای متمایز کردن ورژنهای api است. در ادامه با مبحث ورژن بندی بیشتر آشنا خواهیم شد.</i>
            </p>
            <hr /><br />
            <p className="fa">تعریف جدول اصلی :
            </p>
            <p className="fa">برای این منظور جدولی به نام <i className="enS">courses</i> ایجاد می کنیم، این جدول شامل ستونهای زیر است
            </p>
            <pre className="en">{`1  id\n2  user_id\n3  title\n4  body\n5  price\n6  image\n7  created_at\n8  updated_at`}
            </pre>
            <hr /><br />
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="defineRouteApi">
          <div className="titleLesson fa" ># تعریف یک روت  api و نحوه اجرای آن در postman</div>
          <div className="articleLesson">
            <p className="fa">یک روت ساده را به شکل زیر در این فایل ایجاد میکنیم routes &gt; api.php
            </p>
            <pre className="en">{`Route::get('/courses', function(){\n\n   return 'get collection courses';\n\n});`}
            </pre>
            <p className="fa">در کروم  postman  را اجرا کرده و بسته به نوع روت  که در این مثال  get هست را از کادر مربوطه انتخاب می نماییم  و در قسمت تایپ آدرس ، آدرس کامل روت خود را می نویسیم به این صورت http://localhost:8000/api/courses  سپس دکمه send را می زنیم و جمله get collection courses را خواهیم دید
              <br />
              <i className="note">نکته : باید از قبل سرور لاراول را ران کرده باشیم.</i>
            </p>
          </div>
        </div> {/* end .chunkLesson */}
        <div className='chunkLesson' id="apiMiddleware">
          <div className="titleLesson fa" ># میدلورهای سیستمی که بر روت ها اعمال می شوند  </div>
          <div className="articleLesson">
            <p className="fa" >اعمال میدلورهای که لاراول بطور ساختاری بر روی روت ها اعمال می کند در فایل app/Http/Kernel.php تعریف شده اند . در این فایل آرایه ای به شکل زیر وجود دارد
            </p>
            <pre className="en">{` protected $middlewareGroups = [\n    'web' => [\n                    \\App\\Http\\Middleware\\EncryptCookies::class,\n                    \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n                    \\Illuminate\\Session\\Middleware\\StartSession::class,\n                    // \\Illuminate\\Session\\Middleware\\AuthenticateSession::class,\n                    \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,\n                    \\App\\Http\\Middleware\\VerifyCsrfToken::class,\n                     \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n    ],\n\n   'api' => [\n                    'throttle:api',\n                    \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n    ],\n];`}
            </pre>
            <p className="fa">داخل این آرایه دو عضو وجود دارد ، عضو اول که web  نام دارد در برگیرنده میدلورهایی است که بر روتهای وب اعمال می شوند و عضو دوم  api  نام دارد که میدلورهایی بر روت های  api  اعمال می کند .
            </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="versionApi">
          <div className="titleLesson fa" ># ورژن بندی api </div>
          <div className="articleLesson">
            <p className="fa">یکی از مهمترین کارها در  api  نویسی ورژن بندی api  است . برای این کار لازم هست هم route  ها و هم کنترلها را ورژن بندی کنیم. درادامه نحوه ورژن بندی روت ها و کنترلها را بررسی می کنیم.
          </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="versionRouteApi">
          <div className="titleLesson fa" ># ورژن بندی route ها </div>
          <div className="articleLesson">
            <p className="fa">برای ورژن بندی روت ها لازم هست برای هر ورژن و هر نسخه از اپلیکیشن یک روت گروپ ایجاد کنیم و با قرار دادن پیشوند یا همان prefix  شماره هر نسخه را مشخص نماییم . به صورت زیر
          </p>
            <pre className="en">{`Route::prefix('v1')->namespace('App\\Http\\Controllers\\Api\\v1')->group(function(){\n\n`}
              <i className="comment">   //get collectionPage data</i>
              {` Route::get('/courses','CourseController@index');\n\n`}
              <i className="comment">   //get singlePage data</i>
              {` Route::get('/courses/{course}','CourseController@single');\n});`}
            </pre>
            <p className="fa"><i className="note">نکته 1 : نسخه ورژن مثال بالا را به طور فرضی v1 قرار دادیم . لازم به ذکر است که هنگام فراخوانی روت در فرانت اند برنامه باید ورژن برنامه را نیز ذکر کنیم . مانند زیر <i className="enS">api/v1/courses</i> دقت داشته باشید  برای اینکه  ورژنی را به روت گروپ اختصاص دهیم از متد  <i className="enS">prefix()</i> استفاده می کنیم.</i><i className="note">نکته 2 : از لاراول هشت به بعد هنگام فراخوانی کنترلر در روت ها باید آدرس کامل کنترلر را وارد کنیم ، برای راحتی کار در روت گروپ از متد namespace استفاده میکنیم و مسیر کامل کنترلها رو داخلش می نویسیم .</i><i className="note">نکته 3 : روتی که در روت گروپ اضافه کردیم فقط برای مثال هست .</i>
            </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="versionControllerApi">
          <div className="titleLesson fa" ># ورژن بندی controller ها </div>
          <div className="articleLesson">
          <p className="fa">جهت ورژن بندی کنترلرها لازم است برای هر ورژن یک پوشه بسازیم و بهتر است برای خوانایی بهتر برنامه و استفاده راحت تر همان نامی را برای پوشه انتخاب کنیم که به ورژن روت ها دادیم در مثال ورژن بندی روت ها از prefix یا پیشوند  v1 استفاده کردیم برای پوشه کنترلها نیز از همین نام استفاده می کنیم و سپس کنترلرها در این پوشه می سازیم. 
          </p><i className="note">نکته : بهتر است برای متمایز شدن کنترلرهای api با کنترلرهای وب، برای کنترلرهای api از یک پوشه بنام Api استفاده کنیم و پوشه ورژن بندی  api را در این پوشه قرار دهیم . بطور مثال
          <i className="enS">App\\Http\\Controllers\\Api\\v1\\MyController.php</i></i>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="getDataApi">

          <div className="titleLesson fa" ># نحوه ارسال دیتا برای api در کنترلر </div>
          <div className="articleLesson">
          <p className="fa">در api  اطلاعات باید به صورت json ارسال شود . ارسال دیتا در کنترلر به صورت معمول و برای وب در قالب view صورت می گیرد اما جهت استفاده در api باید به صورت json  انجام شود . به همین منظور دیتا با متدی به نام <i className="enS">response()</i>ارسال می شود و در قالب json . به مثال زیر دقت کنید .</p>
          <pre className="en">{`public function index(){\n\n   $data=Corse::all();\n   return response()->json($data);\n\n}`}
          </pre>
          <p className="fa"><i className="note">نکته 1 : این مثال بسیار ساده هست ، و موارد لازم دیگر مانند status که بسیار حائز اهمیت هست لحاظ نشده است.</i><i className="note">نکته 2 : خوشبختانه لاراول یک ویژگی برای کار با api ها ایجاد کرده به نام api resource که کارایی و راحتی کار را افزایش داده است . در ادامه به این ویژگی می پردازیم.</i></p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="startResourceApi">
          <div className="titleLesson fa" ># ساخت یک resource api </div>
          <div className="articleLesson">
          <p className="fa">جهت ساخت یک  resource api از دستور آرتیزان به صورت زیر استفاده می کنیم .
          </p>
          <pre className="en">php artisan make:resource v1\\Course\nphp artisan make:resource v1\\CourseCollection
          </pre>
          <p className="fa"><i className="note">نکته 1 : هنگام ساخت resource  ها باید مانند روتها و کنترلرها از ورژن بندی استفاده کنیم . بهتر است نام ورژن روت ها،کنترلرها و ریسورس ها با هم برابر باشند. ورژن بندی در ریسورس ها مانند کنترلرها هست، که برای هر ورژن یک پوشه می سازیم و ریسورس های هر ورژن را درون پوشه مربوطه قرار می دهیم ، مانند دستور بالا که یک پوشه به نام v1 ساختیم و ریسورس را درون آن قرار دادیم.</i><i className="note">نکته 2 : Course مورد استفاده در بالا فقط برای مثال هست که در واقع نام  ریسورس ما است که می تواند هر نامی باشد ولی بهتر است نام ریسورس هم نام مدل مربوطه باشد.</i><i className="note">نکته 3 : این نکته بسیار مهم است ، همان طور که مشاهده می کنید در مثال بالا از دوتا دستور استفاده شده ، در دستور دوم از کلمه کلیدی Collection به عنوان پسوند نام ریسورس استفاده شده است ، در واقع به ازای یک مدل دو تا ریسورس ساختیم ، ریسورس اول برای کار با singlePage دادهای مدل هست ، و ریسورس دوم که از پسوندش ( collection )  مشخص است، برای کار با مجموعه ای از داده هاست، هنگامی که از پسوند Collection استفاده می کنیم لاراول برای ما ریسورسی با کلاس کار برای مجموعه ها می سازد .</i><i className="note">نکته 4 : با اجرای دستور بالا فایلی در این مسیر ساخته می شود <i className="enS">app/Http/Resources/v1/Course.php</i> همچنین برای دستور دوم <i className="enS">app/Http/Resources/v1/CourseCollection.php</i></i>
          </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="useResourceApi">
          <div className="titleLesson fa" ># نحوه استفاده از resource  ها در controller </div>
          <div className="articleLesson">
            <p className="fa">برای استفاده از ریسورس در کنترلر ابتدا باید با دستور use کلاس ریسورس را در کنترلر مورد استفاده قرار دهیم ، لازم به ذکر است که namespace  ریسورس را باید به صورت کامل به دستور  use اضافه کنیم . نکته ای که باید دقت شود چون به طور معمول نام مدل و نام ریسورس با هم برابر هستند برای اینکه در کنترلر تداخلی ایجاد نشود ، برای ریسورس با استفاده از دستور as یک نام جدید انتخاب می کنیم. البته برای ریسورس کالکشن چنین مشکلی نداریم. به مثال زیر دقت کنید
            </p>
            <pre className="en">
               <i className="comment">//مدل </i>
               {`use App\\Models\\Course;\n\n `}
               <i className="comment">// singlePage ریسورسِ </i>
               {`use App\\Http\\Resources\\v1\\Course as CourseSinglePage;\n\n `}
               <i className="comment">//ریسورس کالکشن </i>
               {`use App\\Http\\Resources\\v1\\CourseCollection;`}
               </pre>
               <p className="fa">
                 <i className="note">نکته : نام CourseSinglePage  اختیاری است، به هر حال بهتر است نام بامعنی انتخاب شود. </i>
                 </p>
                 <p className="fa">پس از use کردن ریسورس به کلاس کنترلر حال باید از این ریسورس در متدها استفاده کنیم، هنگامی که از ریسورس ها استفاده می کنیم دیگر نیازی نیست که از دستور <i className="enS">response()</i> استفاده کنیم، برای ارسال داده ها توسط ریسورس به صورت زیر عمل می کنیم
                 </p>
                 <pre className="en">  {`public function single()\n{\n\n   $course=Course::find(1);\n   return new CourseSinglePage($course)\n\n}`}
                 </pre>
                 <p className="fa">چنانچه بخواهیم توسط کلاس CourseSinglePage مجموعه و کالکشنی از داده های رکوردها را ارسال کنیم باید از متد collection این کلاس استفاده کنیم، به صورت زیر
                 </p>
                 <pre className="en">{`public function index(){\n\n    $data=Course::all();\n    return CourseSinglePage::collection($data);\n}`}
                 </pre>
                 <p className="fa">البته لاراول کلاس resource collection را برای همین منظور معرفی کرده است که دیگر نیازی نست از resourse singlePage برای استفاده کالکشن ها استفاده کرد.
                 </p>
                 <p className="fa">برای راحتی کار با singlePage می توانیم به صورت زیر در متد کنترلر و روت عمل کنیم
                 </p>
                 <pre className="en">{`public function single(Course $course)\n{\n\n   return new CourseSinglePage($course)\n\n}\n\n`}
                 <i className="comment">//در روت</i>
                 {`Route::get('/courses/{course}','CourseController@single');`}
                 </pre>
                 <p className="fa"><i className="note">نکته : چنانچه بخواهیم از روش بالا برای singlePage استفاده کنیم باید آرگومان متد کنترلر با کلمه ای که در قسمت دوم روت می نویسم کاملا یکسان باشند ، مانند مثال بالا که ارگومان <i className="enS">$course</i> کنترلر با <i className="enS">{`{course}`}</i> مربروط به روت با هم برابر هستند.</i>
                 </p>
                 <p className="fa"><i className="note">نکته بسیار مهم : هنگام استفاده از ریسورس singlePage حتما باید دیتاهای یک رکورد از مدل را به آن پاس دهیم (البته موقعی که در کلاس  singlePage ریسورس می خواهیم از متد collection استفاده کنیم باید مجموعه ای از رکوردها را به آن پاس دهیم نه یک رکورد را ! در مثالهای بالا شاهد این موضوع هستیم. ) ، همچنین هنگامی که از ریسورس Collection  استفاده می کنیم باید اطلاعات و دیتاهای مجموعه ای از رکوردهای مدل را به آن پاس دهیم، در غیر اینصورت خطا دریافت خواهیم کرد. در مثال بالا نحوه استفاده از ریسورس singlePage را قرار دادیم و در مثال زیر نحوه استفاده از ریسورس collention را قرار می دهیم</i>
                 </p>
                 <pre className="en">{`public function index()\n{\n\n   $courses=Course::all();\n   return new CourseCollection($courses);\n\n}`}
                 </pre>
                 <p className="fa">در ادامه استفاده کاربردی تر از resourse ها را خواهیم آموخت .
                 </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="manageResourceApi">
          <div className="titleLesson fa" ># محدود کردن و مدیریت ارسال دیتای api توسط resource ها </div>
          <div className="articleLesson">
          <p className="fa">یکی از وظایف مهم resource ها مدیریت، بهینه سازی و محدود کردن دیتای ارسالی توسط api  است. این مهم در داخل کلاس ریسورس انجام می شود بدون اینکه در مدل تغییر و یا محدودیتی اعمال کنیم، با این ویژگی ریسورس ها اختلالی در کار مدل ها هنگام استفاده برای وب ایجاد نمی شود و می توانیم به راحتی و با خیال آسوده دیتاها را برای استفاده api آماده کنیم . همچنین می توانیم دیتاهای دریافتی از مدل را تغییر دهیم یا اینکه دیتاهای دیگری به غیر از دیتاهای مدل را ارسال کنیم همه این کارها را با متدهایی که لاراول در ریسورس در نظر گرفته انجام می دهیم.
          </p>
          <p className="fa">حال چنانچه قصد داشته باشیم دیتاهای سه ستون <i className="enS">id , title , body </i> یک رکورد از جدول courses را در صفحه نشان دهیم، باید متد <i className="enS">toArray()</i> که در کلاس Course ریسورس می باشد را به صورت زیر ویرایش کنیم ، لازم به ذکر است این کلاس ریسورس مربوط به کار با داده های singlePage  مدل است.
          </p>
          <pre className="en"><i className="file">{`app/Http/Resources/v1/Course.php</i>public function toArray($request)\n{ `} </i> <i className="comment">   //return parent::toArray($request);</i>  {` return [\n     'id'=>$this->id,\n     'title'=> $this->title,\n     'body'=>$this->body,\n   ];\n}`}
          </pre>
          <p className="fa">همچنان که قابل مشاهده است این متد یک آرایه را بر می گرداند ، کلیدهای این آرایه می توانند اختیاری نام گذاری شوند باید دقت داشت که در سمت فرانت اند اپلیکیشن باید از همین نام کلیدها برای دریافت اطلاعات استفاده کرد! مقادیر کلیدهای آرایه در واقع همان ستونهای جدول می باشند که با متغییر <i className="enS">$this</i> مورد اشاره و استفاده قرار می گیرند، ما می توانیم در همین آرایه مقادیر را بنا به نیاز تغییر دهیم و نکته ای دیگر اینکه می توانیم در همین آرایه مقادیری به غیر از مقادیر جدول را نیز ارسال کنیم البته لاراول یک خاصیت یا property برای این کار نیز در نظر گرفته که در ادامه بحث با آن آشنا خواهیم شد.
          </p>
          <p className="fa"><i className="note">چنانچه در کلاس resource collection مربوط به این مدل تغییری ایجاد نکنیم هنگام استفاده از resource collection مجموعه ای از اطلاعات را خواهیم داشت که فقط شامل اطلاعات همین سه ستون جدول می باشد .</i>
          </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="manageResourceCollectionApi">
          <div className="titleLesson fa" ># محدویت و بهینه سازی ارسال اطلاعات در resource collection ها </div>
          <div className="articleLesson">
            <p className="fa">در بالا نحوه محدود کردن اطلاعات برای singlePage مدل را توضیح دادیم و همچنین متذکر شدیم که اگر در متد <i className="enS">toArray()</i> مربوط به CourseCollection هیچ تغییری ایجاد نکنیم در api  کالکشن مجموعه ای از اطلاعاتی که در کلاس Course محدود کردیم را دریافت خواهیم کرد.
            </p>
            <p className="fa">چنانچه بخواهیم در CourseCollection نیز محدودیت های منحصر بفردی ایجاد کنیم، باید متد <i className="enS">toArray()</i> در کلاس CourseCollection را ویرایش کنیم ، همان جدول courses که در مثالهای قبل ذکر کردیم را در نظر بگیرید ، می خواهیم چهار ستون <i className="enS">id , price , image , created_at</i> را در کالکشن نمایش دهیم، برای اینکار به صورت زیر عمل می کنیم
            </p>
            <pre className="en"><i className="file">app/Http/Resources/v1/CourseCollection.php</i>{`public function toArray($request)\n{`}   <i className="comment">   //return parent::toArray($request);</i>    {`return [\n              'data'=>$this->collection->map(function ($item){\n                  return[\n                            'id'=>$item->id,\n                            'price'=>$item->price,\n                            'image'=>$item->image,\n                            'created_at'=>$item->created_at,\n                        ];\n               }),\n           ];\n}`}
            </pre>
            <p className="fa"><i className="note">نکته 1 : همچنان که در کد بالا مشاهده می شود محدود کردن و شخصی سازی اطلاعات در CourseCollection قدری با شخصی سازی در کلاس Course متفاوت هست، در کلاس Course اطلاعات بطور مستقیم در آرایه متد toArray وارد می شدند، اما در کلاس CourseCollection اطلاعات از یک collection گرفته می شوند، این کالکشن یا مجموعه همان مجموعه رکوردهای جدول courses هستند، حال می توان با متد map که مربوط به کار با کلاکشن ها هست، هر یک از رکوردها را مورد پیمایش قرار داد و اطلاعات ستونهای مورد نیاز را در قالب یک آرایه return کرد.</i></p>
            <p className="fa"><i className="note">نکته 2 : چنانچه در کلاس CourseCollection اطلاعات را مانند متد toArray کلاس Course وارد کنیم، برنامه به ما پیغام خطا خواهد داد، حتما لازم است که برای دستیابی به اطلاعات جدول در کلاس CourseCollection از دستور <i className="enS">{`$this->collection`}</i> استفاده کنیم.</i>
            </p>
            <p className="fa"><i className="note">نکته مهم : همانطور که در کد بالا می بینیم در متد toArray ابتدا یکه آرایه return شده است در داخل این آریه یک اندیس به اسم data وجود دارد که مقدار این اندیس collection می باشد که محتویاتش با متد map مورد پیمایش قرار گرفته، نکته ای که وجود دارد این است که ما می توانیم به روشهای مختلفی این collecton را return کنیم، به طور مثال می توانیم نام اندیس آرایه اول را تغییر دهیم، یا اینکه اصلا بدون اندیس collection را return کنیم، یا اینکه آرایه اول را کامل حذف کنیم و یا کارهای دیگری را انجام دهیم اما چیزی که حائز اهمیت هست این است که در طول برنامه و در جای جای برنامه از یک استاندارد برای ارسال دیتا به صورت api استفاده کنیم و تنها از یک روش پیروی کنیم.</i>
            </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="sendDataApiSinglePage">
          <div className="titleLesson fa" ># ارسال دیتا به غیر از اطلاعات مدل در ریسورس </div>
          <div className="articleLesson">
            <p className="fa">چنانچه در کلاس Course مربوط به ریسورس singlePage مدل بخواهیم اطلاعاتی به غیر از اطلاعات دریافتی از مدل را ارسال کنیم می توانیم به سه روش این کار را انجام دهیم ، روش اول در متد <i className="enS">toArray()</i> همراه با دیگر اطلاعات، اطلاعات دیگر را نیز بفرستیم، روش دوم از خاصیت و متغییر <i className="enS">public $with = [ ] ;</i>این اطلاعات را ذکر کنیم. روش سوم استفاده از متد <i className="enS">{`publicn function with( $request ){return [...];}`}</i> همچنین می توانیم تلفیقی از روش اول و دوم و یا روش اول و سوم داشته باشیم. به مثالهای زیر توجه کنید.(فرضا اطلاعات سه ستون از جدول courses را می خواهیم ارسال کنیم همراه با اطلاعات اضافی)
            </p>
            <pre className="en"><i className="comment">      //روش اول</i><i className="file">app/Http/Resources/v1/Course.php</i>{`public function toArray($request)\n{ `}  <i className="comment">   //return parent::toArray($request);</i>  {` return [\n     'id'=>$this->id,\n     'title'=> $this->title,\n     'body'=>$this->body,\n<i className="comment">      //اطلاعات اضافی</i>     'author'=> 'zabihalla rahimi',\n     'date'=> '1399/10/16',\n   ];\n}`}
            </pre>
            <br/>
            <pre className="en"><i className="comment">      //روش دوم که روش بهینه تر و بهتری است</i><i className="file">{`app/Http/Resources/v1/Course.php</i>public function toArray($request)\n{ `}  </i><i className="comment">   //return parent::toArray($request);</i>   {`return [\n     'id'=>$this->id,\n     'title'=> $this->title,\n     'body'=>$this->body,\n   ];\n}`}<i className="comment">//ارسال اطلاعات اضافی
            </i>{`public $with = [\n     'author'=> 'zabihalla rahimi',\n     'date'=> '1399/10/16',\n];`}
            </pre>
            <br/>
            <pre className="en"><i className="comment">      //روش سوم استفاده از متد ، چنانچه بخواهیم از اطلاعات رکوئست استفاده کنیم باید از این روش استفاده کنیم</i><i className="file">app/Http/Resources/v1/Course.php</i>{`public function toArray($request)\n{ `}  <i className="comment">   //return parent::toArray($request);</i>   {`return [\n     'id'=>$this->id,\n     'title'=> $this->title,\n     'body'=>$this->body,\n   ];\n}`}<i className="comment">//ارسال اطلاعات اضافی
            </i>
           {` public function with($request){\n     return [\n         'author'=> 'zabihalla rahimi',\n         'date'=> '1399/10/16',\n     ];\n}`}
            </pre>
            <p className="fa"><i className="note">نکته بسیار مهم : هنگام استفاده از متد <i className="enS">public functuin with()</i> حتما باید آرگومان <i className="enS">$request</i> را به متد اضافه کنیم در غیر این صورت برنامه پیغام خطا می دهد.</i>
            </p>
            <p className="fa"><i className="note">نکته مهم : هیچگاه نباید از متغیر <i className="enS">public with = [ ] ;</i> و متد <i className="enS">{`public function with ( $request ) { }`} </i> به طور همزمان استفاده کرد، چنانچه به طور همزمان از این دو روش استفاده کنیم فقط اطلاعات متد ارسال می شود.</i>
            </p>
            <br/>
            <pre className="en"><i className="comment">      //روش چهارم که از روش اول و دوم همزمان استفاده شده است . البته این روش توصیه نمی شود.</i>
            <i className="file">app/Http/Resources/v1/Course.php</i>
            {`public function toArray($request)\n{`}   <i className="comment">   //return parent::toArray($request);</i>
               {`return [\n     'id'=>$this->id,\n     'title'=> $this->title,\n     'body'=>$this->body,\n`}
               <i className="comment">      //اطلاعات اضافی</i>     {`'author'=> 'zabihalla rahimi',   ];\n}`}<i className="comment">//ارسال اطلاعات اضافی</i>{`public $with=[\n    'date'=> '1399/10/16',\n];`}
            </pre>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="paginateApi">
          <div className="titleLesson fa" ># صفحه بندی و paginate در api laravel </div>
          <div className="articleLesson">
          <p className="fa">لاراول کار با صفحه بندی کردن اطلاعات ارسالی توسط api را بسیار راحت کرده است. فقط کافی است در کنترلر بجای استفاده از متد <i className="enS">Course::all()</i> از متد <i className="enS">Course::paginate(n);</i>استفاده کنیم، بجای حرف n تعداد رکوردهای که می خواهیم در صفحه نمایش داده شود را می نویسیم، مثلا اگر قرار است در هر صفحه اطلاعات 5 رکورد از جدول را نشان دهیم به صورت زیر عمل می کنیم.
          </p>
          <pre className="en"><i className="file">app/Http/Controllers/Api/v1/CourseController.php</i>{`public function index()\n     {\n        $courses=Course::paginate(5);\n        return new CourseCollection($courses);\n     }`}
          </pre>
          <p className="fa"><i className="note">نکته مهم و جالب : با استفاده از روش صفحه بندی بالا، لاراول به طور خودکار اطلاعات مورد نیاز برای صفحه بندی را در اختیار ما می گذارد، از قبیل تعداد صفحات ، لینک هر صفحه، لینک صفحه فعلی، مشخص کردن صفحه فعلی، لینک صفحه قبلی، لینک صفحه بعدی و اطلاعات دیگر.</i>
          </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="startException">
          <div className="titleLesson fa" ># مدیریت خطاهای api در لاراول</div>
          <div className="articleLesson">
            <p className='fa'>
                <ul>
                  <li>شخصی سازی متد unauthenticated، عدم احراز هویت</li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className='titrLesson'>
                   <h3 className='h3TitrLesson'>شخصی سازی متد unauthenticated</h3>
                </div>
  این خطا هنگامی ایجاد می شود که کاربر هنوز احراز هویت نکرده و درخواستی فرستاده که نیاز به احراز هویت کردن باشد <br/> هنگامی که این خطا رخ می دهد متد unauthenticatedفراخوانی می شود، حال برای شخصی سازی این خطا کافی است این متد را ویرایش کنیم در لاراول 8 به صورت زیر عمل می کنیم <br/> ابتدا به فایل <i className='enInPFa'>{`Illuminate > Foundation > Exceptions > Handler.php`}</i> رفته و متد <i className='enInPFa'>unauthenticated()</i> را کپی کنید، سپس این متد را در فایل <i className='enInPFa'>{`app > Exceptions > Handler.php`}</i> پیس کنید، اکنون این متد را به صورت زیر ویرایش کنید
            </p>
            <pre className='en'>
                {`protected function unauthenticated($request, AuthenticationException $exception)
    {
        return $request->expectsJson()
                    ? response()->json(['data'=>[
                        'message' => 'لطفا ابتدا وارد حساب خود شوید.',
                        'status'=>'error'
                        ]], 401)
                    : redirect()->guest($exception->redirectTo() ?? route('login'));
    }`}
            </pre>
          </div>
        </div> {/* end .chunkLesson */}
        
        <div className='chunkLesson' id='apiToken'>
        <div className='titleLesson fa' ># آماده سازی برنامه برای دریافت api_token  </div>
        <div className='articleLesson'>
          <p className='fa'>
              برای احراز هویت اپلیکیشن موبایل و  همچنین اپلیکیشن های react  و vue از روش jwt استفاده می شود، در این روش لازم است که برنامه سمت سرور یک مقدار یکتایی که به آن توکن گفته می شود ارسال کند، در لاراول برای ایجاد توکن و نحوه ارسال آن می بایست مراحل زیر را انجام دهیم
              <ul>
                <li>ایجاد فیلدی در مایگرشن user ها به نام api_token</li>
                <li>اضافه کردن فیلد api_token به خصوصیت <i className='enInPFa'>$fillable</i> و <i className='enInPFa'>$hidden</i> در مدل User.php </li>
                <li>اضافه کردن فیلد api_token در متد register در userController مربوط به api</li>
                <li>اضافه کردن فیلد api_token به UserFactory</li>
                <li>نحوه update کردن api_token چنانچه بخواهیم کاربر فقط بتواند با یک دیوایس لاگین کند</li>
              </ul> 
              <div className='titrLesson'>
                 <h3 className='h3TitrLesson'>ایجاد فیلدی در مایگرشن user ها به نام api_token</h3>
              </div>
              <p className='fa'>
                  به مایگریشن user ها فیلد api_token را به صورت زیر اضافه کنید
              </p>
              <pre className='en'>
              {`$table->string('api_token')->unique();`}
              </pre>

              <div className='titrLesson'>
                 <h3 className='h3TitrLesson'>اضافه کردن فیلد api_token به خصوصیت <i className='enInPFa'>$fillable</i> و <i className='enInPFa'>$hidden</i> در مدل User.php </h3>
              </div>
              <p className='fa'>
                  لازم است که در مدل User در آرایه های <i className='enInPFa'>$fillable</i> و <i className='enInPFa'>$hidden</i> مقدار api_token را اضافه کنید
              </p>

              <div className='titrLesson'>
                 <h3 className='h3TitrLesson'>اضافه کردن فیلد api_token در متد register در userController مربوط به api</h3>
              </div>
              <p className='fa'>
                  لازم است در متد register کنترلر userController مربوط به api فیلد api_token را به صورت ریز اضافه کنیم
              </p>
              <pre className='en'>
                  {`public function register(Request $request)
    {
        $val= $this->validate($request ,[
            'name' => 'required|string|max:60',
            'email'=> 'required|string|email|max:255|unique:users',
            'password'=> 'required|string|min:6',
        ]);
        $user=User::create([
            'name' => $val['name'],
            'email' => $val['email'],
            'password' => bcrypt($val['password']),
            'api_token' =>  Str::random(100),
        ]);
        return new UserResource($user);
    }`}
              </pre>

              <div className='titrLesson'>
                 <h3 className='h3TitrLesson'>اضافه کردن فیلد api_token به UserFactory</h3>
              </div>
              <p className='fa'>
                  چنانچه برای داده ریزی از ModelFactory استفاده می کنید لازم است که فیلد api_token را در UserFactory به صورت زیر اضافه کنید
              </p>
              <pre className='en'>
                  {`public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'api_token' => Str::random(100),
            'remember_token' => Str::random(10),
        ];
    }`}
              </pre>

              <div className='titrLesson'>
                 <h3 className='h3TitrLesson'>نحوه update کردن api_token هنگام لاگین کردن</h3>
              </div>
              <p className='fa'>
                  چنانچه بخواهیم که کاربر فقط با یک دیوایس بتواند لاگین کند لازم هست که مقدار api_token را update کنیم برای این منظور کد زیر را به متد لاگین اضافه می کنیم
              </p>
              <pre className='en'>
                {`use App\\Models\\User;
                use Illuminate\\Support\\Str;`
                }
                  {`User::find(auth()->user()->id)->update(
            [
                'api_token'=> Str::random(100)
            ]);`}
              </pre>
              

              
          </p>
        </div>
        </div> {/* end .chunkLesson */}
        <div className='chunkLesson' id='uploadImage'>
        <div className='titleLesson fa' ># آپلود کردن فایل و عکس با api </div>
        <div className='articleLesson'>
            
        </div>
        </div> {/* end .chunkLesson */}
      </div> {/* /// */}

    </div>//end document .lessonSinglePage
  );
}
export default Api;