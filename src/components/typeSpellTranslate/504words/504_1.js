import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'abandon',//word
        'ترک کردن، رها کردن',//mean
        '/əˈbandən/',//en
        'اِباندِن',//Pr
    ],
    [
        'keen',//word
        'تیز، شدید، مشتاق، حساس',//mean
        '/kiːn/',//en
        'کین',//Pr
    ],
    [
        'jealous',//word
        'حسود',//mean
        '/ˈdʒɛləs/',//en
        'جلِس',//Pr
    ],
    [
        'tact',//word
        'تدبیر، کیاست، ملاحظه',//mean
        '/takt/',//en
        'تاکت',//Pr
    ],
    [
        'oath',//word
        'قسم، سوگند، ناسزا، دشنام',//mean
        '/oʊθ/',//en
        'اَوث',//Pr
    ],
    [
        'vacant',//word
        'خالی',//mean
        '/ˈveɪkənt/',//en
        'وی کِنت',//Pr
    ],
    [
        'hardship',//word
        'سختی، دشواری',//mean
        '/ˈhɑːrd.ʃɪp/',//en
        'هاردشیپ',//Pr
    ],
    [
        'gallant',//word
        'شجاع، با شکوه',//mean
        '/ˈɡæl.ənt/',//en
        'گَلِنت',//Pr
    ],
    [
        'data',//word
        'اطلاعات، داده ها',//mean
        '/ˈdeɪ.t̬ə/',//en
        'دیتا',//Pr
    ],
    [
        'unaccustomed',//word
        'نا آشنا(به)، خو نگرفته',//mean
        '/ˌʌn.əˈkʌs.təmd/',//en
        'آن اِکاستامِد',//Pr
    ],
    [
        'bachelor',//word
        'مرد مجرد',//mean
        '/ˈbætʃ.əl.ər/',//en
        'بَچلِر',//Pr
    ],
    [
        'qualify',//word
        'واجد شرایط بودن',//mean
        '/ˈkwɑː.lə.faɪ/',//en
        'کوالی فای',//Pr
    ],
    
];

const W504_1 = () => {
    
    const title='504_1';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default W504_1; 