import { Link, useHistory } from "react-router-dom";
import useCheckSpelling from "./useCheckSpelling.js";
import useType from './useType.js';
import useChengeDocumentTitle from './useChengeDocumentTitle';

const useBodySpellType =(words,titleLesson )=>{
    const history = useHistory();
    const { contextShow, startType, handleWord, message } = useType(words);
    const {spellContext} = useCheckSpelling(words);
    useChengeDocumentTitle(`type and spell ${titleLesson}`)

  const bodySpellType = (


<div>
            <div className="TSTheader fontEn">type and spell {titleLesson}</div>
            <div className="menuPage">
                <Link className='fontEn' to="/">home</Link>
                <Link className='fontEn' to='' onClick={() => { history.goBack() }}>goBack</Link>
            </div>
            <div className="TSTbodyType">
                <div className='TSTmessageType'>{(message) ? message : 'برای تست تایپ ، دکمه "شروع تایپ" را انتخاب کرده و به سرعت تایپ کنید '}</div>
                <div className='TSTstartType'><button className='btnStartType' id='btnStartType' onClick={startType}>شروع تایپ</button></div>
                <div className="TsTContextType" onClick={startType}>{contextShow}</div>
                <input type="text" id='inputChar' className='inputChar' onInput={handleWord} />
                <span className='errorChar' id='errorChar'></span>
                <div className='showMeanRow' id='showMean'></div>

            </div>


            <div className='spellBody'>{spellContext}</div>


        </div>
        )
    return {bodySpellType};
    }

export default useBodySpellType;