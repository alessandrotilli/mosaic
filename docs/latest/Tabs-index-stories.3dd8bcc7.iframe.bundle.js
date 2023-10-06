"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[994],{"./src/components/Tabs/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:function(){return Color},Orientation:function(){return Orientation},Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/stories/index.tsx"),_Progress__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Progress/index.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tabs/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");___WEBPACK_IMPORTED_MODULE_4__.Z.displayName="Tabs",__webpack_exports__.default={title:"Navigation/Tabs",component:___WEBPACK_IMPORTED_MODULE_4__.Z,decorators:[_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_1__.U4],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_2__.Z)({basedOn:{label:"MUI Tabs Component",url:"https://mui.com/material-ui/react-tabs/"},component:"Tabs",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_4__.j}})}}};const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Z,{...args,dataCy:___WEBPACK_IMPORTED_MODULE_4__.j});Template.displayName="Template";const Primary=Template.bind({});Primary.args={labelList:[{label:"PAGE1",content:"PAGE1"},{label:"PAGE2",content:"PAGE2"},{label:"PAGE3",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_3__.Z,{type:"Circular",withLabel:!1})}]};const Color=Template.bind({});Color.args={...Primary.args,color:"secondary"};const Orientation=Template.bind({});Orientation.args={...Primary.args,orientation:"vertical"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Tabs {...args} dataCy={DATA_CY_DEFAULT} />",...Primary.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"args => <Tabs {...args} dataCy={DATA_CY_DEFAULT} />",...Color.parameters?.docs?.source}}},Orientation.parameters={...Orientation.parameters,docs:{...Orientation.parameters?.docs,source:{originalSource:"args => <Tabs {...args} dataCy={DATA_CY_DEFAULT} />",...Orientation.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Color","Orientation"]},"./src/utils/mocks/LocaleMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U4:function(){return localeDecorator}});__webpack_require__("./node_modules/react/index.js");var _contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/Mosaic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1pl9h87nja(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f92036dd1e8e5cc62f1f21a09a33911a63911e10"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",statementMap:{0:{start:{line:27,column:44},end:{line:52,column:1}},1:{start:{line:54,column:32},end:{line:54,column:116}},2:{start:{line:54,column:83},end:{line:54,column:116}},3:{start:{line:56,column:37},end:{line:60,column:1}},4:{start:{line:57,column:2},end:{line:59,column:26}},5:{start:{line:57,column:44},end:{line:57,column:96}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:54,column:32},end:{line:54,column:33}},loc:{start:{line:54,column:83},end:{line:54,column:116}},line:54},1:{name:"(anonymous_1)",decl:{start:{line:56,column:37},end:{line:56,column:38}},loc:{start:{line:57,column:2},end:{line:59,column:26}},line:57},2:{name:"(anonymous_2)",decl:{start:{line:57,column:35},end:{line:57,column:36}},loc:{start:{line:57,column:44},end:{line:57,column:96}},line:57}},branchMap:{0:{loc:{start:{line:54,column:83},end:{line:54,column:116}},type:"binary-expr",locations:[{start:{line:54,column:83},end:{line:54,column:109}},{start:{line:54,column:113},end:{line:54,column:116}}],line:54}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f92036dd1e8e5cc62f1f21a09a33911a63911e10"});var actualCoverage=coverage[path];return cov_1pl9h87nja=function(){return actualCoverage},actualCoverage}cov_1pl9h87nja();let MessageMock=function(MessageMock){return MessageMock.button="locale.button",MessageMock.cancel="locale.cancel",MessageMock.checkbox="locale.checkbox",MessageMock.confirm="locale.confirm",MessageMock.inputNumber="locale.inputNumber",MessageMock.inputText="locale.inputText",MessageMock.subtitle="locale.subtitle",MessageMock.switch="locale.switch",MessageMock.title="locale.title",MessageMock.typography="locale.typography",MessageMock}({});const MESSAGES_MOCK=(cov_1pl9h87nja().s[0]++,{en:{[MessageMock.button]:"Button",[MessageMock.cancel]:"Cancel",[MessageMock.checkbox]:"Checkbox",[MessageMock.confirm]:"Confirm",[MessageMock.inputNumber]:"Input Number",[MessageMock.inputText]:"Input Text",[MessageMock.subtitle]:"Subtitle",[MessageMock.switch]:"Switch",[MessageMock.title]:"Title",[MessageMock.typography]:"Typography"},"it-IT":{[MessageMock.button]:"Bottone",[MessageMock.cancel]:"Annulla",[MessageMock.checkbox]:"Spunta",[MessageMock.confirm]:"Conferma",[MessageMock.inputNumber]:"Numero in input",[MessageMock.inputText]:"Testo in input",[MessageMock.subtitle]:"Sottotitolo",[MessageMock.switch]:"Interruttore",[MessageMock.title]:"Titolo",[MessageMock.typography]:"Tipografia"}});cov_1pl9h87nja().s[1]++;cov_1pl9h87nja().s[3]++;const localeDecorator=Story=>(cov_1pl9h87nja().f[1]++,cov_1pl9h87nja().s[4]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__.IA,{localize:key=>(cov_1pl9h87nja().f[2]++,cov_1pl9h87nja().s[5]++,((key,locale)=>(cov_1pl9h87nja().f[0]++,cov_1pl9h87nja().s[2]++,cov_1pl9h87nja().b[0][0]++,MESSAGES_MOCK[locale][key]||(cov_1pl9h87nja().b[0][1]++,key)))(key,"it-IT")),children:Story()}));localeDecorator.displayName="localeDecorator"}}]);