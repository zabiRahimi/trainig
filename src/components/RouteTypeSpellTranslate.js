import { Route  } from "react-router-dom";
import Api1 from "./typeSpellTranslate/Api1";
import Word1 from "./typeSpellTranslate/Word1";

export default [
    <Route path='/typeSpellTranslate/api1' component={Api1}  key="1"></Route>,
    <Route path='/typeSpellTranslate/word1' component={Word1}  key="2"></Route>
] ;