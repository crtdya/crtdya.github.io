"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7479],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=a,f=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const i={},l="\u4e03\u3001\u52a8\u6001SQL",s={unversionedId:"mybatis/\u52a8\u6001SQL",id:"mybatis/\u52a8\u6001SQL",title:"\u4e03\u3001\u52a8\u6001SQL",description:"Mybatis\u6846\u67b6\u7684\u52a8\u6001SQL\u6280\u672f\u662f\u4e00\u79cd\u6839\u636e\u7279\u5b9a\u6761\u4ef6\u52a8\u6001\u62fc\u88c5SQL\u8bed\u53e5\u7684\u529f\u80fd\uff0c\u5b83\u5b58\u5728\u7684\u610f\u4e49\u662f\u4e3a\u4e86\u89e3\u51b3",source:"@site/docs/6_mybatis/7.\u52a8\u6001SQL.md",sourceDirName:"6_mybatis",slug:"/mybatis/\u52a8\u6001SQL",permalink:"/docs/mybatis/\u52a8\u6001SQL",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/6_mybatis/7.\u52a8\u6001SQL.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u516d\u3001\u81ea\u5b9a\u4e49\u6620\u5c04resultMap",permalink:"/docs/mybatis/\u81ea\u5b9a\u4e49\u6620\u5c04resultMap"},next:{title:"\u516b\u3001MyBatis\u7684\u7f13\u5b58",permalink:"/docs/mybatis/MyBatis\u7684\u7f13\u5b58"}},o={},m=[{value:"1\u3001if",id:"1if",level:2},{value:"2\u3001where",id:"2where",level:2},{value:"3\u3001trim",id:"3trim",level:2},{value:"4\u3001choose\u3001when\u3001otherwise",id:"4choosewhenotherwise",level:2},{value:"5\u3001foreach",id:"5foreach",level:2},{value:"6\u3001SQL\u7247\u6bb5",id:"6sql\u7247\u6bb5",level:2}],c={toc:m},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e03\u52a8\u6001sql"},"\u4e03\u3001\u52a8\u6001SQL"),(0,a.kt)("p",null,"Mybatis\u6846\u67b6\u7684\u52a8\u6001SQL\u6280\u672f\u662f\u4e00\u79cd\u6839\u636e\u7279\u5b9a\u6761\u4ef6\u52a8\u6001\u62fc\u88c5SQL\u8bed\u53e5\u7684\u529f\u80fd\uff0c\u5b83\u5b58\u5728\u7684\u610f\u4e49\u662f\u4e3a\u4e86\u89e3\u51b3\n\u62fc\u63a5SQL\u8bed\u53e5\u5b57\u7b26\u4e32\u65f6\u7684\u75db\u70b9\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"1if"},"1\u3001if"),(0,a.kt)("p",null,"if\u6807\u7b7e\u53ef\u901a\u8fc7test\u5c5e\u6027\u7684\u8868\u8fbe\u5f0f\u8fdb\u884c\u5224\u65ad\uff0c\u82e5\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u4e3atrue\uff0c\u5219\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u4f1a\u6267\u884c\uff1b\u53cd\u4e4b\u6807\u7b7e\u4e2d\n\u7684\u5185\u5bb9\u4e0d\u4f1a\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'\x3c!--List<Emp> getEmpListByMoreTJ(Emp emp);--\x3e\n<select id="getEmpListByMoreTJ" resultType="Emp">\nselect * from emp where 1=1\n<if test="ename != \'\' and ename != null">\nand ename = #{ename}\n</if>\n<if test="age != \'\' and age != null">\nand age = #{age}\n</if>\n<if test="sex != \'\' and sex != null">\nand sex = #{sex}\n</if>\n</select>\n')),(0,a.kt)("h2",{id:"2where"},"2\u3001where"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'<select id="getEmpListByMoreTJ2" resultType="Emp">\nselect * from emp\n<where>\n<if test="ename != \'\' and ename != null">\nename = #{ename}\n</if>\n<if test="age != \'\' and age != null">\nand age = #{age}\n</if>\n<if test="sex != \'\' and sex != null">\nand sex = #{sex}\n</if>\n</where>\n</select>\n')),(0,a.kt)("h2",{id:"3trim"},"3\u3001trim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'<select id="getEmpListByMoreTJ" resultType="Emp">\nselect * from emp\n<trim prefix="where" suffixOverrides="and">\n<if test="ename != \'\' and ename != null">\nename = #{ename} and\n</if>\n<if test="age != \'\' and age != null">\nage = #{age} and\n</if>\n<if test="sex != \'\' and sex != null">\nsex = #{sex}\n</if>\n</trim>\n</select>\n')),(0,a.kt)("p",null,"trim\u7528\u4e8e\u53bb\u6389\u6216\u6dfb\u52a0\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\n\u5e38\u7528\u5c5e\u6027\uff1a\nprefix\uff1a\u5728trim\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u7684\u524d\u9762\u6dfb\u52a0\u67d0\u4e9b\u5185\u5bb9\nprefixOverrides\uff1a\u5728trim\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u7684\u524d\u9762\u53bb\u6389\u67d0\u4e9b\u5185\u5bb9\nsuffix\uff1a\u5728trim\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u7684\u540e\u9762\u6dfb\u52a0\u67d0\u4e9b\u5185\u5bb9\nsuffixOverrides\uff1a\u5728trim\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u7684\u540e\u9762\u53bb\u6389\u67d0\u4e9b\u5185\u5bb9"),(0,a.kt)("h2",{id:"4choosewhenotherwise"},"4\u3001choose\u3001when\u3001otherwise"),(0,a.kt)("p",null,"choose\u3001when\u3001otherwise\u76f8\u5f53\u4e8eif...else if..else"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'\x3c!--List<Emp> getEmpListByChoose(Emp emp);--\x3e\n<select id="getEmpListByChoose" resultType="Emp">\nselect <include refid="empColumns"></include> from emp\n<where>\n<choose>\n<when test="ename != \'\' and ename != null">\nename = #{ename}\n</when>\n<when test="age != \'\' and age != null">\nage = #{age}\n</when>\n<when test="sex != \'\' and sex != null">\nsex = #{sex}\n</when>\n<when test="email != \'\' and email != null">\nemail = #{email}\n</when>\n</choose>\n</where>\n</select>\n')),(0,a.kt)("h2",{id:"5foreach"},"5\u3001foreach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'\x3c!--int insertMoreEmp(List<Emp> emps);--\x3e\n<insert id="insertMoreEmp">\ninsert into emp values\n<foreach collection="emps" item="emp" separator=",">\n(null,#{emp.ename},#{emp.age},#{emp.sex},#{emp.email},null)\n</foreach>\n</insert>\n\x3c!--int deleteMoreByArray(int[] eids);--\x3e\n<delete id="deleteMoreByArray">\ndelete from emp where\n<foreach collection="eids" item="eid" separator="or">\neid = #{eid}\n</foreach>\n</delete>\n\x3c!--int deleteMoreByArray(int[] eids);--\x3e\n<delete id="deleteMoreByArray">\ndelete from emp where eid in\n<foreach collection="eids" item="eid" separator="," open="(" close=")">\n#{eid}\n</foreach>\n</delete>\n')),(0,a.kt)("p",null,"\u5c5e\u6027\uff1a\ncollection\uff1a\u8bbe\u7f6e\u8981\u5faa\u73af\u7684\u6570\u7ec4\u6216\u96c6\u5408\nitem\uff1a\u8868\u793a\u96c6\u5408\u6216\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u6570\u636e\nseparator\uff1a\u8bbe\u7f6e\u5faa\u73af\u4f53\u4e4b\u95f4\u7684\u5206\u9694\u7b26\nopen\uff1a\u8bbe\u7f6eforeach\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u7684\u5f00\u59cb\u7b26\nclose\uff1a\u8bbe\u7f6eforeach\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u7684\u7ed3\u675f\u7b26"),(0,a.kt)("h2",{id:"6sql\u7247\u6bb5"},"6\u3001SQL\u7247\u6bb5"),(0,a.kt)("p",null,"sql\u7247\u6bb5\uff0c\u53ef\u4ee5\u8bb0\u5f55\u4e00\u6bb5\u516c\u5171sql\u7247\u6bb5\uff0c\u5728\u4f7f\u7528\u7684\u5730\u65b9\u901a\u8fc7include\u6807\u7b7e\u8fdb\u884c\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'<sql id="empColumns">\neid,ename,age,sex,did\n</sql>\nselect <include refid="empColumns"></include> from emp\n')))}d.isMDXComponent=!0}}]);