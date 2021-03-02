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
          <button className='buttonA fontEn' onClick={() => toChunkLesson('changeTheme')}>تغییر تم </button>

        </div>

      </div>

      <div className="bodyLesson" id="bodyLesson">

        <div className='chunkLesson' id="install">
          <div className="titleLesson fa " ># install vscode </div>
          <div className="articleLesson">
            <p class="fa">
              جهت دانلود آخرین نسخه vscode  به سایت <a href='https://code.visualstudio.com/'>visualstudio</a> رفته و نسخه مناسب با سیستم عامل خود را دانلود کرده و نصب کنید.
          </p>
          </div>
        </div>

        <div className='chunkLesson' id="changeFont">
          <div className="titleLesson fa" ># تغییر انداره فونت در vscode </div>
          <div className="articleLesson">
            <p class="fa">
              جهت تغییر اندازه فونت به دو صورت می توانیم عمل کنیم، به صورت موقت و بصورت دائم و پیش فرض
          </p>
            <p class="fa">
              جهت اندازه فونت به صورت موقت و سریع به این صورت عمل می کنیم، برای بزرگ کردن فونت ها کافی است
            کلید تر کیبی <i class="enS">ctrl + '+'</i> و برای کوچک کردن فونت کلید ترکیبی
            <i class="enS">ctrl + '-'</i> را به کار می بریم.
          </p>
            <p class="fa">
              جهت تغییر اندازه فونت به صورت دائم به قسمت settings که در این مسیر است  <i class="enS">{`file > Preferences > Settings`}</i> می رویم، جهت رفتن سریع
            به این صفحه می توانیم از کلید ترکیبی <i class="enS">ctrl + ','</i> استفاده کنیم. در فضای
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

        <div className='chunkLesson' id="changeTheme">
          <div className="titleLesson fa" ># تغییر تم </div>
          <div className="articleLesson">
            <p class="fa">
              جهت تغییر تم باید به این مسیر برویم <i class="enS">{`file > Preferences > Color Theme`}</i>  و یا اینکه
            از کلید ترکیبی <i class="enS">ctrl k t</i> استفاده کنیم، سپس از تم های موجود یکی را انتخاب نماییم.
            </p>
            <p class="fa">
              چند تم به صورت پیش فرض موجود است ولی می توانیم تم ها زیادی را دانلود کرده و استفاده نماییم، جهت 
              دیدن تم ها و دانلود آنها باید به فضای Extensions وارد شویم، برای رفتن به این صفحه می توانیم از آیکون آن  
              استفاده کنیم، در سمت چپ ویرایشگر چندین آیکون به صورت عمودی موجود هست پنجمین آیکون از بالا مربوط به Extensions است 
              که به شکل چهارتا مربع کوچک هست و یا اینکه به این مسیر برویم <i class="enS">{`file > Preferences > Extensions`}</i>
              و یا از کلید ترکیبی <i class="enS">ctrl shift x</i> استفاده کنیم و سپس در کادر جستجو color theme را سرچ نموده و از تم های 
              موجود تم و یا تم های دلخواه را install کرده و استفاده نماییم.
            </p>
            <p class="fa">
              تم پیشنهادی <i class="enS">Atom One Dark Theme</i>
              <br/>
              همچنین برای رنگ بندی پوشه ها و فایلهای explorer <i class="enS">vscode-icons </i>
            </p>

          </div>
        </div> {/* end .chunkLesson */}

      </div>

    </div>//end document .lessonSinglePage
  );
}
export default Vscode;