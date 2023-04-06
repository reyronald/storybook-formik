"use strict";(self.webpackChunk_bbbtech_storybook_formik=self.webpackChunk_bbbtech_storybook_formik||[]).push([[58],{"./dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>esm});var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),external_STORYBOOK_MODULE_ADDONS_=__webpack_require__("@storybook/addons"),__assign=("".concat("storybookjs/formik","/panel"),function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)});const esm=(0,external_STORYBOOK_MODULE_ADDONS_.makeDecorator)({name:"withFormik",parameterName:"formik",skipIfNoParametersOrOptions:!1,wrapper:function(getStory,context,_a){var submitter,parameters=_a.parameters,channel=external_STORYBOOK_MODULE_ADDONS_.addons.getChannel();channel.on("formik/submit",(function(){return submitter&&submitter()}));var formikConfig=parameters,hasArgs=Object.keys(context.argTypes).length>0,initialValues=formikConfig&&formikConfig.initialValues||context.args||{};formikConfig&&formikConfig.validationSchema&&parameters.castValues&&(initialValues=formikConfig.validationSchema.cast(initialValues));var _b=(0,external_STORYBOOK_MODULE_ADDONS_.useArgs)(),updateArgs=(_b[0],_b[1]);return react_default().createElement(formik_esm.J9,__assign({enableReinitialize:!0,onSubmit:function(v,_a){var setSubmitting=_a.setSubmitting;channel.emit("formik/on-submit",v),setSubmitting(!1)}},formikConfig,{initialValues}),(function FormWrap(props){return channel.emit("formik/render",props),submitter||(submitter=props.submitForm),(0,react.useEffect)((function(){hasArgs&&updateArgs(props.values)}),[hasArgs,props.values]),react_default().createElement(formik_esm.l0,null,getStory(context))}))}})},"./stories/example.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$S:()=>MySelect,$m:()=>MyCheckbox,B$:()=>professionalInfoValidationSchema,Cd:()=>SignupForm,NQ:()=>personalInfoInitialValues,WX:()=>feedbackInitialValues,bH:()=>FeedbackSubform,lT:()=>professionalInfoInitialValues,mo:()=>personalInfoValidationSchema,oE:()=>ProfessionalInfoSubForm,rZ:()=>MyTextInput,wU:()=>PersonalInfoSubForm});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),formik__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),yup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/yup/es/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const personalInfoInitialValues={firstName:"Initial",lastName:"",email:""},professionalInfoInitialValues={jobType:"",acceptedTerms:!1},feedbackInitialValues={...personalInfoInitialValues,rating:1,remarks:""},initialValues={...personalInfoInitialValues,...professionalInfoInitialValues},personalInfoValidationSchema=yup__WEBPACK_IMPORTED_MODULE_2__.Ry({firstName:yup__WEBPACK_IMPORTED_MODULE_2__.Z_().max(15,"Must be 15 characters or less").required("Required"),lastName:yup__WEBPACK_IMPORTED_MODULE_2__.Z_().max(20,"Must be 20 characters or less").required("Required"),email:yup__WEBPACK_IMPORTED_MODULE_2__.Z_().email("Invalid email address").required("Required")}),professionalInfoValidationSchema=yup__WEBPACK_IMPORTED_MODULE_2__.Ry({jobType:yup__WEBPACK_IMPORTED_MODULE_2__.Z_().oneOf(["designer","development","product","other"],"Invalid Job Type").required("Required"),acceptedTerms:yup__WEBPACK_IMPORTED_MODULE_2__.O7().required("Required").oneOf([!0],"You must accept the terms and conditions.")}),validationSchema=yup__WEBPACK_IMPORTED_MODULE_2__.Ry().concat(personalInfoValidationSchema).concat(professionalInfoValidationSchema),onSubmit=(values,{setSubmitting})=>{setTimeout((()=>{alert(JSON.stringify(values,null,2)),setSubmitting(!1)}),400)},style={label:{display:"block",fontWeight:"bold"},field:{display:"block"},error:{display:"block",color:"#ff4d4d"}},MyCheckbox=({children,...props})=>{const[field,meta]=(0,formik__WEBPACK_IMPORTED_MODULE_1__.U$)({...props,type:"checkbox"});return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{style:style.label},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",_extends({type:"checkbox"},field,props)),children),meta.touched&&meta.error?react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:style.error},meta.error):null)},MySelect=props=>{const[field,meta]=(0,formik__WEBPACK_IMPORTED_MODULE_1__.U$)(props);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{style:style.label,htmlFor:props.id||props.name},props.label),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select",_extends({style:style.field},field,props)),meta.touched&&meta.error?react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:style.error},meta.error):null)},MyTextInput=props=>{const[field,meta]=(0,formik__WEBPACK_IMPORTED_MODULE_1__.U$)(props);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{style:style.label,htmlFor:props.id||props.name},props.label),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",_extends({style:style.field},field,props)),meta.touched&&meta.error?react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:style.error},meta.error):null)},ProfessionalInfoSubForm=()=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MySelect,{label:"Job Type",name:"jobType"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:""},"Select a job type"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"designer"},"Designer"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"development"},"Developer"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"product"},"Product Manager"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:"other"},"Other")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyCheckbox,{name:"acceptedTerms"},"I accept the terms and conditions")),PersonalInfoSubForm=()=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyTextInput,{label:"First Name",name:"firstName",type:"text",placeholder:"Jane"}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyTextInput,{label:"Last Name",name:"lastName",type:"text",placeholder:"Doe"}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyTextInput,{label:"Email Address",name:"email",type:"email",placeholder:"jane@formik.com"})),FeedbackSubform=()=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PersonalInfoSubForm,null),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{style:style.label,htmlFor:"rating"},"How good?"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.gN,{style:style.field,component:"select",name:"rating"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:0},"Bad"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:1},"Neutral"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option",{value:2},"Good")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{style:style.label,htmlFor:"remarks"},"Why so good?"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.gN,{style:style.field,component:"textarea",name:"remarks"})),SignupForm=()=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,"Subscribe!"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues,validationSchema,onSubmit},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.l0,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PersonalInfoSubForm,null),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProfessionalInfoSubForm,null),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{type:"submit"},"Submit"))));try{MyCheckbox.displayName="MyCheckbox",MyCheckbox.__docgenInfo={description:"",displayName:"MyCheckbox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/example.tsx#MyCheckbox"]={docgenInfo:MyCheckbox.__docgenInfo,name:"MyCheckbox",path:"stories/example.tsx#MyCheckbox"})}catch(__react_docgen_typescript_loader_error){}try{MySelect.displayName="MySelect",MySelect.__docgenInfo={description:"",displayName:"MySelect",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/example.tsx#MySelect"]={docgenInfo:MySelect.__docgenInfo,name:"MySelect",path:"stories/example.tsx#MySelect"})}catch(__react_docgen_typescript_loader_error){}try{MyTextInput.displayName="MyTextInput",MyTextInput.__docgenInfo={description:"",displayName:"MyTextInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/example.tsx#MyTextInput"]={docgenInfo:MyTextInput.__docgenInfo,name:"MyTextInput",path:"stories/example.tsx#MyTextInput"})}catch(__react_docgen_typescript_loader_error){}},"./stories/subforms.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,feedbackSubform:()=>feedbackSubform,personalInfoSubform:()=>personalInfoSubform,professionalInfoSubform:()=>professionalInfoSubform});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_dist_esm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index.js"),_example__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/example.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"WithFormik/Subforms"},personalInfoSubform=()=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"The decorator can wrap Components that include Fields (or anything else expecting Formik context). This allows us to better componentise our larger forms."),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_example__WEBPACK_IMPORTED_MODULE_2__.wU,null));personalInfoSubform.decorators=[_dist_esm__WEBPACK_IMPORTED_MODULE_1__.Z];const personalInfoParams={formik:{initialValues:_example__WEBPACK_IMPORTED_MODULE_2__.NQ,validationSchema:_example__WEBPACK_IMPORTED_MODULE_2__.mo}};personalInfoSubform.parameters=personalInfoParams;const professionalInfoSubform=()=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Here we can play with the Professional Info subform as standalone"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_example__WEBPACK_IMPORTED_MODULE_2__.oE,null)),professionalInfoParams={formik:{initialValues:_example__WEBPACK_IMPORTED_MODULE_2__.lT,validationSchema:_example__WEBPACK_IMPORTED_MODULE_2__.B$}};professionalInfoSubform.story={decorators:[_dist_esm__WEBPACK_IMPORTED_MODULE_1__.Z],parameters:professionalInfoParams};const feedbackSubform=()=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"With better tooling it makes it easier for us to componentise and compose our subforms. Here we re-use the above PersonalInfoSubform in our FeedbackSubform."),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_example__WEBPACK_IMPORTED_MODULE_2__.bH,null)),feedbackParams={formik:{initialValues:_example__WEBPACK_IMPORTED_MODULE_2__.WX,validationSchema:_example__WEBPACK_IMPORTED_MODULE_2__.mo}};feedbackSubform.story={decorators:[_dist_esm__WEBPACK_IMPORTED_MODULE_1__.Z],parameters:feedbackParams};const __namedExportsOrder=["personalInfoSubform","professionalInfoSubform","feedbackSubform"];personalInfoSubform.parameters={...personalInfoSubform.parameters,docs:{...personalInfoSubform.parameters?.docs,source:{originalSource:'() => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The decorator can wrap Components that include Fields (or anything else expecting Formik context). This allows us to better componentise our larger forms."), /*#__PURE__*/React.createElement(PersonalInfoSubForm, null))',...personalInfoSubform.parameters?.docs?.source}}},professionalInfoSubform.parameters={...professionalInfoSubform.parameters,docs:{...professionalInfoSubform.parameters?.docs,source:{originalSource:'() => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Here we can play with the Professional Info subform as standalone"), /*#__PURE__*/React.createElement(ProfessionalInfoSubForm, null))',...professionalInfoSubform.parameters?.docs?.source}}},feedbackSubform.parameters={...feedbackSubform.parameters,docs:{...feedbackSubform.parameters?.docs,source:{originalSource:'() => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "With better tooling it makes it easier for us to componentise and compose our subforms. Here we re-use the above PersonalInfoSubform in our FeedbackSubform."), /*#__PURE__*/React.createElement(FeedbackSubform, null))',...feedbackSubform.parameters?.docs?.source}}}}}]);