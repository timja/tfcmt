"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[784],{5788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>d});var a=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,d=m["".concat(l,".").concat(c)]||m[c]||g[c]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(5072),r=(t(1504),t(5788));const i={sidebar_position:560},o="Mask sensitive data",s={unversionedId:"mask-sensitive-data",id:"mask-sensitive-data",title:"Mask sensitive data",description:"#1083 #1115 tfcmt >= v4.9.0",source:"@site/docs/mask-sensitive-data.md",sourceDirName:".",slug:"/mask-sensitive-data",permalink:"/tfcmt/mask-sensitive-data",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/mask-sensitive-data.md",tags:[],version:"current",sidebarPosition:560,frontMatter:{sidebar_position:560},sidebar:"tutorialSidebar",previous:{title:"Patch tfcmt plan comment",permalink:"/tfcmt/plan-patch"},next:{title:"Skip posting a comment if there is no change",permalink:"/tfcmt/skip-no-changes"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Terraform sensitive input variables and outputs and sensitive function",id:"terraform-sensitive-input-variables-and-outputs-and-sensitive-function",level:2}],u={toc:p},m="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mask-sensitive-data"},"Mask sensitive data"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/discussions/1083"},"#1083")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/1115"},"#1115")," ",(0,r.yg)("inlineCode",{parentName:"p"},"tfcmt >= v4.9.0")),(0,r.yg)("p",null,"You can mask sensitive data in outputs of terraform.\nThis feature prevents the leak of sensitive data."),(0,r.yg)("p",null,"The following outputs are masked."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Standard output of terraform command"),(0,r.yg)("li",{parentName:"ul"},"Standard error output of terraform command"),(0,r.yg)("li",{parentName:"ul"},"Pull request comment of ",(0,r.yg)("inlineCode",{parentName:"li"},"tfcmt plan")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"tfcmt apply")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/tfcmt/output-file"},"local files created by ",(0,r.yg)("inlineCode",{parentName:"a"},"--output")," option"))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Even if you maske secrets using this feature, secrets are still stored in Terraform States.\nPlease see also ",(0,r.yg)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/state/sensitive-data"},"Sensitive Data in State"),".")),(0,r.yg)("p",null,"You can use environment variables ",(0,r.yg)("inlineCode",{parentName:"p"},"TFCMT_MASKS")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"TFCMT_MASKS_SEPARATOR"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TFCMT_MASKS"),": A list of masks. Masks are joined by ",(0,r.yg)("inlineCode",{parentName:"li"},"TFCMT_MASKS_SEPARATOR")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TFCMT_MASKS_SEPARATOR"),": A separator of masks. The default value is ",(0,r.yg)("inlineCode",{parentName:"li"},","))),(0,r.yg)("p",null,"The format of each mask is ",(0,r.yg)("inlineCode",{parentName:"p"},"${type}:${value}"),".\n",(0,r.yg)("inlineCode",{parentName:"p"},"${type}")," must be either ",(0,r.yg)("inlineCode",{parentName:"p"},"env")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"regexp"),".\nIf ",(0,r.yg)("inlineCode",{parentName:"p"},"${type}")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"env"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"${value}")," is a masked environment variable name.\nIf ",(0,r.yg)("inlineCode",{parentName:"p"},"${type}")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"regexp"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"${value}")," is a masked regular expression."),(0,r.yg)("p",null,"e.g. Mask GitHub access tokens and the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"DATADOG_API_KEY"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"export TFCMT_MASKS='env:GITHUB_TOKEN,env:DATADOG_API_KEY,regexp:ghp_[^ ]+'\ntfcmt plan -- terraform plan\n")),(0,r.yg)("p",null,"e.g. Change the separator to ",(0,r.yg)("inlineCode",{parentName:"p"},"/"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"export TFCMT_MASKS_SEPARATOR=/\nexport TFCMT_MASKS='env:GITHUB_TOKEN/env:DATADOG_API_KEY/regexp:ghp_[^ ]+'\n")),(0,r.yg)("p",null,"All matching strings are replaced with ",(0,r.yg)("inlineCode",{parentName:"p"},"***"),".\nReplacements are done in order of ",(0,r.yg)("inlineCode",{parentName:"p"},"TFCMT_MASKS"),", so the result depends on the order of ",(0,r.yg)("inlineCode",{parentName:"p"},"TFCMT_MASKS"),".\nFor example, if ",(0,r.yg)("inlineCode",{parentName:"p"},"TFCMT_MASKS")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"regexp:foo,regexp:foo.*"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"regexp:foo.*")," has no meaning because all ",(0,r.yg)("inlineCode",{parentName:"p"},"foo")," are replaced with ",(0,r.yg)("inlineCode",{parentName:"p"},"***")," before replacing ",(0,r.yg)("inlineCode",{parentName:"p"},"foo.*")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"***")," so ",(0,r.yg)("inlineCode",{parentName:"p"},"foo.*")," doesn't match with anything."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"This example creates a resource ",(0,r.yg)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudbuild_trigger"},"google_cloudbuild_trigger"),".\nThis resource has a GitHub Access token as a field ",(0,r.yg)("inlineCode",{parentName:"p"},"substitutions._GH_TOKEN"),"."),(0,r.yg)("p",null,"main.tf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tf"},'resource "google_cloudbuild_trigger" "filename_trigger" {\n  location = "us-central1"\n\n  trigger_template {\n    branch_name = "main"\n    repo_name   = "my-repo"\n  }\n\n  substitutions = {\n    _GH_TOKEN = var.gh_token # Secret\n  }\n\n  filename = "cloudbuild.yaml"\n}\n\nvariable "gh_token" {\n  type        = string\n  description = "GitHub Access token"\n}\n\nterraform {\n  required_providers {\n    google = {\n      source  = "hashicorp/google"\n      version = "5.13.0"\n    }\n  }\n}\n')),(0,r.yg)("p",null,"If you run ",(0,r.yg)("inlineCode",{parentName:"p"},"terraform plan")," without masking, the secret would be leaked.\nTo prevent the leak, let's mask the secret."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"export TFCMT_MASKS=env:TF_VAR_gh_token # Mask the environment variable TF_VAR_gh_token\n")),(0,r.yg)("p",null,"Please see ",(0,r.yg)("inlineCode",{parentName:"p"},"_GH_TOKEN")," in the output of ",(0,r.yg)("inlineCode",{parentName:"p"},"tfcmt plan")," and the pull request comment.\nYou can confirm ",(0,r.yg)("inlineCode",{parentName:"p"},"_GH_TOKEN")," is masked as ",(0,r.yg)("inlineCode",{parentName:"p"},"***")," properly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},'$ tfcmt plan -- terraform plan\ntfcmt plan -- terraform plan\n\nTerraform used the selected providers to generate the following execution\nplan. Resource actions are indicated with the following symbols:\n  + create\n\nTerraform will perform the following actions:\n\n  # google_cloudbuild_trigger.filename_trigger will be created\n  + resource "google_cloudbuild_trigger" "filename_trigger" {\n      + create_time   = (known after apply)\n      + filename      = "cloudbuild.yaml"\n      + id            = (known after apply)\n      + location      = "us-central1"\n      + name          = (known after apply)\n      + project       = "hello"\n      + substitutions = {\n          + "_GH_TOKEN" = "***"\n        }\n      + trigger_id    = (known after apply)\n\n      + trigger_template {\n          + branch_name = "main"\n          + project_id  = (known after apply)\n          + repo_name   = "my-repo"\n        }\n    }\n\nPlan: 1 to add, 0 to change, 0 to destroy.\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nNote: You didn\'t use the -out option to save this plan, so Terraform can\'t\nguarantee to take exactly these actions if you run "terraform apply" now.\n')),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://github.com/suzuki-shunsuke/tfcmt-docs/assets/13323303/7b79481b-923c-40cf-8bbb-f955b0685d1f",alt:"image"})),(0,r.yg)("h2",{id:"terraform-sensitive-input-variables-and-outputs-and-sensitive-function"},"Terraform sensitive input variables and outputs and sensitive function"),(0,r.yg)("p",null,"Terraform itself has features to prevent sensitive data from being leaked."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/tutorials/configuration-language/sensitive-variables"},"https://developer.hashicorp.com/terraform/tutorials/configuration-language/sensitive-variables")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/language/functions/sensitive"},"https://developer.hashicorp.com/terraform/language/functions/sensitive")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output"},"https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/language/values/variables#suppressing-values-in-cli-output"},"https://developer.hashicorp.com/terraform/language/values/variables#suppressing-values-in-cli-output")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.hashicorp.com/blog/terraform-0-14-adds-the-ability-to-redact-sensitive-values-in-console-output"},"https://www.hashicorp.com/blog/terraform-0-14-adds-the-ability-to-redact-sensitive-values-in-console-output")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.hashicorp.com/blog/announcing-hashicorp-terraform-0-15-general-availability"},"https://www.hashicorp.com/blog/announcing-hashicorp-terraform-0-15-general-availability"))),(0,r.yg)("p",null,"So first you should use these features.\nBut even if these features are available, it still makes sense for tfcmt to mask sensitive data.\nPlease imagine the situation that platform engineers manage Terraform workflows and product teams manage Terraform codes in a Monorepo.\nThen platform engineers need to prevent sensitive data from being leaked, but if product teams forget to protect them with ",(0,r.yg)("inlineCode",{parentName:"p"},"sensitive")," flags, sensitive data would be leaked.\nBy protecting sensitive data using tfcmt, platform engineers can prevent sensitive data from being leaked while delegating the management of Terraform codes to product teams.\ntfcmt's masking feature works as a guardrail."))}g.isMDXComponent=!0}}]);