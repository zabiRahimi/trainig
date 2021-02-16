import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'down',//word
        'پایین ، ازکار افتاده،به زیر کشیدن',//mean
        '/ˈdaʊn/ ',//en
        'دَون',//Pr
    ],
    [
        'inspire',
        'موجب شدن، القا کردن، به وجود آوردن',
        '/ˌɪnˈspaɪr/',
        'اینس پایر',
    ],
    [
        'optimize',
        'بهینه کردن،',
        '/ˈɑːptəˌmaɪz/ ',
        'آپتِ مایز',
    ],
    [
        'tinker',
        'سرهم بندی کردن',
        '/ˈtɪŋkər/ ',
        'تینکر',
    ],
    [
        'auth',
        'اصیل،مجاز',
        '/ˈɒθ/ ',
        'آث،آوث',
    ],
    [
        'cache',
        'مخزن،ذخیره گاه،پناه گاه',
        '/ˈkæʃ/ ',
        'کَش',
    ],
    [
        'config',
        'پیکره بندی',
        'kənˌfeɪɡ',
        'کِن فیگ',
    ],
    [
        'configuration',
        'پیکره بندی کردن',
        '/kənˌfɪɡjəˈreɪʃn̩/ ',
        'کِن فیگریشن',
    ],
    [
        'generate',
        'تولید کردن،به وجودآوردن،زاییدن',
        '/ˈdʒenəˌret/',
        'جِنرِت',
    ],
    [
        'make',
        'ساخت،انجام دادن،درست کردن،',
        '/ˈmeɪk/ ',
        'مِ ی ک',
    ],
    [
        'cast',
        'قالب،تبدیل نوع',
        '/ˈkæst/',
        'کَست',
    ],
    [
        'channel',
        'مجرا،کانال',
        '/ˈt͡ʃænl̩/  ',
        'چِنُل'
    ],
    
];

const Word2 = () => {
    
    const title='word2';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Word2; 