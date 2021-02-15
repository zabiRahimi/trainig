import { Route  } from "react-router-dom";
import StartLaravel from "./lessonsDeveloper/laravel/StartLaravel";
import Api from "./lessonsDeveloper/laravel/Api";
let url='lessonsDeveloper';
export default [
    <Route path={`/${url}/startLaravel`} component={StartLaravel}  key="1"></Route>,
    <Route path={`/${url}/api`} component={Api}  key="2"></Route>
] ;
// {`${url}/startLavravel`}