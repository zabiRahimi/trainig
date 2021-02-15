import { Link } from "react-router-dom";
import useChengeDocumentTitle from './uses/useChengeDocumentTitle';

import "../css/TypeSpellTranslate.css";

const TypeSpellTranslate = () => {
    useChengeDocumentTitle('type spell translate');
    const url = 'typeSpellTranslate';
    return (
        <div >
            <div className="typeSpellTranslateTitle">
                <h3>تمرین کلمات انگلیسی و تایپ ده انگشتی</h3>
            </div>
            <div className="menuPage"><Link className='fontEn' to="/">home</Link></div>
            <div className="divLessons">
                <div className="title">
                    <h4 className="titleH4 fontEn">
                        504 words
                    </h4>
                </div>
                <div className="body">
                    <Link to={`${url}/504_1`} className='pageA fontEn'>504_1</Link>
                    <Link to={`${url}/504_2`} className='pageA fontEn'>504_2</Link>
                </div>

            </div>
            <div className="divLessons">
                <div className="title">
                    <h4 className="titleH4 fontEn">
                        laravel
                    </h4>
                </div>
                <div className="body">
                    {/* <Link to={`${url}/api1`} className='pageA fontEn' >api1</Link> */}
                    <Link to={`${url}/word1`} className='pageA fontEn' >word1</Link>
                    {/* <Link to={`${url}/word2`} className='pageA fontEn'>word2</Link> */}
                    {/* <Link to={`${url}/word3`} className='pageA fontEn'>word3</Link> */}
                    {/* <Link to={`${url}/word4`} className='pageA fontEn'>word4</Link> */}
                    {/* <Link to={`${url}/word5`} className='pageA fontEn'>word5</Link> */}
                    {/* <Link to={`${url}/migration`} className='pageA fontEn'>migration</Link> */}
                    {/* <Link to={`${url}/model`} className='pageA fontEn'>model</Link> */}
                    {/* <Link to={`${url}/public`} className='pageA fontEn'>public1</Link> */}
                    {/* <Link to={`${url}/faker`} className='pageA fontEn '>faker1</Link> */}
                </div>
            </div>
            <div className="divLessons">
                <div className="title">
                    <h4 className="titleH4 fontEn">
                        universal
          </h4>
                </div>
                <div className="body">
                    <Link to={`${url}/people`} className="pageA fontEn">people</Link>



                </div>

            </div>
        </div>
    );
}

export default TypeSpellTranslate;