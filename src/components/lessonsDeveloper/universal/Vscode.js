import { Link } from "react-router-dom";
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const Vscode = () => {
  useChengeDocumentTitle('training vscode');
  const { toChunkLesson } = useToChunkLesson();
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
          <button className='buttonA fontEn' onClick={() => toChunkLesson('install')}>install vscode</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('changeFont')}>تغییر اندازه فونت در vscode</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('showEmmetJavascript')}>نحوه فعال کردن emmet  برای جاوااسکریپت</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('changeTheme')}>تغییر تم </button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('keyboardShortcuts')}>کیبورد شورت کاتهای vscode</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('extensionsPhp')}>معرفی extension برای php</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('phpDebug')}>php debug in vscode</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('extensionCommentPhp')}>معرفی ectension کامنت گذاری و مستندات برای php</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('extensionArtisanLaravel')}>معرفی ectension برای کار با دستورات آرتیزان لاراول</button>
          <button className='buttonA fontEn' onClick={() => toChunkLesson('goToView')}>معرفی ectension برای رفتن سریع به view در لاراول</button>
          <button className='buttonA fontEn' onClick={()=>toChunkLesson('createSnippet')}>ساختن snippet شخصی</button>
        </div>

      </div>

      <div className="bodyLesson" id="bodyLesson">

        <div className='chunkLesson' id="install">
          <div className="titleLesson fa " ># install vscode </div>
          <div className="articleLesson">
            <p className="fa">
              جهت دانلود آخرین نسخه vscode  به سایت <a href='https://code.visualstudio.com/'>visualstudio</a> رفته و نسخه مناسب با سیستم عامل خود را دانلود کرده و نصب کنید.
          </p>
          </div>
        </div>

        <div className='chunkLesson' id="changeFont">
          <div className="titleLesson fa" ># تغییر انداره فونت در vscode </div>
          <div className="articleLesson">
            <p className="fa">
              جهت تغییر اندازه فونت به دو صورت می توانیم عمل کنیم، به صورت موقت و بصورت دائم و پیش فرض
          </p>
            <p className="fa">
              جهت اندازه فونت به صورت موقت و سریع به این صورت عمل می کنیم، برای بزرگ کردن فونت ها کافی است
            کلید تر کیبی <i className="enInPFa">ctrl + '+'</i> و برای کوچک کردن فونت کلید ترکیبی
            <i className="enInPFa">ctrl + '-'</i> را به کار می بریم.
          </p>
            <p className="fa">
              جهت تغییر اندازه فونت به صورت دائم به قسمت settings که در این مسیر است  <i className="enInPFa">{`file > Preferences > Settings`}</i> می رویم، جهت رفتن سریع
            به این صفحه می توانیم از کلید ترکیبی <i className="enInPFa">ctrl + ','</i> استفاده کنیم. در فضای
            settings سه زبانه وجود دارد که امکان تغییرات در هر زبانه است. در زبانه user تغییرات  فقط برای کاربر
            در حال استفاده از ویرایشگر اعمال می شود. در زبانه folder می توانیم برای هر پروژه تغییرات
            مخصوص به خودش را اعمال کنیم، چنانچه برای یک پروژه ای تغییرات جداگانه در نظر بگیریم در
            پوشه پروژه یک فولدر به اسم .vscode ایجاد می شود که حاوی یک فایل به نام settings.json است که تغییرات
            مربوط به پروژه در قالب json ذخیره می گردد. نکته مهمی که باید در نظر گرفته شود این است که
            برای پروژه ای که تغییرات جداگانه در نظر گرفته شده اعمال تغییرات در زبانه های user و
            workspace کار ساز نیست. حال برای تغییر فونت در لیست زیر زبانه ها گزینه Text Editor و سپس از لیست باز شده گزینه font
            را انتخاب نمایید و در سمت راست در کادر مربوط به font size اندازه فونت مورد نظر خود را وارد کنید.
          </p>
          </div>
        </div> {/* end .chunkLesson */}
       
        <div className='chunkLesson' id='showEmmetJavascript'>
        <div className='titleLesson fa' ># فعال کردن emmet برای جاوااسکریپت </div>
        <div className='articleLesson'> 
          <p className='fa'>
              برای فعال کردن emmet در جاوااسکریپت لازم است تغییراتی در فایل workspace.json ایجاد کنید . جهت باز کردن این فایل مراحل زیر را انجام دهید
              <br/>
              ابتدا به این مسیر بروید <i className='enInPFa'>{`File > preferences > settings`}</i> سپس در پنجره باز شده زبانه workspace را انتخاب نمایید، در لیست باز شده گزینه Extensions و در ادامه گزینه Emmet را انتخاب نمایید، حال در صفحه باز شده بر روی لینک Edit in settings.json کلیک کنید، با این کار فایل workspace.json باز می شود. حال در قسمت settings این قطعه کد را اضافه کنید 
          </p>
          <pre className='en'>
         { `"emmet.includeLanguages": {
			        "javascript": "javascriptreact"
		    }`}
          </pre>
        </div>
        </div> {/* end .chunkLesson */}
        <div className='chunkLesson' id="changeTheme">
          <div className="titleLesson fa" ># تغییر تم </div>
          <div className="articleLesson">
            <p className="fa">
              جهت تغییر تم باید به این مسیر برویم <i className="enInPFa">{`file > Preferences > Color Theme`}</i>  و یا اینکه
            از کلید ترکیبی <i className="enInPFa">ctrl k t</i> استفاده کنیم، سپس از تم های موجود یکی را انتخاب نماییم.
            </p>
            <p className="fa">
              چند تم به صورت پیش فرض موجود است ولی می توانیم تم ها زیادی را دانلود کرده و استفاده نماییم، جهت
              دیدن تم ها و دانلود آنها باید به فضای Extensions وارد شویم، برای رفتن به این صفحه می توانیم از آیکون آن
              استفاده کنیم، در سمت چپ ویرایشگر چندین آیکون به صورت عمودی موجود هست پنجمین آیکون از بالا مربوط به Extensions است
              که به شکل چهارتا مربع کوچک هست و یا اینکه به این مسیر برویم <i className="enInPFa">{`file > Preferences > Extensions`}</i>
              و یا از کلید ترکیبی <i className="enInPFa">ctrl shift x</i> استفاده کنیم و سپس در کادر جستجو color theme را سرچ نموده و از تم های
              موجود تم و یا تم های دلخواه را install کرده و استفاده نماییم.
            </p>
            <p className="fa">
              تم پیشنهادی <i className="enInPFa">Atom One Dark Theme</i>
              <br />
              همچنین برای رنگ بندی پوشه ها و فایلهای explorer <i className="enInPFa">vscode-icons </i>
            </p>

          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="keyboardShortcuts">
          <div className="titleLesson fa" ># کیبورد شورت کاتهای vscode</div>
          <div className="articleLesson">
            <p className="fa">
              جهت مشاهده keyboard shortcut های vscode باید به این مسیر رفت <i className="enInPFa">{`file > Preferences > Keyboard Shortcuts`}</i> و یا از کلید
                ترکیبی <i className="enInPFa">ctrl k s</i> استفاده نمود، در صفحه باز شده کیبورد کدها قابل مشاهده هستند.
            </p>

          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="extensionsPhp">
          <div className="titleLesson fa" ># معرفی extension برای php </div>
          <div className="articleLesson">
            <p className="fa">
              چندین extension برای php وجود دارد که ما در اینجا  دو نمونه
              معروف آن را معرفی می کنیم.
              <br />
              نمونه اول که تعداد دفعات زیادی دانلود شده <i className="enInPFa">PHP IntelliSense</i>
              <br />
              نمونه دوم که ترجیحا از نمونه اول بهتر است <i className="enInPFa">PHP Intelephense</i>
            </p>

          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="phpDebug">
          <div className="titleLesson fa" ># php debug in vscode </div>
          <div className="articleLesson">
            <p class="fa">
              برای نصب دیباگر php  بر روی vscode باید با حوصله و قدم به قدم جلو رفت.
            <br />
            فضای نصب برنامه ها یا همان extensions را باز کنید و php debug را سرچ کنید،
            همانطور که مشاهده میکنید چندین extension  با همین نام وجود دارد اما با extension آقای flix becker کار داریم
            این برنامه را نصب کنید و مراحل زیر را طی کنید.
            <br />
            در همان فضای extensions در تب باز شده مربوط به php debug چنانچه به پایین اسکرول کنیم  قسمت Installation قابل مشاهده است، در این قسمت چند گام مشخص شده که باید انجام دهیم
            <br />
            در قدم اول باید برنامه xDebug را بر نسخه php نصب شود، نسخه php ممکن است با wamp و یا xamp راه اندازی شده باشد. برای نصب برنامه xDebug در قسمت installation در گام اول لینکی به نام Xdebug installation wizard وجود دارد بر روی آن کلیک کنید تا وارد
            وب سایت xDebug شوید. در کادر بزرگ مشخص شده در این وب سایت باید اطلاعات مربوط به نسخه php خود را وارد کنیم، برای این کار باید wamp و یا xamp را راه اندازی کنیم و در مرورگر وارد localhost شده و سپس وارد
            صفحه phpinfo شده و همه اطلاعات صفحه را کپی کرده و در کادر ذکر شده وارد کنید و سپس دکمه
            Analyz my phpinfo() را اننخاب کنید


          </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="extensionCommentPhp">
          <div className="titleLesson fa" ># معرفی extenion کامنت گذاری و ساخت مستندات برای php </div>
          <div className="articleLesson">
            <p className="fa">
              برای کامنت گذاری در php و لاراول از extension <i className="enInPFa">php DocBlocker</i> استفاده کنید.
            </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="extensionArtisanLaravel">
          <div className="titleLesson fa" ># معرفی extenion کار با آرتیزان در laravel </div>
          <div className="articleLesson">
            <p className="fa">
              extension <i className="enInPFa">Laravel Artisan</i> جهت کار با دستوارت artisan مفید است.
              <br />
              روش استفاده از آن به این صورت است که ابتدا کلید ترکیبی <i className="enInPFa">ctrl shift p</i>
              را انتخاب نمایید و در کادر جستجوی باز شده ابتدا کلمه artisan و سپس دستور مورد نظر را وارد کنید در ادامه برنامه
               با راهنمایی و سوال کردن کار را پیش می برد.
            </p>
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id="goToView">
          <div className="titleLesson fa" ># معرفی extension برای رفتن سریع از جای جای اپلیکیشن لاارول به view </div>
          <div className="articleLesson">
            <p className="fa">
              extension <i className="enInPFa">laravel goto view</i>
              <br />
            همچنین برای رفتن به کنترلرها نیز extension وجود دارد.
          </p>
          
          </div>
        </div> {/* end .chunkLesson */}

        <div className='chunkLesson' id='createSnippet'>
        <div className='titleLesson fa' ># ساخت snippet شخصی در vscode </div>
        
        <div className='articleLesson'>
          <p className='fa'>
            نحوه ساخت اسنیپت شخصی در درس 6 آموزش تصویری کار با vscode آمده است، در اینجا نیز به اختصار شرح می دهیم
            <br/>
            اسنیپت ها را هم می شود به صورت سراسری و global ساخت و هم می توان برای هر زبان به صورت مجزا اسنیپت ساخت، بهتر است برای هر زبان به صورت جدا اسنیپت ساخت مگر اینکه یک اسنیپت به صورت مشترک برای همه زبانها کاربرد داشته باشد.
            <br/>
            نکته : برای هر پروژه نیر می توانیم به صورت مجزا اسنیپت بسازیم.
            <br/>
              برای ساخت اسنیپت باید به این مسیر برویم <i className='enInPFa'>{`file / Preferences / User Snippets`}</i>
          </p>
        </div>
        </div> {/* end .chunkLesson */}
      

      </div>

    </div>//end document .lessonSinglePage
  );
}
export default Vscode;