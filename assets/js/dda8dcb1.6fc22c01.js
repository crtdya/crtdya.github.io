"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2274],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function A(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?A(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},A=Object.keys(t);for(n=0;n<A.length;n++)a=A[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(t);for(n=0;n<A.length;n++)a=A[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var r=n.createContext({}),g=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=g(t.components);return n.createElement(r.Provider,{value:e},t.children)},o="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,A=t.originalType,r=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),o=g(a),c=i,u=o["".concat(r,".").concat(c)]||o[c]||d[c]||A;return a?n.createElement(u,l(l({ref:e},p),{},{components:a})):n.createElement(u,l({ref:e},p))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var A=a.length,l=new Array(A);l[0]=c;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[o]="string"==typeof t?t:i,l[1]=s;for(var g=2;g<A;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4744:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>A,metadata:()=>s,toc:()=>g});var n=a(7462),i=(a(7294),a(3905));const A={},l="11\u3001\u63d0\u524d\u7f16\u8bd1\uff1aAOT",s={unversionedId:"spring/\u63d0\u524d\u7f16\u8bd1\uff1aAOT",id:"spring/\u63d0\u524d\u7f16\u8bd1\uff1aAOT",title:"11\u3001\u63d0\u524d\u7f16\u8bd1\uff1aAOT",description:"11.1\u3001AOT\u6982\u8ff0",source:"@site/docs/4_spring/10.\u63d0\u524d\u7f16\u8bd1\uff1aAOT.md",sourceDirName:"4_spring",slug:"/spring/\u63d0\u524d\u7f16\u8bd1\uff1aAOT",permalink:"/docs/spring/\u63d0\u524d\u7f16\u8bd1\uff1aAOT",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4_spring/10.\u63d0\u524d\u7f16\u8bd1\uff1aAOT.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10\u3001\u6570\u636e\u6821\u9a8c\uff1aValidation",permalink:"/docs/spring/\u6570\u636e\u6821\u9a8c"},next:{title:"SpringMVC",permalink:"/docs/category/springmvc"}},r={},g=[{value:"11.1\u3001AOT\u6982\u8ff0",id:"111aot\u6982\u8ff0",level:2},{value:"11.1.1\u3001JIT\u4e0eAOT\u7684\u533a\u522b",id:"1111jit\u4e0eaot\u7684\u533a\u522b",level:3},{value:"11.1.2\u3001Graalvm",id:"1112graalvm",level:3},{value:"11.1.3\u3001Native Image",id:"1113native-image",level:3},{value:"11.2\u3001\u6f14\u793aNative Image\u6784\u5efa\u8fc7\u7a0b",id:"112\u6f14\u793anative-image\u6784\u5efa\u8fc7\u7a0b",level:2},{value:"11.2.1\u3001GraalVM\u5b89\u88c5",id:"1121graalvm\u5b89\u88c5",level:3},{value:"\uff081\uff09\u4e0b\u8f7dGraalVM",id:"1\u4e0b\u8f7dgraalvm",level:4},{value:"\uff082\uff09\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"2\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:4},{value:"\uff083\uff09\u5b89\u88c5native-image\u63d2\u4ef6",id:"3\u5b89\u88c5native-image\u63d2\u4ef6",level:4},{value:"11.2.2\u3001\u5b89\u88c5C++\u7684\u7f16\u8bd1\u73af\u5883",id:"1122\u5b89\u88c5c\u7684\u7f16\u8bd1\u73af\u5883",level:3},{value:"\uff081\uff09\u4e0b\u8f7dVisual Studio\u5b89\u88c5\u8f6f\u4ef6",id:"1\u4e0b\u8f7dvisual-studio\u5b89\u88c5\u8f6f\u4ef6",level:4},{value:"\uff082\uff09\u5b89\u88c5Visual Studio",id:"2\u5b89\u88c5visual-studio",level:4},{value:"\uff083\uff09\u6dfb\u52a0Visual Studio\u73af\u5883\u53d8\u91cf",id:"3\u6dfb\u52a0visual-studio\u73af\u5883\u53d8\u91cf",level:4},{value:"\uff084\uff09\u6253\u5f00\u5de5\u5177\uff0c\u5728\u5de5\u5177\u4e2d\u64cd\u4f5c",id:"4\u6253\u5f00\u5de5\u5177\u5728\u5de5\u5177\u4e2d\u64cd\u4f5c",level:4},{value:"11.2.3\u3001\u7f16\u5199\u4ee3\u7801\uff0c\u6784\u5efaNative Image",id:"1123\u7f16\u5199\u4ee3\u7801\u6784\u5efanative-image",level:3},{value:"\uff081\uff09\u7f16\u5199Java\u4ee3\u7801",id:"1\u7f16\u5199java\u4ee3\u7801",level:4},{value:"\uff082\uff09\u590d\u5236\u6587\u4ef6\u5230\u76ee\u5f55\uff0c\u6267\u884c\u7f16\u8bd1",id:"2\u590d\u5236\u6587\u4ef6\u5230\u76ee\u5f55\u6267\u884c\u7f16\u8bd1",level:4},{value:"\uff083\uff09Native Image \u8fdb\u884c\u6784\u5efa",id:"3native-image-\u8fdb\u884c\u6784\u5efa",level:4},{value:"\uff084\uff09\u67e5\u770b\u6784\u5efa\u7684\u6587\u4ef6",id:"4\u67e5\u770b\u6784\u5efa\u7684\u6587\u4ef6",level:4},{value:"\uff085\uff09\u6267\u884c\u6784\u5efa\u7684\u6587\u4ef6",id:"5\u6267\u884c\u6784\u5efa\u7684\u6587\u4ef6",level:4}],p={toc:g},o="wrapper";function d(t){let{components:e,...A}=t;return(0,i.kt)(o,(0,n.Z)({},p,A,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"11\u63d0\u524d\u7f16\u8bd1aot"},"11\u3001\u63d0\u524d\u7f16\u8bd1\uff1aAOT"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7862).Z,width:"657",height:"30"})),(0,i.kt)("h2",{id:"111aot\u6982\u8ff0"},"11.1\u3001AOT\u6982\u8ff0"),(0,i.kt)("h3",{id:"1111jit\u4e0eaot\u7684\u533a\u522b"},"11.1.1\u3001JIT\u4e0eAOT\u7684\u533a\u522b"),(0,i.kt)("p",null,"JIT\u548cAOT \u8fd9\u4e2a\u540d\u8bcd\u662f\u6307\u4e24\u79cd\u4e0d\u540c\u7684\u7f16\u8bd1\u65b9\u5f0f\uff0c\u8fd9\u4e24\u79cd\u7f16\u8bd1\u65b9\u5f0f\u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u662f\u5426\u5728\u201c\u8fd0\u884c\u65f6\u201d\u8fdb\u884c\u7f16\u8bd1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\uff081\uff09JIT\uff0c Just-in-time,\u52a8\u6001(\u5373\u65f6)\u7f16\u8bd1\uff0c\u8fb9\u8fd0\u884c\u8fb9\u7f16\u8bd1\uff1b")),(0,i.kt)("p",null,"\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\uff0c\u6839\u636e\u7b97\u6cd5\u8ba1\u7b97\u51fa\u70ed\u70b9\u4ee3\u7801\uff0c\u7136\u540e\u8fdb\u884c JIT \u5b9e\u65f6\u7f16\u8bd1\uff0c\u8fd9\u79cd\u65b9\u5f0f\u541e\u5410\u91cf\u9ad8\uff0c\u6709\u8fd0\u884c\u65f6\u6027\u80fd\u52a0\u6210\uff0c\u53ef\u4ee5\u8dd1\u5f97\u66f4\u5feb\uff0c\u5e76\u53ef\u4ee5\u505a\u5230\u52a8\u6001\u751f\u6210\u4ee3\u7801\u7b49\uff0c\u4f46\u662f\u76f8\u5bf9\u542f\u52a8\u901f\u5ea6\u8f83\u6162\uff0c\u5e76\u9700\u8981\u4e00\u5b9a\u65f6\u95f4\u548c\u8c03\u7528\u9891\u7387\u624d\u80fd\u89e6\u53d1 JIT \u7684\u5206\u5c42\u673a\u5236\u3002JIT \u7f3a\u70b9\u5c31\u662f\u7f16\u8bd1\u9700\u8981\u5360\u7528\u8fd0\u884c\u65f6\u8d44\u6e90\uff0c\u4f1a\u5bfc\u81f4\u8fdb\u7a0b\u5361\u987f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\uff082\uff09AOT\uff0cAhead Of Time\uff0c\u6307\u8fd0\u884c\u524d\u7f16\u8bd1\uff0c\u9884\u5148\u7f16\u8bd1\u3002")),(0,i.kt)("p",null,"AOT \u7f16\u8bd1\u80fd\u76f4\u63a5\u5c06\u6e90\u4ee3\u7801\u8f6c\u5316\u4e3a\u673a\u5668\u7801\uff0c\u5185\u5b58\u5360\u7528\u4f4e\uff0c\u542f\u52a8\u901f\u5ea6\u5feb\uff0c\u53ef\u4ee5\u65e0\u9700 runtime \u8fd0\u884c\uff0c\u76f4\u63a5\u5c06 runtime \u9759\u6001\u94fe\u63a5\u81f3\u6700\u7ec8\u7684\u7a0b\u5e8f\u4e2d\uff0c\u4f46\u662f\u65e0\u8fd0\u884c\u65f6\u6027\u80fd\u52a0\u6210\uff0c\u4e0d\u80fd\u6839\u636e\u7a0b\u5e8f\u8fd0\u884c\u60c5\u51b5\u505a\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\uff0cAOT \u7f3a\u70b9\u5c31\u662f\u5728\u7a0b\u5e8f\u8fd0\u884c\u524d\u7f16\u8bd1\u4f1a\u4f7f\u7a0b\u5e8f\u5b89\u88c5\u7684\u65f6\u95f4\u589e\u52a0\u3002                                                           "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b80\u5355\u6765\u8bb2\uff1a"),"JIT\u5373\u65f6\u7f16\u8bd1\u6307\u7684\u662f\u5728\u7a0b\u5e8f\u7684\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u4e3a\u53ef\u5728\u786c\u4ef6\u4e0a\u76f4\u63a5\u8fd0\u884c\u7684\u673a\u5668\u7801\uff0c\u5e76\u90e8\u7f72\u81f3\u6258\u7ba1\u73af\u5883\u4e2d\u7684\u8fc7\u7a0b\u3002\u800c AOT \u7f16\u8bd1\u6307\u7684\u5219\u662f\uff0c\u5728\u7a0b\u5e8f\u8fd0\u884c\u4e4b\u524d\uff0c\u4fbf\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u4e3a\u673a\u5668\u7801\u7684\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".java -> .class -> (\u4f7f\u7528jaotc\u7f16\u8bd1\u5de5\u5177) -> .so\uff08\u7a0b\u5e8f\u51fd\u6570\u5e93,\u5373\u7f16\u8bd1\u597d\u7684\u53ef\u4ee5\u4f9b\u5176\u4ed6\u7a0b\u5e8f\u4f7f\u7528\u7684\u4ee3\u7801\u548c\u6570\u636e\uff09\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8096).Z,width:"656",height:"368"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\uff083\uff09AOT\u7684\u4f18\u70b9")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b80\u5355\u6765\u8bb2\uff0c"),"Java \u865a\u62df\u673a\u52a0\u8f7d\u5df2\u7ecf\u9884\u7f16\u8bd1\u6210\u4e8c\u8fdb\u5236\u5e93\uff0c\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u3002\u4e0d\u5fc5\u7b49\u5f85\u53ca\u65f6\u7f16\u8bd1\u5668\u7684\u9884\u70ed\uff0c\u51cf\u5c11 Java \u5e94\u7528\u7ed9\u4eba\u5e26\u6765\u201c\u7b2c\u4e00\u6b21\u8fd0\u884c\u6162\u201d \u7684\u4e0d\u826f\u4f53\u9a8c\u3002"),(0,i.kt)("p",null,"\u5728\u7a0b\u5e8f\u8fd0\u884c\u524d\u7f16\u8bd1\uff0c\u53ef\u4ee5\u907f\u514d\u5728\u8fd0\u884c\u65f6\u7684\u7f16\u8bd1\u6027\u80fd\u6d88\u8017\u548c\u5185\u5b58\u6d88\u8017\n\u53ef\u4ee5\u5728\u7a0b\u5e8f\u8fd0\u884c\u521d\u671f\u5c31\u8fbe\u5230\u6700\u9ad8\u6027\u80fd\uff0c\u7a0b\u5e8f\u542f\u52a8\u901f\u5ea6\u5feb\n\u8fd0\u884c\u4ea7\u7269\u53ea\u6709\u673a\u5668\u7801\uff0c\u6253\u5305\u4f53\u79ef\u5c0f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AOT\u7684\u7f3a\u70b9")),(0,i.kt)("p",null,"\u7531\u4e8e\u662f\u9759\u6001\u63d0\u524d\u7f16\u8bd1\uff0c\u4e0d\u80fd\u6839\u636e\u786c\u4ef6\u60c5\u51b5\u6216\u7a0b\u5e8f\u8fd0\u884c\u60c5\u51b5\u62e9\u4f18\u9009\u62e9\u673a\u5668\u6307\u4ee4\u5e8f\u5217\uff0c\u7406\u8bba\u5cf0\u503c\u6027\u80fd\u4e0d\u5982JIT\n\u6ca1\u6709\u52a8\u6001\u80fd\u529b\uff0c\u540c\u4e00\u4efd\u4ea7\u7269\u4e0d\u80fd\u8de8\u5e73\u53f0\u8fd0\u884c"),(0,i.kt)("p",null,"\u7b2c\u4e00\u79cd\u5373\u65f6\u7f16\u8bd1 (JIT) \u662f\u9ed8\u8ba4\u6a21\u5f0f\uff0cJava Hotspot \u865a\u62df\u673a\u4f7f\u7528\u5b83\u5728\u8fd0\u884c\u65f6\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u4e3a\u673a\u5668\u7801\u3002\u540e\u8005\u63d0\u524d\u7f16\u8bd1 (AOT)\u7531\u65b0\u9896\u7684 GraalVM \u7f16\u8bd1\u5668\u652f\u6301\uff0c\u5e76\u5141\u8bb8\u5728\u6784\u5efa\u65f6\u5c06\u5b57\u8282\u7801\u76f4\u63a5\u9759\u6001\u7f16\u8bd1\u4e3a\u673a\u5668\u7801\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u6b63\u5904\u4e8e\u4e91\u539f\u751f\uff0c\u964d\u672c\u589e\u6548\u7684\u65f6\u4ee3\uff0cJava \u76f8\u6bd4\u4e8e Go\u3001Rust \u7b49\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u975e\u5e38\u5927\u7684\u5f0a\u7aef\u5c31\u662f\u542f\u52a8\u7f16\u8bd1\u548c\u542f\u52a8\u8fdb\u7a0b\u975e\u5e38\u6162\uff0c\u8fd9\u5bf9\u4e8e\u6839\u636e\u5b9e\u65f6\u8ba1\u7b97\u8d44\u6e90\uff0c\u5f39\u6027\u6269\u7f29\u5bb9\u7684\u4e91\u539f\u751f\u6280\u672f\u76f8\u51b2\u7a81\uff0cSpring6 \u501f\u52a9 AOT \u6280\u672f\u5728\u8fd0\u884c\u65f6\u5185\u5b58\u5360\u7528\u4f4e\uff0c\u542f\u52a8\u901f\u5ea6\u5feb\uff0c\u9010\u6e10\u7684\u6765\u6ee1\u8db3 Java \u5728\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u9700\u6c42\uff0c\u5bf9\u4e8e\u5927\u89c4\u6a21\u4f7f\u7528 Java \u5e94\u7528\u7684\u5546\u4e1a\u516c\u53f8\u53ef\u4ee5\u8003\u8651\u5c3d\u65e9\u8c03\u7814\u4f7f\u7528 JDK17\uff0c\u901a\u8fc7\u4e91\u539f\u751f\u6280\u672f\u4e3a\u516c\u53f8\u5b9e\u73b0\u964d\u672c\u589e\u6548\u3002"),(0,i.kt)("h3",{id:"1112graalvm"},"11.1.2\u3001Graalvm"),(0,i.kt)("p",null,"Spring6 \u652f\u6301\u7684 AOT \u6280\u672f\uff0c\u8fd9\u4e2a GraalVM  \u5c31\u662f\u5e95\u5c42\u7684\u652f\u6301\uff0cSpring \u4e5f\u5bf9 GraalVM \u672c\u673a\u6620\u50cf\u63d0\u4f9b\u4e86\u4e00\u6d41\u7684\u652f\u6301\u3002GraalVM \u662f\u4e00\u79cd\u9ad8\u6027\u80fd JDK\uff0c\u65e8\u5728\u52a0\u901f\u7528 Java \u548c\u5176\u4ed6 JVM \u8bed\u8a00\u7f16\u5199\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u6267\u884c\uff0c\u540c\u65f6\u8fd8\u4e3a JavaScript\u3001Python \u548c\u8bb8\u591a\u5176\u4ed6\u6d41\u884c\u8bed\u8a00\u63d0\u4f9b\u8fd0\u884c\u65f6\u3002 GraalVM \u63d0\u4f9b\u4e24\u79cd\u8fd0\u884c Java \u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff1a\u5728 HotSpot JVM \u4e0a\u4f7f\u7528 Graal \u5373\u65f6 (JIT) \u7f16\u8bd1\u5668\u6216\u4f5c\u4e3a\u63d0\u524d (AOT) \u7f16\u8bd1\u7684\u672c\u673a\u53ef\u6267\u884c\u6587\u4ef6\u3002 GraalVM \u7684\u591a\u8bed\u8a00\u80fd\u529b\u4f7f\u5f97\u5728\u5355\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6df7\u5408\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\u6210\u4e3a\u53ef\u80fd\uff0c\u540c\u65f6\u6d88\u9664\u4e86\u5916\u8bed\u8c03\u7528\u6210\u672c\u3002GraalVM \u5411 HotSpot Java \u865a\u62df\u673a\u6dfb\u52a0\u4e86\u4e00\u4e2a\u7528 Java \u7f16\u5199\u7684\u9ad8\u7ea7\u5373\u65f6 (JIT) \u4f18\u5316\u7f16\u8bd1\u5668\u3002"),(0,i.kt)("p",null,"GraalVM \u5177\u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,i.kt)("p",null,"\uff081\uff09\u4e00\u79cd\u9ad8\u7ea7\u4f18\u5316\u7f16\u8bd1\u5668\uff0c\u5b83\u751f\u6210\u66f4\u5feb\u3001\u66f4\u7cbe\u7b80\u7684\u4ee3\u7801\uff0c\u9700\u8981\u66f4\u5c11\u7684\u8ba1\u7b97\u8d44\u6e90"),(0,i.kt)("p",null,"\uff082\uff09AOT \u672c\u673a\u56fe\u50cf\u7f16\u8bd1\u63d0\u524d\u5c06 Java \u5e94\u7528\u7a0b\u5e8f\u7f16\u8bd1\u4e3a\u672c\u673a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u7acb\u5373\u542f\u52a8\uff0c\u65e0\u9700\u9884\u70ed\u5373\u53ef\u5b9e\u73b0\u6700\u9ad8\u6027\u80fd"),(0,i.kt)("p",null,"\uff083\uff09Polyglot \u7f16\u7a0b\u5728\u5355\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5229\u7528\u6d41\u884c\u8bed\u8a00\u7684\u6700\u4f73\u529f\u80fd\u548c\u5e93\uff0c\u65e0\u9700\u989d\u5916\u5f00\u9500"),(0,i.kt)("p",null,"\uff084\uff09\u9ad8\u7ea7\u5de5\u5177\u5728 Java \u548c\u591a\u79cd\u8bed\u8a00\u4e2d\u8c03\u8bd5\u3001\u76d1\u89c6\u3001\u5206\u6790\u548c\u4f18\u5316\u8d44\u6e90\u6d88\u8017"),(0,i.kt)("p",null,"\u603b\u7684\u6765\u8bf4\u5bf9\u4e91\u539f\u751f\u7684\u8981\u6c42\u4e0d\u7b97\u9ad8\u77ed\u671f\u5185\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 2.7.X \u7684\u7248\u672c\u548c JDK8\uff0c\u4e0d\u8fc7 Spring \u5b98\u65b9\u5df2\u7ecf\u5bf9 Spring6 \u8fdb\u884c\u4e86\u6b63\u5f0f\u7248\u53d1\u5e03\u3002"),(0,i.kt)("h3",{id:"1113native-image"},"11.1.3\u3001Native Image"),(0,i.kt)("p",null,"\u76ee\u524d\u4e1a\u754c\u9664\u4e86\u8fd9\u79cd\u5728JVM\u4e2d\u8fdb\u884cAOT\u7684\u65b9\u6848\uff0c\u8fd8\u6709\u53e6\u5916\u4e00\u79cd\u5b9e\u73b0Java AOT\u7684\u601d\u8def\uff0c\u90a3\u5c31\u662f\u76f4\u63a5\u6452\u5f03JVM\uff0c\u548cC/C++\u4e00\u6837\u901a\u8fc7\u7f16\u8bd1\u5668\u76f4\u63a5\u5c06\u4ee3\u7801\u7f16\u8bd1\u6210\u673a\u5668\u4ee3\u7801\uff0c\u7136\u540e\u8fd0\u884c\u3002\u8fd9\u65e0\u7591\u662f\u4e00\u79cd\u76f4\u63a5\u98a0\u8986Java\u8bed\u8a00\u8bbe\u8ba1\u7684\u601d\u8def\uff0c\u90a3\u5c31\u662fGraalVM Native Image\u3002\u5b83\u901a\u8fc7C\u8bed\u8a00\u5b9e\u73b0\u4e86\u4e00\u4e2a\u8d85\u5fae\u7f29\u7684\u8fd0\u884c\u65f6\u7ec4\u4ef6 \u2014\u2014 Substrate VM\uff0c\u57fa\u672c\u5b9e\u73b0\u4e86JVM\u7684\u5404\u79cd\u7279\u6027\uff0c\u4f46\u8db3\u591f\u8f7b\u91cf\u3001\u53ef\u4ee5\u88ab\u8f7b\u677e\u5185\u5d4c\uff0c\u8fd9\u5c31\u8ba9Java\u8bed\u8a00\u548c\u5de5\u7a0b\u6446\u8131JVM\u7684\u9650\u5236\uff0c\u80fd\u591f\u771f\u6b63\u610f\u4e49\u4e0a\u5b9e\u73b0\u548cC/C++\u4e00\u6837\u7684AOT\u7f16\u8bd1\u3002\u8fd9\u4e00\u65b9\u6848\u5728\u7ecf\u8fc7\u957f\u65f6\u95f4\u7684\u4f18\u5316\u548c\u79ef\u7d2f\u540e\uff0c\u5df2\u7ecf\u62e5\u6709\u975e\u5e38\u4e0d\u9519\u7684\u6548\u679c\uff0c\u57fa\u672c\u4e0a\u6210\u4e3aOracle\u5b98\u65b9\u9996\u63a8\u7684Java AOT\u89e3\u51b3\u65b9\u6848\u3002\nNative Image \u662f\u4e00\u9879\u521b\u65b0\u6280\u672f\uff0c\u53ef\u5c06 Java \u4ee3\u7801\u7f16\u8bd1\u6210\u72ec\u7acb\u7684\u672c\u673a\u53ef\u6267\u884c\u6587\u4ef6\u6216\u672c\u673a\u5171\u4eab\u5e93\u3002\u5728\u6784\u5efa\u672c\u673a\u53ef\u6267\u884c\u6587\u4ef6\u671f\u95f4\u5904\u7406\u7684 Java \u5b57\u8282\u7801\u5305\u62ec\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u7c7b\u3001\u4f9d\u8d56\u9879\u3001\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5e93\u548c\u4efb\u4f55\u6240\u9700\u7684 JDK \u7c7b\u3002\u751f\u6210\u7684\u81ea\u5305\u542b\u672c\u673a\u53ef\u6267\u884c\u6587\u4ef6\u7279\u5b9a\u4e8e\u4e0d\u9700\u8981 JVM \u7684\u6bcf\u4e2a\u5355\u72ec\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u673a\u5668\u4f53\u7cfb\u7ed3\u6784\u3002"),(0,i.kt)("h2",{id:"112\u6f14\u793anative-image\u6784\u5efa\u8fc7\u7a0b"},"11.2\u3001\u6f14\u793aNative Image\u6784\u5efa\u8fc7\u7a0b"),(0,i.kt)("h3",{id:"1121graalvm\u5b89\u88c5"},"11.2.1\u3001GraalVM\u5b89\u88c5"),(0,i.kt)("h4",{id:"1\u4e0b\u8f7dgraalvm"},"\uff081\uff09\u4e0b\u8f7dGraalVM"),(0,i.kt)("p",null,"\u8fdb\u5165\u5b98\u7f51\u4e0b\u8f7d\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.graalvm.org/downloads/"},"https://www.graalvm.org/downloads/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1493).Z,width:"651",height:"205"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(26).Z,width:"641",height:"251"})),(0,i.kt)("h4",{id:"2\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\uff082\uff09\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0GRAALVM_HOME")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9554).Z,width:"651",height:"157"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u628aJAVA_HOME\u4fee\u6539\u4e3agraalvm\u7684\u4f4d\u7f6e")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8252).Z,width:"643",height:"155"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u628aPath\u4fee\u6539\u4f4dgraalvm\u7684bin\u4f4d\u7f6e")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9942).Z,width:"649",height:"151"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(826).Z,width:"650",height:"76"})),(0,i.kt)("h4",{id:"3\u5b89\u88c5native-image\u63d2\u4ef6"},"\uff083\uff09\u5b89\u88c5native-image\u63d2\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u547d\u4ee4 gu install native-image\u4e0b\u8f7d\u5b89\u88c5")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6316).Z,width:"647",height:"227"})),(0,i.kt)("h3",{id:"1122\u5b89\u88c5c\u7684\u7f16\u8bd1\u73af\u5883"},"11.2.2\u3001\u5b89\u88c5C++\u7684\u7f16\u8bd1\u73af\u5883"),(0,i.kt)("h4",{id:"1\u4e0b\u8f7dvisual-studio\u5b89\u88c5\u8f6f\u4ef6"},"\uff081\uff09\u4e0b\u8f7dVisual Studio\u5b89\u88c5\u8f6f\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/zh-hans/downloads/"},"https://visualstudio.microsoft.com/zh-hans/downloads/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7646).Z,width:"634",height:"311"})),(0,i.kt)("h4",{id:"2\u5b89\u88c5visual-studio"},"\uff082\uff09\u5b89\u88c5Visual Studio"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7215).Z,width:"646",height:"319"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9448).Z,width:"627",height:"238"})),(0,i.kt)("h4",{id:"3\u6dfb\u52a0visual-studio\u73af\u5883\u53d8\u91cf"},"\uff083\uff09\u6dfb\u52a0Visual Studio\u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"\u914d\u7f6eINCLUDE\u3001LIB\u548cPath"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7192).Z,width:"664",height:"207"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5277).Z,width:"644",height:"153"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6509).Z,width:"649",height:"268"})),(0,i.kt)("h4",{id:"4\u6253\u5f00\u5de5\u5177\u5728\u5de5\u5177\u4e2d\u64cd\u4f5c"},"\uff084\uff09\u6253\u5f00\u5de5\u5177\uff0c\u5728\u5de5\u5177\u4e2d\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7754).Z,width:"514",height:"101"})),(0,i.kt)("h3",{id:"1123\u7f16\u5199\u4ee3\u7801\u6784\u5efanative-image"},"11.2.3\u3001\u7f16\u5199\u4ee3\u7801\uff0c\u6784\u5efaNative Image"),(0,i.kt)("h4",{id:"1\u7f16\u5199java\u4ee3\u7801"},"\uff081\uff09\u7f16\u5199Java\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Hello {\n\n    public static void main(String[] args) {\n        System.out.println("hello world");\n    }\n}\n')),(0,i.kt)("h4",{id:"2\u590d\u5236\u6587\u4ef6\u5230\u76ee\u5f55\u6267\u884c\u7f16\u8bd1"},"\uff082\uff09\u590d\u5236\u6587\u4ef6\u5230\u76ee\u5f55\uff0c\u6267\u884c\u7f16\u8bd1"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9219).Z,width:"649",height:"157"})),(0,i.kt)("h4",{id:"3native-image-\u8fdb\u884c\u6784\u5efa"},"\uff083\uff09Native Image \u8fdb\u884c\u6784\u5efa"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5628).Z,width:"648",height:"195"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6570).Z,width:"646",height:"305"})),(0,i.kt)("h4",{id:"4\u67e5\u770b\u6784\u5efa\u7684\u6587\u4ef6"},"\uff084\uff09\u67e5\u770b\u6784\u5efa\u7684\u6587\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(377).Z,width:"447",height:"136"})),(0,i.kt)("h4",{id:"5\u6267\u884c\u6784\u5efa\u7684\u6587\u4ef6"},"\uff085\uff09\u6267\u884c\u6784\u5efa\u7684\u6587\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7067).Z,width:"635",height:"98"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2aHello\u6700\u7ec8\u6253\u5305\u4ea7\u51fa\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5927\u5c0f\u4e3a11M\uff0c\u8fd9\u662f\u5305\u542b\u4e86SVM\u548cJDK\u5404\u79cd\u5e93\u540e\u7684\u5927\u5c0f\uff0c\u867d\u7136\u76f8\u6bd4C/C++\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u8bf4\u4f53\u79ef\u504f\u5927\uff0c\u4f46\u662f\u5bf9\u6bd4\u5b8c\u6574JVM\u6765\u8bf4\uff0c\u53ef\u4ee5\u8bf4\u662f\u5df2\u7ecf\u662f\u975e\u5e38\u5c0f\u4e86\u3002"),(0,i.kt)("p",null,"\u76f8\u6bd4\u4e8e\u4f7f\u7528JVM\u8fd0\u884c\uff0cNative Image\u7684\u901f\u5ea6\u8981\u5feb\u4e0a\u4e0d\u5c11\uff0ccpu\u5360\u7528\u4e5f\u66f4\u4f4e\u4e00\u4e9b\uff0c\u4ece\u5b98\u65b9\u63d0\u4f9b\u7684\u5404\u7c7b\u5b9e\u9a8c\u6570\u636e\u4e5f\u53ef\u4ee5\u770b\u51faNative Image\u5bf9\u4e8e\u542f\u52a8\u901f\u5ea6\u548c\u5185\u5b58\u5360\u7528\u5e26\u6765\u7684\u63d0\u5347\u662f\u975e\u5e38\u663e\u8457\u7684\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4728).Z,width:"645",height:"312"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7253).Z,width:"674",height:"376"})))}d.isMDXComponent=!0},7862:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot0-225a413523309d2949d8fb013eeef1f7.png"},8096:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot1-064f3ef276649b37c3c39df03dfd16d6.png"},7215:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot10-10db973fd55beaf49bf6dd4eb2b3d92c.png"},9448:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot11-014eaf2aade979849d91b9a8354507ae.png"},7192:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot12-b4e0b2f946c8eb277703fcbc2cd8bc78.png"},5277:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot13-0818b24c95e81162cdec64a84b129eeb.png"},6509:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot14-1aefc18af50a7152cf67ebc91bd600a4.png"},7754:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot15-293946fa3c26368254b74e3f7c44ff49.png"},9219:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot16-b45bcfc2f508ffb447a44f3da235b4f2.png"},5628:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot17-70d3d451fcd1bd68385a1db479c5cbba.png"},6570:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot18-edf8dae16d2b4a82f6ff74b7b2864bea.png"},377:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"},1493:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot2-68a1bed062efd412e90a022f899563af.png"},7067:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot20-b366942b6eeb719066fd15357271ae6d.png"},4728:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot21-7ec301a3d3e0c9d4753dc2c0055bdc6b.png"},7253:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot22-df196c61afb721ab46f63ee2c5d3afa8.png"},26:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot3-32e2cabb287ad213042f04cb6049ac13.png"},9554:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot4-1fd0ef29265c42a9e93e429e7f7acae0.png"},8252:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot5-7ed6e38458afe7b0474e325972345ad1.png"},9942:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot6-f71e824deb935649072edd731f246877.png"},826:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot7-a7e1295d4b392a48eddeeaf5b4931068.png"},6316:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot8-73669f4cb677145fe908a33262d12903.png"},7646:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/aot9-4ff149817ccbf1ecea81f7b53d4b255d.png"}}]);