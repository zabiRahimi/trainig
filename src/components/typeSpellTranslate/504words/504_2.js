import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'corpse',//word
        'جسد',//mean
        '/kɔːrps/',//en
        'کارپس',//Pr
    ],
    [
        'conceal',//word
        'مخفی کردن، کتمان کردن',//mean
        '/kənˈsiːl/',//en
        'کِنسیل',//Pr
    ],
    [
        'dismal',//word
        'دلگیر، غم انگیز، گرفته',//mean
        '/ˈdɪz.məl/',//en
        'دیزمِل',//Pr
    ],
    [
        'frigid',//word
        'بسیار سرد، منجمد',//mean
        '/ˈfrɪdʒ.ɪd/',//en
        'فریجید',//Pr
    ],
    [
        'inhabit',//word
        'ساکن بودن، زندگی کردن',//mean
        '/ɪnˈhæb.ɪt/',//en
        'این هَبیت',//Pr
    ],
    [
        'numb',//word
        'کرخت، بی حس',//mean
        '/nʌm/',//en
        'نام',//Pr
    ],
    [
        'peril',//word
        'خطر، به خطر انداختن',//mean
        '/ˈper.əl/',//en
        'پرِل',//Pr
    ],
    [
        'recline',//word
        'تکیه دادن، لم دادن',//mean
        '/rɪˈklaɪn/',//en
        'ری کلاین',//Pr
    ],
    [
        'shriek',//word
        'جیغ، جیغ کشیدن',//mean
        '/ʃriːk/',//en
        'شِرِیک',//Pr
    ],
    [
        'sinister',//word
        'بدجنس، شرور، شیطان صفت',//mean
        '/ˈsɪn.ə.stər/',//en
        'سینستر',//Pr
    ],
    [
        'tempt',//word
        'وسوسه کردن',//mean
        '/tempt/',//en
        'تمپت',//Pr
    ],
    [
        'wager',//word
        'شرط بستن، شرط بندی',//mean
        '/ˈweɪ.dʒər/',//en
        'وی جِر',//Pr
    ],
    
];

const W504_2 = () => {
    
    const title='504_2';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default W504_2; 