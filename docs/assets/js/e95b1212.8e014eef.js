"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:570},p="Output the result to a local file",l={unversionedId:"output-file",id:"output-file",title:"Output the result to a local file",description:"#194 #654 tfcmt >= v4.2.0",source:"@site/docs/output-file.md",sourceDirName:".",slug:"/output-file",permalink:"/tfcmt/output-file",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/output-file.md",tags:[],version:"current",sidebarPosition:570,frontMatter:{sidebar_position:570},sidebar:"tutorialSidebar",previous:{title:"Skip posting a comment if there is no change",permalink:"/tfcmt/skip-no-changes"},next:{title:"Command Usage",permalink:"/tfcmt/usage"}},i={},u=[],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"output-the-result-to-a-local-file"},"Output the result to a local file"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/194"},"#194")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/654"},"#654")," ",(0,a.kt)("inlineCode",{parentName:"p"},"tfcmt >= v4.2.0")),(0,a.kt)("p",null,"tfcmt normally posts the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform plan")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," to GitHub Pull Requests as a comment.\nBut tfcmt also supports outputting the result to a local file by ",(0,a.kt)("inlineCode",{parentName:"p"},"--output")," option."),(0,a.kt)("p",null,"tfcmt plan:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt --output plan.md plan -- terraform plan\n")),(0,a.kt)("p",null,"tfcmt apply:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt --output apply.md apply -- terraform apply\n")),(0,a.kt)("p",null,"If a specified file doesn't exist, the file is created.\nIf the file already exist, the file content is appended."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to overwrite the file content instead of appending, please make ",(0,a.kt)("a",{parentName:"p",href:"https://www.tecmint.com/empty-delete-file-content-linux/"},"the file empty")," before running tfcmt."),(0,a.kt)("p",{parentName:"admonition"},"e.g."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},": > plan.md # Make the file empty\ntfcmt --output plan.md plan -- terraform plan\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tfcmt/embedded-metadata"},"Metadata")," isn't embedded."))}m.isMDXComponent=!0}}]);