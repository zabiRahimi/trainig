import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'component',
        'ترکیب کننده،سازنده،سازه',
        '/kəmˈpoʊnənt/ ',
        'کِمپوننت',
      ],
      [
        'controller',
        'ناظر،بازرس',
        '/kənˈtroʊlə/',
        'کِنترولر',
      ],
      [
        'event',
        'رخ داد،حادثه،رویداد،معلول',
        '/ɪˈvɛnt/ ',
        'اِونت',
      ],
      [
        'exception',
        'رد، اعتراض، استثنا، استثناء',
        'ɪkˈsep.ʃən/ ',
        'ایکسَپشن',
      ],
      [
        'factory',
        'سازگاه،کارخانه',
        '/ˈfæktəri/ ',
        'فَکتری',
      ],
      [
        'job',
        'کار، امر، ساخت، شغل',
        '/ˈdʒɑːb/ ',
        'جَاب',
      ],
      [
        'listener',
        'شنونده، مستمع، گوش دهنده',
        '/ˈlɪsənər/ ',
        'لیسنر',
      ],
      [
        'mail',
        'پست،پستی،باپست فرستادن',
        '/ˈmeɪl/ ',
        'میل',
      ],
      [
        'middleware',
        'میان افزار',
        '/ˈmidlˌwer/',
        'میدُلور',
      ],
      [
        'migration',
        'کوچ،مهاجرت',
        '/maɪˈɡreɪʃn̩/ ',
        'مآیگریشن',
      ],
      [
        'model',
        'طرح،ماکت،نمونه',
        '/ˈmɑːdl̩/ ',
        'مآدُل',
      ],
      [
        'notification',
        'خبر،تذکر،اطلاع،اخطار',
        '/ˌnoʊtɪfɪˈkeɪʃn̩/ ',
        'نوتیفیکیشن',
      ],
    
];

const Word3 = () => {
    
    const title='word3';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Word3; 