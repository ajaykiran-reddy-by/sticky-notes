import cooking1 from '../SVGs/cooking1.svg'
import cooking2 from '../SVGs/cooking2.svg'
import cooking3 from '../SVGs/cooking3.svg'
import finance1 from '../SVGs/finance1.svg'
import finance2 from '../SVGs/finance2.svg'
import finance3 from '../SVGs/finance3.svg'
import office1 from '../SVGs/office1.svg'
import office2 from '../SVGs/office2.svg'
import office3 from '../SVGs/office3.svg'
import personal1 from '../SVGs/personal1.svg'
import personal2 from '../SVGs/personal2.svg'
import personal3 from '../SVGs/personal3.svg'
import sports1 from '../SVGs/sports1.svg'
import sports2 from '../SVGs/sports2.svg'
import sports3 from '../SVGs/sports3.svg'
import travel1 from '../SVGs/travel1.svg'
import travel2 from '../SVGs/travel2.svg'
import travel3 from '../SVGs/travel3.svg'

const sectionLookups=[
    {
        colId:1,
        name:'Personal',
        value:'personal',
        color:'#f5b042'
    },
    {
        colId:2,
        name:'Work',
        value:'work',
        color:'#42f593'
    },
    {
        colId:3,
        name:'Cooking',
        value:'cooking',
        color:'#3caaf0'
    },
    {
        colId:4,
        name:'Sports',
        value:'sports',
        color:'#a55beb'
    },
    {
        colId:5,
        name:'Travel',
        value:'travel',
        color:'#e858c2'
    },
    {
        colId:6,
        name:'Finance',
        value:'finance',
        color:'#e8e658'
    }
]

const AvatarLookups=[
    {
        name:'Frying Pan',    
        img:cooking1,
        category:'cooking'
    },
    {
        name:'Fried Eggs',
        img:cooking2,
        category:'cooking'
    },
    {
        name:'Dish',
        img:cooking3,
        category:'cooking'
    },
    {
        name:'Money Flow',
        img:finance1,
        category:'finance',
    },
    {
        name:'Bills',
        img:finance2,
        category:'finance',
    },
    {
        name:'Savings',
        img:finance3,
        category:'finance',
    },
    {
        name:'Office Building',
        img:office1,
        category:'work',
    },
    {
        name:'Briefcase',
        img:office2,
        category:'work',
    },
    {
        name:'Professional',
        img:office3,
        category:'work',
    },
    {
        name:'Info',
        img:personal1,
        category:'personal',
    },
    {
        name:'User',
        img:personal2,
        category:'personal',
    },
    {
        name:'Home',
        img:personal3,
        category:'personal',
    },
    {
        name:'FootBall',
        img:sports1,
        category:'sports',
    },
    {
        name:'Tennis',
        img:sports2,
        category:'sports',
    },
    {
        name:'VolleyBall',
        img:sports3,
        category:'sports',
    },
    {
        name:'Family Trip',
        img:travel1,
        category:'travel',
    },
    {
        name:'Map',
        img:travel2,
        category:'travel',
    },
    {
        name:'Luggage',
        img:travel3,
        category:'travel',
    },



] 

export {
    sectionLookups,
    AvatarLookups,
}