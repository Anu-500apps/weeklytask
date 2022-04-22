import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
 import Que52 from '../components/Que52'
// import Que3 from '../components/Que3'
// import Que4 from '../components/Que4'
// import Que6 from '../components/Que6'
// import Q6 from '../components/Q6'
// import Q1 from '../components/assignment-6/Question1'
// import Q2 from '../components/assignment-6/Question2'
// import Que1 from '../components/assignment-6/Que1-2'
// import practice1 from "../components/practice /practice1"
// // import practice2 from "../components/practice /practice2"
// import practice3 from "../components/practice /practice3"
// import practice5 from "../components/practice /practice5"
// import practice10 from "../components/practice /practice10"
// import practice7 from "../components/practice /practice7"
// import practice4 from "../components/practice /practice4"
// import practice8 from "../components/practice /practice8"
// import practice2 from "../components/practice /practice2"
 import functions from "../components/practice /functions"
// import Api from '../components/practice /Api'
//  import ApiS from '../components/practice /Apis.vue'
// import Que5 from '../components/Que5'
// import ResT from '@/components/Rest'
import Question71 from '../components/Assignment-7/Question71'
import Question74 from '../components/Assignment-7/Question74'
import Question75 from '../components/Assignment-7/Question75'
//import Question77 from '../components/Assignment-7/Question77'
import Question710 from '../components/Assignment-7/Question710'
import Promise1 from '../components/practice /promise'
import Async from '../components/practice /Async'
import Promisee from '../components/practice /promise1'
import Promise2 from '../components/practice /promiseWithAxios'
Vue.use(Router)
const routes = [
    {
        path:'/hello',
        name:"HelloWorld",
        component:HelloWorld

    },
    // {
    //     path:'/rest',
    //     name:"ResT",
    //     component:ResT

    // },
    {
        path:'/que52',
        name:"Que52",
        component:Que52

    },
    // {
    //     path:'/que3',
    //     name:"Que3",
    //     component:Que3

    // },
    // {
    //     path:'/que4',
    //     name:"Que4",
    //     component:Que4

    // },
    // {
    //     path:'/que6',
    //     name:"Que6",
    //     component:Que6

    // },
    // {
    //     path:'/q6',
    //     name:"Q6",
    //     component:Q6

    // },
     //{path:'/question1',name:"Question1",component:Q1},
    // {path:'/question2',name:"Question2",component:Q2},
    // {path:'/q1',name:"Que1",component:Que1},
    // {path:'/p1',name:"practice1",component:practice1},
    // // {path:'/p2',name:"practice2",component:practice2},
    // {path:'/p3',name:"practice3",component:practice3},
    // {path:'/p5',name:"practice5",component:practice5},
    // {path:'/p10',name:"practice10",component:practice10},
    // {path:'/p7',name:"practice7",component:practice7},
    // {path:'/p4',name:"practice4",component:practice4},
    // {path:'/p8',name:"practice8",component:practice8},
    // {path:'/p2',name:"practice2",component:practice2},
    {path:'/fun',name:"functions",component:functions},
    // {path:'/api',name:"Apis",component:Api},
    //  {path:'/apis',name:"Apis1",component:ApiS},
    // {path:'/que5',name:"Que5",component:Que5},
    {path:'/question74',name:"Question74",component:Question74},
    {path:'/question75',name:"Question75",component:Question75},
    //{path:'/question77',name:"Question77",component:Question77}
    {path:'/question710',name:"Question710",component:Question710},
   {path:'/question71',name:"Question71",component:Question71},
   {path:'/promise',name:"Promise1",component:Promise1},
   {path:'/Async',name:"Async",component:Async},
   {path:'/promisee',name:"Promisee",component:Promisee},
   {path:'/promise2',name:"promise2",component:Promise2}
    
    
]



let router = new Router({routes})

 export default router
