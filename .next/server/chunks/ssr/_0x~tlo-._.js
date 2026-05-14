module.exports=[34135,a=>{"use strict";var b=a.i(27669);a.s(["default",0,a=>{let c=(0,b.useRef)();return(0,b.useEffect)(()=>{let b=b=>{c.current&&!c.current.contains(b.target)&&a()};return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[a]),c}])},73296,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(42931),f=a.i(37672),g=a.i(34135),h=b([f]);[f]=h.then?(await h)():h;let i=(0,e.default)(f.motion.div).withConfig({displayName:"Modal__ModalOverlay",componentId:"sc-bd287b6a-0"})`
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
`,j=e.default.div.withConfig({displayName:"Modal__ModalContent",componentId:"sc-bd287b6a-1"})`
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
`,k=e.default.div.withConfig({displayName:"Modal__ModalHeader",componentId:"sc-bd287b6a-2"})`
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
`,l=e.default.div.withConfig({displayName:"Modal__Content",componentId:"sc-bd287b6a-3"})`
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media (max-width: 600px) {
    padding: 34px 26px 0 26px;
  }
`,m=e.default.div.withConfig({displayName:"Modal__HeaderContainer",componentId:"sc-bd287b6a-4"})`
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
`,n=e.default.img.withConfig({displayName:"Modal__TeamPic",componentId:"sc-bd287b6a-5"})`
  width: 163.24px;
  height: 166.31px;
  object-fit: cover;
`,o=e.default.h4.withConfig({displayName:"Modal__TeamName",componentId:"sc-bd287b6a-6"})`
  margin-left: 32px;
  font-size: 27.59px;
  font-weight: 400;
  color: #46785c;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 44px;
    margin-left: 0;
  }
`,p=e.default.h4.withConfig({displayName:"Modal__TeamTitle",componentId:"sc-bd287b6a-7"})`
  font-size: 24px;
  color: #000;
  font-weight: 400;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`,q=e.default.p.withConfig({displayName:"Modal__TeamText",componentId:"sc-bd287b6a-8"})`
  font-size: 16px;
  font-weight: 300;
  color: #000;
`,r=e.default.div.withConfig({displayName:"Modal__Footer",componentId:"sc-bd287b6a-9"})`
  border-top: 1px solid #dddddd;
  padding-top: 18px;
  margin-top: 50px;

  p {
    font-size: 14px;
    font-weight: 300;
    color: #000;
  }
`,s=e.default.button.withConfig({displayName:"Modal__CloseButton",componentId:"sc-bd287b6a-10"})`
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
`,t={initial:{opacity:0},isOpen:{opacity:1},exit:{opacity:0}};a.s(["ModalTeam",0,({data:a,handleClose:b})=>{let c=(0,g.default)(b);return(0,d.jsx)(f.AnimatePresence,{children:!!a&&(0,d.jsx)(i,{initial:"initial",animate:"isOpen",exit:"exit",variants:t,children:(0,d.jsxs)(j,{ref:c,children:[(0,d.jsx)(k,{}),(0,d.jsxs)(l,{children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(s,{onClick:b,children:(0,d.jsx)("img",{src:"/close.svg",alt:"close"})}),(0,d.jsx)(n,{src:a?.pic}),(0,d.jsx)(o,{children:a?.name})]}),(0,d.jsx)(p,{children:a?.title}),(0,d.jsx)(q,{dangerouslySetInnerHTML:{__html:a?.text||""}}),(0,d.jsx)(r,{children:a?.skills.map(a=>(0,d.jsx)("p",{children:a},a))})]})]})})})}]),c()}catch(a){c(a)}},!1),4594,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(19059),f=a.i(1257),g=a.i(27669),h=a.i(42931),i=a.i(95272),j=a.i(73296),k=a.i(36410),l=b([j]);[j]=l.then?(await l)():l;let m=h.default.div.withConfig({displayName:"about-us__Container",componentId:"sc-a598b1f8-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,n=h.default.section.withConfig({displayName:"about-us__TextSectionContainer",componentId:"sc-a598b1f8-1"})`
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

  ${k.HORIZONTAL_SPACE}

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
`;h.default.p.withConfig({displayName:"about-us__TextSection",componentId:"sc-a598b1f8-2"})`
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
`;let o=h.default.div.withConfig({displayName:"about-us__GalleryContainer",componentId:"sc-a598b1f8-3"})`
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
`,p=h.default.div.withConfig({displayName:"about-us__GalleryInnerContainer",componentId:"sc-a598b1f8-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1124px;

  @media (max-width: 1190px) {
    max-width: 100%;
    width: 100%;
  }
`,q=h.default.h2.withConfig({displayName:"about-us__GalleryTitle",componentId:"sc-a598b1f8-5"})`
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
`,r=h.default.ul.withConfig({displayName:"about-us__Gallery",componentId:"sc-a598b1f8-6"})`
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
`,s=h.default.div.withConfig({displayName:"about-us__GalleryCard",componentId:"sc-a598b1f8-7"})`
  border: 1px solid #d9d9d9;
  padding: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media (max-width: 1195px) {
    padding: 28px;
  }
`,t=h.default.div.withConfig({displayName:"about-us__GalleryCardPic",componentId:"sc-a598b1f8-8"})`
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
`,u=h.default.p.withConfig({displayName:"about-us__GalleryCardName",componentId:"sc-a598b1f8-9"})`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin-bottom: 9px;
  }
`,v=h.default.div.withConfig({displayName:"about-us__GalleryCardTitle",componentId:"sc-a598b1f8-10"})`
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
`,w=h.default.button.withConfig({displayName:"about-us__GalleryCardSeeMore",componentId:"sc-a598b1f8-11"})`
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
`,x=h.default.div.withConfig({displayName:"about-us__AboutIllustrationBackground",componentId:"sc-a598b1f8-12"})`
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
`,y=[{pic:"/mauro.png",shortTitle:"CEO & CIO",name:"Mauro Ferman",title:"Mr. Ferman is the founding partner at Abacus Capital Advisors and serves as the firm's CEO.",linkdin:"https://www.linkedin.com/in/mauro-ferman-744a731/",skills:["B.A. Economics - Tufts University","MBA - Tuck School of Business at Dartmouth College"],text:"Mauro is the founding partner at Abacus Capital Advisors and serves as the firm's CEO. With over 21 years of portfolio management and research experience, Mauro has worked at many prestigious banks such as Morgan Stanley, Santander, BTG Pactual and Safra. His most recent position was a senior member at a $10B multi-family office located in Miami, FL."},{pic:"/lerroi.png",shortTitle:"Portfolio Manager",title:"Portfolio Manager",name:"William P. Smythe",linkdin:"https://www.linkedin.com/in/wsmythe/",skills:["B.A. Economics – Case Western Reserve University","Masters:  Finance – MIT Sloan School of Management"],text:"Will is a portfolio manager at Abacus Capital Advisors and serves as the PM of the Alpha Prime Equity strategy at the firm. With over 10 years of experience, Will founded Alpha Prime Capital and has also worked at The Glenmede Trust Company as a Portfolio Manager."},{pic:"/jarvis.png",shortTitle:"Business Development - Sports ",title:"Business Development - Sports",name:"Jarvis Johnson",linkdin:"https://www.linkedin.com/in/j-johnson-m-s-7a692a140/",skills:["B.A. Administration of Justice - Rutgers University","M.S. - Counseling - Tiffin University"],text:"Jarvis Johnson: Jarvis is solicitor for the firm with a focus on sport clients. With over 15 years of experience in the sports industry, Jarvis played professionally in the N.F.L. for the Baltimore Ravens, coached in the NCAA, worked with over 700 plus former, current and retired N.F.L. players. Currently, Jarvis is an Entrepreneur, Film Producer and provides Business Development with the N.F.L. Alumni Association."},{pic:"/joel.png",shortTitle:"Business Development - Panama",title:"Business Development - Panama",name:"Joel Moran",linkdin:"https://www.linkedin.com/in/joel-moran-121776123/",skills:["International Business - Universidad Latina de Panamá"],text:`Joel is a Panamanian Investment Advisor with 15 years of experience. He is currently working as a business development professional for the firm soliciting clients from Spanish speaking South American countries 
          <br/><br/>
          He previously worked at HSBC Private Bank, Prival Bank, and most recently at Singular Wealth Management.`},{pic:"/benjamin-martin.webp",shortTitle:"Financial Advisor",title:"Financial Advisor",name:"Benjamin Martin",linkdin:"https://www.linkedin.com/in/ben-martin-60b935219/",skills:["B.A. Biopsychology - Tufts University","MBA - Loyola Marymount"],text:"Ben is a Financial Advisor at Abacus Capital Advisors, He worked as a financial consultant for 18 years for many of the Fortune 500 companies such as Walt Disney, Warner Brothers, 20th Century Fox and NBC/Universal, before transitioning to a financial advisory role 3 years ago."},{pic:"/rodrigo.jpg",shortTitle:"Operations",title:"Operations",name:"Rodrigo Carvalho",linkdin:"https://www.linkedin.com/in/rodrigo-carvalho-de-ara%C3%BAjo-61748b26/",skills:["Master Degree - Accounting","MBA of Controllership"],text:"Rodrigo is a Brazilian with over 25 years of experience in the financial sector. He has lived in the USA for 5 years and currently works as a business development professional for the company, attracting Brazilian clients.Previously, he worked in Brazil for 18 years at the Pension Fund - FUNCEF and in the USA at BB Americas and, more recently, at Bradesco Bank."}];a.s(["AboutIllustrationBackground",0,x,"default",0,function(){let[a,b]=(0,g.useState)(null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.default,{children:[(0,d.jsx)("title",{children:"About Us | Abacus"}),(0,d.jsx)("meta",{property:"og:description",content:"Learn about Abacus Capital Advisors, our team and our services providing exceptional wealth management and financial services."}),(0,d.jsx)("meta",{name:"keywords",content:"About Us"})]}),(0,d.jsx)(i.default,{}),(0,d.jsxs)(m,{children:[(0,d.jsx)(j.ModalTeam,{data:a,handleClose:()=>b(null)}),(0,d.jsxs)(n,{children:[(0,d.jsxs)("div",{className:"text-card",children:[(0,d.jsx)("img",{src:"/money-1.svg"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Portfolio Management"}),(0,d.jsx)("p",{children:"Real-time monitoring, research driven investment portfolio construction."}),(0,d.jsx)(f.default,{href:"/portfolio-management",children:"More"})]})]}),(0,d.jsxs)("div",{className:"text-card",children:[(0,d.jsx)("img",{src:"/family-1.svg"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Family Office"}),(0,d.jsx)("p",{children:"Comprehensive private client services and support for all our families."}),(0,d.jsx)(f.default,{href:"/family-office-services",children:"More"})]})]})]}),(0,d.jsxs)(o,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)("div",{className:"circle"}),(0,d.jsx)("div",{className:"line"})]}),(0,d.jsxs)(p,{children:[(0,d.jsx)(q,{children:"Team"}),(0,d.jsx)(r,{children:y.map((a,c)=>(0,d.jsxs)(s,{children:[(0,d.jsx)(t,{className:`pic${c}`,style:{backgroundImage:`url(${a.pic})`}}),(0,d.jsx)(u,{children:a.name}),(0,d.jsxs)(v,{children:[(0,d.jsx)(f.default,{target:"_blank",href:a.linkdin,children:(0,d.jsx)("img",{src:"/linkdin.svg"})}),(0,d.jsxs)("p",{children:[" ",a.shortTitle]})]}),(0,d.jsx)(w,{onClick:()=>b(a),children:"Read more"})]},a.name))})]})]})]})]})}]),c()}catch(a){c(a)}},!1),72999,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(17359),h=a.i(68695),i=a.i(4594),j=a.i(9193),k=b([i]);[i]=k.then?(await k)():k;let l=(0,f.hoist)(i,"default"),m=(0,f.hoist)(i,"getStaticProps"),n=(0,f.hoist)(i,"getStaticPaths"),o=(0,f.hoist)(i,"getServerSideProps"),p=(0,f.hoist)(i,"config"),q=(0,f.hoist)(i,"reportWebVitals"),r=(0,f.hoist)(i,"unstable_getStaticProps"),s=(0,f.hoist)(i,"unstable_getStaticPaths"),t=(0,f.hoist)(i,"unstable_getStaticParams"),u=(0,f.hoist)(i,"unstable_getServerProps"),v=(0,f.hoist)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.RouteKind.PAGES,page:"/about-us",pathname:"/about-us",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.getHandler)({srcPage:"/about-us",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=_0x~tlo-._.js.map