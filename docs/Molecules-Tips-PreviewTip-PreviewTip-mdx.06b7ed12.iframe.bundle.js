"use strict";(self.webpackChunkgamut_repo=self.webpackChunkgamut_repo||[]).push([[3363],{"./packages/gamut/src/Tip/PreviewTip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>PreviewTip});var react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./packages/gamut/src/Typography/Text.tsx"),FloatingTip=__webpack_require__("./packages/gamut/src/Tip/shared/FloatingTip.tsx"),InlineTip=__webpack_require__("./packages/gamut/src/Tip/shared/InlineTip.tsx"),types=__webpack_require__("./packages/gamut/src/Tip/shared/types.tsx"),PreviewTip_elements=__webpack_require__("./packages/gamut/src/Tip/PreviewTip/elements.tsx");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PreviewTip=_ref=>{let{alignment="top-right",avatar,children,linkDescription,loading,overline,placement=types.lX.placement,truncateLines,username,...rest}=_ref;const descriptionId=(0,react.useId)(),wrapperRef=(0,react.useRef)(null),[loaded,setLoaded]=(0,react.useState)(!1),[isLive,setIsLive]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setLoaded(!0)}),[]);const Tip=loaded&&"floating"===placement?FloatingTip.Y:InlineTip.F,description=(0,react.useMemo)((()=>{const text=(_ref=>{let{linkDescription,overline,username}=_ref;return`Preview: ${overline?`${overline} `:""}${username?`${username} `:""}${linkDescription}`})({linkDescription,overline,username});return loading?"Preview content is loading ":text}),[loading,linkDescription,overline,username]),tipProps={alignment,avatar,info:linkDescription,loading,placement,overline,truncateLines,username,wrapperRef};return(0,jsx_runtime.jsxs)(Tip,{...tipProps,type:"preview",children:[(0,jsx_runtime.jsx)(Text.E,{"aria-hidden":!isLive,"aria-live":"polite",screenreader:!0,children:(0,jsx_runtime.jsx)("div",{id:descriptionId,children:description})}),(0,jsx_runtime.jsx)(PreviewTip_elements.FE,{...rest,"aria-describedby":descriptionId,display:avatar&&void 0===rest?.display?"flex":rest?.display,tipType:avatar?"avatar":"anchor",onFocus:event=>{setIsLive(!0),rest?.onFocus?.(event)},onBlur:event=>{setIsLive(!1),rest?.onBlur?.(event)},children:avatar||children})]})};try{PreviewTip.displayName="PreviewTip",PreviewTip.__docgenInfo={description:"",displayName:"PreviewTip",props:{placement:{defaultValue:{value:"tipDefaultProps.placement"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"floating"'}]}},avatar:{defaultValue:null,description:"ReactNode avatar to display - including an avatar will automatically defer to the avatar type.",name:"avatar",required:!1,type:{name:"ReactNode"}},overline:{defaultValue:null,description:"",name:"overline",required:!1,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},truncateLines:{defaultValue:null,description:"",name:"truncateLines",required:!1,type:{name:"unknown"}},alignment:{defaultValue:{value:"top-right"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-right"'}]}},linkDescription:{defaultValue:null,description:"",name:"linkDescription",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/gamut/src/Tip/PreviewTip/index.tsx#PreviewTip"]={docgenInfo:PreviewTip.__docgenInfo,name:"PreviewTip",path:"packages/gamut/src/Tip/PreviewTip/index.tsx#PreviewTip"})}catch(__react_docgen_typescript_loader_error){}},"./packages/styleguide/src/lib/Molecules/Tips/PreviewTip/PreviewTip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent,parameters:()=>parameters});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_circleci_repo_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_styleguide_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/styleguide/.storybook/components/index.tsx"),_PreviewTip_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/styleguide/src/lib/Molecules/Tips/PreviewTip/PreviewTip.stories.tsx");const parameters={subtitle:"An Anchor that provides a snippet of relevant information from the link destination.",design:{type:"figma",url:"https://www.figma.com/file/ReGfRNillGABAj5SlITalN/branch/ayKNSg6QvZUjsgw0FFysW4/%F0%9F%93%90-Gamut?type=design&node-id=41538-55277&mode=design&t=fGkWf5GSl5cj5fQo-0"},status:"current",source:{repo:"gamut",githubLink:"https://github.com/Codecademy/gamut/blob/main/packages/gamut/src/Tip/PreviewTip/index.tsx"}};function _createMdxContent(props){const _components={code:"code",h2:"h2",h3:"h3",p:"p",...(0,_home_circleci_repo_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_PreviewTip_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styleguide_blocks__WEBPACK_IMPORTED_MODULE_2__.Bg,{...parameters}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A tip triggered on hover and focus of a link element. Use a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PreviewTip"})," to provide a snippet of information from a link’s destination without leaving the page."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"avatar-previewtip",children:"Avatar PreviewTip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Providing a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactNode"})," to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"avatar"})," prop will render the avatar variant. This should also have a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"username"})," prop for the user."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_PreviewTip_stories__WEBPACK_IMPORTED_MODULE_3__.AvatarTip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"floating",children:"Floating"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PreviewTip"}),"s sometimes need to be in used in a way that they need to escape the confines of their parent container. The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"floating"})," variant of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"placement"})," prop allows this. (Notice how this section doesn't need as much padding because the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PreviewTip"}),"s are able to escape their context!)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"floating"})," variant should only be used as needed."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_PreviewTip_stories__WEBPACK_IMPORTED_MODULE_3__.FloatingPreviewTip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"loading",children:"Loading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"loading"})," prop will render a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_styleguide_blocks__WEBPACK_IMPORTED_MODULE_2__.WS,{id:"Atoms/Loaders/Shimmer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Shimmer"})," loading state"]}),". See an example below! The first ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PreviewTip"})," is perpetually in the loading state and the second simulates loading on focus."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_PreviewTip_stories__WEBPACK_IMPORTED_MODULE_3__.LoadingTip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"truncation",children:"Truncation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"truncateLines"})," prop allows you to set the maximum number of lines that the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PreviewTip"})," will display before truncating. The default is 4 lines."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_PreviewTip_stories__WEBPACK_IMPORTED_MODULE_3__.Truncation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{sourceState:"shown",of:_PreviewTip_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.H2,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_circleci_repo_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./packages/styleguide/src/lib/Molecules/Tips/PreviewTip/PreviewTip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarTip:()=>AvatarTip,Default:()=>Default,FloatingPreviewTip:()=>FloatingPreviewTip,LoadingTip:()=>LoadingTip,Truncation:()=>Truncation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PreviewTip_stories});var PreviewTip=__webpack_require__("./packages/gamut/src/Tip/PreviewTip/index.tsx"),FlexBox=__webpack_require__("./packages/gamut/src/Box/FlexBox.tsx"),Box=__webpack_require__("./packages/gamut/src/Box/Box.tsx"),react=__webpack_require__("./node_modules/react/index.js"),dist_props=__webpack_require__("./packages/gamut-icons/dist/props.js"),useIconId=__webpack_require__("./packages/gamut-icons/dist/useIconId.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SmileyIndifferentIcon=react.forwardRef(((_ref,svgRef)=>{let{title,titleId,size=16,height=size,width=size,...props}=_ref;const maskId=(0,useIconId.K)("SmileyIndifferentIcon");return(0,jsx_runtime.jsxs)(dist_props.B,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",fill:"#fff",role:"img","aria-hidden":"true","pointer-events":"none",width,height,ref:svgRef,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("mask",{id:`${maskId}`,children:(0,jsx_runtime.jsx)("path",{d:"M6.79.41a6.595 6.595 0 00-4.92 2.453A6.576 6.576 0 00.492 8.051a6.66 6.66 0 00.922 2.453 6.694 6.694 0 002.254 2.184 6.634 6.634 0 002.492.851c.29.035.52.05.84.05a6.585 6.585 0 003.332-.902 6.67 6.67 0 002.355-2.355 6.585 6.585 0 00.876-3.937 6.596 6.596 0 00-.977-2.899 6.694 6.694 0 00-2.254-2.183A6.608 6.608 0 007.418.421 11.685 11.685 0 006.789.41m-.047.883l-.129.008a5.65 5.65 0 00-2.113.562c-.57.278-1.05.617-1.508 1.067a5.686 5.686 0 00-1.66 3.332A4.832 4.832 0 001.289 7c0 .336.008.45.043.738a5.8 5.8 0 001.043 2.621c.305.414.68.805 1.086 1.13a5.757 5.757 0 002.894 1.19c.243.024.391.032.645.032.492 0 .93-.05 1.387-.168a5.644 5.644 0 002.414-1.277 9.27 9.27 0 00.465-.465 5.64 5.64 0 001.023-1.633 5.766 5.766 0 00.418-1.875 5.661 5.661 0 00-.418-2.46 5.788 5.788 0 00-1.02-1.634 13.26 13.26 0 00-.468-.469 5.788 5.788 0 00-1.633-1.02 5.634 5.634 0 00-1.766-.41 12.547 12.547 0 00-.66-.007m-1.867 3.43a.637.637 0 00-.496.343.644.644 0 001.027.746.642.642 0 00-.531-1.09m4.098 0A.64.64 0 008.89 5.98a.642.642 0 10.082-1.258m-4.5 3.895a.455.455 0 00-.36.332.627.627 0 00-.004.192c.036.164.168.3.329.336.039.007.265.011 2.562.011 2.824 0 2.555.004 2.652-.043.114-.058.2-.16.235-.28a.568.568 0 000-.216.451.451 0 00-.301-.32l-.04-.012-2.53-.004c-1.391 0-2.536.004-2.543.004",fillRule:"evenodd"})}),(0,jsx_runtime.jsx)("g",{mask:`url(#${maskId})`,children:(0,jsx_runtime.jsx)("rect",{width:"100%",height:"100%",fill:"currentColor"})})]})}));SmileyIndifferentIcon.__docgenInfo={description:"",methods:[],displayName:"SmileyIndifferentIcon"};const PreviewTip_stories={component:PreviewTip.i,args:{alignment:"top-left",children:"PreviewTip Anchor",linkDescription:"Include a relevant snippet from the links destination on hover and focus, on click navigates to the page for more details. By default, the snippet will truncate after 4 lines, but the max lines can be set to any number lines fourty three",href:"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamp6NDVlZzNpam01NnlhaGRreWMwZGlzZ3Z6bWd2dmtneTJrN3pnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X5Lta1bjuULTubmGzR/giphy.webp"}},DefaultExample=args=>(0,jsx_runtime.jsx)(FlexBox.p,{center:!0,py:96,children:(0,jsx_runtime.jsx)(PreviewTip.i,{...args})}),Default={render:args=>(0,jsx_runtime.jsx)(DefaultExample,{...args})},AvatarExample=()=>(0,jsx_runtime.jsx)(FlexBox.p,{center:!0,py:96,mt:16,children:(0,jsx_runtime.jsx)(PreviewTip.i,{avatar:(0,jsx_runtime.jsx)(Box.a,{bg:"navy",height:"100%",borderRadius:"full",width:"100%",children:(0,jsx_runtime.jsx)(SmileyIndifferentIcon,{color:"yellow",size:"100%"})}),height:32,href:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGx4aDdoZ3htdm01MjRreTJ2NzZsbXhla2txYmJteGxiZGJ3cTM0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ToMjGpqisXrK0S9hNoA/giphy.webp",linkDescription:"# of contributions",truncateLines:1,username:"@coolguy",width:32})}),AvatarTip={render:args=>(0,jsx_runtime.jsx)(AvatarExample,{...args})},FloatingPreviewTip={args:{placement:"floating",alignment:"top-right"}},LoadingExample=()=>{const[load,setIsTempLoad]=(0,react.useState)(!0);return(0,jsx_runtime.jsx)(FlexBox.p,{center:!0,py:96,children:(0,jsx_runtime.jsxs)(FlexBox.p,{justifyContent:"space-between",py:96,mt:16,width:"100%",children:[(0,jsx_runtime.jsx)(PreviewTip.i,{linkDescription:"loading...",loading:!0,href:"/test",children:"I am a perpetually loading preview."}),(0,jsx_runtime.jsx)(PreviewTip.i,{alignment:"bottom-left",height:32,href:"/test",linkDescription:load?"loading...":"test",loading:load,onFocus:()=>{setTimeout((()=>setIsTempLoad(!1)),4e3)},truncateLines:1,width:32,children:"I will show loading for a few seconds on keyboard focus."})]})})},LoadingTip={render:args=>(0,jsx_runtime.jsx)(LoadingExample,{...args})},TruncationExample=args=>(0,jsx_runtime.jsxs)(FlexBox.p,{py:96,width:"100%",justifyContent:"space-around",children:[(0,jsx_runtime.jsx)(PreviewTip.i,{...args,truncateLines:2,alignment:"top-right"}),(0,jsx_runtime.jsx)(PreviewTip.i,{...args,truncateLines:5,alignment:"bottom-left",linkDescription:"This is a long link description. There is nothing fun or funny in this PreviewTip, and this definitely is way too long to be a 'summary' of anything at all. No one wants to read a preview that's as long as the article, its like a trailer that gives away the whole movie. Be better than that. Be a serious person."})]}),Truncation={render:args=>(0,jsx_runtime.jsx)(TruncationExample,{...args})},__namedExportsOrder=["Default","AvatarTip","FloatingPreviewTip","LoadingTip","Truncation"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <DefaultExample {...args} />\n}",...Default.parameters?.docs?.source}}},AvatarTip.parameters={...AvatarTip.parameters,docs:{...AvatarTip.parameters?.docs,source:{originalSource:"{\n  render: args => <AvatarExample {...args} />\n}",...AvatarTip.parameters?.docs?.source}}},FloatingPreviewTip.parameters={...FloatingPreviewTip.parameters,docs:{...FloatingPreviewTip.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'floating',\n    alignment: 'top-right'\n  }\n}",...FloatingPreviewTip.parameters?.docs?.source}}},LoadingTip.parameters={...LoadingTip.parameters,docs:{...LoadingTip.parameters?.docs,source:{originalSource:"{\n  render: args => <LoadingExample {...args} />\n}",...LoadingTip.parameters?.docs?.source}}},Truncation.parameters={...Truncation.parameters,docs:{...Truncation.parameters?.docs,source:{originalSource:"{\n  render: args => <TruncationExample {...args} />\n}",...Truncation.parameters?.docs?.source}}}}}]);