import { Link } from "react-router-dom";
import useChengeDocumentTitle from '../uses/useChengeDocumentTitle';
import useToChunkLesson from '../uses/useToChunkLesson';
const AddLesson = () => {
    useChengeDocumentTitle('add lesson');
    const { toChunkLesson } = useToChunkLesson();
    return (
        <div className="lessonSinglePage notShow" id="lessonSinglePage">
            <div className="typeSpellTranslateTitle fontEn">
                <h3>lesson add lesson</h3>
            </div>
            <div className="menuPage">
                <Link to='/' >home</Link>
                <Link to='/lessonsDeveloper' >go back</Link>
            </div>


            <div className="divTitleLesson">
                <div className="titleLesson"># titles lesson</div>


                <div className="listTitleLesson" id="listTitleLesson">
                    <a onClick={() => toChunkLesson('addGroup')}>نحوه اضافه کردن یک گروه درس در صفحه lessonsDeveloper</a>


                </div>

            </div>

            <div className="bodyLesson" id="bodyLesson">

                <div className='chunkLesson' id="addGroup">
                    <div className="titleLesson fa " ># نحوه اضافه کردن یک گروه درس در صفحه lessonsDeveloper </div>
                    <div className="articleLesson">
                        <p className='fa'>
                            جهت اضافه کردن یک گروه درس ابتدا باید به فایل lessonsDeveloper.js رفت این فایل در این مسیر است <i className='enInPFa'>src/components/LessonsDeveloper.js</i>
                            <br />
                  سپس این قطعه کد را به فایل اضافه کنید
                        </p>
                        <pre className='en'>
                            {`import { Link } from 'react-router-dom';
                            import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
                            import useToChunkLesson from '../../uses/useToChunkLesson';
                            const StartLaravel = () => {
                            useChengeDocumentTitle('my title lesson');
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
                            <a onClick={()=>toChunkLesson('myIdLesson')}>start laravel</a>
                            
                            
                            </div>
                            
                            </div>
                            
                            <div className='bodyLesson' id='bodyLesson'> 
                            
                            <div className='chunkLesson' id='myIdLesson'>
                              <div className='titleLesson fa ' ># title lesson </div>
                              <div className='articleLesson'>body lesson</div>
                            </div>
                            
                            
                            
                            </div>
                            
                            </div>
                            );
                            }
                            export default StartLaravel;`}
                        </pre>

                        <p className='fa'>
                            <i className='note'>نکته 1 : باید مقدار این هوک را تغییر دهید <i className='enInPFa'>useChengeDocumentTitle('')</i> این هوک title مربوط به صفحه مرورگر را تغییر می دهد.</i>
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته 2 : بین تگ div.body به ازای هر درس از گروه یک لینک با نام درس اضافه می کنیم.</i>
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته مهم : جهت سهولت ایجاد یک گروه درس می توان از اسنیپت </i>
                        </p>


                    </div>
                </div>

                <div className='chunkLesson' id='addLesson'>
                    <div className='titleLesson fa' ># add lesson </div>
                    <div className='articleLesson'>
                        <p className='fa'>
                            جهت ایجاد یک درس ابتدا باید یک فایل به اسم درس در دایرکتوری مربوط به درس ایجاد کنیم دایرکتوریهای دروس در این مسیر می باشند <i className='enInPFa'>src/components/lessonsDeveloper</i> چنانچه دایرکتوری و یا پوشه مربوط به درس وجود نداشت لازم است یک دایرکتوری مربوط به موضوع درس ایجاد کنیم. سپس کدهای زیر را در فایل ایجاد شده کپی نماییم
                        </p>
                        <pre className='en'>
                            {`import { Link } from 'react-router-dom';
import useChengeDocumentTitle from '../../uses/useChengeDocumentTitle';
import useToChunkLesson from '../../uses/useToChunkLesson';
const NameLesson = () => {
    useChengeDocumentTitle('title lesson');
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
                        <a onClick={()=>toChunkLesson('myIdChunkLesson')}>start laravel</a>
                            
                    </div>
                </div>
                <div className='bodyLesson' id='bodyLesson'> 
                    <div className='chunkLesson' id='myIdChunkLesson'>
                        <div className='titleLesson fa ' ># title lesson </div>
                        <div className='articleLesson'>
                            body lesson
                        </div>
                    </div>
                            
                </div>
            </div>
        );
    }
    export default NameLesson;`}
                        </pre>
                    </div>
                </div> {/* end .chunkLesson */}

            </div>
        </div>//end document .lessonSinglePage
    );
}
export default AddLesson;

