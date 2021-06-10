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

// words 1100
import W1100_1 from "./typeSpellTranslate/1100words/1100_1";

let url='typeSpellTranslate';

//create route with snippet -> RouteDeveloper
export default [
    <Route path={`/${url}/api1`} component={Api1}  key="laravel1"></Route>,
    <Route path={`/${url}/word1`} component={Word1}  key="laravel2"></Route>,
    <Route path={`/${url}/word2`} component={Word2}  key="laravel3"></Route>,
    <Route path={`/${url}/word3`} component={Word3}  key="laravel4"></Route>,
    <Route path={`/${url}/word4`} component={Word4}  key="laravel5"></Route>,
    <Route path={`/${url}/word5`} component={Word5}  key="laravel6"></Route>,
    <Route path={`/${url}/migration`} component={Migration}  key="laravel7"></Route>,
    <Route path={`/${url}/model`} component={Model}  key="laravel8"></Route>,
    <Route path={`/${url}/public1`} component={Public1}  key="laravel9"></Route>,
    <Route path={`/${url}/faker1`} component={Faker1}  key="laravel10"></Route>,


    <Route path={`/${url}/w504_1`} component={W504_1}  key="504_1"></Route>,
    <Route path={`/${url}/w504_2`} component={W504_2}  key="504_2"></Route>,

    <Route path={`/${url}/people`} component={People}  key="universal1"></Route>,

    <Route path={`/${url}/w1100_1`} component={W1100_1}  key='1100_1'></Route>,
] ;