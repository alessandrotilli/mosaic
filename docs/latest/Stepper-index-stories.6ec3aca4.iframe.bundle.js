"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[943],{"./src/components/Stepper/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActiveStep:function(){return ActiveStep},Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var react=__webpack_require__("./node_modules/react/index.js"),LocaleMock=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_11qsgoex56(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/StepperMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/StepperMock.tsx",statementMap:{0:{start:{line:9,column:60},end:{line:45,column:1}},1:{start:{line:14,column:38},end:{line:14,column:77}},2:{start:{line:16,column:2},end:{line:24,column:37}},3:{start:{line:17,column:4},end:{line:23,column:5}},4:{start:{line:18,column:6},end:{line:20,column:7}},5:{start:{line:19,column:8},end:{line:19,column:25}},6:{start:{line:22,column:6},end:{line:22,column:45}},7:{start:{line:26,column:21},end:{line:28,column:8}},8:{start:{line:27,column:4},end:{line:27,column:58}},9:{start:{line:27,column:38},end:{line:27,column:56}},10:{start:{line:30,column:21},end:{line:32,column:8}},11:{start:{line:31,column:4},end:{line:31,column:58}},12:{start:{line:31,column:38},end:{line:31,column:56}},13:{start:{line:34,column:25},end:{line:42,column:3}},14:{start:{line:36,column:6},end:{line:40,column:8}},15:{start:{line:44,column:2},end:{line:44,column:37}},16:{start:{line:47,column:38},end:{line:51,column:1}},17:{start:{line:48,column:2},end:{line:50,column:16}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:60},end:{line:9,column:61}},loc:{start:{line:13,column:6},end:{line:45,column:1}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:16,column:12},end:{line:16,column:13}},loc:{start:{line:16,column:18},end:{line:24,column:3}},line:16},2:{name:"(anonymous_2)",decl:{start:{line:26,column:33},end:{line:26,column:34}},loc:{start:{line:26,column:39},end:{line:28,column:3}},line:26},3:{name:"(anonymous_3)",decl:{start:{line:27,column:18},end:{line:27,column:19}},loc:{start:{line:27,column:38},end:{line:27,column:56}},line:27},4:{name:"(anonymous_4)",decl:{start:{line:30,column:33},end:{line:30,column:34}},loc:{start:{line:30,column:39},end:{line:32,column:3}},line:30},5:{name:"(anonymous_5)",decl:{start:{line:31,column:18},end:{line:31,column:19}},loc:{start:{line:31,column:38},end:{line:31,column:56}},line:31},6:{name:"(anonymous_6)",decl:{start:{line:35,column:4},end:{line:35,column:5}},loc:{start:{line:36,column:6},end:{line:40,column:8}},line:36},7:{name:"(anonymous_7)",decl:{start:{line:47,column:38},end:{line:47,column:39}},loc:{start:{line:48,column:2},end:{line:50,column:16}},line:48}},branchMap:{0:{loc:{start:{line:14,column:53},end:{line:14,column:76}},type:"binary-expr",locations:[{start:{line:14,column:53},end:{line:14,column:71}},{start:{line:14,column:75},end:{line:14,column:76}}],line:14},1:{loc:{start:{line:17,column:4},end:{line:23,column:5}},type:"if",locations:[{start:{line:17,column:4},end:{line:23,column:5}},{start:{line:21,column:11},end:{line:23,column:5}}],line:17},2:{loc:{start:{line:17,column:8},end:{line:17,column:38}},type:"binary-expr",locations:[{start:{line:17,column:8},end:{line:17,column:26}},{start:{line:17,column:30},end:{line:17,column:38}}],line:17},3:{loc:{start:{line:18,column:6},end:{line:20,column:7}},type:"if",locations:[{start:{line:18,column:6},end:{line:20,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:18},4:{loc:{start:{line:18,column:10},end:{line:18,column:77}},type:"binary-expr",locations:[{start:{line:18,column:10},end:{line:18,column:51}},{start:{line:18,column:55},end:{line:18,column:77}}],line:18},5:{loc:{start:{line:22,column:20},end:{line:22,column:43}},type:"binary-expr",locations:[{start:{line:22,column:20},end:{line:22,column:38}},{start:{line:22,column:42},end:{line:22,column:43}}],line:22}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ccccb861a62755986c357433932b9e6b57d3a64f"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"ccccb861a62755986c357433932b9e6b57d3a64f"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_11qsgoex56=function(){return actualCoverage},actualCoverage}cov_11qsgoex56(),cov_11qsgoex56().s[0]++;const StepperMock=({children:children,stepList:stepList,activeStep:externalActiveStep})=>{cov_11qsgoex56().f[0]++;const[activeStep,setActiveStep]=(cov_11qsgoex56().s[1]++,react.useState((cov_11qsgoex56().b[0][0]++,externalActiveStep||(cov_11qsgoex56().b[0][1]++,0))));cov_11qsgoex56().s[2]++,(0,react.useEffect)((()=>{cov_11qsgoex56().f[1]++,cov_11qsgoex56().s[3]++,cov_11qsgoex56().b[2][0]++,externalActiveStep&&(cov_11qsgoex56().b[2][1]++,stepList)?(cov_11qsgoex56().b[1][0]++,cov_11qsgoex56().s[4]++,cov_11qsgoex56().b[4][0]++,externalActiveStep>stepList?.length-1||(cov_11qsgoex56().b[4][1]++,externalActiveStep<0)?(cov_11qsgoex56().b[3][0]++,cov_11qsgoex56().s[5]++,setActiveStep(0)):cov_11qsgoex56().b[3][1]++):(cov_11qsgoex56().b[1][1]++,cov_11qsgoex56().s[6]++,setActiveStep((cov_11qsgoex56().b[5][0]++,externalActiveStep||(cov_11qsgoex56().b[5][1]++,0))))}),[externalActiveStep,stepList]);const handleNext=(cov_11qsgoex56().s[7]++,(0,react.useCallback)((()=>{cov_11qsgoex56().f[2]++,cov_11qsgoex56().s[8]++,setActiveStep((prevActiveStep=>(cov_11qsgoex56().f[3]++,cov_11qsgoex56().s[9]++,prevActiveStep+1)))}),[])),handleBack=(cov_11qsgoex56().s[10]++,(0,react.useCallback)((()=>{cov_11qsgoex56().f[4]++,cov_11qsgoex56().s[11]++,setActiveStep((prevActiveStep=>(cov_11qsgoex56().f[5]++,cov_11qsgoex56().s[12]++,prevActiveStep-1)))}),[])),wrappedStepper=(cov_11qsgoex56().s[13]++,(0,react.useMemo)((()=>(cov_11qsgoex56().f[6]++,cov_11qsgoex56().s[14]++,(0,react.cloneElement)(children,{onBackClick:handleBack,onNextClick:handleNext,activeStep:activeStep}))),[children,handleBack,handleNext,activeStep]));return cov_11qsgoex56().s[15]++,(0,jsx_runtime.jsx)("div",{children:wrappedStepper})};StepperMock.displayName="StepperMock",cov_11qsgoex56().s[16]++;const stepperDecorator=(Story,{args:args})=>(cov_11qsgoex56().f[7]++,cov_11qsgoex56().s[17]++,(0,jsx_runtime.jsx)(StepperMock,{activeStep:args.activeStep,stepList:args.stepList,children:Story()}));stepperDecorator.displayName="stepperDecorator";try{StepperMock.displayName="StepperMock",StepperMock.__docgenInfo={description:"",displayName:"StepperMock",props:{stepList:{defaultValue:null,description:"",name:"stepList",required:!1,type:{name:"[]"}},activeStep:{defaultValue:null,description:"",name:"activeStep",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/mocks/StepperMock.tsx#StepperMock"]={docgenInfo:StepperMock.__docgenInfo,name:"StepperMock",path:"src/utils/mocks/StepperMock.tsx#StepperMock"})}catch(__react_docgen_typescript_loader_error){}var stories=__webpack_require__("./src/utils/stories/index.tsx"),Progress=__webpack_require__("./src/components/Progress/index.tsx"),Stepper=__webpack_require__("./src/components/Stepper/index.tsx");Stepper.Z.displayName="Stepper";var index_stories={title:"Navigation/Stepper",component:Stepper.Z,decorators:[stepperDecorator,LocaleMock.U4],parameters:{docs:{...(0,stories.Z)({basedOn:{label:"MUI Stepper Component",url:"https://mui.com/material-ui/react-stepper/"},component:"Stepper",e2eTestInfo:{dataCyDefault:"stepper"}})}}};const Template=args=>(0,jsx_runtime.jsx)(Stepper.Z,{...args,dataCy:Stepper.j});Template.displayName="Template";const Primary=Template.bind({});Primary.args={stepList:[{label:"STEP1",content:"CONTENT PAGE 1"},{label:"STEP2",content:"CONTENT PAGE 2"},{label:"STEP3",content:(0,jsx_runtime.jsx)(Progress.Z,{type:"Linear"})}],finishContent:"All Steps are completed"};const ActiveStep=Template.bind({});ActiveStep.args={...Primary.args,activeStep:2},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Stepper {...args} dataCy={DATA_CY_DEFAULT} />",...Primary.parameters?.docs?.source}}},ActiveStep.parameters={...ActiveStep.parameters,docs:{...ActiveStep.parameters?.docs,source:{originalSource:"args => <Stepper {...args} dataCy={DATA_CY_DEFAULT} />",...ActiveStep.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","ActiveStep"]},"./src/utils/mocks/LocaleMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U4:function(){return localeDecorator}});__webpack_require__("./node_modules/react/index.js");var _contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/Mosaic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1pl9h87nja(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f92036dd1e8e5cc62f1f21a09a33911a63911e10"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",statementMap:{0:{start:{line:27,column:44},end:{line:52,column:1}},1:{start:{line:54,column:32},end:{line:54,column:116}},2:{start:{line:54,column:83},end:{line:54,column:116}},3:{start:{line:56,column:37},end:{line:60,column:1}},4:{start:{line:57,column:2},end:{line:59,column:26}},5:{start:{line:57,column:44},end:{line:57,column:96}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:54,column:32},end:{line:54,column:33}},loc:{start:{line:54,column:83},end:{line:54,column:116}},line:54},1:{name:"(anonymous_1)",decl:{start:{line:56,column:37},end:{line:56,column:38}},loc:{start:{line:57,column:2},end:{line:59,column:26}},line:57},2:{name:"(anonymous_2)",decl:{start:{line:57,column:35},end:{line:57,column:36}},loc:{start:{line:57,column:44},end:{line:57,column:96}},line:57}},branchMap:{0:{loc:{start:{line:54,column:83},end:{line:54,column:116}},type:"binary-expr",locations:[{start:{line:54,column:83},end:{line:54,column:109}},{start:{line:54,column:113},end:{line:54,column:116}}],line:54}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f92036dd1e8e5cc62f1f21a09a33911a63911e10"});var actualCoverage=coverage[path];return cov_1pl9h87nja=function(){return actualCoverage},actualCoverage}cov_1pl9h87nja();let MessageMock=function(MessageMock){return MessageMock.button="locale.button",MessageMock.cancel="locale.cancel",MessageMock.checkbox="locale.checkbox",MessageMock.confirm="locale.confirm",MessageMock.inputNumber="locale.inputNumber",MessageMock.inputText="locale.inputText",MessageMock.subtitle="locale.subtitle",MessageMock.switch="locale.switch",MessageMock.title="locale.title",MessageMock.typography="locale.typography",MessageMock}({});const MESSAGES_MOCK=(cov_1pl9h87nja().s[0]++,{en:{[MessageMock.button]:"Button",[MessageMock.cancel]:"Cancel",[MessageMock.checkbox]:"Checkbox",[MessageMock.confirm]:"Confirm",[MessageMock.inputNumber]:"Input Number",[MessageMock.inputText]:"Input Text",[MessageMock.subtitle]:"Subtitle",[MessageMock.switch]:"Switch",[MessageMock.title]:"Title",[MessageMock.typography]:"Typography"},"it-IT":{[MessageMock.button]:"Bottone",[MessageMock.cancel]:"Annulla",[MessageMock.checkbox]:"Spunta",[MessageMock.confirm]:"Conferma",[MessageMock.inputNumber]:"Numero in input",[MessageMock.inputText]:"Testo in input",[MessageMock.subtitle]:"Sottotitolo",[MessageMock.switch]:"Interruttore",[MessageMock.title]:"Titolo",[MessageMock.typography]:"Tipografia"}});cov_1pl9h87nja().s[1]++;cov_1pl9h87nja().s[3]++;const localeDecorator=Story=>(cov_1pl9h87nja().f[1]++,cov_1pl9h87nja().s[4]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__.IA,{localize:key=>(cov_1pl9h87nja().f[2]++,cov_1pl9h87nja().s[5]++,((key,locale)=>(cov_1pl9h87nja().f[0]++,cov_1pl9h87nja().s[2]++,cov_1pl9h87nja().b[0][0]++,MESSAGES_MOCK[locale][key]||(cov_1pl9h87nja().b[0][1]++,key)))(key,"it-IT")),children:Story()}));localeDecorator.displayName="localeDecorator"}}]);