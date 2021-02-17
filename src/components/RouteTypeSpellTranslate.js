import { Route  } from "react-router-dom";

// laravel
import Api1 from "./typeSpellTranslate/laravel/Api1";
import Word1 from "./typeSpellTranslate/laravel/Word1";
import Word2 from "./typeSpellTranslate/laravel/Word2";
import Word3 from "./typeSpellTranslate/laravel/Word3";
import Word4 from "./typeSpellTranslate/laravel/Word4";
import Word5 from "./typeSpellTranslate/laravel/Word5";
import Migration from "./typeSpellTranslate/laravel/Migration";
import Model from "./typeSpellTranslate/laravel/Model";
import Public1 from "./typeSpellTranslate/laravel/Public1";
import Faker1 from "./typeSpellTranslate/laravel/Faker1";

// words 504
import W504_1 from "./typeSpellTranslate/504words/504_1";
import W504_2 from "./typeSpellTranslate/504words/504_2";

//universal
import People from "./typeSpellTranslate/universal/people";

export default [
    <Route path='/typeSpellTranslate/api1' component={Api1}  key="laravel1"></Route>,
    <Route path='/typeSpellTranslate/word1' component={Word1}  key="laravel2"></Route>,
    <Route path='/typeSpellTranslate/word2' component={Word2}  key="laravel3"></Route>,
    <Route path='/typeSpellTranslate/word3' component={Word3}  key="laravel4"></Route>,
    <Route path='/typeSpellTranslate/word4' component={Word4}  key="laravel5"></Route>,
    <Route path='/typeSpellTranslate/word5' component={Word5}  key="laravel6"></Route>,
    <Route path='/typeSpellTranslate/migration' component={Migration}  key="laravel7"></Route>,
    <Route path='/typeSpellTranslate/model' component={Model}  key="laravel8"></Route>,
    <Route path='/typeSpellTranslate/public1' component={Public1}  key="laravel9"></Route>,
    <Route path='/typeSpellTranslate/faker1' component={Faker1}  key="laravel10"></Route>,


    <Route path='/typeSpellTranslate/w504_1' component={W504_1}  key="504_1"></Route>,
    <Route path='/typeSpellTranslate/w504_2' component={W504_2}  key="504_2"></Route>,

    <Route path='/typeSpellTranslate/people' component={People}  key="universal1"></Route>,
] ;