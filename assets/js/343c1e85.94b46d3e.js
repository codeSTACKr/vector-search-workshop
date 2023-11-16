"use strict";(self.webpackChunkvector_search_workshop=self.webpackChunkvector_search_workshop||[]).push([[151],{5455:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=s(5893),o=s(1151),a=s(7004);const n={},c="\ud83d\udc50 Create a cluster",l={id:"mongodb-atlas/create-cluster",title:"\ud83d\udc50 Create a cluster",description:"Now that you have a MongoDB Atlas account, you can create your first cluster. A cluster is a group of at least three servers that store your data. This ensures that your data is always available, even if one of the servers fails.",source:"@site/docs/1-mongodb-atlas/3-create-cluster.mdx",sourceDirName:"1-mongodb-atlas",slug:"/mongodb-atlas/create-cluster",permalink:"/vector-search-workshop/docs/mongodb-atlas/create-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/vector-search-workshop/blob/main/docs/1-mongodb-atlas/3-create-cluster.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Create your account",permalink:"/vector-search-workshop/docs/mongodb-atlas/create-account"},next:{title:"OpenAI",permalink:"/vector-search-workshop/docs/category/openai"}},i={},d=[{value:"Create a new cluster",id:"create-a-new-cluster",level:2},{value:"Deploy your database",id:"deploy-your-database",level:2},{value:"Add a user",id:"add-a-user",level:2},{value:"Whitelist your IP address",id:"whitelist-your-ip-address",level:2},{value:"That&#39;s all!",id:"thats-all",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-create-a-cluster",children:"\ud83d\udc50 Create a cluster"}),"\n",(0,r.jsx)(t.p,{children:"Now that you have a MongoDB Atlas account, you can create your first cluster. A cluster is a group of at least three servers that store your data. This ensures that your data is always available, even if one of the servers fails."}),"\n",(0,r.jsx)(t.p,{children:"You can create your first cluster for free. It won't expire, and you will have a 500 MB storage limit. This is enough to get started with MongoDB Atlas."}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-cluster",children:"Create a new cluster"}),"\n",(0,r.jsxs)(t.p,{children:["From the overview page, click on the green button that says ",(0,r.jsx)(t.strong,{children:'"+ Create"'}),"."]}),"\n",(0,r.jsx)(a.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/1-mongodb-atlas/3-create-cluster/1-overview.png",alt:"Overview screenshot"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"If you just created your account, you will already be redirected to the cluster creation page and can skip this step."})}),"\n",(0,r.jsx)(t.h2,{id:"deploy-your-database",children:"Deploy your database"}),"\n",(0,r.jsx)(t.p,{children:"You will be redirected to the cluster creation page. Here you can choose the cloud provider and region where your data will be stored. You can also choose the type of cluster you want to create. For this tutorial, we will use the free tier."}),"\n",(0,r.jsx)(a.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/1-mongodb-atlas/3-create-cluster/2-deploy-database.png",alt:"Create cluster screenshot"}),"\n",(0,r.jsxs)(t.p,{children:["For the cluster tier, pick ",(0,r.jsx)(t.strong,{children:"M0"}),", which is the free tier. Select your favorite cloud provider, and the region closest to you. In the ",(0,r.jsx)(t.strong,{children:"Name"})," input box, put a meaningful name for your cluster."]}),"\n",(0,r.jsxs)(t.p,{children:["Then click on the green button that says ",(0,r.jsx)(t.strong,{children:'"Create"'}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Once you're done with the hardest part of the process (the captcha), you will be redirected to the security quickstart screen."}),"\n",(0,r.jsx)(t.h2,{id:"add-a-user",children:"Add a user"}),"\n",(0,r.jsx)(t.p,{children:"MongoDB is very secure, and doesn't have any user by default. You will need to create one to be able to connect to your database."}),"\n",(0,r.jsx)(t.p,{children:"While your cluster is being provisioned, you will see the security quickstart screen. Start by adding a user."}),"\n",(0,r.jsx)(a.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/1-mongodb-atlas/3-create-cluster/3-username.png",alt:"Create a user screenshot"}),"\n",(0,r.jsx)(t.p,{children:"Pick any username and password you want. This will be used when you want to connect to your database."}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"Make sure to remember your username and password. You will need them later."}),(0,r.jsx)(t.p,{children:"For the sake of this workshop, it might be preferable to use a simple password that you'll remember over a more secure one."})]}),"\n",(0,r.jsx)(t.h2,{id:"whitelist-your-ip-address",children:"Whitelist your IP address"}),"\n",(0,r.jsx)(t.p,{children:"Now that you have a user, you need to whitelist your IP address. This will allow you to connect to your database from your computer."}),"\n",(0,r.jsx)(t.p,{children:"In the case of this workshop, we'll want to enable access from any computer. This will let our virtual environment connect to the database without knowing its IP address."}),"\n",(0,r.jsx)(a.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/1-mongodb-atlas/3-create-cluster/4-allow-ip.png",alt:"Screenshot of the ip whitelisting screen"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"It is dangerous to expose your database to the entire world. You should never do this is a real production environment."})}),"\n",(0,r.jsx)(t.p,{children:"To enable access from everywhere, enter the value"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"0.0.0.0/0\n"})}),"\n",(0,r.jsxs)(t.p,{children:["in the ",(0,r.jsx)(t.strong,{children:"IP Address"})," input box. You can add a description if you want to. Then click on the ",(0,r.jsx)(t.strong,{children:"Add Entry"})," button."]}),"\n",(0,r.jsx)(t.h2,{id:"thats-all",children:"That's all!"}),"\n",(0,r.jsx)(t.p,{children:"That's all! You have a new cluster, and you can now connect to it from your application. If everything goes well, you should see your newly created cluster in the database deployment screen."}),"\n",(0,r.jsx)(a.Z,{url:"https://cloud.mongodb.com",src:"img/screenshots/1-mongodb-atlas/3-create-cluster/5-database-deployment.png",alt:"Screenshot of the database deployment screen"})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7004:(e,t,s)=>{s.d(t,{Z:()=>n});s(7294);var r=s(5893);function o(e){const t=e.url||"http://localhost:3000";return(0,r.jsxs)("div",{className:"browser container",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"column left",children:[(0,r.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,r.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,r.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,r.jsx)("div",{className:"column middle",children:(0,r.jsx)("input",{type:"text",value:t})}),(0,r.jsx)("div",{className:"column right",children:(0,r.jsxs)("div",{style:{float:"right"},children:[(0,r.jsx)("span",{className:"bar"}),(0,r.jsx)("span",{className:"bar"}),(0,r.jsx)("span",{className:"bar"})]})})]}),(0,r.jsx)("div",{className:"content",children:e.children})]})}var a=s(9524);function n(e){return(0,r.jsx)(o,{...e,children:(0,r.jsx)("img",{src:(0,a.Z)(e.src),alt:e.alt})})}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>n});var r=s(7294);const o={},a=r.createContext(o);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);