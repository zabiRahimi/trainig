import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'migration',//word
        'کوچ، مهاجرت',//mean
        '/maɪˈɡreɪʃn̩/',//en
        'مای گریشن',
    ],
    [
        'unsigned',//word
        'بی نشان، بی علامت، بدون امضا',
        '/ənˈsaɪnd/',
        'آن سایند',
    ],
    [
        'reference',//word
        'ارجاع، مرجع، مراجعه، بازگشت',
        '/ˈrefərəns/',
        'رفرنس',
    ],
    [
        'on',//word
        'روی، در، روشن، برقرار',
        '/ˈɑːn/',
        'آن',
    ],
    [
        'delete',//word
        'حذف',
        '/dəˈliːt/ ',
        'دیلیت',
    ],
    [
        'cascade',//word
        'آبشاری، پشت سر هم',
        '/kæˈskeɪd/ ',
        'کَس کِ ی د',
    ],
    [
        'references',//word
        '!!',
        '!!',
        '!!',
    ],
    [
        'onDelete',//word
        '!!',
        '!!',
        '!!',
    ],
    [
        'string',//word
        'رشته، نخ',
        '/ˈstrɪŋ/',
        'استرینگ',
    ],
    [
        'integer',//word
        'عدد درست، عدد صحیح',
        '/ˈɪntədʒər/',
        'اینتِجر',
    ],
    [
        'foreign',//word
        'بیرونی، خارجی، بیگانه',
        '/ˈfɔːrən/',
        'فورِن',
    ],
    [
        'text',//word
        'متن',
        '/ˈtekst/',
        'تکست',
    ],
    
];

const Migration = () => {
    
    const title='migration';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Migration; 