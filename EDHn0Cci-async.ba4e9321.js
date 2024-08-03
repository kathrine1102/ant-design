(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["EDHn0Cci"],{EDHn0Cci:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"texts",{enumerable:!0,get:function(){return i;}}),a("jqO3zx3a");let i=[{value:"Ant Design's Typography component provides an ",paraId:0},{value:"ellipsis",paraId:0},{value:" property to display ellipsis when text overflows. It supports limiting the number of displayed lines through the ",paraId:0},{value:"ellipsis.rows",paraId:0},{value:" configuration. If it is pure text content, it will be implemented through the CSS ",paraId:0},{value:"-webkit-line-clamp",paraId:0},{value:" property. Although it has a ",paraId:0},{value:"-webkit-",paraId:0},{value:" prefix, it has been well supported in modern browsers.",paraId:0},{value:"<div\n  style={{\n    display: '-webkit-box',\n    overflow: 'hidden',\n    WebkitBoxOrient: 'vertical',\n    webkitLineClamp: 3,\n  }}\n>\n  {text}\n</div>\n",paraId:1},{value:"However, CSS implementation also has limitations, that is, it does not support modifying the ellipsis and supporting additional action buttons (such as copy, edit, expand, etc.):",paraId:2,tocIndex:0},{value:"Operational buttons will be truncated together and cannot be displayed.",paraId:3,tocIndex:0},{value:"Though there are some magic methods to achieve this through styles such as ",paraId:4,tocIndex:0},{value:"float",paraId:4,tocIndex:0},{value:", this method requires targeted processing in different browsers. In addition, it still cannot solve the problem of custom ellipsis. Therefore, the best implementation method is still through JS.",paraId:4,tocIndex:0},{value:"With JS, we can quickly find the truncation position of the text through binary search. As long as the height of the text is inferred based on ",paraId:5,tocIndex:1},{value:"rows",paraId:5,tocIndex:1},{value:", we can traverse and find the maximum number of characters that can be displayed:",paraId:5,tocIndex:1},{value:"And get the line height by simulating an embedded ",paraId:6,tocIndex:1},{value:"span",paraId:6,tocIndex:1},{value:":",paraId:6,tocIndex:1},{value:"<div>\n  {text}\n  {measuring && <span ref={measureRef}>&nbsp;</span>}\n</div>\n",paraId:7,tocIndex:1},{value:"But this method also has some problems, for mixed line height scenarios (such as adding images, embedding different sizes of text, etc.). This calculation method often estimates the wrong total height, making the truncation position inaccurate:",paraId:8,tocIndex:1},{value:"Since the height of the image exceeds the line height, the calculation thinks that the image occupies the height of two lines. At the same time, because the image itself cannot be truncated, the final number of ellipsis lines is incorrect (3 lines of ellipsis becomes 2 lines):",paraId:9,tocIndex:1},{value:"Even worse, if the image is on the first line, the entire text will be truncated:",paraId:10,tocIndex:1},{value:"But if you use CSS, there will be no such problem:",paraId:11,tocIndex:1},{value:"To solve this problem, we can use a mixed measurement method. That is, use CSS to measure the total height of the native multi-line ellipsis, and then use JS to perform binary search to ensure that the truncation position of the text does not exceed the total height measured by CSS:",paraId:12,tocIndex:2},{value:"<div ref={measureRef} style={ellipsisStyle}>\n  {text}\n</div>;\n\nconst cssHeight = measureRef.current.clientHeight;\n",paraId:13,tocIndex:2},{value:"// pseudocode. Not used in real world\n<div ref={walkingMeasureRef}>{text.slice(0, walkingMeasureIndex)}</div>;\n\nif (walkingMeasureRef.current.clientHeight > cssHeight) {\n  // Not meet the requirement\n}\n",paraId:14,tocIndex:2},{value:"This helps to accurately handle mixed line height scenarios:",paraId:15,tocIndex:2},{value:"The mixed measurement method allows us to easily use the accuracy of CSS and the flexibility of JS to achieve accurate text truncation even in complex content containing images and other elements with different line heights.",paraId:16,tocIndex:3},{value:"This refactoring has been released in ",paraId:17,tocIndex:3},{value:"5.15.0",paraId:17,tocIndex:3},{value:", welcome to experience it.",paraId:17,tocIndex:3}];}}]);
//# sourceMappingURL=EDHn0Cci-async.ba4e9321.js.map