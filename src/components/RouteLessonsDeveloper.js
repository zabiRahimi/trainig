import { Route  } from "react-router-dom";
import StartLaravel from "./lessonsDeveloper/laravel/StartLaravel";
import Api from "./lessonsDeveloper/laravel/Api";
import Vscode from "./lessonsDeveloper/universal/Vscode";
import AddLesson from "./lessonsDeveloper/AddLesson";
let url='lessonsDeveloper';
export default [
    //add lesson
    <Route path={`/${url}/addLesson`} component={AddLesson}  key="addLesson"></Route>,

    //laravel
    <Route path={`/${url}/startLaravel`} component={StartLaravel}  key="1"></Route>,
    <Route path={`/${url}/api`} component={Api}  key="2"></Route>,

    // universal
    <Route path={`/${url}/vscode`} component={Vscode}  key="universal1"></Route>,
] ;
// {`${url}/startLavravel`}