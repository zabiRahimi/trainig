import { Route  } from "react-router-dom";
import StartLaravel from "./lessonsDeveloper/laravel/StartLaravel";
import Api from "./lessonsDeveloper/laravel/Api";
import Vscode from "./lessonsDeveloper/universal/Vscode";
import AddLesson from "./lessonsDeveloper/AddLesson";
import Factory from "./lessonsDeveloper/laravel/Factory";
let url='lessonsDeveloper';
export default [
    //add lesson
    <Route path={`/${url}/addLesson`} component={AddLesson}  key="addLesson"></Route>,

    //laravel
    <Route path={`/${url}/startLaravel`} component={StartLaravel}  key="laravel1"></Route>,
    <Route path={`/${url}/api`} component={Api}  key="laravel2"></Route>,
    <Route path={`/${url}/factory`} component={Factory}  key='laravel3'></Route>,

    // universal
    <Route path={`/${url}/vscode`} component={Vscode}  key="universal1"></Route>,
] ;
// {`${url}/startLavravel`}