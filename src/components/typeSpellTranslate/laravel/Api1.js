import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'prefix',
        'پیشوند، پیشوندی',
        '!',
        'پِرِیی فِکس'
      ],
      [
        'namespace',
        '!',
        '!',
        '!'
      ],
      [
        'response',
        'واکنش، پاسخ، جوابگویی',
        '!',
        'ریسپآنس'
      ],
      [
        'json',
        '!',
        '!',
        'جیسِن'
      ],
      [
        'collection',
        'گردآوری، مجموعه، کلکسیون',
        '!',
        'کالکشن'
      ],
      [
        'as',
        'چنانکه، نتیجه، در، مانند',
        '!',
        'از'
      ],
      [
        'find',
        'پیداکردن، جستجو',
        '!',
        'فآیند'
      ],
      [
        'throttle',
        'گلو، جلو را گرفتن، در لاراول تعداد درخواستهای  api در یک زمان مشخص را کنترل می کند',
        '/ˈθrɑːtl̩/',
        'تراتُِل'
      ],
      [
        'paginate',
        'صفحه بندی کردن، شماره گذاری کردن',
        '/ˈpædʒɪneɪt/',
        '!!',
      ],
    
];

const Api1= () => {
    
    const title='api1';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Api1; 