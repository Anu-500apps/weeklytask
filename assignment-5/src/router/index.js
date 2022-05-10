import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Que52 from '../components/Que52'
import Que4 from '../components/Que4'
import Que6 from '../components/Que6'
import Q6 from '../components/Q6'
import Q2 from '../components/assignment-6/Question2'
import Que1 from '../components/assignment-6/Que1-2'
import Q3 from '../components/assignment-6/Question3'
import practice1 from "../components/practice /practice1"
//import practice2 from "../components/practice /practice2"
import practice3 from "../components/practice /practice3"
import practice5 from "../components/practice /practice5"
import practice10 from "../components/practice /practice10"
import practice7 from "../components/practice /practice7"
import practice4 from "../components/practice /practice4"
import practice8 from "../components/practice /practice8"
import practice2 from "../components/practice /practice2"
 import functions from "../components/practice /functions"
import Api from '../components/practice /Api'
 import ApiS from '../components/practice /Apis.vue'
import Que5 from '../components/Que5'
import ResT from '@/components/Rest'
import Question71 from '../components/Assignment-7/Question71'
import Question74 from '../components/Assignment-7/Question74'
import Question75 from '../components/Assignment-7/Question75'
import Question77 from '../components/Assignment-7/Question77'
import Question710 from '../components/Assignment-7/Question710'
import Promise1 from '../components/practice /promise'
import Async from '../components/practice /Async'
import Promisee from '../components/practice /promise1'
import Promise2 from '../components/practice /promiseWithAxios'
import Q81 from '../components/Assignment-8/Q81'
import Q82 from '../components/Assignment-8/Q82'
import Q86 from '../components/Assignment-8/Q86'
import Q87 from '../components/Assignment-8/Q87'
import Q88 from '../components/Assignment-8/Q88'
import Q89 from '../components/Assignment-8/Q89'
import Q810 from '../components/Assignment-8/Q810'
import Rough from '../components/practice /rough'
import Q91 from '../components/Assign9-26/Q91'
import Q92 from '../components/Assign9-26/Q92'
import Q93 from '../components/Assign9-26/Q93'
import Q94 from '../components/Assign9-26/Q94'
import Q95 from '../components/Assign9-26/Q95'
import Q96 from '../components/Assign9-26/Q96'
//import Crud from '../components/04-05-2022/Crud'
import Scrol from '../components/04-05-2022/Scrol'
import Q101 from '../components/Assign10-28/Q101'
import Q102 from '../components/Assign10-28/Q102'
import Q103 from '../components/Assign10-28/Q103'
import Q111 from '../components/Assign11-02/Q111'
import Q112 from '../components/Assign11-02/Q112'
import Q113 from '../components/Assign11-02/Q113'
import Q114 from '../components/Assign11-02/Q114'
import Q115 from '../components/Assign11-02/Q115'
import Q117 from '../components/Assign11-02/Q117'
import Q116 from '../components/Assign11-02/Q116'
import Q118 from '../components/Assign11-02/Q118'
import Spin from '../components/04-05-2022/spinner'
import hover from '../components/04-05-2022/Hoverdirective'
import balert from '../components/05-05-22/balert'
import sidebar from '../components/05-05-22/sidebar'
import Parent from '../components/06-05-22/Parent'
import Parent1 from '../components/06-05-22/parent1'
import Accord from '../components/06-05-22/Accord'
import accord from '../components/06-05-22/accord'
import Question1t from '../components/10-5-2022/Question1'
import Question2t from '../components/10-5-2022/Question2'







Vue.use(Router)
const routes = [
    {path:'/hello', name:"HelloWorld", component:HelloWorld},
    {path:'/rest',name:"ResT",component:ResT},
    {path:'/que52',name:"Que52",component:Que52},
    {path:'/que4',name:"Que4",component:Que4},
    {path:'/que6',name:"Que6",component:Que6},
    {path:'/q6',name:"Q6",component:Q6},
    {path:'/question2',name:"Question2",component:Q2},
    {path:'/q1',name:"Que1",component:Que1},
    {path:'/p1',name:"practice1",component:practice1},
    {path:'/p2',name:"practice2",component:practice2},
    {path:'/p3',name:"practice3",component:practice3},
    {path:'/p5',name:"practice5",component:practice5},
    {path:'/p10',name:"practice10",component:practice10},
    {path:'/p7',name:"practice7",component:practice7},
    {path:'/p4',name:"practice4",component:practice4},
    {path:'/p8',name:"practice8",component:practice8},
    {path:'/p2',name:"practice2",component:practice2},
    {path:'/fun',name:"functions",component:functions},
    {path:'/api',name:"Apis",component:Api},
    {path:'/apis',name:"Apis1",component:ApiS},
    {path:'/que5',name:"Que5",component:Que5},
    {path:'/question74',name:"Question74",component:Question74},
    {path:'/question75',name:"Question75",component:Question75},
    {path:'/question77',name:"Question77",component:Question77},
    {path:'/question710',name:"Question710",component:Question710},
    {path:'/question71',name:"Question71",component:Question71},
    {path:'/promise',name:"Promise1",component:Promise1},
    {path:'/Async',name:"Async",component:Async},
    {path:'/promisee',name:"Promisee",component:Promisee},
    {path:'/promise2',name:"promise2",component:Promise2},
    {path:'/q81',name:"Q81",component:Q81},
    {path:'/q82',name:"Q82",component:Q82},
    {path:'/q86',name:"Q86",component:Q86},
    {path:'/q87',name:"Q87",component:Q87},
    {path:'/q88',name:"Q88",component:Q88},
    {path:'/q89',name:"Q89",component:Q89},
    {path:'/q810',name:"Q810",component:Q810},
    {path:'/r1',name:"R1",component:Rough},
    {path:'/q91',name:"Q91",component:Q91},
    {path:'/q92',name:"Q92",component:Q92},
    {path:'/q93',name:"Q93",component:Q93},
    {path:'/q94',name:"Q94",component:Q94},
    {path:'/q95',name:"Q95",component:Q95},
    {path:'/q96',name:"Q96",component:Q96},
    //{path:'/crud',name:"Crud",component:Crud},
    {path:'/scrol',name:"Scrol",component:Scrol},
    {path:'/q101',name:"Q101",component:Q101},
    {path:'/q102',name:"Q102",component:Q102},
   {path:'/q103',name:"Q103",component:Q103},
   {path:'/q3',name:"Q3",component:Q3},
   {path:'/q111',name:"Q111",component:Q111},
   {path:'/q112',name:"Q112",component:Q112},
   {path:'/q113',name:"Q113",component:Q113},
   {path:'/q114',name:"Q114",component:Q114},
   {path:'/q115',name:"Q115",component:Q115},
   {path:'/q116',name:"Q116",component:Q116},
   {path:'/q117',name:"Q117",component:Q117},
   {path:'/q118',name:"Q118",component:Q118},
   {path:'/spin',name:"Spin",component:Spin},
   {path:'/hover',name:"hover",component:hover},
   {path:'/balert',name:"balert",component:balert},
   {path:'/sidebar',name:"sidebar",component:sidebar},
   {path:'/parent',name:"Parent",component:Parent},
   {path:'/parent1',name:"Parent1",component:Parent1},
   {path:'/accord',name:"Accord",component:Accord},
   {path:'/accord1',name:"accord",component:accord},
   {path:'/question1t',name:"Question1t",component:Question1t},
   {path:'/question2t',name:"Question2t",component:Question2t},

   








    
]

let router = new Router({routes})

 export default router
