(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ucvlOOAV"],{ucvlOOAV:function(e,l,o){"use strict";o.d(l,"__esModule",{value:!0}),o.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=o("9lWhVE4R");o("tiWxXYBH");var n=o("NIchKEYm"),s=o("B-i5_7B2");let a=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}];var i=()=>{let[e,l]=s.message.useMessage(),[o,i]=s.notification.useNotification(),[c,d]=(0,n.useState)(!1);return(0,t.jsxs)(s.Space,{children:[(0,t.jsx)(s.Switch,{style:{position:"relative",zIndex:c?4e3:0},checkedChildren:"Open",unCheckedChildren:"Close",onChange:e=>d(e)}),(0,t.jsx)(s.Button,{onClick:()=>{s.Modal.confirm({content:(0,t.jsx)(s.Select,{open:!0,value:"1",options:a})});},children:"Static"}),(0,t.jsxs)(s.Modal,{title:"Basic Modal",open:c,footer:null,destroyOnClose:!0,onCancel:()=>d(!1),maskClosable:!1,closable:!1,styles:{content:{marginBlockStart:100}},children:[(0,t.jsx)(s.Select,{open:!0,value:"1",options:a}),(0,t.jsxs)(s.Modal,{title:"Nested Modal",open:c,footer:null,destroyOnClose:!0,mask:!1,onCancel:()=>d(!1),maskClosable:!1,closable:!1,styles:{content:{marginBlockStart:250},body:{display:"flex",justifyContent:"center"}},children:[(0,t.jsx)(s.Select,{open:!0,value:"1",options:a}),(0,t.jsx)(s.Modal,{title:"Nested Modal",open:c,footer:null,destroyOnClose:!0,mask:!1,maskClosable:!1,onCancel:()=>d(!1),closable:!1,styles:{content:{marginBlockStart:400},body:{display:"flex",justifyContent:"flex-end"}},children:(0,t.jsxs)(s.Space,{wrap:!0,children:[(0,t.jsx)(s.Button,{onClick:()=>{s.Modal.confirm({title:"Are you OK?",content:"I am OK"});},children:"Static Confirm"}),(0,t.jsx)(s.Button,{onClick:()=>{s.message.success("Hello World"),s.notification.success({message:"Hello World"});},children:"Static Message, Notification"}),(0,t.jsx)(s.Button,{onClick:()=>{e.success("Hello World"),o.success({message:"Hello World"});},children:"Hook Message, Notification"}),(0,t.jsx)(s.Select,{open:!0,value:"1",options:a})]})})]})]}),l,i]});};}}]);
//# sourceMappingURL=ucvlOOAV-async.d9be1957.js.map