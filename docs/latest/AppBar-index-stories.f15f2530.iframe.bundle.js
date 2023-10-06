"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[395],{"./src/components/AppBar/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Actions:function(){return Actions},CustomContent:function(){return CustomContent},Locale:function(){return Locale},Primary:function(){return Primary},Styled:function(){return Styled},Username:function(){return Username},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _types_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/types/Icon.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/stories/index.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/index.tsx"),_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Typography/index.tsx"),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/AppBar/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");___WEBPACK_IMPORTED_MODULE_7__.ZP.displayName="AppBar",___WEBPACK_IMPORTED_MODULE_7__.CP.displayName="AppBar",__webpack_exports__.default={title:"Surfaces/AppBar",component:___WEBPACK_IMPORTED_MODULE_7__.CP,decorators:[_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__.U4],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_4__.Z)({basedOn:{label:"MUI AppBar Component",url:"https://mui.com/components/app-bar/"},component:"AppBar",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_7__.jg,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_7__.QA,subpartsSuffixes:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.cA)(___WEBPACK_IMPORTED_MODULE_7__.nZ)},localizableProps:___WEBPACK_IMPORTED_MODULE_7__.H$})}}};const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(___WEBPACK_IMPORTED_MODULE_7__.ZP,{...args,dataCy:___WEBPACK_IMPORTED_MODULE_7__.jg});Template.displayName="Template";const Primary=Template.bind({});Primary.args={actions:[{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.settings,onClick:()=>{},tooltip:"Settings"}],menu:{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.home,onClick:()=>{},tooltip:"Home"},title:"AppBar"};const Actions=Template.bind({});Actions.args={...Primary.args,actions:[{badge:{color:"error",value:"5"},icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.notifications,onClick:()=>{},tooltip:"Notifications"},{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.mail,onClick:()=>{},tooltip:"Mail"},{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.settings,onClick:()=>{},tooltip:"Settings"}]};const CustomContent=Template.bind({});CustomContent.args={...Primary.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{style:{alignItems:"center",display:"flex"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_6__.ZP,{children:"Home"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.Z,{name:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.right}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_6__.ZP,{children:"Section"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.Z,{name:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.right}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_6__.ZP,{children:"Detail"})]}),onTitleClick:void 0,title:void 0};const Locale=Template.bind({});Locale.args={...Primary.args,locale:{items:[{label:"English",value:"en"},{label:"Italian",value:"it"}],label:"en",onItemClick:()=>{}}};const Styled=Template.bind({});Styled.args={...Primary.args,style:{border:"2px solid #3f51b5",borderRadius:"4px",backgroundColor:"#6495ed"}};const Username=Template.bind({});Username.args={...Primary.args,user:{items:[{label:"View Details",onClick:()=>{},value:"details"},{label:"Logout",onClick:()=>{},value:"logout"}],label:"mosaic@github"}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <AppBar {...args} dataCy={DATA_CY_DEFAULT} />",...Primary.parameters?.docs?.source}}},Actions.parameters={...Actions.parameters,docs:{...Actions.parameters?.docs,source:{originalSource:"args => <AppBar {...args} dataCy={DATA_CY_DEFAULT} />",...Actions.parameters?.docs?.source}}},CustomContent.parameters={...CustomContent.parameters,docs:{...CustomContent.parameters?.docs,source:{originalSource:"args => <AppBar {...args} dataCy={DATA_CY_DEFAULT} />",...CustomContent.parameters?.docs?.source}}},Locale.parameters={...Locale.parameters,docs:{...Locale.parameters?.docs,source:{originalSource:"args => <AppBar {...args} dataCy={DATA_CY_DEFAULT} />",...Locale.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:"args => <AppBar {...args} dataCy={DATA_CY_DEFAULT} />",...Styled.parameters?.docs?.source}}},Username.parameters={...Username.parameters,docs:{...Username.parameters?.docs,source:{originalSource:"args => <AppBar {...args} dataCy={DATA_CY_DEFAULT} />",...Username.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Actions","CustomContent","Locale","Styled","Username"]},"./src/utils/mocks/LocaleMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U4:function(){return localeDecorator}});__webpack_require__("./node_modules/react/index.js");var _contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/Mosaic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1pl9h87nja(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f92036dd1e8e5cc62f1f21a09a33911a63911e10"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",statementMap:{0:{start:{line:27,column:44},end:{line:52,column:1}},1:{start:{line:54,column:32},end:{line:54,column:116}},2:{start:{line:54,column:83},end:{line:54,column:116}},3:{start:{line:56,column:37},end:{line:60,column:1}},4:{start:{line:57,column:2},end:{line:59,column:26}},5:{start:{line:57,column:44},end:{line:57,column:96}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:54,column:32},end:{line:54,column:33}},loc:{start:{line:54,column:83},end:{line:54,column:116}},line:54},1:{name:"(anonymous_1)",decl:{start:{line:56,column:37},end:{line:56,column:38}},loc:{start:{line:57,column:2},end:{line:59,column:26}},line:57},2:{name:"(anonymous_2)",decl:{start:{line:57,column:35},end:{line:57,column:36}},loc:{start:{line:57,column:44},end:{line:57,column:96}},line:57}},branchMap:{0:{loc:{start:{line:54,column:83},end:{line:54,column:116}},type:"binary-expr",locations:[{start:{line:54,column:83},end:{line:54,column:109}},{start:{line:54,column:113},end:{line:54,column:116}}],line:54}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f92036dd1e8e5cc62f1f21a09a33911a63911e10"});var actualCoverage=coverage[path];return cov_1pl9h87nja=function(){return actualCoverage},actualCoverage}cov_1pl9h87nja();let MessageMock=function(MessageMock){return MessageMock.button="locale.button",MessageMock.cancel="locale.cancel",MessageMock.checkbox="locale.checkbox",MessageMock.confirm="locale.confirm",MessageMock.inputNumber="locale.inputNumber",MessageMock.inputText="locale.inputText",MessageMock.subtitle="locale.subtitle",MessageMock.switch="locale.switch",MessageMock.title="locale.title",MessageMock.typography="locale.typography",MessageMock}({});const MESSAGES_MOCK=(cov_1pl9h87nja().s[0]++,{en:{[MessageMock.button]:"Button",[MessageMock.cancel]:"Cancel",[MessageMock.checkbox]:"Checkbox",[MessageMock.confirm]:"Confirm",[MessageMock.inputNumber]:"Input Number",[MessageMock.inputText]:"Input Text",[MessageMock.subtitle]:"Subtitle",[MessageMock.switch]:"Switch",[MessageMock.title]:"Title",[MessageMock.typography]:"Typography"},"it-IT":{[MessageMock.button]:"Bottone",[MessageMock.cancel]:"Annulla",[MessageMock.checkbox]:"Spunta",[MessageMock.confirm]:"Conferma",[MessageMock.inputNumber]:"Numero in input",[MessageMock.inputText]:"Testo in input",[MessageMock.subtitle]:"Sottotitolo",[MessageMock.switch]:"Interruttore",[MessageMock.title]:"Titolo",[MessageMock.typography]:"Tipografia"}});cov_1pl9h87nja().s[1]++;cov_1pl9h87nja().s[3]++;const localeDecorator=Story=>(cov_1pl9h87nja().f[1]++,cov_1pl9h87nja().s[4]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__.IA,{localize:key=>(cov_1pl9h87nja().f[2]++,cov_1pl9h87nja().s[5]++,((key,locale)=>(cov_1pl9h87nja().f[0]++,cov_1pl9h87nja().s[2]++,cov_1pl9h87nja().b[0][0]++,MESSAGES_MOCK[locale][key]||(cov_1pl9h87nja().b[0][1]++,key)))(key,"it-IT")),children:Story()}));localeDecorator.displayName="localeDecorator"}}]);