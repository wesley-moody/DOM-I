const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// document.querySelector

// const navBar = document.querySelectorAll('nav a')

// const navBarTest = siteContent[Object.keys(siteContent)[0]];
const navContainer = document.querySelector('nav')

const newNavItem1 = document.createElement('div')
const newNavItem2 = document.createElement('div')

const navAnchor  = document.querySelectorAll('a')
navAnchor.forEach(item => item.style.color = 'green')

// Ask why we weren't able to insert an anchor tag only a div tag
newNavItem1.textContent = 'Hello'
newNavItem1.style.color = 'green'
navContainer.prepend(newNavItem1)


newNavItem2.textContent = 'Goodbye'
newNavItem2.style.color = 'green'
navContainer.appendChild(newNavItem2)


// Is there a way to streamline this code below or they have to be
// stated explicitely?

// for (let i = 0; i < navbar.length; i++){
//   navbar[i].textContent = navb
// }

const navAnchorOne = navAnchor[0];
navAnchorOne.textContent = 'Services';

const navAnchorTwo = navAnchor[1];
navAnchorTwo.textContent = 'Product';

const navAnchorThree = navAnchor[2];
navAnchorThree.textContent = 'Vision';

const navAnchorFour = navAnchor[3];
navAnchorFour.textContent = 'Features';

const navAnchorFive = navAnchor[4];
navAnchorFive.textContent = 'About';

const navAnchorSix = navAnchor[5];
navAnchorSix.textContent = 'Content';

// Container
// const document = document.querySelector('container')


// CTA anything

const tester = document.querySelector('.cta')
tester.style.backgroundColor = 'dodgerblue'

// wes.style.backgroundColor('blue');

// section.style.flexWrap = 'wrap'
// cta.style.backgroundColor = 

// const top = document.querySelector(cta)


// headline change
const headline = document.querySelector('h1');
headline.setAttribute('style', 'white-space: pre;');
headline.textContent = 'Dom \r\n Is \r\n Awesome'
headline.style.color = 'yellow'
headline.style.width = '20rem'

// button
const getButton = document.querySelector('button')
getButton.style.color = 'yellow'
getButton.style.backgroundColor = 'darkgrey'
getButton.textContent = 'Get Started'
// getButton.onmouseover.backgroundColor = 'orange'
// cod img
const codeImg = document.getElementById('cta-img')
codeImg.setAttribute('src', 'img/header-img.png')

//Main-Content
const boob = document.querySelectorAll('maincontent')
// boob.style.backgroundColor = 'grey'


// h4 and p
const desc = document.querySelectorAll('h4');
const descT = document.querySelectorAll('p')

const title1 = desc[0]
title1.style.color = 'red'
const text1 = descT[0]

title1.textContent = 'Features'
text1.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const title2 = desc[1]
title2.style.color = 'royalblue'
const text2 = descT[1]

title2.textContent = 'About'
text2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const title3 = desc[2]
title3.style.color = 'green'
const text3 = descT[2]

title3.textContent = 'services'
text3.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const title4 = desc[3]
title4.style.color = 'orange'
const text4 = descT[3]

title4.textContent = 'Product'
text4.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const title5 = desc[4]
title5.style.color = 'tomato'
const text5 = descT[4]

title5.textContent = 'Vision'
text5.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// banner img
const bannerImg = document.getElementById('middle-img')
bannerImg.setAttribute('src', 'img/mid-page-accent.jpg') 

// Contact change
const bottomDesc = document.querySelector('.contact h4')
bottomDesc.textContent = 'Contact'

const bottomDescT = document.querySelectorAll('.contact p')
const contactText = bottomDescT[0]

contactText.setAttribute('style', 'white-space: pre;');
contactText.textContent = '123 Way 456 Street \r\n Somewhere, USA'

const phoneText = bottomDescT[1]
phoneText.textContent = '1 (888) 888-8888'

const emailText = bottomDescT[2]
emailText.textContent = 'sales@greatidea.io'

const feet = document.querySelector('footer p')
feet.textContent = 'Copyright Great Idea! 2018'



















