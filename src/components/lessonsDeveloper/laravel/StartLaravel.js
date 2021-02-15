import { Link } from "react-router-dom";
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const StartLaravel = () => {
  useChengeDocumentTitle('lesson developer start laravel');
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

      {/* <!-- سر فصل درس title lesson --> */}
      <div className="divTitleLesson">
        <div className="titleLesson"># titles lesson</div>

        {/* <!-- سرفصل ها از فایل مربوط به درس توسط برنامه خوانده شده و به این دایو اضافه می شود --> */}
        <div className="listTitleLesson" id="listTitleLesson">
          <a onClick={() => toChunkLesson('installLaravel')}>نصب لاراول</a>


        </div>{/* end listTitleLesson */}

      </div>
      {/* <!-- محتوای درس --> */}
      <div className="bodyLesson" id="bodyLesson">

        <div className='chunkLesson' id="installLaravel">
          <div className="titleLesson fa " ># نصب لاراول </div>
          <div className="articleLesson">
            <p class="fa">برای نصب لاراول از دستور زیر استفاده می کنیم.</p><pre class="en">composer create-project laravel/laravel nameProject</pre><p class="fa">دقت شود بجای  nameProject باید نام پروژه خود را قرار دهیم.</p>
          </div>
        </div>



      </div>{/* end bodyLesson */}

    </div>//end document .lessonSinglePage
  );
}
export default StartLaravel;