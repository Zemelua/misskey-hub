import{r as i,o as r,c as n,b as t,F as a,e as c,a as e,d as s}from"./app.e68c2c73.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},p=c('<h1 id="webhook" tabindex="-1"><a class="header-anchor" href="#webhook" aria-hidden="true">#</a> Webhook</h1><div class="custom-container tip"><i class="fas fa-info"></i><p>\u30D0\u30FC\u30B8\u30E7\u30F3 12.109.0 \u4EE5\u964D\u306E\u6A5F\u80FD\u3067\u3059\u3002</p></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>\u5B9F\u9A13\u7684\u306A\u6A5F\u80FD\u3067\u3042\u308B\u305F\u3081\u3001\u52D5\u4F5C\u304C\u4E0D\u5B89\u5B9A\u3060\u3063\u305F\u308A\u4ECA\u5F8C\u4ED5\u69D8\u304C\u5909\u66F4\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002</p></div><p>Misskey\u306B\u306FWebhook\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002Webhook\u3092\u5229\u7528\u3059\u308B\u3068\u3001Misskey\u4E0A\u306E\u69D8\u3005\u306A\u30A4\u30D9\u30F3\u30C8\u3092\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306B\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002</p><p>\u8A2D\u5B9A&gt;Webhook \u3067Webhook\u306E\u7BA1\u7406\u3092\u884C\u3048\u307E\u3059\u3002</p><p>Webhook\u304C\u767B\u9332\u3055\u308C\u308B\u3068\u3001\u6307\u5B9A\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u969B\u306B\u3001\u6307\u5B9A\u3057\u305FURL\u306BHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30E1\u30BD\u30C3\u30C9\u306FPOST\u3067\u3001\u30DC\u30C7\u30A3\u306FJSON\u3067\u3059\u3002 \u3055\u3089\u306B\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u30D8\u30C3\u30C0\u30FC\u306B\u306F<code>X-Misskey-Hook-Secret</code>\u3068\u3044\u3046\u540D\u524D\u3067\u3001\u767B\u9332\u6642\u306B\u8A2D\u5B9A\u3057\u305F\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u3053\u306E\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u304C\u6B63\u3057\u3044\u304B\u691C\u8A3C\u3059\u308B\u3053\u3068\u3067\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u6B63\u898F\u306E\u3082\u306E\u304B\u5224\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>\u30EA\u30AF\u30A8\u30B9\u30C8\u30DA\u30A4\u30ED\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5165\u308A\u307E\u3059\u3002</p>',7),l=e("p",null,"\u9001\u4FE1\u5148\u30B5\u30FC\u30D0\u30FC\u304C5xx\u30A8\u30E9\u30FC\u3092\u8FD4\u3059\u304B\u3001\u5FDC\u7B54\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u306F\u6642\u9593\u3092\u958B\u3051\u3066\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u518D\u9001\u3055\u308C\u307E\u3059\u3002",-1),_=e("p",null,"Webhook\u306F\u7BA1\u7406\u753B\u9762\u304B\u3089\u500B\u5225\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u72B6\u614B\u3092\u8A2D\u5B9A\u3067\u304D\u3001\u4E00\u6642\u7684\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u9001\u4FE1\u3092\u505C\u6B62\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",-1),f=e("h2",{id:"\u30A4\u30D8\u3099\u30F3\u30C8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A4\u30D8\u3099\u30F3\u30C8","aria-hidden":"true"},"#"),s(" \u30A4\u30D9\u30F3\u30C8")],-1),m=e("p",null,"\u30A4\u30D9\u30F3\u30C8\u3054\u3068\u306B\u8AAC\u660E\u3068\u30DA\u30A4\u30ED\u30FC\u30C9\u3092\u793A\u3057\u307E\u3059\u3002",-1),u=e("h3",{id:"follow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#follow","aria-hidden":"true"},"#"),s(" follow")],-1),b=e("p",null,"\u81EA\u5206\u304C\u8AB0\u304B\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u305F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002",-1),y=e("h3",{id:"followed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#followed","aria-hidden":"true"},"#"),s(" followed")],-1),k=e("p",null,"\u81EA\u5206\u304C\u8AB0\u304B\u304B\u3089\u30D5\u30A9\u30ED\u30FC\u3055\u308C\u305F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002",-1),x=e("h3",{id:"unfollow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unfollow","aria-hidden":"true"},"#"),s(" unfollow")],-1),w=e("p",null,"\u81EA\u5206\u304C\u8AB0\u304B\u3092\u30D5\u30A9\u30ED\u30FC\u89E3\u9664\u3057\u305F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002",-1),j=e("h3",{id:"note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note","aria-hidden":"true"},"#"),s(" note")],-1),N=e("p",null,"\u81EA\u5206\u304C\u30CE\u30FC\u30C8\u3092\u6295\u7A3F\u3057\u305F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002",-1),g=e("h3",{id:"reply",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reply","aria-hidden":"true"},"#"),s(" reply")],-1),W=e("p",null,"\u81EA\u5206\u306E\u30CE\u30FC\u30C8\u306B\u8FD4\u4FE1\u3055\u308C\u305F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002",-1),v=e("h3",{id:"renote",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#renote","aria-hidden":"true"},"#"),s(" renote")],-1),I=e("p",null,"\u81EA\u5206\u306E\u30CE\u30FC\u30C8\u304CRenote\u3055\u308C\u305F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002",-1),$=e("h3",{id:"mention",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mention","aria-hidden":"true"},"#"),s(" mention")],-1),S=e("p",null,"\u81EA\u5206\u306B\u30E1\u30F3\u30B7\u30E7\u30F3\u3055\u308C\u305F\u969B\u306B\u767A\u751F\u3057\u307E\u3059\u3002",-1);function V(M,U){const o=i("MkSchemaViewer");return r(),n(a,null,[p,t(o,{schema:{type:"object",properties:{hookId:{type:"string",description:"Webhook ID"},userId:{type:"string",description:"Webhook\u4F5C\u6210\u8005\u306E\u30E6\u30FC\u30B6\u30FCID"},eventId:{type:"string",description:"\u30A4\u30D9\u30F3\u30C8\u306EID"},createdAt:{type:"integer",description:"\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u65E5\u6642(UNIX time\u3001\u30DF\u30EA\u79D2)"},type:{type:"string",description:"\u30A4\u30D9\u30F3\u30C8\u306E\u7A2E\u985E"},body:{type:"object",description:"\u30A4\u30D9\u30F3\u30C8\u306E\u30DA\u30A4\u30ED\u30FC\u30C9"}}}},null,8,["schema"]),l,_,f,m,u,b,t(o,{schema:{type:"object",properties:{user:{$ref:"misskey://User",description:"\u30D5\u30A9\u30ED\u30FC\u3057\u305F\u30E6\u30FC\u30B6\u30FC"}}}}),y,k,t(o,{schema:{type:"object",properties:{user:{$ref:"misskey://User",description:"\u30D5\u30A9\u30ED\u30FC\u3092\u884C\u3063\u305F\u30E6\u30FC\u30B6\u30FC"}}}}),x,w,t(o,{schema:{type:"object",properties:{user:{$ref:"misskey://User",description:"\u30D5\u30A9\u30ED\u30FC\u89E3\u9664\u3057\u305F\u30E6\u30FC\u30B6\u30FC"}}}}),j,N,t(o,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8"}}}}),g,W,t(o,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"\u8FD4\u4FE1"}}}}),v,I,t(o,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"Renote"}}}}),$,S,t(o,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"\u30E1\u30F3\u30B7\u30E7\u30F3\u3092\u542B\u3080\u30CE\u30FC\u30C8"}}}})],64)}var D=d(h,[["render",V]]);export{D as default};
