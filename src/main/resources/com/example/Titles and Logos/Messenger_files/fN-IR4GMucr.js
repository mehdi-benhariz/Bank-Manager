if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MWQuickPromotionDesktopInterstitialUpsellQuery.graphql",["MWQuickPromotionDesktopInterstitialUpsellQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"surface_nux_id",value:8879},{kind:"Literal",name:"trigger",value:"MESSENGER_OPEN"}],c=[{kind:"Literal",name:"supported",value:["CometQuickPromotionMessengerDesktopFeedbackInterstitialRendererStrategy","CometQuickPromotionMessengerDesktopInterstitialUpsellRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorAfterClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorBeforeClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerAfterClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerBeforeClassRendererStrategy"]}],d={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionDesktopInterstitialUpsellQuery",fragmentName:"CometQuickPromotionMessengerDesktopFeedbackInterstitialRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerDesktopFeedbackInterstitialRendererStrategy",abstractKey:null},e={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionDesktopInterstitialUpsellQuery",fragmentName:"CometQuickPromotionMessengerDesktopInterstitialUpsellRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerDesktopInterstitialUpsellRendererStrategy",abstractKey:null},f={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionDesktopInterstitialUpsellQuery",fragmentName:"CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorAfterClassRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorAfterClassRendererStrategy",abstractKey:null},g={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionDesktopInterstitialUpsellQuery",fragmentName:"CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorBeforeClassRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorBeforeClassRendererStrategy",abstractKey:null},h={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionDesktopInterstitialUpsellQuery",fragmentName:"CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerAfterClassRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerAfterClassRendererStrategy",abstractKey:null},i={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionDesktopInterstitialUpsellQuery",fragmentName:"CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerBeforeClassRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerBeforeClassRendererStrategy",abstractKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MWQuickPromotionDesktopInterstitialUpsellQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:a,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[d,e,f,g,h,i],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerDesktopFeedbackInterstitialRendererStrategy","CometQuickPromotionMessengerDesktopInterstitialUpsellRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorAfterClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorBeforeClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerAfterClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerBeforeClassRendererStrategy"])'}],storageKey:null}],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:8879,trigger:"MESSENGER_OPEN")'}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"MWQuickPromotionDesktopInterstitialUpsellQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:a,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,e,f,g,h,i],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerDesktopFeedbackInterstitialRendererStrategy","CometQuickPromotionMessengerDesktopInterstitialUpsellRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorAfterClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialInstructorBeforeClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerAfterClassRendererStrategy","CometQuickPromotionMessengerDesktopDownloadInterstitialLearnerBeforeClassRendererStrategy"])'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:8879,trigger:"MESSENGER_OPEN")'}],storageKey:null}]},params:{id:b("MWQuickPromotionDesktopInterstitialUpsellQuery_facebookRelayOperation"),metadata:{},name:"MWQuickPromotionDesktopInterstitialUpsellQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("MWQuickPromotionThreadlistBannerQuery.graphql",["MWQuickPromotionThreadlistBannerQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"surface_nux_id",value:8783},{kind:"Literal",name:"trigger",value:"MESSENGER_INBOX_THREADLIST_TOP"}],c=[{kind:"Literal",name:"supported",value:["CometQuickPromotionMessengerWebEPDBannerRendererStrategy","CometQuickPromotionMessengerWebPrivacyPolicyNoticeBannerRendererStrategy"]}],d={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionThreadlistBannerQuery",fragmentName:"CometQuickPromotionMessengerWebEPDBannerRendererStrategy_cometQuickPromotionBaseStrategy",fragmentPropName:"cometQuickPromotionBaseStrategy",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerWebEPDBannerRendererStrategy",abstractKey:null},e={kind:"InlineFragment",selections:[{args:null,documentName:"MWQuickPromotionThreadlistBannerQuery",fragmentName:"CometQuickPromotionMessengerWebPrivacyPolicyNoticeBannerRendererStrategy_quickPromotionRef",fragmentPropName:"quickPromotionRef",kind:"ModuleImport"}],type:"CometQuickPromotionMessengerWebPrivacyPolicyNoticeBannerRendererStrategy",abstractKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MWQuickPromotionThreadlistBannerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:a,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[d,e],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerWebEPDBannerRendererStrategy","CometQuickPromotionMessengerWebPrivacyPolicyNoticeBannerRendererStrategy"])'}],storageKey:null}],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:8783,trigger:"MESSENGER_INBOX_THREADLIST_TOP")'}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"MWQuickPromotionThreadlistBannerQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:a,concreteType:"ViewerEligibleQuickPromotionsConnection",kind:"LinkedField",name:"eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,e],storageKey:'renderer_strategy(supported:["CometQuickPromotionMessengerWebEPDBannerRendererStrategy","CometQuickPromotionMessengerWebPrivacyPolicyNoticeBannerRendererStrategy"])'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:'eligible_promotions(surface_nux_id:8783,trigger:"MESSENGER_INBOX_THREADLIST_TOP")'}],storageKey:null}]},params:{id:b("MWQuickPromotionThreadlistBannerQuery_facebookRelayOperation"),metadata:{},name:"MWQuickPromotionThreadlistBannerQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometMessagingJewelDropdownQPBannerPlaceholder.react",["BaseGlimmer.react","CometRow.react","CometRowItem.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={actionButtonGlimmer:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",height:"tv7at329"},logoGlimmer:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",height:"m7zwrmfr",marginTop:"muag1w35",width:"tmrshh9y"},root:{alignItems:"gs1a9yip",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",flexShrink:"g5gj957u",justifyContent:"i1fnvgqd",minHeight:"tgvbjcpo",minWidth:"hpfvmrgz",position:"l9j0dhe7",zIndex:"du4w35lb",backgroundColor:"i94ygzvd",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",height:"dk1262ng",marginTop:"n1l5q3vz",marginEnd:"tvfksri0",marginBottom:"n851cfcs",marginStart:"ozuftl9m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"ecm0bbzt",paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus",paddingBottom:"ihqw7lf3"},textGlimmer:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",height:"jnigpg78",marginBottom:"qzhwtbm6",marginTop:"knvmm38d"},textGroup:{display:"j83agx80",flexDirection:"cbu4d94t",marginBottom:"ew0dbk1b",marginTop:"irj2b8pg"}};function a(){return h.jsxs("div",{className:c("stylex")(i.root),children:[h.jsxs(c("CometRow.react"),{verticalAlign:"center",children:[h.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.logoGlimmer),index:0})}),h.jsx(c("CometRowItem.react"),{expanding:!0,children:h.jsxs("div",{className:c("stylex")(i.textGroup),children:[h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.textGlimmer),index:0}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.textGlimmer),index:0})]})})]}),h.jsxs(c("CometRow.react"),{align:"justify",direction:"forward",spacing:8,wrap:"none",children:[h.jsx(c("CometRowItem.react"),{expanding:!0,children:h.jsx(c("BaseGlimmer.react"),{index:1,xstyle:i.actionButtonGlimmer})}),h.jsx(c("CometRowItem.react"),{expanding:!0,children:h.jsx(c("BaseGlimmer.react"),{index:1,xstyle:i.actionButtonGlimmer})})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useQuickPromotionFalcoEvent",["react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("QpActionFalcoEvent").__setRef("useQuickPromotionFalcoEvent"),j=c("requireDeferred")("QpImpressionFalcoEvent").__setRef("useQuickPromotionFalcoEvent");function a(a){var b=a.context_surface_id;a=a.context_trigger;var c=a===void 0?"newsfeed":a,d=function(a){return a instanceof Map?Object.fromEntries(a):Object.entries((a=a)!=null?a:{}).reduce(function(a,b){var c=b[0];b=b[1];a[c]=b;return a},{})};a=h(function(a,e,f,g){if(e==null||f==null)return;var h=""+b,j=d(g);i.onReady(function(b){b=b.log;b(function(){return{action_type:a,context_surface_id:h,context_trigger:c,extra_client_data:j,instance_log_data:f,promotion_id:e}})})},[b,c]);var e=h(function(a,e,f){if(a==null||e==null)return;var g=""+b,h=d(f);j.onReady(function(b){b=b.log;b(function(){return{context_surface_id:g,context_trigger:c,extra_client_data:h,instance_log_data:e,promotion_id:a}})})},[b,c]);return{logAction:a,logImpression:e}}g["default"]=a}),98);
__d("MWQuickPromotionDesktopInterstitialUpsell.react",["CometQuickPromotionLoggerContext.react","CometRelay","MWQuickPromotionDesktopInterstitialUpsellQuery.graphql","react","useQuickPromotionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.queries;a=a.upsellQueryRef;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("MWQuickPromotionDesktopInterstitialUpsellQuery.graphql"),a);a=a==null?void 0:(a=a.viewer)==null?void 0:(a=a.eligible_promotions)==null?void 0:(a=a.nodes)==null?void 0:a.find(function(a){return((a=a.comet_qp_sections)==null?void 0:a.renderer_strategy)!=null});a=a==null?void 0:(a=a.comet_qp_sections)==null?void 0:a.renderer_strategy;var e=c("useQuickPromotionFalcoEvent")({context_surface_id:8879,context_trigger:"messenger_open"});return a==null?null:i.jsx(c("CometQuickPromotionLoggerContext.react").Provider,{value:e,children:i.jsx(d("CometRelay").MatchContainer,{match:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWQuickPromotionThreadlistBanner.react",["CometMessagingJewelDropdownQPBannerPlaceholder.react","CometPlaceholder.react","CometQuickPromotionLoggerContext.react","CometRelay","MWQuickPromotionThreadlistBannerQuery.graphql","react","useQuickPromotionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.queries;a=a.bannerQueryRef;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("MWQuickPromotionThreadlistBannerQuery.graphql"),a);a=a==null?void 0:(a=a.viewer)==null?void 0:(a=a.eligible_promotions)==null?void 0:(a=a.nodes[0])==null?void 0:(a=a.comet_qp_sections)==null?void 0:a.renderer_strategy;var e=c("useQuickPromotionFalcoEvent")({context_surface_id:8783,context_trigger:"messenger_inbox_threadlist_top"});return a==null?null:i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("CometMessagingJewelDropdownQPBannerPlaceholder.react"),{}),children:i.jsx(c("CometQuickPromotionLoggerContext.react").Provider,{value:e,children:i.jsx(d("CometRelay").MatchContainer,{match:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);