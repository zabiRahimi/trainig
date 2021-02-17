import useBodySpellType from "../../uses/useBodySpellType.js";
import '../../../css/TypeSpellTranslate.css';

const words = [
    [
        'model',
        'مدل، نمونه',
        '!!',
        'مادُل',
      ],
      [
        'protected',
        'محافظت شده',
        '!!',
        'پِرُتَکتد',
      ],
      [
        'fillable',
        '!!',
        '!!',
        '!!',
      ],
      [
        'relationship',
        'خویشی، ارتباط، نسبت، در لاراول ارتباط بین جداول',
        '!!',
        '!!',
      ],
      [
        'has',
        'داشتن، مجبور بودن',
        '!!',
        'هَض',
      ],
      [
        'many',
        'زیاد، بسیار، خیلی',
        '!!',
        'مِنی',
      ],
      [
        'hasMany',
        '!!',
        '!!',
        '!!',
      ],
      [
        'this',
        '!!',
        '!!',
        'دس'
      ],
      [
        'belong',
        'تعلق داشتن، مال کسی بودن، وابسته بودن',
        '!!',
        'بیی لانگ',
      ],
      [
        'to',
        'بسمت، بطرف، پیش، نزد',
        '!!',
        'تیو',
      ],
      [
        'belongsTo',
        '!!',
        '!!',
        '!!',
      ],
    
];

const Model = () => {
    
    const title='model';
    const {bodySpellType}=useBodySpellType(words , title );
    return (
        <div>
            {bodySpellType}
        </div>
    );
}
export default Model; 