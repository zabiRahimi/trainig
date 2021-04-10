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
                    <button className='buttonA fontEn' onClick={()=>toChunkLesson('addGroup')}>نحوه اضافه کردن یک گروه درس در صفحه lessonsDeveloper</button>
                    <button className='buttonA fontEn' onClick={()=>toChunkLesson('addLesson')}>اضافه کردن یک درس</button>
                    <button className='buttonA fontEn' onClick={()=>toChunkLesson('AddChunk')}>اضافه کردن یک قسمت یا فصل جدید به یک درس </button>
                </div>

            </div>

            <div className="bodyLesson" id="bodyLesson">

                <div className='chunkLesson' id="addGroup">
                    <div className="titleLesson fa " ># نحوه اضافه کردن یک گروه درس در صفحه lessonsDeveloper </div>
                    <div className="articleLesson">
                        <p className='fa'>
                            مراحل ایجاد یک گروه و مجموعه از دروس به شرح زیر است
                            <ol>
                                <li>ایجاد دایرکتوری درس در مسیر <i className='enInPFa'>src/components/lessonsDeveloper/</i></li>
                                <li>ایجاد گروه درس در فایل <i className='enInPFa'>src/components/LessonsDeveloper.js</i></li>
                            </ol>
                        </p>
                        <p className='fa'>
                            جهت اضافه کردن یک گروه درس ابتدا باید به فایل lessonsDeveloper.js رفت این فایل در این مسیر است <i className='enInPFa'>src/components/LessonsDeveloper.js</i>
                            <br />
                  سپس این قطعه کد را به فایل اضافه کنید
                        </p>
                        <pre className='en'>
                           {`<div className='divLessons'>
    <div className='title'>
        <h4 className='titleH4 fontEn'>
            title lesson group
        </h4>
    </div>
    <div className='body'>
        <Link to='ulr lesson' className='pageA fontEn'>name lesson</Link>
                            
    </div>
</div>`}
                        </pre>

                        <p className='fa'>
                            <i className='note'>نکته 1 بین تگ <i className='enInPFa'>h4.titleH4</i> عنوان گروه درس را وارد کنید</i>
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته 2 : بین تگ <i className='enInPFa'>div.body</i> به ازای هر درس از گروه یک لینک با نام درس اضافه کنید .</i>
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته مهم : جهت سهولت ایجاد یک گروه درس می توان از اسنیپت <i className='enInPFa'>addGroupLesson</i> استفاده کنید. </i>
                        </p>


                    </div>
                </div>

                <div className='chunkLesson' id='addLesson'>
                    <div className='titleLesson fa' ># add lesson </div>
                    <div className='articleLesson'>
                        <p className='fa'>جهت ایجاد یک درس نیاز هست قدم به قدم مراحل زیر را انجام دهیم
                        <br/>
                        <ol>
                            <li>ایجاد فایل درس در پوشه گروه درس</li>
                            <li>ایجاد لینک درس در فایل <i className='enInPFa'>src/components/LessonsDeveloper.js</i> در قسمت گروه درس</li>
                            <li>ایجاد روت درس در فایل <i className='enInPFa'>src/components/RouteLessonsDeveloper.js</i> </li>
                        </ol>
                        
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته : منظور از گروه درس مجموعه ای از دروس مرتبط با هم هست، مثلا آموزش laravel یک مجموعه از دروس هست که شامل چندین درس مانند api ، controller ، rouet  و غیرو است، چنانچه درس مورد نظر مربوط به هیچکدام از مجموعه های فعلی نمی باشد باید یک مجموعه درس برای آن باز کرد، در قسمت قبل نحوه ایجاد کردن یک گروه یا مجموعه درس آموزش داده شده است.</i>
                        </p>
                        <div className='titrLesson'>
                            <h3 className='h3TitrLesson'>ایجاد فایل درس در پوشه گروه درس</h3>
                        </div>
                        
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
                    <button className='buttonA fontEn'  onClick={() => toChunkLesson('myIdChunkLesson')}>nameLesson</button>
                            
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
                        <p className='fa'>
                            به نکات زیر توجه کنید
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته مهم : جهت درج سریع کدهای بالا و سهولت کار می توانید از اسنیپت <i className='enInPFa'>addLessonDeveloper</i> استفاده نمایید.</i>
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته 1 : نام متد در خط 4 را اصلاح کنید <i className='enInPFa'>const NameLesson = ()</i> همچنین مقدار <i className='enInPFa'>export default NameLesson;</i> را اصلاح کنید این مقدار باید با مقدار متد مذکور یکی باشد.</i>
                        </p>
                        
                        <p className='fa'>
                            <i className='note'>نکته 2 : مقدار هوک <i className='enInPFa'>useChengeDocumentTitle('title lesson');</i> را اصلاح کنید، این هوک title مربوط به تب مرورگر را تغییر می دهد.</i>
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته 3 : هر درس از چندین قسمت تشکیل شده است، نحوه ایجاد کردن یک قسمت درس در ادامه آموزش داده خواهد شد.
                             </i>
                        </p>
                        <div className='titrLesson'>
                           <h3 className='h3TitrLesson'>نحوه ایجاد لینک درس در فایل <i className='enInPFa'>src/components/LessonsDeveloper.js</i> </h3>
                        </div>
                        <p className='fa'>
                            به فایل <i className='enInPFa'>src/components/LessonsDeveloper.js</i> رفته و در div.divLessons مربوط به گروه درس در عنصر div.body لینکی شبیه به این <i className='enInPFa'>{`<Link to='' className="pageA fontEn">nameLesson</Link>`}</i> ایجاد نمایید؛ آدرس فایل درس را به خصوصیت  to بدهید، همچنین کلمه nameLesson را پاک کرده و نام درس را جایگزین کنید. 
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته مهم : جهت ساخت سریع لینک بالا می توانید از اسنیپت <i className='enInPFa'>linkLesson</i> استفاده کنید.</i>
                        </p>
                        <div className='titrLesson'>
                           <h3 className='h3TitrLesson'>نحوه ایجاد روت درس در فایل <i className='enInPFa'>src/components/RouteLessonsDeveloper.js</i></h3>
                        </div>
                        <p className='fa'>
                            به فایل <i className='enInPFa'>src/components/RouteLessonsDeveloper.js</i> رفته در قسمت ایمپورتها کامپوننت درس مربوطه را ایمپورت کنید و سپس در آرایه default
                            روتی شبیه به <i className='enInPFa'>{`<Route path='' component={}  key=""></Route>`}</i> ایجاد نمایید و خصوصیات path , component , key را مقدار دهی کنید.
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته مهم : برای ایجاد روت بالا می توانید از اسنیپت <i className='enInPFa'>routeLesson</i> استفاده کنید.</i>
                        </p>
                        <p className='fa'>
                            <i className='note'>نکته : در آرایه default روتهای هر مجموعه درس با کامنت گذاری تفکیک شده است، لذا هنگام ایجاد روت این نکته را رعایت کنید. </i>
                        </p>
                    </div>
                </div> {/* end .chunkLesson */}

                <div className='chunkLesson' id='AddChunk'>
                <div className='titleLesson fa' ># نحوه اضافه کردن یک قسمت جدید به درس </div>
                <div className='articleLesson'>
                    <p className='fa'>
                        برای اضافه کردن یک فصل یا قسمت جدید به یک درس باید در فایل درس دو کار زیر را انجام داد
                        <ol>
                            <li>ایجاد تیتر و لینک در عنصر div.listTitleLesson </li>
                            <li>ایجاد عنصر div.chunkLesson</li>
                        </ol>
                        ابتدا فایل مربوط به درس را باز کنید و در عنصر div.listTitleLesson لینکی شبیه به <i className='enInPFa'>{`<button className='buttonA fontEn' onClick={()=>toChunkLesson('idChunk')}>nameChunk</button>`}</i> ایجاد نمایید، بجای idChunk باید آی دی ای که به عنصر div.chunkLesson می دهید مقدار دهی کنید و همچنین بجای nameChunk تیتر مربوط به فصل جدید را قرار دهید.
                    </p>
                    <p className='fa'>
                        <i className='note'>نکته مهم : جهت ایجاد button فوق می توانید از اسنیپت <i className='enInPFa'>btnLink</i> استفاده کنید.</i>
                    </p>
                    <p className='fa'>
                        اکنون باید عنصر div.chunkLesson را به فایل اضافه نمایید برای اینکار باید کدهای زیر را در فایل قرار دهید
                    </p>
                    <pre className='en'>
                        {`<div className='chunkLesson' id='idChunk'>
    <div className='titleLesson fa' ># nameChunk </div>
    <div className='articleLesson'>
                            
    </div>
</div> `}
                    </pre>
                    <p className='fa'>
                        بجای idChunk باید یک آی دی مناسب با فصل درس قرار دهید لازم به ذکر هست که این آی دی را باید به متد فراخوانی شده در خصوصیت onClick لینک فصل درس که در عنصر div.listTitleLesson اضافه کردید نیز بدهید، همچنین بجای nameChunk تیتر مناسب با فصل را مقدار دهی کنید و سپس در عنصر div.articleLesson محتوای درس را وارد کنید.
                    </p>
                    <p className='fa'>
                        <i className='note'>نکته مهم : برای ایجاد کدهای بالا می توانید از اسنیپت <i className='enInPFa'>divChunk</i> استفاده کنید.</i>
                    </p>
                </div>
                </div> {/* end .chunkLesson */}

            </div>
        </div>//end document .lessonSinglePage
    );
}
export default AddLesson;



