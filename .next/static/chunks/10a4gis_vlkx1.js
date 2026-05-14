(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46854,e=>{"use strict";var t=e.i(91398),i=e.i(58678),n=e.i(41158),a=e.i(91788),o=e.i(60814),r=e.i(39748),s=e.i(11829);e.i(50461);var d=e.i(39016);function l(){let e=(0,a.useRef)(!1);return(0,d.useIsomorphicLayoutEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var p=e.i(73639),c=e.i(62946),m=e.i(57126),h=a,x=e.i(12600);class f extends h.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:i}){let n=(0,h.useId)(),a=(0,h.useRef)(null),o=(0,h.useRef)({width:0,height:0,top:0,left:0}),{nonce:r}=(0,h.useContext)(x.MotionConfigContext);return(0,h.useInsertionEffect)(()=>{let{width:e,height:t,top:s,left:d}=o.current;if(i||!a.current||!e||!t)return;a.current.dataset.motionPopId=n;let l=document.createElement("style");return r&&(l.nonce=r),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${s}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[i]),(0,t.jsx)(f,{isPresent:i,childRef:a,sizeRef:o,children:h.cloneElement(e,{ref:a})})}let g=({children:e,initial:i,isPresent:n,onExitComplete:o,custom:r,presenceAffectsLayout:s,mode:d})=>{let l=(0,m.useConstant)(w),p=(0,a.useId)(),h=(0,a.useMemo)(()=>({id:p,initial:i,isPresent:n,custom:r,onExitComplete:e=>{for(let t of(l.set(e,!0),l.values()))if(!t)return;o&&o()},register:e=>(l.set(e,!1),()=>l.delete(e))}),s?[Math.random()]:[n]);return(0,a.useMemo)(()=>{l.forEach((e,t)=>l.set(t,!1))},[n]),a.useEffect(()=>{n||l.size||!o||o()},[n]),"popLayout"===d&&(e=(0,t.jsx)(u,{isPresent:n,children:e})),(0,t.jsx)(c.PresenceContext.Provider,{value:h,children:e})};function w(){return new Map}var b=e.i(11535),y=e.i(86312);let v=e=>e.key||"",C=({children:e,custom:i,initial:n=!0,onExitComplete:o,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:c="sync"})=>{var m;let h;(0,y.invariant)(!r,"Replace exitBeforeEnter with mode='wait'");let x=(0,a.useContext)(b.LayoutGroupContext).forceRender||function(){let e=l(),[t,i]=(0,a.useState)(0),n=(0,a.useCallback)(()=>{e.current&&i(t+1)},[t]);return[(0,a.useCallback)(()=>p.frame.postRender(n),[n]),t]}()[0],f=l(),u=(h=[],a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&h.push(e)}),h),w=u,C=(0,a.useRef)(new Map).current,j=(0,a.useRef)(w),k=(0,a.useRef)(new Map).current,_=(0,a.useRef)(!0);if((0,d.useIsomorphicLayoutEffect)(()=>{_.current=!1,u.forEach(e=>{let t=v(e);k.set(t,e)}),j.current=w}),m=()=>{_.current=!0,k.clear(),C.clear()},(0,a.useEffect)(()=>()=>m(),[]),_.current)return(0,t.jsx)(t.Fragment,{children:w.map(e=>(0,t.jsx)(g,{isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:s,mode:c,children:e},v(e)))});w=[...w];let M=j.current.map(v),A=u.map(v),N=M.length;for(let e=0;e<N;e++){let t=M[e];-1!==A.indexOf(t)||C.has(t)||C.set(t,void 0)}return"wait"===c&&C.size&&(w=[]),C.forEach((e,n)=>{if(-1!==A.indexOf(n))return;let a=k.get(n);if(!a)return;let r=M.indexOf(n),d=e;d||(d=(0,t.jsx)(g,{isPresent:!1,onExitComplete:()=>{C.delete(n);let e=Array.from(k.keys()).filter(e=>!A.includes(e));if(e.forEach(e=>k.delete(e)),j.current=u.filter(t=>{let i=v(t);return i===n||e.includes(i)}),!C.size){if(!1===f.current)return;x(),o&&o()}},custom:i,presenceAffectsLayout:s,mode:c,children:a},v(a)),C.set(n,d)),w.splice(r,0,d)}),w=w.map(e=>{let i=e.key;return C.has(i)?e:(0,t.jsx)(g,{isPresent:!0,presenceAffectsLayout:s,mode:c,children:e},v(e))}),(0,t.jsx)(t.Fragment,{children:C.size?w:w.map(e=>(0,a.cloneElement)(e))})},j=(0,o.default)(s.motion.div).withConfig({displayName:"Modal__ModalOverlay",componentId:"sc-bd287b6a-0"})`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  padding: 50px;

  @media (max-width: 600px) {
    padding: 0;
    z-index: 12;
    overflow: auto;
    height: auto;
  }
`,k=o.default.div.withConfig({displayName:"Modal__ModalContent",componentId:"sc-bd287b6a-1"})`
  width: 748px;
  height: auto;
  background-color: #fff;
  padding: 50px 60px;
  position: relative;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 0;
    padding-bottom: 44px;
  }
`,_=o.default.div.withConfig({displayName:"Modal__ModalHeader",componentId:"sc-bd287b6a-2"})`
  max-width: 748px;
  width: 100%;
  height: 114.96px;
  background-color: #46785c;
  background-image: url('/modal-header-bg.webp');
  background-repeat: no-repeat;
  background-position: 107%;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 600px) {
    background-position-x: 30px;
    background-color: #1a4f31;
    position: relative;
    height: 68.84px;
  }

  @media (max-width: 400px) {
    background-position-x: -30px;
  }

  @media (max-width: 375px) {
    background-position-x: -20px;
  }
`,M=o.default.div.withConfig({displayName:"Modal__Content",componentId:"sc-bd287b6a-3"})`
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media (max-width: 600px) {
    padding: 34px 26px 0 26px;
  }
`,A=o.default.div.withConfig({displayName:"Modal__HeaderContainer",componentId:"sc-bd287b6a-4"})`
  display: flex;
  z-index: 3;
  align-items: flex-end;
  margin-bottom: 39px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }
`,N=o.default.img.withConfig({displayName:"Modal__TeamPic",componentId:"sc-bd287b6a-5"})`
  width: 163.24px;
  height: 166.31px;
  object-fit: cover;
`,B=o.default.h4.withConfig({displayName:"Modal__TeamName",componentId:"sc-bd287b6a-6"})`
  margin-left: 32px;
  font-size: 27.59px;
  font-weight: 400;
  color: #46785c;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 44px;
    margin-left: 0;
  }
`,I=o.default.h4.withConfig({displayName:"Modal__TeamTitle",componentId:"sc-bd287b6a-7"})`
  font-size: 24px;
  color: #000;
  font-weight: 400;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`,P=o.default.p.withConfig({displayName:"Modal__TeamText",componentId:"sc-bd287b6a-8"})`
  font-size: 16px;
  font-weight: 300;
  color: #000;
`,T=o.default.div.withConfig({displayName:"Modal__Footer",componentId:"sc-bd287b6a-9"})`
  border-top: 1px solid #dddddd;
  padding-top: 18px;
  margin-top: 50px;

  p {
    font-size: 14px;
    font-weight: 300;
    color: #000;
  }
`,z=o.default.button.withConfig({displayName:"Modal__CloseButton",componentId:"sc-bd287b6a-10"})`
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 37px;
  top: 57px;
  cursor: pointer;

  @media (max-width: 700px) {
    top: 27px;
    right: 24px;
    img {
      width: 13px;
      height: 13px;
    }
  }
`,E={initial:{opacity:0},isOpen:{opacity:1},exit:{opacity:0}},R=({data:e,handleClose:i})=>{let n,o=(n=(0,a.useRef)(),(0,a.useEffect)(()=>{let e=e=>{n.current&&!n.current.contains(e.target)&&i()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[i]),n);return(0,t.jsx)(C,{children:!!e&&(0,t.jsx)(j,{initial:"initial",animate:"isOpen",exit:"exit",variants:E,children:(0,t.jsxs)(k,{ref:o,children:[(0,t.jsx)(_,{}),(0,t.jsxs)(M,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(z,{onClick:i,children:(0,t.jsx)("img",{src:"/close.svg",alt:"close"})}),(0,t.jsx)(N,{src:e?.pic}),(0,t.jsx)(B,{children:e?.name})]}),(0,t.jsx)(I,{children:e?.title}),(0,t.jsx)(P,{dangerouslySetInnerHTML:{__html:e?.text||""}}),(0,t.jsx)(T,{children:e?.skills.map(e=>(0,t.jsx)("p",{children:e},e))})]})]})})})};var S=e.i(34523);let F=o.default.div.withConfig({displayName:"about-us__Container",componentId:"sc-a598b1f8-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,L=o.default.section.withConfig({displayName:"about-us__TextSectionContainer",componentId:"sc-a598b1f8-1"})`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url('/text-section-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* height: 488px; */

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 750px) {
    background-color: #fff;
    background-image: none;
    height: auto;
    padding-top: 65px;
    padding-bottom: 45px;
    align-items: flex-start;
    justify-content: flex-start;
  }

  border-bottom: 1px solid #c5c5c5;

  ${S.HORIZONTAL_SPACE}

  .text-card {
    display: flex;
    gap: 56px;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 101px;
    padding-bottom: 120px;

    &:first-child {
      border-right: 1px solid #c5c5c5;
      padding-right: 94px;
    }

    &:last-child {
      padding-left: 94px;
    }

    @media (max-width: 1360px) {
      &:first-child {
        padding-right: 50px;
      }

      &:last-child {
        padding-left: 50px;
      }
    }

    @media (max-width: 950px) {
      padding-top: 50px;
      padding-bottom: 50px;

      &:first-child {
        padding-right: 0;
        border: none;
        border-bottom: 1px solid #c5c5c5;
      }

      &:last-child {
        padding-left: 0;
      }
    }

    img {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    h3 {
      padding-top: 18px;
      font-size: 22px;
      font-weight: 500;
      color: #000;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      color: #000;
      margin-top: 49px;
      margin-bottom: 48px;
    }

    a {
      font-size: 18px;
      font-weight: 300;
      color: #46785c;
    }
  }
`;o.default.p.withConfig({displayName:"about-us__TextSection",componentId:"sc-a598b1f8-2"})`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  line-height: 50.4px;
  max-width: 90%;
  margin: 0 auto;
  max-width: 1124px;

  @media (max-width: 750px) {
    font-size: 22px;
    line-height: 30.05px;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 500px) {
    text-align: left;
    max-width: 100%;
    width: 100%;
  }
`;let O=o.default.div.withConfig({displayName:"about-us__GalleryContainer",componentId:"sc-a598b1f8-3"})`
  padding-top: 63px;
  padding-bottom: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;

  @media (max-width: 1190px) {
    padding-bottom: 103px;
    padding: 63px 24px 103px 24px;
  }

  @media (max-width: 900px) {
    padding-top: 0;
  }
`,U=o.default.div.withConfig({displayName:"about-us__GalleryInnerContainer",componentId:"sc-a598b1f8-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1124px;

  @media (max-width: 1190px) {
    max-width: 100%;
    width: 100%;
  }
`,G=o.default.h2.withConfig({displayName:"about-us__GalleryTitle",componentId:"sc-a598b1f8-5"})`
  width: 100%;
  max-width: 1140px;
  font-size: 32px;
  font-weight: 400;

  @media (max-width: 1190px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`,H=o.default.ul.withConfig({displayName:"about-us__Gallery",componentId:"sc-a598b1f8-6"})`
  list-style: none;
  margin-top: 43px;
  display: grid;
  grid-template-columns: repeat(2, 49%);
  gap: 24px;
  width: 100%;
  max-width: 1140px;
  z-index: 5;

  @media (max-width: 1195px) {
    max-width: 100%;
    width: 100%;
    /* grid-template-columns: repeat(2, 40%); */
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
`,W=o.default.div.withConfig({displayName:"about-us__GalleryCard",componentId:"sc-a598b1f8-7"})`
  border: 1px solid #d9d9d9;
  padding: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media (max-width: 1195px) {
    padding: 28px;
  }
`,J=o.default.div.withConfig({displayName:"about-us__GalleryCardPic",componentId:"sc-a598b1f8-8"})`
  width: 452px;
  height: 262px;
  background-size: cover;
  background-position: 10% 10%;
  margin-bottom: 47px;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    margin-bottom: 27px;
    background-position: 15px;
  }

  @media (max-width: 550px) {
    background-position-x: -40px;
  }

  @media (max-width: 375px) {
    height: 157.05px;
  }
`,D=o.default.p.withConfig({displayName:"about-us__GalleryCardName",componentId:"sc-a598b1f8-9"})`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin-bottom: 9px;
  }
`,$=o.default.div.withConfig({displayName:"about-us__GalleryCardTitle",componentId:"sc-a598b1f8-10"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 26px;
  margin-bottom: 16px;

  p {
    color: #46785c;
    font-size: 22px;
    font-weight: 400;
  }

  img {
    width: 26px;
    height: 24px;
    margin-right: 24px;
    align-self: flex-end;

    transition: 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 700px) {
    p {
      font-size: 14px;
    }
    margin-bottom: 9px;

    img {
      width: 15px;
      height: 14px;
      margin-right: 14px;
    }
  }
`,X=o.default.button.withConfig({displayName:"about-us__GalleryCardSeeMore",componentId:"sc-a598b1f8-11"})`
  font-size: 22px;
  font-weight: 600;
  text-decoration: underline;
  color: #46785c;
  border: none;
  outline: none;
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`,K=o.default.div.withConfig({displayName:"about-us__AboutIllustrationBackground",componentId:"sc-a598b1f8-12"})`
  width: 800px;
  height: 900px;
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1190px) {
    display: none;
  }

  .circle {
    width: 622px;
    height: 622px;
    border-radius: 100%;
    margin-top: 48px;
    border: 2px solid #737373;
    opacity: 0.1;
  }

  .line {
    height: 900px;
    width: 2px;
    opacity: 0.3;
    position: absolute;
    top: -50%;
    background-color: #737373;
    transform: rotate(50deg) translateX(300px);
  }
`,q=[{pic:"/mauro.png",shortTitle:"CEO & CIO",name:"Mauro Ferman",title:"Mr. Ferman is the founding partner at Abacus Capital Advisors and serves as the firm's CEO.",linkdin:"https://www.linkedin.com/in/mauro-ferman-744a731/",skills:["B.A. Economics - Tufts University","MBA - Tuck School of Business at Dartmouth College"],text:"Mauro is the founding partner at Abacus Capital Advisors and serves as the firm's CEO. With over 21 years of portfolio management and research experience, Mauro has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra. His most recent position was a senior member at a $10B multi-family office located in Miami, FL."},{pic:"/lerroi.png",shortTitle:"Portfolio Manager",title:"Portfolio Manager",name:"William P. Smythe",linkdin:"https://www.linkedin.com/in/wsmythe/",skills:["B.A. Economics – Case Western Reserve University","Masters:  Finance – MIT Sloan School of Management"],text:"Will is a portfolio manager at Abacus Capital Advisors and serves as the PM of the Alpha Prime Equity strategy at the firm. With over 10 years of experience, Will founded Alpha Prime Capital and has also worked at The Glenmede Trust Company as a Portfolio Manager."},{pic:"/jarvis.png",shortTitle:"Business Development - Sports ",title:"Business Development - Sports",name:"Jarvis Johnson",linkdin:"https://www.linkedin.com/in/j-johnson-m-s-7a692a140/",skills:["B.A. Administration of Justice - Rutgers University","M.S. - Counseling - Tiffin University"],text:"Jarvis Johnson: Jarvis is solicitor for the firm with a focus on sport clients. With over 15 years of experience in the sports industry, Jarvis played professionally in the N.F.L. for the Baltimore Ravens, coached in the NCAA, worked with over 700 plus former, current and retired N.F.L. players. Currently, Jarvis is an Entrepreneur, Film Producer and provides Business Development with the N.F.L. Alumni Association."},{pic:"/joel.png",shortTitle:"Business Development - Panama",title:"Business Development - Panama",name:"Joel Moran",linkdin:"https://www.linkedin.com/in/joel-moran-121776123/",skills:["International Business - Universidad Latina de Panamá"],text:`Joel is a Panamanian Investment Advisor with 15 years of experience. He is currently working as a business development professional for the firm soliciting clients from Spanish speaking South American countries 
          <br/><br/>
          He previously worked at HSBC Private Bank, Prival Bank, and most recently at Singular Wealth Management.`},{pic:"/benjamin-martin.webp",shortTitle:"Financial Advisor",title:"Financial Advisor",name:"Benjamin Martin",linkdin:"https://www.linkedin.com/in/ben-martin-60b935219/",skills:["B.A. Biopsychology - Tufts University","MBA - Loyola Marymount"],text:"Ben is a Financial Advisor at Abacus Capital Advisors, He worked as a financial consultant for 18 years for many of the Fortune 500 companies such as Walt Disney, Warner Brothers, 20th Century Fox and NBC/Universal, before transitioning to a financial advisory role 3 years ago."},{pic:"/rodrigo.jpg",shortTitle:"Operations",title:"Operations",name:"Rodrigo Carvalho",linkdin:"https://www.linkedin.com/in/rodrigo-carvalho-de-ara%C3%BAjo-61748b26/",skills:["Master Degree - Accounting","MBA of Controllership"],text:"Rodrigo is a Brazilian with over 25 years of experience in the financial sector. He has lived in the USA for 5 years and currently works as a business development professional for the company, attracting Brazilian clients.Previously, he worked in Brazil for 18 years at the Pension Fund - FUNCEF and in the USA at BB Americas and, more recently, at Bradesco Bank."}];e.s(["AboutIllustrationBackground",0,K,"default",0,function(){let[e,o]=(0,a.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"About Us | Abacus"}),(0,t.jsx)("meta",{property:"og:description",content:"Learn about Abacus Capital Advisors, our team and our services providing exceptional wealth management and financial services."}),(0,t.jsx)("meta",{name:"keywords",content:"About Us"})]}),(0,t.jsx)(r.default,{}),(0,t.jsxs)(F,{children:[(0,t.jsx)(R,{data:e,handleClose:()=>o(null)}),(0,t.jsxs)(L,{children:[(0,t.jsxs)("div",{className:"text-card",children:[(0,t.jsx)("img",{src:"/money-1.svg"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Portfolio Management"}),(0,t.jsx)("p",{children:"Real-time monitoring, research driven investment portfolio construction."}),(0,t.jsx)(n.default,{href:"/portfolio-management",children:"More"})]})]}),(0,t.jsxs)("div",{className:"text-card",children:[(0,t.jsx)("img",{src:"/family-1.svg"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Family Office"}),(0,t.jsx)("p",{children:"Comprehensive private client services and support for all our families."}),(0,t.jsx)(n.default,{href:"/family-office-services",children:"More"})]})]})]}),(0,t.jsxs)(O,{children:[(0,t.jsxs)(K,{children:[(0,t.jsx)("div",{className:"circle"}),(0,t.jsx)("div",{className:"line"})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(G,{children:"Team"}),(0,t.jsx)(H,{children:q.map((e,i)=>(0,t.jsxs)(W,{children:[(0,t.jsx)(J,{className:`pic${i}`,style:{backgroundImage:`url(${e.pic})`}}),(0,t.jsx)(D,{children:e.name}),(0,t.jsxs)($,{children:[(0,t.jsx)(n.default,{target:"_blank",href:e.linkdin,children:(0,t.jsx)("img",{src:"/linkdin.svg"})}),(0,t.jsxs)("p",{children:[" ",e.shortTitle]})]}),(0,t.jsx)(X,{onClick:()=>o(e),children:"Read more"})]},e.name))})]})]})]})]})}],46854)},65188,(e,t,i)=>{let n="/about-us";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(46854)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);