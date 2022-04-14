"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,h=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:100},u="tfcmt",s={unversionedId:"index",id:"index",title:"tfcmt",description:"Build Status",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/tfcmt/",editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",next:{title:"Install",permalink:"/tfcmt/install"}},c={},m=[{value:"Index",id:"index",level:2},{value:"What tfcmt does",id:"what-tfcmt-does",level:2},{value:"Blog",id:"blog",level:2},{value:"License",id:"license",level:2},{value:"License of original code",id:"license-of-original-code",level:3},{value:"License of code which we wrote",id:"license-of-code-which-we-wrote",level:3}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tfcmt"},"tfcmt"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/actions"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/suzuki-shunsuke/tfcmt/workflows/test/badge.svg",alt:"Build Status"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/last-commit/suzuki-shunsuke/tfcmt.svg",alt:"GitHub last commit"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/suzuki-shunsuke/tfcmt/master/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"http://img.shields.io/badge/license-mit-blue.svg?style=flat-square",alt:"License"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt"},"tfcmt")," is a fork of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mercari/tfnotify"},"mercari/tfnotify"),", enhancing tfnotify in many ways including Terraform >= v0.15 support and advanced formatting options."),(0,i.kt)("p",null,"tfcmt is a CLI tool to improve the experience of CI of Terraform.\nBy posting the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform plan")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform apply")," to GitHub Pull Requests as a comment,\nyou can know the result quickly without browsing the CI web page."),(0,i.kt)("p",null,"tfcmt enhances tfnotify in many ways, including Terraform >= v0.15 support and advanced formatting options."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/132#issuecomment-936490121"},(0,i.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/13323303/136236949-bac1a28d-4db2-4a08-900a-708a0a02311c.png",alt:"image"}))),(0,i.kt)("p",null,"You can separate the changes outside of Terraform."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/147385656-54cdbef1-a876-49dc-945c-39bcf443ca59.png",alt:"image"})),(0,i.kt)("p",null,"You can exclude the log of refreshing state from the plan result."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/136238225-1569f762-0087-4aae-a513-a63eb9701e05.png",alt:"image"})),(0,i.kt)("p",null,"You can clarify the warning of Terraform."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/136238685-be0bab01-f6cb-4b61-89fa-d94225e50ddb.png",alt:"image"})),(0,i.kt)("p",null,"Combined with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment"},"github-comment"),", you can hide stale comments."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/136240241-2f2e7455-8a2e-4fce-a91a-c8bab4d73510.png",alt:"image"})),(0,i.kt)("h2",{id:"index"},"Index"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"install"},"Install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfcmt/tree/main/examples/getting-started"},"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"config"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"environment-variable"},"Environment Variable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"compared-with-tfnotify"},"Compared with tfnotify")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfcmt/releases"},"Release Notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#blog"},"Blog"))),(0,i.kt)("h2",{id:"what-tfcmt-does"},"What tfcmt does"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Parse the execution result of Terraform"),(0,i.kt)("li",{parentName:"ol"},"Bind parsed results to Go templates"),(0,i.kt)("li",{parentName:"ol"},"Update pull request labels"),(0,i.kt)("li",{parentName:"ol"},"Post a comment to GitHub")),(0,i.kt)("h2",{id:"blog"},"Blog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/suzukishunsuke/tfcmt-improve-terraform-workflow-with-pr-comment-and-label-1kh7"},"2021-12-26 tfcmt - Improve Terraform Workflow with PR Comment and Label")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/improve-terraform-cicd-with-tfcmt"},"2021-12-26 tfcmt \u3067 Terraform \u306e CI/CD \u3092\u6539\u5584\u3059\u308b"))),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/blob/main/LICENSE"},"LICENSE")),(0,i.kt)("h3",{id:"license-of-original-code"},"License of original code"),(0,i.kt)("p",null,"This is a fork of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mercari/tfnotify"},"mercari/tfnotify"),", so about the origincal license, please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mercari/tfnotify#license"},"https://github.com/mercari/tfnotify#license")," ."),(0,i.kt)("p",null,"Copyright 2018 Mercari, Inc."),(0,i.kt)("p",null,"Licensed under the MIT License."),(0,i.kt)("h3",{id:"license-of-code-which-we-wrote"},"License of code which we wrote"),(0,i.kt)("p",null,"MIT"))}f.isMDXComponent=!0}}]);