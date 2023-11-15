"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[725],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(3743),i={tableOfContentsInline:"tableOfContentsInline_prmo"};function o(e){var t=e.toc,n=e.minHeadingLevel,o=e.maxHeadingLevel;return a.createElement("div",{className:i.tableOfContentsInline},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),i=n(7294),o=n(6668),l=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,r.Z)(e,l);n>=0?t[n].children.push(i):a.push(i)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function p(e,t){var n,a,r=t.anchorTopOffset,i=e.find((function(e){return u(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function m(){var e=(0,i.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){var t=(0,i.useRef)(void 0),n=m();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),s=p(l,{anchorTopOffset:n.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function g(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var f=i.memo(g),v=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,p=void 0===u?"table-of-contents__link":u,m=e.linkActiveClassName,g=void 0===m?void 0:m,h=e.minHeadingLevel,b=e.maxHeadingLevel,k=(0,r.Z)(e,v),y=(0,o.L)(),N=null!=h?h:y.tableOfContents.minHeadingLevel,x=null!=b?b:y.tableOfContents.maxHeadingLevel,O=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return c({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:x});return d((0,i.useMemo)((function(){if(p&&g)return{linkClassName:p,linkActiveClassName:g,minHeadingLevel:N,maxHeadingLevel:x}}),[p,g,N,x])),i.createElement(f,(0,a.Z)({toc:O,className:l,linkClassName:p},k))}},1894:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(3901),l=["components"],s={id:"migration-v11",title:"Migration to 11.0"},c=void 0,u={unversionedId:"migration-v11",id:"migration-v11",title:"Migration to 11.0",description:"Migration to React Native Testing Library version 11 from version 9.x or 10.x should be a relatively easy task due small amount of breaking changes.",source:"@site/docs/MigrationV11.md",sourceDirName:".",slug:"/migration-v11",permalink:"/react-native-testing-library/docs/migration-v11",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/MigrationV11.md",tags:[],version:"current",frontMatter:{id:"migration-v11",title:"Migration to 11.0"},sidebar:"docs",previous:{title:"Migration to 12.0",permalink:"/react-native-testing-library/docs/migration-v12"},next:{title:"Migration to 9.0",permalink:"/react-native-testing-library/docs/migration-v9"}},p={},m=[{value:"Update to Jest 28 if you use fake timers",id:"update-to-jest-28-if-you-use-fake-timers",level:3},{value:"Refactor legacy <code>waitForOptions</code> position",id:"refactor-legacy-waitforoptions-position",level:3},{value:"Triggering non-touch events on targets with <code>pointerEvents=&quot;box-none&quot;</code> prop",id:"triggering-non-touch-events-on-targets-with-pointereventsbox-none-prop",level:3},{value:"All changes",id:"all-changes",level:2},{value:"Full Changelog",id:"full-changelog",level:2}],d={toc:m},g="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(g,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Migration to React Native Testing Library version 11 from version 9.x or 10.x should be a relatively easy task due small amount of breaking changes."),(0,i.kt)(o.Z,{toc:m,mdxType:"TOCInline"}),(0,i.kt)("h1",{id:"breaking-changes"},"Breaking changes"),(0,i.kt)("h3",{id:"update-to-jest-28-if-you-use-fake-timers"},"Update to Jest 28 if you use fake timers"),(0,i.kt)("p",null,"If you use fake timers in any of your tests you should update your Jest dependencies to version 28. This is due to the fact that ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/jest-object#jestusefaketimersfaketimersconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"jest.useFakeTimers()")," config structure")," has changed."),(0,i.kt)("h3",{id:"refactor-legacy-waitforoptions-position"},"Refactor legacy ",(0,i.kt)("inlineCode",{parentName:"h3"},"waitForOptions")," position"),(0,i.kt)("p",null,"In version 9 we introducted query ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," parameters for each query type. This affected all ",(0,i.kt)("inlineCode",{parentName:"p"},"findBy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"findAllBy")," queries because their signatures changed e.g. from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function findByText(text: TextMatch, waitForOptions?: WaitForOptions)\nfunction findAllByText(text: TextMatch, waitForOptions?: WaitForOptions)\n")),(0,i.kt)("p",null,"to "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function findByText(text: TextMatch, options?: TextMatchOptions, waitForOptions?: WaitForOptions)\nfunction findAllByText(text: TextMatch, options?: TextMatchOptions, waitForOptions?: WaitForOptions)\n")),(0,i.kt)("p",null,"In order to facilitate transition, in version 9 and 10, we provided a temporary possibility to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"WaitForOptions")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"interval"),", etc inside ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," argument. From this release we require passing these as the proper third parameter."),(0,i.kt)("p",null,"This change is easy to implement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"findByText(/Text/, { timeout: 1000 })\n")),(0,i.kt)("p",null,"should become"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"findByText(/Text/, {}, { timeout: 1000 })\n")),(0,i.kt)("h3",{id:"triggering-non-touch-events-on-targets-with-pointereventsbox-none-prop"},"Triggering non-touch events on targets with ",(0,i.kt)("inlineCode",{parentName:"h3"},'pointerEvents="box-none"')," prop"),(0,i.kt)("p",null,"Up to version 10, RNTL disables all events for a target with ",(0,i.kt)("inlineCode",{parentName:"p"},'pointerEvents="box-none"'),". This behavior is counter to how React Native itself functions. "),(0,i.kt)("p",null,"From version 11, RNTL continues to disable ",(0,i.kt)("inlineCode",{parentName:"p"},"press")," event for these targets but allows triggering other events, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"layout"),"."),(0,i.kt)("h2",{id:"all-changes"},"All changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"chore(breaking): update Jest to 28 by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1008"},"https://github.com/callstack/react-native-testing-library/pull/1008")),(0,i.kt)("li",{parentName:"ul"},"refactor(breaking): remove legacy wait for options support by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1018"},"https://github.com/callstack/react-native-testing-library/pull/1018")),(0,i.kt)("li",{parentName:"ul"},"refactor(breaking): remove ",(0,i.kt)("inlineCode",{parentName:"li"},"byA11yStates")," queries by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1015"},"https://github.com/callstack/react-native-testing-library/pull/1015")),(0,i.kt)("li",{parentName:"ul"},"chore: update react-native to 0.69.1 by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1010"},"https://github.com/callstack/react-native-testing-library/pull/1010")),(0,i.kt)("li",{parentName:"ul"},"chore: update deps @types for react/react-native by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1013"},"https://github.com/callstack/react-native-testing-library/pull/1013")),(0,i.kt)("li",{parentName:"ul"},"feat: Trigger non-touch events on box-none targets by @dcalhoun in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/906"},"https://github.com/callstack/react-native-testing-library/pull/906")),(0,i.kt)("li",{parentName:"ul"},"docs: create document describing act function and related errors by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/969"},"https://github.com/callstack/react-native-testing-library/pull/969")),(0,i.kt)("li",{parentName:"ul"},"chore: Organise a11y queries by predicate by @MattAgn in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/977"},"https://github.com/callstack/react-native-testing-library/pull/977")),(0,i.kt)("li",{parentName:"ul"},"chore: reenable skipped byText tests by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1017"},"https://github.com/callstack/react-native-testing-library/pull/1017"))),(0,i.kt)("h2",{id:"full-changelog"},"Full Changelog"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/compare/v10.1.1...v11.0.0"},"https://github.com/callstack/react-native-testing-library/compare/v10.1.1...v11.0.0")))}f.isMDXComponent=!0}}]);