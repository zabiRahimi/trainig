import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'people',//word
        'مردم',//mean
        '!!',//en
        'پیی پُل',//Pr
    ],
    [
        'friend',//word
        'دوست',//mean
        '!!',//en
        'فرند',//Pr
    ],
    [
        'wife',//word
        'زن',//mean
        '!!',//en
        'وایف',//Pr
    ],
    [
        'match',//word
        'تطبیق، وصلت دادن، همسر، ازدواج، جفت، کبریت، مسابقه ',//mean
        '!!',//en
        'مَچ',//Pr
    ],
    // [
    //     '',//word
    //     '',//mean
    //     '',//en
    //     '',//Pr
    // ],
    
    
];

const People = () => {
    
    const title='people';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default People; 