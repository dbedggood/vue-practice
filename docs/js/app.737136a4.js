(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"11af":function(t,e,a){},"15d4":function(t,e,a){},"1e5b":function(t,e,a){},2164:function(t,e,a){"use strict";var n=a("a4c2"),i=a.n(n);i.a},2604:function(t,e,a){},2980:function(t,e,a){},3739:function(t,e,a){"use strict";var n=a("68be"),i=a.n(n);i.a},"3e46":function(t,e,a){"use strict";var n=a("1e5b"),i=a.n(n);i.a},"41da":function(t,e,a){"use strict";var n=a("9d59"),i=a.n(n);i.a},4552:function(t,e,a){},"4dbf":function(t,e,a){t.exports=a.p+"img/about-me.9a259fa1.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{attrs:{pageStatus:this.currentPage},on:{"change-page":t.setCurrentPage}}),t.currentPage.home?a("Home"):t._e(),t.currentPage.recent?a("RecentPosts"):t._e(),t.currentPage.about?a("AboutMe"):t._e(),a("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"banner"},[a("div",{staticClass:"container container-flex"},[t._m(0),a("nav",[a("ul",{staticClass:"list"},[a("li",{staticClass:"list-item first-list-item"},[a("a",{staticClass:"link",class:{active:t.pageStatus.home},attrs:{href:"#"},on:{click:t.goHome}},[t._v("Home")])]),a("li",{staticClass:"list-item"},[a("a",{staticClass:"link",class:{active:t.pageStatus.recent},attrs:{href:"#"},on:{click:t.goRecent}},[t._v("Recent Posts")])]),a("li",{staticClass:"list-item"},[a("a",{staticClass:"link",class:{active:t.pageStatus.about},attrs:{href:"#"},on:{click:t.goAbout}},[t._v("About Me")])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-title"},[a("h1",{staticClass:"title"},[t._v("Living the Simple Life")]),a("p",{staticClass:"subtitle"},[t._v("\n        a jobless developer's day-to-day\n      ")])])}],l={name:"NavBar",props:["pageStatus"],methods:{goHome:function(){this.$emit("change-page",{home:!0,recent:!1,about:!1})},goRecent:function(){this.$emit("change-page",{home:!1,recent:!0,about:!1})},goAbout:function(){this.$emit("change-page",{home:!1,recent:!1,about:!0})}}},c=l,u=(a("c77f"),a("2877")),d=Object(u["a"])(c,r,o,!1,null,"0fac5901",null),f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container-flex"},[a("main",{staticClass:"main-content",attrs:{role:"main"}},[a("FeaturedArticle",{attrs:{article:t.featuredArticle}}),t._l(t.recentArticles,function(t){return a("RecentArticle",{key:t.id,attrs:{article:t}})})],2),a("aside",{staticClass:"side-bar"},[a("SidebarWidget",{attrs:{title:"ABOUT ME"}},[a("AboutMeWidget")],1),a("SidebarWidget",{attrs:{title:"RECENT POSTS"}},t._l(t.widgetArticles,function(t){return a("RecentPostWidget",{key:t.id,attrs:{article:t}})}),1)],1)])},m=[],h=function(t,e){var a=e._c;return a("article",{staticClass:"featured"},[a("h2",{staticClass:"title"},[e._v(e._s(e.props.article.title))]),a("img",{staticClass:"image",attrs:{src:e.props.article.imagePath,alt:e.props.article.imageAlt}}),a("p",{staticClass:"info"},[e._v(e._s(e.props.article.info))]),a("p",{staticClass:"body"},[e._v("\n    "+e._s(e.props.article.text)+"\n  ")]),a("a",{staticClass:"continue-reading",attrs:{href:"#"}},[e._v("CONTINUE READING")])])},g=[],b=(a("6251"),{}),v=Object(u["a"])(b,h,g,!0,null,"2107931b",null),y=v.exports,_=function(t,e){var a=e._c;return a("article",{staticClass:"recent"},[a("div",{staticClass:"recent-main"},[a("h2",{staticClass:"title"},[e._v(e._s(e.props.article.title))]),a("p",{staticClass:"body"},[e._v("\n      "+e._s(e.props.article.text)+"\n    ")]),a("a",{staticClass:"continue-reading",attrs:{href:"#"}},[e._v("CONTINUE READING")])]),a("div",{staticClass:"recent-secondary"},[a("img",{staticClass:"image",attrs:{src:e.props.article.imagePath,alt:e.props.article.imageAlt}}),a("p",{staticClass:"info"},[e._v(e._s(e.props.article.info))])])])},w=[],C=(a("d5a5"),{}),A=Object(u["a"])(C,_,w,!0,null,"7a8b76e7",null),k=A.exports,I=function(t,e){var a=e._c;return a("div",{staticClass:"sidebar-widget"},[a("h2",{staticClass:"widget-title"},[e._v(e._s(e.props.title))]),e._t("default")],2)},P=[],S=(a("8318"),{}),x=Object(u["a"])(S,I,P,!0,null,"3b04a875",null),j=x.exports,O=function(t,e){e._c;return e._m(0)},R=[function(t,e){var n=e._c;return n("div",[n("img",{staticClass:"widget-image",attrs:{src:a("4dbf"),alt:"Daniel and his partner Rena. (Photograph)"}}),n("p",[e._v("\n    Being unemployed sucks, but it isn't all bad. I have all the time in the\n    world to do whatever I want!\n  ")])])}],T=(a("3e46"),{}),M=Object(u["a"])(T,O,R,!0,null,"7c8f1637",null),W=M.exports,E=function(t,e){var a=e._c;return a("div",{staticClass:"post"},[a("h3",{staticClass:"post-title"},[e._v(e._s(e.props.article.title))]),a("img",{staticClass:"image",attrs:{src:e.props.article.imagePath,alt:e.props.article.imageAlt}})])},N=[],H=(a("a825"),{}),$=Object(u["a"])(H,E,N,!0,null,"db40213e",null),q=$.exports,B=[{id:1,title:"The Mermaid Pools",text:"This website was made to improve my CSS and Vue.js skills, especially regarding the creation of responsive websites. If you're on a computer, try resizing the window to see how the layout changes! I'm am very happy with how this turned out.",imagePath:a("a65d"),imageAlt:"A girl standing on rocky cliff, sky in background. (Photograph)",info:"August 23rd, 2019"},{id:2,title:"A Day at the Beach",text:"The Recent Posts and About Me pages each only took a couple minutes to make after I finished the CSS and components for the Home page. Really demonstrates how versatile modular code can be when written well.",imagePath:a("7f9e"),imageAlt:"A girl in a red swimsuit walking in shallow water at the beach, an island in the distance. (Photograph)",info:"August 17th, 2019"},{id:3,title:"Visiting Home",text:"Quisque at tincidunt massa. Sed id euismod nulla. Phasellus vel turpis a mi auctor sodales. Aliquam vel congue tellus, ut interdum enim. Aenean vitae erat dictum, pharetra leo a, condimentum ligula. Aliquam mauris erat, egestas ut tristique nec, tincidunt ut leo. Nam nec consectetur lorem.",imagePath:a("a084"),imageAlt:"The sun setting over a landscape of grassy hills and trees. (Photograph)",info:"August 8th, 2019"},{id:4,title:"Hole in the Rock",text:"Morbi sit amet nisi vestibulum, aliquet ante ut, fermentum risus. Mauris ac diam eros. Curabitur elementum dignissim mattis. Aliquam laoreet, ligula accumsan ultricies condimentum, dolor massa maximus dui, ut convallis sapien nibh sed quam.",imagePath:a("bfea"),imageAlt:"A rocky island with a tunnel-like hole underneath it large enough for boats to pass through. (Photograph)",info:"July 29th, 2019"}],U={name:"Home",components:{FeaturedArticle:y,RecentArticle:k,SidebarWidget:j,AboutMeWidget:W,RecentPostWidget:q},data:function(){return{featuredArticle:B[0],recentArticles:B.slice(1),widgetArticles:B.slice(0,3)}}},D=U,F=(a("a077"),Object(u["a"])(D,p,m,!1,null,"46b9b834",null)),J=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container-flex"},[a("main",{staticClass:"main-content",attrs:{role:"main"}},t._l(t.articles,function(t){return a("RecentArticle",{key:t.id,attrs:{article:t}})}),1),a("aside",{staticClass:"side-bar"},[a("SidebarWidget",{attrs:{title:"ABOUT ME"}},[a("AboutMeWidget")],1),a("SidebarWidget",{attrs:{title:"RECENT POSTS"}},t._l(t.widgetArticles,function(t){return a("RecentPostWidget",{key:t.id,attrs:{article:t}})}),1)],1)])},z=[],G={name:"RecentPosts",components:{RecentArticle:k,SidebarWidget:j,AboutMeWidget:W,RecentPostWidget:q},data:function(){return{articles:B,widgetArticles:B.slice(0,3)}}},V=G,Q=(a("2164"),Object(u["a"])(V,L,z,!1,null,"84dedb5a",null)),X=Q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container container-flex"},[n("main",{staticClass:"main-content",attrs:{role:"main"}},[n("img",{staticClass:"image-full",attrs:{src:a("4dbf")}}),n("AboutMeContent")],1),n("aside",{staticClass:"side-bar"},[n("SidebarWidget",{attrs:{title:"RECENT POSTS"}},t._l(t.widgetArticles,function(t){return n("RecentPostWidget",{key:t.id,attrs:{article:t}})}),1)],1)])},Y=[],Z=function(t,e){e._c;return e._m(0)},tt=[function(t,e){var a=e._c;return a("div",[a("h2",{staticClass:"title"},[e._v("I Am a Developer")]),a("p",[e._v("\n    I used to be a computer science student at the University of Auckland.\n    There was so much to learn that I felt I was supposed to appreciate, but I\n    just couldn't. The truth is, a lot of it didn't feel useful to me and it\n    really wasn't. I don't want to be a computer scientist, but there weren't\n    other options for me wanting to get into software development.\n  ")]),a("p",[e._v("\n    This doesn't mean I did badly, I just found most of it incredibly boring\n    which in turn made it difficult at times to motivate myself to do any\n    work. I spent most of my time hanging out with friends, playing video\n    games or working on (actually practical)\n    "),a("a",{staticClass:"link",attrs:{href:"https://github.com/dbedggood"}},[e._v("personal software projects")]),e._v(".\n  ")]),a("h3",{staticClass:"subtitle"},[e._v("My Last Semester at University")]),a("p",[e._v("\n    In my last semester I didn't have much left to do. I took my final stage 3\n    paper, and then 3 other stage 1 papers just to fill out my degree planner.\n    This gave me a little more time on the side to work on myself and line up\n    a job for after I finish studying.\n  ")]),a("p",[e._v("\n    I worked on a few more projects, learned a few new skills, attended a\n    couple hackathons and made a few more friends. However, there were (and\n    still are) hardly any jobs out there for junior developers like me, and\n    all the graduate programmes start at the beginning of next year. This made\n    things really hard for me, I wasn't successful in my job hunt and I felt\n    like I would never be able to find a job.\n  ")]),a("h3",{staticClass:"subtitle"},[e._v("I Still Haven't Found a Job")]),a("p",[e._v("\n    I've been living off of Jobseeker Support (which has been incredibly\n    helpful) as I apply to every developer job I can. It's really difficult\n    because there are actually so many jobs out there, but it feels as if 99%\n    of them require at least a couple years of commercial experience.\n  ")]),a("p",[e._v("\n    However difficult it may be, I know that I am trying my best. Which is why\n    I have forgiven myself for not being able to find work straight after\n    University. I'm still young and there is no real rush to start my career,\n    I could always wait until the graduate programmes start early next year. I\n    am incredibly grateful to have people that support me and I hope that I\n    can make them proud sooner than later.\n  ")]),a("p",[e._v("\n    When I'm not applying for jobs, I'm working on developing my skills and\n    growing myself to be more attractive to potential employers. This site and\n    the\n    "),a("a",{staticClass:"link",attrs:{href:"https://dbedggood.github.io/css-practice/"}},[e._v("others")]),e._v("\n    are an example of me trying to improve my proficiency in CSS. I'm doing\n    this by reviewing the fundamentals and learning how create responsive\n    websites and more without any CSS frameworks.\n  ")]),a("p",{staticClass:"last-paragraph"},[e._v("\n    Something else I'm working on is a\n    "),a("a",{staticClass:"link",attrs:{href:"https://renachua.com/"}},[e._v("website")]),e._v(" for my lovely\n    girlfriend, Rena (pictured above). I created it with React, Redux and\n    Firebase. The layout is made with a CSS framework called Materialize. I'm\n    planning to revamp the UX once I master pure CSS.\n  ")])])}],et=(a("41da"),{}),at=Object(u["a"])(et,Z,tt,!0,null,"33a7838c",null),nt=at.exports,it={name:"AboutMe",components:{AboutMeContent:nt,SidebarWidget:j,RecentPostWidget:q},data:function(){return{widgetArticles:B.slice(0,3)}}},st=it,rt=(a("3739"),Object(u["a"])(st,K,Y,!1,null,"7b5a3f72",null)),ot=rt.exports,lt=function(t,e){e._c;return e._m(0)},ct=[function(t,e){var a=e._c;return a("footer",{staticClass:"footer"},[a("p",[a("span",{staticClass:"strong"},[e._v("Daniel Bedggood")])]),a("p",[e._v("Copyright 2019")])])}],ut=(a("81cf"),{}),dt=Object(u["a"])(ut,lt,ct,!0,null,"6c7b4426",null),ft=dt.exports,pt={name:"app",data:function(){return{currentPage:{home:!0,recent:!1,about:!1}}},methods:{setCurrentPage:function(t){this.currentPage.home=t.home,this.currentPage.recent=t.recent,this.currentPage.about=t.about}},components:{NavBar:f,Home:J,RecentPosts:X,AboutMe:ot,Footer:ft}},mt=pt,ht=Object(u["a"])(mt,i,s,!1,null,null,null),gt=ht.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(gt)}}).$mount("#app")},6251:function(t,e,a){"use strict";var n=a("ef18"),i=a.n(n);i.a},"68be":function(t,e,a){},"7f9e":function(t,e,a){t.exports=a.p+"img/tauranga.6e55a458.png"},"81cf":function(t,e,a){"use strict";var n=a("2980"),i=a.n(n);i.a},8318:function(t,e,a){"use strict";var n=a("15d4"),i=a.n(n);i.a},"9d59":function(t,e,a){},a077:function(t,e,a){"use strict";var n=a("11af"),i=a.n(n);i.a},a084:function(t,e,a){t.exports=a.p+"img/whangateau.18e68b40.png"},a4c2:function(t,e,a){},a65d:function(t,e,a){t.exports=a.p+"img/matapouri.fafffd38.png"},a825:function(t,e,a){"use strict";var n=a("2604"),i=a.n(n);i.a},bfea:function(t,e,a){t.exports=a.p+"img/russel.d7a83b76.png"},c77f:function(t,e,a){"use strict";var n=a("cc66"),i=a.n(n);i.a},cc66:function(t,e,a){},d5a5:function(t,e,a){"use strict";var n=a("4552"),i=a.n(n);i.a},ef18:function(t,e,a){}});
//# sourceMappingURL=app.737136a4.js.map