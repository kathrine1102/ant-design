(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["EPgwk5Pi"],{EPgwk5Pi:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var n=l("9lWhVE4R");l("sZl8yKQC");var a=l("NIchKEYm"),i=l("B-i5_7B2");let d=(e,t)=>e.includes(t),r=(e=[],t=[])=>e.map(({children:e,...l})=>({...l,disabled:t.includes(l.key),children:r(e,t)})),s=({dataSource:e,targetKeys:t=[],...l})=>{let{token:a}=i.theme.useToken(),s=[];return!function e(t=[]){t.forEach(t=>{s.push(t),e(t.children);});}(e),(0,n.jsx)(i.Transfer,{...l,targetKeys:t,dataSource:s,className:"tree-transfer",render:e=>e.title,showSelectAll:!1,children:({direction:l,onItemSelect:s,selectedKeys:c})=>{if("left"===l){let l=[...c,...t];return(0,n.jsx)("div",{style:{padding:a.paddingXS},children:(0,n.jsx)(i.Tree,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:l,treeData:r(e,t),onCheck:(e,{node:{key:t}})=>{s(t,!d(l,t));},onSelect:(e,{node:{key:t}})=>{s(t,!d(l,t));}})});}}});},c=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}];var u=()=>{let[e,t]=(0,a.useState)([]);return(0,n.jsx)(s,{dataSource:c,targetKeys:e,onChange:e=>{t(e);}});};}}]);
//# sourceMappingURL=EPgwk5Pi-async.d6451ec3.js.map