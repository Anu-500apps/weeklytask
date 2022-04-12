import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Que52 from '../components/Que52'
import Que3 from '../components/Que3'
import Que4 from '../components/Que4'
import Que6 from '../components/Que6'
import Q6 from '../components/Q6'
import Q1 from '../components/assignment-5/Question1'
import Q2 from '../components/assignment-5/Question2'


Vue.use(Router)


const routes = [
    {
        path:'/hello',
        name:"HelloWorld",
        component:HelloWorld

    },
    {
        path:'/que52',
        name:"Que52",
        component:Que52

    },
    {
        path:'/que3',
        name:"Que3",
        component:Que3

    },
    {
        path:'/que4',
        name:"Que4",
        component:Que4

    },
    {
        path:'/que6',
        name:"Que6",
        component:Que6

    },
    {
        path:'/q6',
        name:"Q6",
        component:Q6

    },
    {path:'/question1',name:"Question1",component:Q1},
    {path:'/question2',name:"Question2",component:Q2},
]



let router = new Router({routes})

 export default router
