(self.webpackChunkapps=self.webpackChunkapps||[]).push([[179],{"./src/stories/Introduction.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return Introduction_stories}});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react=__webpack_require__("./node_modules/@mdx-js/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");var code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d71f1a3ba28d2461481dce689b.svg";var colors=__webpack_require__.p+"static/media/colors.a4bd0486703b41f28ac9ef49d8046942.svg";var comments=__webpack_require__.p+"static/media/comments.a38590896b951b65e7ada9af32d6915d.svg";var direction=__webpack_require__.p+"static/media/direction.b770f9af5f20abac0352e73b4676bba2.svg";var flow=__webpack_require__.p+"static/media/flow.edad2ac1b0bb28e0ce513d5b7a65f8fe.svg";var assets_plugin=__webpack_require__.p+"static/media/plugin.d494b22808806ebe8ff4c5b276819e72.svg";var repo=__webpack_require__.p+"static/media/repo.6d4963229d067828d1326ea3f60f5136.svg";var stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb33e1e5daf57e0cf575f818e65.svg";function Introduction_stories_extends(){return Introduction_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Introduction_stories_extends.apply(this,arguments)}const layoutProps={},MDXLayout="wrapper";function MDXContent({components:components,...props}){return(0,_mdx_js_react.mdx)(MDXLayout,Introduction_stories_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react.mdx)(esm.h_,{title:"Example/Introduction",mdxType:"Meta"}),(0,_mdx_js_react.mdx)("style",null,"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "),(0,_mdx_js_react.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),(0,_mdx_js_react.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,_mdx_js_react.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),(0,_mdx_js_react.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,_mdx_js_react.mdx)("inlineCode",{parentName:"p"},"stories")," directory to learn how they work.\nWe recommend building UIs with a ",(0,_mdx_js_react.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},(0,_mdx_js_react.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),(0,_mdx_js_react.mdx)("div",{className:"subheading"},"Configure"),(0,_mdx_js_react.mdx)("div",{className:"link-list"},(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:assets_plugin,alt:"plugin"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:stackalt,alt:"Build"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:colors,alt:"colors"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:flow,alt:"flow"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),(0,_mdx_js_react.mdx)("div",{className:"subheading"},"Learn"),(0,_mdx_js_react.mdx)("div",{className:"link-list"},(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:repo,alt:"repo"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:direction,alt:"direction"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:code_brackets,alt:"code"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"GitHub project"),"View the source and add issues")),(0,_mdx_js_react.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},(0,_mdx_js_react.mdx)("img",{src:comments,alt:"comments"}),(0,_mdx_js_react.mdx)("span",null,(0,_mdx_js_react.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),(0,_mdx_js_react.mdx)("div",{className:"tip-wrapper"},(0,_mdx_js_react.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",(0,_mdx_js_react.mdx)("code",null,"stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react.mdx)(esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react.mdx)(MDXContent,null))};var Introduction_stories=componentMeta;const __namedExportsOrder=["__page"]},"./src/stories/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:function(){return Large},Primary:function(){return Primary},Secondary:function(){return Secondary},Small:function(){return Small},__namedExportsOrder:function(){return __namedExportsOrder}});var _Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/stories/Button.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/Button",component:_Button__WEBPACK_IMPORTED_MODULE_1__.z,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters);var __namedExportsOrder=["Primary","Secondary","Large","Small"]},"./src/stories/Card.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Card__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/stories/Card.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Crad/card",component:_Card__WEBPACK_IMPORTED_MODULE_1__.q,argTypes:{}};var Primary=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_1__.q,(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))}.bind({});Primary.args={label:"Title"},Primary.parameters=(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <ItemCard {...args} />"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/Grid.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Grid_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),chunk_5FO2ZLZM=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-5FO2ZLZM.mjs"),Card=__webpack_require__("./src/stories/Card.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["primary","size","columns","borderColor","label","description","value","onClick"],ItemGrid=function ItemGrid(_ref){_ref.primary,_ref.size;var _ref$columns=_ref.columns,columns=void 0===_ref$columns?"repeat(6, 1fr)":_ref$columns,label=(_ref.borderColor,_ref.label),description=_ref.description,value=_ref.value,_React$useState=(_ref.onClick,(0,objectWithoutProperties.Z)(_ref,_excluded),react.useState()),_React$useState2=(0,slicedToArray.Z)(_React$useState,2);_React$useState2[0],_React$useState2[1];return(0,jsx_runtime.jsxs)(chunk_5FO2ZLZM.r,{templateColumns:columns,gap:12,children:[(0,jsx_runtime.jsx)(Card.q,{borderColor:"grey",size:"small",label:label,description:description,value:value,onClick:function onClick(){return console.log("hello")}}),(0,jsx_runtime.jsx)(Card.q,{borderColor:"grey",size:"small",language:"left",label:label,description:description,value:value,onClick:function onClick(){return console.log("hello")}}),(0,jsx_runtime.jsx)(Card.q,{borderColor:"grey",size:"small",language:"left",label:label,description:description,value:value,onClick:function onClick(){return console.log("hello")}}),(0,jsx_runtime.jsx)(Card.q,{borderColor:"grey",size:"small",language:"left",label:label,description:description,value:value,onClick:function onClick(){return console.log("hello")}})]})};try{ItemGrid.displayName="ItemGrid",ItemGrid.__docgenInfo={description:"",displayName:"ItemGrid",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},columns:{defaultValue:{value:"repeat(6, 1fr)"},description:"",name:"columns",required:!1,type:{name:"enum",value:[{value:'"repeat(3, 1fr)"'},{value:'"repeat(6, 1fr)"'},{value:'"repeat(9, 1fr)"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Grid.tsx#ItemGrid"]={docgenInfo:ItemGrid.__docgenInfo,name:"ItemGrid",path:"src/stories/Grid.tsx#ItemGrid"})}catch(__react_docgen_typescript_loader_error){}var Grid_stories={title:"Grid/grid",component:ItemGrid,argTypes:{backgroundColor:{control:"color"}}},Primary=function Template(args){return(0,jsx_runtime.jsx)(ItemGrid,(0,objectSpread2.Z)({},args))}.bind({});Primary.args={primary:!0,label:"Title"},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <ItemGrid {...args} />"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./src/stories/Header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:function(){return LoggedIn},LoggedOut:function(){return LoggedOut},__namedExportsOrder:function(){return __namedExportsOrder}});var _Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Header__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/stories/Header.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_1__.h,parameters:{layout:"fullscreen"}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__.h,(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))},LoggedIn=Template.bind({});LoggedIn.args={user:{name:"Jane Doe"}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=(0,_Users_samamansour_Desktop_TAMM_cloned_apps_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters);var __namedExportsOrder=["LoggedIn","LoggedOut"]},"./src/stories/Page.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:function(){return LoggedIn},LoggedOut:function(){return LoggedOut},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Page_stories}});var regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Header=__webpack_require__("./src/stories/Header.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Page=function Page(){var _React$useState=react.useState(),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),user=_React$useState2[0],setUser=_React$useState2[1];return(0,jsx_runtime.jsxs)("article",{children:[(0,jsx_runtime.jsx)(Header.h,{user:user,onLogin:function onLogin(){return setUser({name:"Jane Doe"})},onLogout:function onLogout(){return setUser(void 0)},onCreateAccount:function onCreateAccount(){return setUser({name:"Jane Doe"})}}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),(0,jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",(0,jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:(0,jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),(0,jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),(0,jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),(0,jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",(0,jsx_runtime.jsx)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",(0,jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),(0,jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",(0,jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Page.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"src/stories/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var Page_stories={title:"Example/Page",component:Page,parameters:{layout:"fullscreen"}},Template=function Template(args){return(0,jsx_runtime.jsx)(Page,(0,objectSpread2.Z)({},args))},LoggedOut=Template.bind({}),LoggedIn=Template.bind({});LoggedIn.play=function(){var _ref2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(_ref){var canvasElement,canvas,loginButton;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement),_context.next=4,canvas.getByRole("button",{name:/Log in/i});case 4:return loginButton=_context.sent,_context.next=7,esm.mV.click(loginButton);case 7:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}(),LoggedOut.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters),LoggedIn.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters);var __namedExportsOrder=["LoggedOut","LoggedIn"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={chakra:{theme:(0,__webpack_require__("./node_modules/@chakra-ui/theme-utils/dist/chunk-AQYX3YP4.mjs").B1)({components:{Button:{baseStyle:{bg:"blue",backgroundColor:"blue",color:"white"}}}})},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/stories/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),_excluded=["primary","size","backgroundColor","label"],Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:{backgroundColor:backgroundColor}},props),{},{children:label}))};try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{q:function(){return ItemCard}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),chunk_S432VF2S=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-S432VF2S.mjs"),chunk_W3H6TFKV=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-W3H6TFKV.mjs"),chunk_QUJ23J4G=__webpack_require__("./node_modules/@chakra-ui/radio/dist/chunk-QUJ23J4G.mjs"),chunk_O5CRURSQ=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),chunk_FL4WJEVU=__webpack_require__("./node_modules/@chakra-ui/radio/dist/chunk-FL4WJEVU.mjs"),chunk_B2MGPQRJ=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),chunk_3V5HNFOM=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs"),chunk_YGVX4ESO=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs"),chunk_KKEJMMX3=__webpack_require__("./node_modules/@chakra-ui/card/dist/chunk-KKEJMMX3.mjs"),chunk_MZBQPWGD=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MZBQPWGD.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_YTV6DHKL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","language","borderColor","label","description","value","onClick"],ItemCard=function ItemCard(_ref){_ref.size;var _ref$language=_ref.language,language=void 0===_ref$language?"right":_ref$language,label=(_ref.borderColor,_ref.label),description=_ref.description,value=_ref.value,_React$useState=(_ref.onClick,(0,objectWithoutProperties.Z)(_ref,_excluded),react.useState()),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),setBorder=(_React$useState2[0],_React$useState2[1]),_React$useState3=react.useState("1"),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),buttonValue=_React$useState4[0],setButtonValue=_React$useState4[1];return(0,jsx_runtime.jsxs)(chunk_S432VF2S.Z,{w:"100%",children:[(0,jsx_runtime.jsx)(chunk_W3H6TFKV.O,{children:(0,jsx_runtime.jsx)(chunk_QUJ23J4G.E,{onChange:setButtonValue,value:buttonValue,children:(0,jsx_runtime.jsx)(chunk_O5CRURSQ.K,{children:(0,jsx_runtime.jsx)(chunk_FL4WJEVU.Y,{value:"1",onClick:function onClick(){return setBorder("grey")},children:(0,jsx_runtime.jsx)(chunk_B2MGPQRJ.X,{size:"md",textAlign:language,children:label})})})})}),(0,jsx_runtime.jsx)(chunk_3V5HNFOM.M,{children:(0,jsx_runtime.jsx)(chunk_YGVX4ESO.i,{width:"80%"})}),(0,jsx_runtime.jsx)(chunk_KKEJMMX3.e,{children:(0,jsx_runtime.jsx)(chunk_O5CRURSQ.K,{divider:(0,jsx_runtime.jsx)(chunk_MZBQPWGD.c,{}),spacing:"4",children:(0,jsx_runtime.jsxs)(chunk_6CSUKJP7.xu,{p:12,children:[(0,jsx_runtime.jsx)(chunk_P74GIWPW.x,{pt:"2",fontSize:"sm",textAlign:language,children:description}),(0,jsx_runtime.jsx)(chunk_P74GIWPW.x,{color:"blue.400",fontSize:"1xl",children:value}),(0,jsx_runtime.jsx)(chunk_YTV6DHKL.r,{color:"blue",children:"Show Items"})]})})})]})};try{ItemCard.displayName="ItemCard",ItemCard.__docgenInfo={description:"",displayName:"ItemCard",props:{borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},language:{defaultValue:{value:"right"},description:"",name:"language",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Card.tsx#ItemCard"]={docgenInfo:ItemCard.__docgenInfo,name:"ItemCard",path:"src/stories/Card.tsx#ItemCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Header.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{h:function(){return Header}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/stories/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"wrapper",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,jsx_runtime.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,jsx_runtime.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,jsx_runtime.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,jsx_runtime.jsx)("h1",{children:"Acme"})]}),(0,jsx_runtime.jsx)("div",{children:user?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,jsx_runtime.jsx)("b",{children:user.name}),"!"]}),(0,jsx_runtime.jsx)(Button.z,{size:"small",onClick:onLogout,label:"Log out"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button.z,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Button.stories.tsx":"./src/stories/Button.stories.tsx","./stories/Card.stories.tsx":"./src/stories/Card.stories.tsx","./stories/Grid.stories.tsx":"./src/stories/Grid.stories.tsx","./stories/Header.stories.tsx":"./src/stories/Header.stories.tsx","./stories/Page.stories.tsx":"./src/stories/Page.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[521],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@chakra-ui/storybook-addon/dist/preset/decorators.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);