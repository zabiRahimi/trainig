import useBodySpellType from "../uses/useBodySpellType.js";
import '../../css/TypeSpellTranslate.css';

const words = [
    [
        'option',//word
        'اختیار،گزینش',//mean
        '/ˈɑːpʃn̩/',//en
        'آپشن',//Pr
    ],
    [
        'help',
        'کمک',
        '/ˈhelp/',
        'هلپ',
    ],
    [
        'quiet',
        'آرامش،سکون،بی صدا،ملایم',
        '/ˈkwaɪət/ ',
        'کوآیِت',
    ],
    [
        'version',
        'نسخه،تفسیر',
        '/ˈvɜːrʒən/ ',
        'ورژن',
    ],
    [
        'interaction',
        'فعل و انفعال،اثرمتقابل',
        '/ˌɪntəˈrækʃn̩/ ',
        'اینتراکشن،اینراکشن',
    ],
    [
        'verbose',
        'پرگو،دراز،طولانی،روده دراز',
        '/vɜːˈboʊs/ ',
        'وِبَوس',
    ],
    [
        'debug',
        'عیب زدایی کردن،عیب یابی',
        '/diˈbəɡ/',
        'دی باگ',
    ],
    [
        'output',
        'محصول، بازده، تولید، برونداد',
        '/ˈaʊtˌpʊt/',
        'اَوت پِت',
    ],
    [
        'command',
        'فرمان،دستور،فرمان دادن',
        '/kəˈmænd/ ',
        'کِمَاند',
    ],
    [
        'available',
        'قابل استفاده،مفید،موجود',
        '/əˈveɪləbl̩/ ',
        'اِویل اِبل',
    ],
    [
        'clear',
        'تمیزکردن،آشکار،صاف',
        '/ˈklɪr/ ',
        'کِلیِر',
    ],
    [
        'compiled',
        'تدوین کردن،',
        '!!',
        'کِمپایلد',
    ],
];

// document.getElementsByTagName('title')[0].innerHTML='sdfsd'
const Word1 = () => {
    
    const title='word1';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Word1;