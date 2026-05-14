(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53761,e=>{"use strict";var i=e.i(91398),t=e.i(58678),a=e.i(60814),n=e.i(41158),o=e.i(34523),d=e.i(39748),s=e.i(14237);let r=a.default.div.withConfig({displayName:"OfficeServices__HeroOfficeServicesContainer",componentId:"sc-4ec15c2c-0"})`
  width: 100%;
  background-color: ${o.COLORS.navbarHero};
  ${o.HORIZONTAL_SPACE}
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 63px;
  padding-bottom: 214px;

  @media (max-width: 750px) {
    padding-top: 58px;
    padding-bottom: 300px;
  }

  @media (max-width: 650px) {
    padding-top: 58px;
    padding-bottom: 320px;
  }

  .left-bar {
    top: 0;
    width: 1px;
    height: 120%;
    position: absolute;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.2;
    left: 200px;

    @media (max-width: 1600px) {
      left: 50px;
    }
  }

  .HeroAbout-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .text {
      font-size: 20px;
      font-weight: 200;
      color: #fff;
      margin-top: 24px;
      width: 710px;
    }

    .links-div {
      margin-top: 146px;
      z-index: 5;

      @media (max-width: 750px) {
        margin-top: 56px;
      }
    }
  }

  .animation-circle-right {
    position: absolute;
    top: 0;
    right: -8%;
  }

  .hero-mobile-bg {
    position: absolute;
    right: 0;
    top: 485px;
    display: none;

    @media (max-width: 1050px) {
      display: block;
    }
  }
`,l=a.default.p.withConfig({displayName:"OfficeServices__HeroAboutTitle",componentId:"sc-4ec15c2c-1"})`
  width: 1000px;
  color: ${o.COLORS.white};
  font-weight: 300;
  font-size: 46px;
  line-height: 62.84px;

  @media (max-width: 1750px) {
    max-width: 800px;
    font-size: 40px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    font-size: 35px;
  }

  @media (max-width: 750px) {
    font-size: 28px;
    line-height: 38.25px;
  }

  @media (max-width: 650px) {
    max-width: 340px;
  }

  @media (max-width: 350px) {
    max-width: 100%;
    width: 100%;
  }
`,c=a.default.h1.withConfig({displayName:"OfficeServices__SubTitle",componentId:"sc-4ec15c2c-2"})`
  font-size: 16px;
  font-weight: 400;
  color: #9fc899;
  margin-bottom: 18px;
`,p=a.default.p.withConfig({displayName:"OfficeServices__Text",componentId:"sc-4ec15c2c-3"})`
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin-top: 24px;
  max-width: 850px;
  line-height: 36px;

  @media (max-width: 1600px) {
    max-width: 700px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
  }

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 25.2px;
  }

  @media (max-width: 650px) {
    max-width: 323px;
    width: 100%;
  }

  @media (max-width: 350px) {
    max-width: 100%;
    width: 100%;
  }
`,x=a.default.div.withConfig({displayName:"OfficeServices__IllustrationBigCircle",componentId:"sc-4ec15c2c-4"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
`,h=a.default.div.withConfig({displayName:"OfficeServices__IllustrationCircleAnimated",componentId:"sc-4ec15c2c-5"})`
  position: absolute;
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/big-circle-border.png');
  transform: rotate(-80deg);
`,m=a.default.div.withConfig({displayName:"OfficeServices__IllustrationCuttedCircle",componentId:"sc-4ec15c2c-6"})`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background: radial-gradient(
    70% 60% at 0% 0%,
    rgba(0, 0, 0, 0) 100%,
    ${o.COLORS.navbarHero} 150%
  );

  .outer-cirlce {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${o.COLORS.navbarHero};
    border-radius: 0 0 311px 311px;
    transform: rotate(-50deg) translate(120px, 55px);
  }
`,f=a.default.div.withConfig({displayName:"OfficeServices__IllustrationBg",componentId:"sc-4ec15c2c-7"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/family.webp');
  background-size: cover;
  background-position-y: -50px;
  background-position-x: -10px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  .innerCircleBig {
    width: 346.75px;
    height: 346.75px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    background-image: url('/circle-bg.png');
  }

  .innerSmallCircle {
    width: 118px;
    height: 118px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a4f31;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`,g=a.default.div.withConfig({displayName:"OfficeServices__CircleAnimationRight",componentId:"sc-4ec15c2c-8"})`
  position: absolute;
  right: -15%;

  @media (max-width: 1150px) {
    transform: scale(0.7);
  }

  @media (max-width: 1050px) {
    display: none;
  }
`,u=a.default.div.withConfig({displayName:"OfficeServices__IllustrationLine",componentId:"sc-4ec15c2c-9"})`
  width: 2px;
  height: 1000px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-200px) rotate(40deg);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 0.3;
`,w=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r,{children:[(0,i.jsx)(s.LeftBar,{}),(0,i.jsx)("div",{className:"HeroAbout-text-container",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(c,{"data-aos":"fade-up",children:"Family Office Services"}),(0,i.jsx)(l,{"data-aos":"fade-up",children:"Comprehensive private client services and support for all our families"}),(0,i.jsx)(p,{"data-aos":"fade-up",children:"We understand our families have needs beyond the daily investment management services. Through our network of partners and providers, we can facilitate many other services such as estate planning, tax, real estate acquisition, cash management and lending."}),(0,i.jsx)(d.Links,{children:(0,i.jsx)(d.LinksItem,{className:"links-div",children:(0,i.jsx)(n.default,{href:"/contact-us",children:"Contact Us"})})})]})}),(0,i.jsx)("img",{className:"hero-mobile-bg",src:"/hero-mobile-family.png",alt:""})]}),(0,i.jsx)(s.HeroDefaultContainer,{children:(0,i.jsx)(g,{"data-aos":"zoom-in",children:(0,i.jsxs)(d.IllustrationContainer,{children:[(0,i.jsx)("div",{style:{width:"20px",height:"20px",position:"absolute",left:"-90px",bottom:0,transform:"rotate(180deg)",marginBottom:"60px"},children:(0,i.jsx)("img",{src:"/up.svg",alt:""})}),(0,i.jsx)(u,{}),(0,i.jsx)(x,{children:(0,i.jsx)(f,{children:(0,i.jsx)("div",{className:"innerCircleBig",children:(0,i.jsx)("div",{className:"innerSmallCircle",children:(0,i.jsx)("img",{src:"/family.svg",alt:""})})})})}),(0,i.jsx)(m,{children:(0,i.jsx)("div",{className:"outer-cirlce"})}),(0,i.jsx)(h,{})]})})})]}),b=a.default.div.withConfig({displayName:"family-office-services__Container",componentId:"sc-b0124d9e-0"})`
  width: 100%;
  ${o.HORIZONTAL_SPACE}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 117px;
  padding-bottom: 230px;

  @media (max-width: 690px) {
    padding-top: 65px;
    padding-bottom: 0;
  }
`,y=a.default.h2.withConfig({displayName:"family-office-services__Title",componentId:"sc-b0124d9e-1"})`
  max-width: 891px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;

  @media (max-width: 690px) {
    font-size: 22px;
    line-height: 30.05px;
  }

  @media (max-width: 390px) {
    max-width: 100%;
    width: 100%;
    text-align: left;
  }
`,v=a.default.div.withConfig({displayName:"family-office-services__MenuContainer",componentId:"sc-b0124d9e-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 98px;

  @media (max-width: 1050px) {
    flex-direction: column;
    margin-top: 64px;
    width: 100%;
  }
`,j=a.default.ul.withConfig({displayName:"family-office-services__Menu",componentId:"sc-b0124d9e-3"})`
  list-style: none;
  display: flex;
  flex-direction: column;

  .menu-2 {
    flex-direction: row-reverse;
    .dot {
      margin-left: 48px;
    }
  }

  @media (max-width: 690px) {
    width: 100%;

    .menu-2 {
      flex-direction: row;

      .dot {
        margin-left: 0;
        margin-right: 48px;
      }
    }
  }
`,_=a.default.li.withConfig({displayName:"family-office-services__MenuItem",componentId:"sc-b0124d9e-4"})`
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #c5c5c5;
  padding: 32px 0;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover > .itemLegend {
    opacity: 1;
    z-index: 7;
  }

  @media (max-width: 690px) {
    width: 100%;
    font-size: 16px;
  }
`,C=a.default.li.withConfig({displayName:"family-office-services__MenuItemDot",componentId:"sc-b0124d9e-5"})`
  background-color: #9fc899;
  width: 9px;
  height: 9px;
`,N=a.default.div.withConfig({displayName:"family-office-services__MenuIllustration",componentId:"sc-b0124d9e-6"})`
  height: 332px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;

  @media (max-width: 690px) {
    margin-top: 145px;
    margin-bottom: 75px;
    width: 100%;
  }

  .rounded-c {
    margin: 0 75px 0 75px;
    min-width: 268px;
    height: 268px;
    background-color: #1a4f311a;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1a4f311a;

    @media (max-width: 365px) {
      min-width: 250px;
      height: 250px;
    }
  }

  .circle2 {
    width: 190px;
    height: 190px;
    border-radius: 100%;
    background-color: #1a4f31;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 365px) {
      width: 170px;
      height: 170px;
    }
  }
`,k=a.default.p.withConfig({displayName:"family-office-services__MenuLegend",componentId:"sc-b0124d9e-7"})`
  background-color: #fff;
  box-shadow: 0 0 2px #00000040;
  position: absolute;
  opacity: 0;
  left: 100%;
  min-width: 250px;
  height: 100px;
  margin-left: 20px;
  transition: 0.5s;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media (max-width: 690px) {
    display: none;
  }

  p {
    padding: 15px;
    z-index: 2;
    position: absolute;
    width: 100%;
    background-color: #fff;
  }

  .seta {
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    left: -5px;
    top: 40%;
    box-shadow: 0 0 2px #00000040;
    transform: rotate(50deg);
  }

  .seta2 {
    right: -10px;
    left: 93%;
    right: 0;
  }
`,I=[{title:"Accounting Solutions",legend:"Tax-efficient portfolio construction with the help of a top notch accountant"},{title:"Financial Planning",legend:"Ability to develop a cash management plan for client withdraws"},{title:"Family Governance",legend:"Structure a family board to facilitate    decisions for family members "},{title:"Life Insurance",legend:"Network of Life Insurance experts to integrate life insurance to the client's portfolio"}],O=[{title:"Concierge Services",legend:"Ability to help clients with everday life management services"},{title:"Estate Planning",legend:"Network of lawyers to help clients with asset protection, and other estate issues"},{title:"Philanthropic Planning",legend:"Develop charity and other philanthropic  alternatives to improve tax efficiency"},{title:"Real Estate Acquistion",legend:"Network of top real estate brokers to help the client acquire property throughout the United States "}];e.s(["default",0,function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.default,{children:[(0,i.jsx)("title",{children:"Familly Office Services | Abacus"}),(0,i.jsx)("meta",{property:"og:description",content:"Abacus offers integrated family office services including estate planning, tax management, real estate acquisition, and lot more."}),(0,i.jsx)("meta",{name:"keywords",content:"Familly Office Services | Abacus"})]}),(0,i.jsx)(w,{}),(0,i.jsxs)(b,{children:[(0,i.jsx)(y,{children:"A broad network of professional service providers is available to integrate with your wealth management strategy"}),(0,i.jsxs)(v,{children:[(0,i.jsx)(j,{children:I.map(e=>(0,i.jsxs)(_,{children:[(0,i.jsx)(C,{style:{marginRight:"48px"}}),e.title,(0,i.jsxs)(k,{className:"itemLegend",children:[(0,i.jsx)("div",{className:"seta"}),(0,i.jsx)("p",{children:e.legend})]})]},e.title))}),(0,i.jsx)(N,{children:(0,i.jsx)("div",{className:"rounded-c",children:(0,i.jsx)("div",{className:"circle2",children:(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/logo.svg",alt:"A"})})})})}),(0,i.jsx)(j,{children:O.map(e=>(0,i.jsxs)(_,{className:"menu-2",children:[(0,i.jsx)(C,{className:"dot"}),e.title,(0,i.jsxs)(k,{style:{left:"-90%"},className:"itemLegend",children:[(0,i.jsx)("div",{className:"seta seta2"}),(0,i.jsx)("p",{children:e.legend})]})]},e.title))})]})]})]})}],53761)},57049,(e,i,t)=>{let a="/family-office-services";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(53761)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([a])})},48761,e=>{e.v(i=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(i=>e.l(i))).then(()=>i(93594)))},28805,e=>{e.v(i=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(i=>e.l(i))).then(()=>i(79466)))}]);