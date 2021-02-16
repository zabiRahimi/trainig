import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'observer',
        'دیده بان،مراقب،ناظر،مشاهده کننده',
        '/əbˈzɜːrvər/ ',
        'آبزرور',
      ],
      [
        'policy',
        'سیاست،تدبیرگری،خط مشی،ترفند',
        '/ˈpɑːləsi/ ',
        'پآلسی',
      ],
      [
        'provider',
        'تهیه کننده،بدست آورنده،سرویس دهنده',
        '/prəˈvaɪdər/ ',
        'پرِ وایدر',
      ],
      [
        'request',
        'درخواست،طلب،تقاضاکردن',
        '/rɪˈkwest/ ',
        'ریکوست',
      ],
      [
        'resource',
        'منابع،ذخایر،منبع،کاردانی',
        '/ˈriː.sɔːrs/ ',
        'ریسورس',
      ],
      [
        'rule',
        'دستور،قانون،ضابطه،خط کش',
        '/ˈruːl/',
        'روُل',
      ],
      [
        'seeder',
        'بذرافشان،بذرکار',
        '/ˈsiːdər/ ',
        'سیدر',
      ],
      [
        'migrate',
        'کوچ کردن',
        '/ˈmaɪˌɡret/ ',
        'مآیگرِت',
      ],
      [
        'fresh',
        'ازنو،مجدد،بانشاط',
        '/ˈfreʃ/',
        'فرِش',
      ],
      [
        'install',
        'کارگذاشتن،نصب کردن',
        '/ˌɪnˈstɒl/ ',
        'اینستآل',
      ],
      [
        'refresh',
        'نوسازی،به روزکردن،باطراوت شدن',
        '/rəˈfreʃ/',
        'رفرش',
      ],
      [
        'reset',
        'بازنشاندن،راه اندازی مجدد',
        '/riˈset/',
        'ریست',
      ],
      [
        'rollback',
        'عقب گرد',
        '/ˈrolˌbæk/ ',
        'رُل بَک',
      ],
      [
        'status',
        'حالت، موقعیت، وضع',
        '/ˈstætəs/ ',
        'اِستَ تِس',
      ],
      [
        'table',
        'جدول، فهرست، میز',
        '/ˈteɪbl̩/ ',
        'ت ی بُل',
      ],
      [
        'package',
        'بسته،عدل،قوطی',
        '/ˈpækɪdʒ/ ',
        'پَکِج',
      ],
      [
        'discover',
        'پیداکردن، پی بردن، یافتن',
        '/dɪˈskʌvər/',
        'دیسکآور',
      ],
      [
        'queue',
        'صف، درصف قرار دادن',
        '/ˈkjuː/ ',
        'کی یو',
      ],
      [
        'batches',
        'دسته',
        '!!',
        'بَچِز',
      ],
      [
        'failed',
        'ناموفق',
        '!!',
        'فِ ی لد',
      ],
    
];

const Word4 = () => {
    
    const title='word4';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Word4; 