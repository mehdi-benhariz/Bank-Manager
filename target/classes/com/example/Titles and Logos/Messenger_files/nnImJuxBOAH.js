if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometToast.react",["fbt","ix","CometCircleButton.react","CometPressable.react","CometRow.react","CometRowItem.react","CometTheme.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useMemo,l={icon:{minWidth:"s3zjy1r9"},pressable:{display:"a8c37x1j"},root:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxShadow:"m1ttxjm6",maxWidth:"d2edcug0",minWidth:"q3mryazl"}};function a(a){var b=a.action,e=a.href,f=a.icon,g=a.impressionLoggingRef,m=a.message,n=a.onDismiss,o=a.size,p=a.supressCloseButton;p=p===void 0?!1:p;var q=a.target,r=a.testid;a.title;r=a.truncateText;r=r===void 0?!0:r;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","href","icon","impressionLoggingRef","message","onDismiss","size","supressCloseButton","target","testid","title","truncateText"]);var s=k(function(){return e!=null?{target:q,url:e}:void 0},[e,q]);g=j.jsxs(c("CometRow.react"),{paddingHorizontal:o==="small"?8:16,paddingVertical:o==="small"?8:16,ref:g,spacing:12,testid:void 0,verticalAlign:"center",children:[f!=null?j.jsx(c("CometRowItem.react"),{xstyle:l.icon,children:f}):null,j.jsx(c("CometRowItem.react"),{"aria-atomic":!0,expanding:!0,role:"alert",children:j.jsx(c("TetraText.react"),{color:"primary",numberOfLines:r?4:void 0,type:o==="small"?"body4":"body3",children:m})}),b!=null?j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometPressable.react"),{onPress:function(a){n(),b.onPress(a)},testid:void 0,children:j.jsx(c("TetraText.react"),{color:"blueLink",numberOfLines:1,type:"body3",children:b.label})})}):null,p!==!0&&j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometCircleButton.react"),{icon:d("fbicon")._(i("478231"),12),label:h._(/*FBT_CALL*/"Close"/*FBT_CALL*/),onPress:n,size:24})})]});(a.onPress!=null||s!=null)&&(g=j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{expanding:!0,linkProps:s,xstyle:l.pressable,children:g})));return j.jsx(c("CometTheme.react"),{testid:void 0,theme:"invert",xstyle:l.root,children:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SkywalkerUtils",["CurrentLocale","RTISubscriptionManagerConfig"],(function(a,b,c,d,e,f){a={patchContext:function(a){a=a||{};a.locale=b("CurrentLocale").get();if(b("RTISubscriptionManagerConfig").assimilator){var c=b("RTISubscriptionManagerConfig").assimilator;c.tierType!=null&&(a.tierType=c.tierType);c.sandboxIP!=null&&c.sandboxPort!=null&&c.sandboxHostname!=null&&(a.sandboxIP=c.sandboxIP,a.sandboxPort=c.sandboxPort,a.sandboxHostname=c.sandboxHostname)}return a}};e.exports=a}),null);