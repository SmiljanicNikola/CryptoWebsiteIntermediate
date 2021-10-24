import imageOne from '../../images/svg-4.svg'
import imageTwo from '../../images/svg-3.svg'
import imageThree from '../../images/svg-2.svg'

export const homeObjOne = {
    id:'about',
    lightBg:false,
    lightText:true,
    darkText:false,
    topLine:'Premium Bank',
    headLine:'Unlimited money with a lot of circumstaines',
    description:'Do you need money? Alright, we will enable you to get it. Tick-Tock, time is crueling.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: imageOne,
    alt: 'Car',
    dark:true,
    primary:true,
    darkText: false
};

export const homeObjTwo = {
    id:'discover',
    lightBg:true,
    lightText:false,
    darkText:false,
    topLine:'Unlimited access',
    headLine:'Hurry up, fast transactions, fast life!',
    description:'Do you need money? Alright, we will enable you to get it. Tick-Tock, time is crueling.',
    buttonLabel: 'Learn start',
    imgStart: true,
    img: imageTwo,
    alt: 'Money',
    dark:false,
    primary:false,
    darkText: true
};

export const homeObjThree = {
    id:'sign-up',
    lightBg:true,
    lightText:false,
    darkText:false,
    topLine:'Join us',
    headLine:'Easy to join us, a lot of benefits if you do.',
    description:'Granted very fast, dont waste time and join us while we are on the rise. Tommorow will be more expensive.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: imageThree,
    alt: 'Paper',
    dark:false,
    primary:false,
    darkText: true
};