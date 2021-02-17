import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        '',//word
        '',//mean
        '',//en
        '',//Pr
    ],
    
];

const Public1 = () => {
    
    const title='public1';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Public1; 