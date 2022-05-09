if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("LSSetContactCapabilities",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(c){return b.seq([function(c){return!0===!0&&!0===!0&&b.i64.neq(a[1],d)&&b.i64.neq(a[2],d)?b.fe(b.db.table(7).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({capabilities:a[1],capabilities2:a[2]})}):b.resolve()},function(c){return!0===!0&&b.i64.neq(a[2],d)?b.fe(b.db.table(7).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({capabilities2:a[2]})}):b.resolve()},function(c){return!0===!0&&b.i64.neq(a[1],d)?b.fe(b.db.table(7).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({capabilities:a[1]})}):b.resolve()},function(a){return 0}])},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSHandleFailedTask",["LSHandleTaskSendFailureForQueue"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e;return c.seq([function(d){return function(a){c.logger(a).warn(a)}(a[2]),a[1]!==e?c.sp(b("LSHandleTaskSendFailureForQueue"),a[1]):c.resolve()},function(a){return c.resolve(d)}])}e.exports=a}),null);
__d("LSHandleSyncFailure",["LSLogEventAnnotate.bs"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(e){return function(a){c.logger(a).warn(a)}(a[1]),d[0]=new c.Map(),d[0].set("database_id",a[0]),d[0].set("error_msg",a[1]),c.nop(b("LSLogEventAnnotate.bs"),[0,16],[0,35],[0,0],d[0])},function(b){return c.fe(c.db.table(3).fetch([[["",a[0]]]]),function(a){var b=a.update;a=a.item;return b({failureCount:c.i64.add(a.failureCount,[0,1]),epochId:f})})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSDeleteMessage",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(12).fetch([[[a[0]]]]),function(c){return c.messageId===a[1]&&b.i64.eq(c.threadKey,a[0])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSGetFirstAvailableAttachmentCTAID",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(a){return b.seq([function(a){return b.db.table(19).fetchDesc().next().then(function(a,d){var e=a.done;a=a.value;return e?c[0]=[0,1]:(d=a.item,c[0]=b.i64.add(d.ctaId,[0,1]))})},function(a){return d[0]=c[0]}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSSetMessageTextHasLinks",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(12).fetch([[[a[0],a[2],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq([0,0],[0,0])&&b.i64.eq(c.timestampMs,a[2])&&c.messageId===a[1]}),function(a){var b=a.update;a.item;return b({textHasLinks:!0})})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateDeliveryReceipt",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(14).fetch([[[a[1],{lt:a[0]},a[2]]],"threadKeyDeliveredWatermarkTimestampMs"]),function(c){return b.i64.eq(c.threadKey,a[1])&&b.i64.eq([0,0],[0,0])&&b.i64.eq(c.contactId,a[2])&&b.i64.gt(a[0],c.deliveredWatermarkTimestampMs)}),function(b){var c=b.update;b.item;return c({deliveredWatermarkTimestampMs:a[0]})})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateExistingMessageRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.ftr(b.db.table(13).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&(a[2]?b.i64.eq(c.maxTimestampMs,a[1]):b.i64.eq(c.minTimestampMs,a[1]))}).next().then(function(c,d){var e=c.done;c=c.value;return e?0:(d=c.item,b.db.table(13).put({threadKey:d.threadKey,minTimestampMs:d.minTimestampMs,minMessageId:d.minMessageId,maxTimestampMs:d.maxTimestampMs,maxMessageId:d.maxMessageId,isLoadingBefore:!1,isLoadingAfter:!1,hasMoreBefore:a[2]&&!a[3]?d.hasMoreBefore:!1,hasMoreAfter:a[2]&&!a[3]?!1:d.hasMoreAfter}))})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateThreadsRangesV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(d){return b.seq([function(c){return b.fe(b.db.table(10).fetch([[[a[1]]]]),function(a){return a["delete"]()})},function(d){return c[4]=b.i64.gt(a[2],[0,1])&&b.i64.gt(a[3],[-2147483648,0]),a[0]==="inbox"&&b.i64.eq(a[1],[0,0])&&b.i64.eq([0,1],[0,1])?b.seq([function(d){return c[5]=a[2],c[6]=a[3],c[7]=!1,c[8]=c[4],b.fe(b.db.table(198).fetch(),function(a){a=a.item;return c[9]=a.minLastActivityTimestampMs,c[11]=a.minThreadKey,c[10]=b.i64.lt(c[5]==null?c[9]:c[5],c[9]),c[5]=c[10]?c[9]:c[5],c[6]=c[10]?c[11]:c[6],c[7]=c[7]||a.isLoadingBefore,c[8]=c[8]||b.i64.gt(c[9],[0,1])&&b.i64.gt(c[11],[-2147483648,0])})},function(a){return a=[c[5],c[6],c[7],c[8]],c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],a}]):b.resolve((d=[a[2],a[3],!1,c[4]],c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],d))},function(d){return b.db.table(10).add({parentThreadKey:a[1],minThreadKey:c[1]==null?[-2147483648,0]:c[1],minLastActivityTimestampMs:c[0]==null?[0,1]:c[0],maxLastActivityTimestampMs:[0,1],maxThreadKey:[-2147483648,0],isLoadingBefore:c[2],isLoadingAfter:!1,hasMoreBefore:c[3],hasMoreAfter:!1})}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSUpsertAttachmentRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.seq([function(c){return b.fe(b.db.table(17).fetch([[[a[0],a[1]]]]),function(a){return a["delete"]()})},function(c){return b.db.table(17).add({threadKey:a[0],mediaGroup:a[1],minTimestampMs:a[2],maxTimestampMs:[2328,1316134911],hasMoreBefore:a[3],hasMoreAfter:!1,isLoadingBefore:!1,isLoadingAfter:!1})}])},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpsertSequenceId",["LSGetViewerFBID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(e){return c.seq([function(a){return c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.db.table(25).put({id:d[0],lastAppliedMailboxSequenceId:a[0]})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("CometUFICommentBodyTextWithEntities_textWithEntities$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometUFICommentBodyTextWithEntities_textWithEntities$normalization",selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}]};e.exports=a}),null);
__d("useHostedRoute",["CometRouterHostedRouteContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){return h(c("CometRouterHostedRouteContext"))}g["default"]=a}),98);
__d("CometRouteMatch",["ConstUriUtils","getCometRouteKey","normalizeCometRouterUrl","useCurrentRoute","useHostedRoute","useParentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){return!1};function i(a,b){return a==null?h:function(c){return b(c,a)}}function j(a,b){return a!=null&&b!=null&&c("normalizeCometRouterUrl")(a)===c("normalizeCometRouterUrl")(b)}function k(a,b){return a!=null&&b!=null&&j((a=d("ConstUriUtils").getUri(a))==null?void 0:a.getPath(),(a=d("ConstUriUtils").getUri(b))==null?void 0:a.getPath())}f=function(a,b){return c("getCometRouteKey")(a)===c("getCometRouteKey")(b)};var l=function(a,b){return j(a,b.url)},m=function(a,b){return k(a,b.url)},n=function(a,b){return k(a,(a=b.canonicalUrl)!=null?a:b.url)};n={canonicalPathMatchFunction:n,pathMatchFunction:m,routeMatchFunction:f,urlMatchFunction:l};function a(a){var b=c("useCurrentRoute")();return i(b,a)}function b(a){var b=c("useHostedRoute")();return i(b,a)}function e(a){var b=c("useParentRoute")();return i(b,a)}g.MatchFunctions=n;g.useCurrentRouteMatcher=a;g.useHostedRouteMatcher=b;g.useParentRouteMatcher=e}),98);
__d("FriendingCometFriendRequestStrings",["fbt","qex"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return c("qex")._("1134")?h._(/*FBT_CALL*/"Request removed"/*FBT_CALL*/):h._(/*FBT_CALL*/"Request deleted"/*FBT_CALL*/)}function b(){return c("qex")._("1134")?h._(/*FBT_CALL*/"Remove"/*FBT_CALL*/):h._(/*FBT_CALL*/"Delete"/*FBT_CALL*/)}function d(){return c("qex")._("1134")?h._(/*FBT_CALL*/"Remove request"/*FBT_CALL*/):h._(/*FBT_CALL*/"Delete request"/*FBT_CALL*/)}function e(){return h._(/*FBT_CALL*/"Request accepted"/*FBT_CALL*/)}g.requestRejected=a;g.reject=b;g.rejectRequest=d;g.acceptRequest=e}),98);
__d("useImpressionLogger",["BaseViewportMarginsContext","getIntersectionMarginFromViewportMargin","intersectionObserverEntryIsIntersecting","react","useIntersectionObserver"],(function(a,b,c,d,e,f,g){"use strict";d("react");b=d("react");var h=b.useCallback,i=b.useContext,j=b.useRef;function a(a,b){var d=i(c("BaseViewportMarginsContext")),e=j(!1),f=h(function(d){d=c("intersectionObserverEntryIsIntersecting")(d);if(e.current!==d){e.current=d;if(e.current){var f=new Date();e.current=!0;a.onReady(function(a){b(a,f)})}}},[b,a]);return c("useIntersectionObserver")(f,{root:null,rootMargin:c("getIntersectionMarginFromViewportMargin")(d),threshold:0})}g["default"]=a}),98);
__d("MWInboxInfoSharedContentEmptyTab.bs",["fbt","LSMessagingThreadTypeUtil.bs","LSThreadTitle.bs","MDSText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={header:{marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5","padding-bottom":"sj5x9vvc"},body:{marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5","max-width":"hju0hwpo",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso"},container:{position:"l9j0dhe7","padding-top":"rxdl3p0i"}};function a(a){var c=a.contentType;a=a.thread;var d;switch(c){case 0:d="media";break;case 1:d="files";break;case 2:d="links";break}var e=g._(/*FBT_CALL*/{"media":"No media","files":"No files","links":"No links"}/*FBT_CALL*/,[g._enum(d,{media:"media",files:"files",links:"links"})]);if(b("LSMessagingThreadTypeUtil.bs").isOneToOne(a.threadType)){var f;switch(c){case 0:f="Photos and videos";break;case 1:f="Files";break;case 2:f="Links";break}a=g._(/*FBT_CALL*/{"Photos and videos":"Photos and videos that you exchange with {name} will appear here.","Files":"Files that you exchange with {name} will appear here.","Links":"Links that you exchange with {name} will appear here."}/*FBT_CALL*/,[g._enum(f,{"Photos and videos":"Photos and videos",Files:"Files",Links:"Links"}),g._param("name",j.jsx(b("LSThreadTitle.bs").make,{thread:a,wrapOutput:function(a,b){return b}}))])}else{var h;switch(c){case 0:h="Photos and videos";break;case 1:h="Files";break;case 2:h="Links";break}a=g._(/*FBT_CALL*/{"Photos and videos":"Photos and videos that you exchange with this group will appear here.","Files":"Files that you exchange with this group will appear here.","Links":"Links that you exchange with this group will appear here."}/*FBT_CALL*/,[g._enum(h,{"Photos and videos":"Photos and videos",Files:"Files",Links:"Links"})])}return j.jsxs("div",{className:(i||(i=b("stylex")))(k.container),children:[j.jsx("div",{className:i(k.header),children:j.jsx(b("MDSText.react"),{align:"center",color:"secondary",type:"body2",children:e})}),j.jsx("div",{className:i(k.body),children:j.jsx(b("MDSText.react"),{align:"center",color:"secondary",type:"body3",children:a})})]})}c=a;f.styles=k;f.make=c}),null);
__d("MWInboxInfoSharedContentFilePreview.bs",["CometImageCover.react","LSMediaUrl.bs","MDSSvgDocumentCompleteIcon.bs","MWChatMessageId.bs","MWThreadKey.bs","ReQL.bs","ReQLSubscription.bs","bs_belt_Option","bs_caml_option","gkx","react","useReStore"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function i(a){var c=a.messageIDStr;a=a.fileName;var d=b("useReStore")(),e=b("MWThreadKey.bs").useIdMemoizedExn(void 0),f=b("ReQLSubscription.bs").useFirst(h.useMemo(function(){return b("ReQL.bs").map(b("ReQL.bs").getKeyRange(b("ReQL.bs").fromTableAscending(d.table("attachments")),{hd:e,tl:{hd:c,tl:0}}),function(a){return b("LSMediaUrl.bs").Attachment.previewUrl(a)})},[d,e])),g=b("gkx")("1745"),i={left:"0",position:"absolute",top:"0",objectPosition:"top"},j=h.jsx(b("MDSSvgDocumentCompleteIcon.bs").make,{color:"primary",size:"24"});if(!g)return j;if(f===void 0)return j;g=b("bs_caml_option").valFromOption(f);if(g===void 0)return j;f=b("bs_belt_Option").getWithDefault(a,"");return h.jsx(b("CometImageCover.react"),{alt:f,src:g,style:i})}c={make:i};function a(a){var c=a.messageID,d=a.fileName;return b("bs_belt_Option").mapWithDefault(b("bs_belt_Option").flatMap(c,b("MWChatMessageId.bs").getMessageId),null,function(a){a={messageIDStr:a};d!==void 0&&(a.fileName=d);return h.jsx(i,a)})}d=a;f.PreviewContent=c;f.make=d}),null);
__d("MWInboxInfoSharedContentFile.bs",["fbt","MDSRow.react","MDSRowItem.react","MDSTextPairing.react","MWFilePressable.bs","MWInboxInfoSharedContentFilePreview.bs","MessengerFilePreviewGenerationEntryPoint","bs_belt_Option","bs_caml_int64","bs_caml_option","formatFileSize","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react"),j={contentRowItem:{paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"tw6a2znq"},fileRow:{marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso"},iconRowItem:{backgroundColor:"i94ygzvd",height:"pi1r6xr4",width:"i8j84fko",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",paddingTop:"l29c1vbm",paddingEnd:"aglmviwh",paddingBottom:"j7796vcc",paddingStart:"c4f5jtg6",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},filePressable:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"}};function a(a){var c=a.attachmentID,d=a.messageID,e=a.url,f=a.onPress,h=a.fileName;a=a.fileSize;var k=h!==void 0?h:g._(/*FBT_CALL*/"File"/*FBT_CALL*/);a=b("bs_belt_Option").map(a,b("bs_caml_int64").to_int32);a=a!==void 0?b("formatFileSize")(a):null;var l={};d!==void 0&&(l.messageID=b("bs_caml_option").valFromOption(d));h!==void 0&&(l.fileName=h);h={entryPoint:b("MessengerFilePreviewGenerationEntryPoint").INBOX_INFO_V1,xstyle:function(a){return[j.filePressable]},children:i.jsxs(b("MDSRow.react"),{paddingTop:0,verticalAlign:"center",expanding:!0,xstyle:[j.fileRow],children:[i.jsx(b("MDSRowItem.react"),{xstyle:[j.iconRowItem],children:i.jsx(b("MWInboxInfoSharedContentFilePreview.bs").make,l)}),i.jsx(b("MDSRowItem.react"),{expanding:!0,xstyle:[j.contentRowItem],children:i.jsx(b("MDSTextPairing.react"),{body:a,headline:k,level:4,headlineLineLimit:1,bodyColor:"secondary"})})]})};d!==void 0&&(h.messageID=b("bs_caml_option").valFromOption(d));c!==void 0&&(h.attachmentID=b("bs_caml_option").valFromOption(c));e!==void 0&&(h.url=e);f!==void 0&&(h.onPress=b("bs_caml_option").valFromOption(f));return i.jsx(b("MWFilePressable.bs").make,h)}c=a;f.styles=j;f.make=c}),null);
__d("MWInboxInfoSharedContentTheme.bs",[],(function(a,b,c,d,e,f){"use strict";a={divider:"var(--hover-overlay)"};b={divider:"var(--hover-overlay)"};c={light:a,dark:b,type:"VARIABLES"};f.config=c}),null);
__d("MWInboxInfoSharedContentFilesTab.bs",["BaseTheme.react","CometColumn.react","CometColumnItem.react","CometInfiniteScrollTrigger.react","CometProgressIndicator.react","FBID.bs","LSMediaUrl.bs","MWChatMessageId.bs","MWInboxInfoSharedContentEmptyTab.bs","MWInboxInfoSharedContentFile.bs","MWInboxInfoSharedContentLogger.bs","MWInboxInfoSharedContentQPLLogger.bs","MWInboxInfoSharedContentTheme.bs","MWLSLoadMoreThreadSharedAttachments.bs","MWPParticipantsAndContactsForThread.bs","MWSharedAttachmentsSectionHooks.bs","bs_array","bs_belt_Option","bs_caml_option","bs_curry","bs_int64","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i={progressIndicator:{display:"j83agx80",justifyContent:"taijpn5t",marginTop:"aov4n071",paddingTop:"fdg1wqfs",paddingEnd:"jxrgncrl",paddingBottom:"ae35evdt",paddingStart:"qnrpqo6b"},container:{marginBottom:"bi6gxh9e"}};function a(a){var c=a.thread,d=a.isSecureThread,e=a.onFirstLoadedMedia;a=b("MWSharedAttachmentsSectionHooks.bs").useQueryFileAttachments(c);var f=a[0],g=h.useRef(!1),j=b("MWLSLoadMoreThreadSharedAttachments.bs").useHook(a[1]),k=b("bs_belt_Option").getWithDefault(a[4],!0),l=b("bs_array").map(function(a){return b("FBID.bs").ofStringExn(b("bs_int64").to_string(a[0].contactId))},b("MWPParticipantsAndContactsForThread.bs").useValue(c));h.useEffect(function(){b("bs_curry")._1(j,void 0)},[j]);a=b("MWSharedAttachmentsSectionHooks.bs").useLoader(f,k,a[2],j);var m=a[2];h.useEffect(function(){g.current===!1&&m===!0&&(g.current=!0,b("bs_curry")._1(e,f))},[m,f,e]);var n=h.useCallback(function(a){b("MWInboxInfoSharedContentLogger.bs").logFilePress(a,c,0,d,l,f.length);return b("MWInboxInfoSharedContentQPLLogger.bs").logOpenSharedContentFromSidePanel(1)},[c,d,f,l]);if(f.length===0&&!k)return h.jsx(b("MWInboxInfoSharedContentEmptyTab.bs").make,{contentType:1,thread:c});else return h.jsx(b("BaseTheme.react"),{config:b("MWInboxInfoSharedContentTheme.bs").config,children:h.jsxs(b("CometColumn.react"),{spacing:20,hasDividers:!0,paddingHorizontal:16,xstyle:[i.container],children:[f.map(function(a){var c={messageID:b("MWChatMessageId.bs").makeSent(b("bs_int64").to_string(a.threadKey),a.messageId,b("bs_int64").to_string(a.timestampMs)),onPress:function(c){return b("bs_curry")._1(n,a)}},d=b("FBID.bs").ofString(a.attachmentFbid);d!==void 0&&(c.attachmentID=b("bs_caml_option").valFromOption(d));d=b("LSMediaUrl.bs").Attachment.playableUrl(a);d!==void 0&&(c.url=d);a.filename!==void 0&&(c.fileName=a.filename);a.filesize!==void 0&&(c.fileSize=a.filesize);return h.jsx(b("CometColumnItem.react"),{children:h.jsx(b("MWInboxInfoSharedContentFile.bs").make,c,a.attachmentFbid)},a.attachmentFbid)}),h.jsx(b("CometInfiniteScrollTrigger.react"),{hasMore:k,isLoading:a[0],onLoadMore:a[1],xstyle:i.progressIndicator,children:h.jsx(b("CometProgressIndicator.react"),{size:"default"})})]})})}c=a;f.styles=i;f.make=c}),null);
__d("MWInboxInfoListItem.bs",["CometColumnItem.react","CometPressable.react","MDSRow.react","MDSRowItem.react","MDSTextPairing.react","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i={contentItem:{paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"tw6a2znq"},containerRow:{marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso"},mediaItem:{backgroundColor:"i94ygzvd",height:"pi1r6xr4",width:"i8j84fko",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",display:"j83agx80",alignItems:"bp9cbjyn",justifyContent:"taijpn5t",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},pressable:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"}};function a(a){var c=a.url,d=a.title,e=a.subtitle,f=a.mediaElement;a=a.onPress;var g=h.useMemo(function(){return{download:!0,target:"_blank",url:c}},[c]);return h.jsx(b("CometColumnItem.react"),{children:h.jsx(b("CometPressable.react"),{display:"inline",linkProps:g,onPress:a,overlayDisabled:!0,xstyle:function(a){return[i.pressable]},children:h.jsxs(b("MDSRow.react"),{verticalAlign:"center",expanding:!0,xstyle:[i.containerRow],children:[h.jsx(b("MDSRowItem.react"),{xstyle:[i.mediaItem],children:f}),h.jsx(b("MDSRowItem.react"),{expanding:!0,xstyle:[i.contentItem],children:h.jsx(b("MDSTextPairing.react"),{body:e,headline:d,level:4,headlineLineLimit:1,bodyColor:"secondary"})})]})})})}c=a;f.styles=i;f.make=c}),null);
__d("MWInboxInfoSharedLink.bs",["CometImageCover.react","LSMediaUrl.bs","MDSLinkSvgIcon.bs","MWInboxInfoListItem.bs","ReQL.bs","ReQLSubscription.bs","SortedAsyncIterable.bs","bs_belt_Option","react","useReStore"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.attachment,d=a.onPress,e=b("useReStore")();a=b("ReQLSubscription.bs").useFirst(h.useMemo(function(){var a=c.defaultCtaId;if(a!==void 0)return b("ReQL.bs").getKeyRange(b("ReQL.bs").fromTableAscending(e.table("attachment_ctas")),{hd:a,tl:0});else return b("SortedAsyncIterable.bs").empty(void 0)},[e,JSON.stringify(c.defaultCtaId)]));return b("bs_belt_Option").mapWithDefault(b("bs_belt_Option").flatMap(a,function(a){return a.actionUrl}),null,function(a){var e=b("bs_belt_Option").getWithDefault(c.titleText,a),f=b("bs_belt_Option").getWithDefault(c.accessibilitySummaryText,e),g=b("LSMediaUrl.bs").Attachment.previewUrl(c),i=b("LSMediaUrl.bs").Attachment.faviconUrl(c);g=g!==void 0?h.jsx(b("CometImageCover.react"),{alt:f,src:g}):i!==void 0?h.jsx(b("CometImageCover.react"),{alt:f,src:i}):h.jsx(b("MDSLinkSvgIcon.bs").make,{color:"primary",size:"24"});return h.jsx(b("MWInboxInfoListItem.bs").make,{url:a,title:e,subtitle:b("bs_belt_Option").getWithDefault(c.subtitleText,""),mediaElement:g,onPress:d})})}c=a;f.make=c}),null);
__d("MWInboxInfoSharedLinks.bs",["BaseTheme.react","CometColumn.react","CometInfiniteScrollTrigger.react","CometProgressIndicator.react","MWInboxInfoSharedContentEmptyTab.bs","MWInboxInfoSharedContentTheme.bs","MWInboxInfoSharedLink.bs","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i={progressIndicator:{display:"j83agx80",justifyContent:"taijpn5t",marginTop:"aov4n071",marginBottom:"bi6gxh9e",paddingTop:"fdg1wqfs",paddingEnd:"jxrgncrl",paddingBottom:"ae35evdt",paddingStart:"qnrpqo6b"}};function a(a){var c=a.links,d=a.hasMore,e=a.onLoadMore,f=a.isLoading,g=a.thread,j=a.onPressLink;if(c.length===0&&!f&&!d)return h.jsx(b("MWInboxInfoSharedContentEmptyTab.bs").make,{contentType:2,thread:g});else return h.jsx(b("BaseTheme.react"),{config:b("MWInboxInfoSharedContentTheme.bs").config,children:h.jsxs(b("CometColumn.react"),{spacing:20,hasDividers:!0,paddingHorizontal:16,children:[c.map(function(a){return h.jsx(b("MWInboxInfoSharedLink.bs").make,{attachment:a,onPress:j},a.attachmentFbid)}),h.jsx(b("CometInfiniteScrollTrigger.react"),{hasMore:d,isLoading:f,onLoadMore:e,xstyle:i.progressIndicator,children:h.jsx(b("CometProgressIndicator.react"),{size:"default"})})]})})}c=a;f.styles=i;f.make=c}),null);
__d("MWInboxInfoSharedLinksSection.bs",["FBID.bs","MWInboxInfoSharedContentLogger.bs","MWInboxInfoSharedContentQPLLogger.bs","MWInboxInfoSharedLinks.bs","MWLSLoadMoreThreadSharedAttachments.bs","MWPParticipantsAndContactsForThread.bs","MWSharedAttachmentsSectionHooks.bs","bs_array","bs_belt_Option","bs_curry","bs_int64","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.thread,d=a.isSecureThread,e=a.onFirstLoadedMedia;a=b("MWSharedAttachmentsSectionHooks.bs").useQueryLinkAttachments(c);var f=a[0],g=b("bs_belt_Option").getWithDefault(a[4],!0),i=b("MWLSLoadMoreThreadSharedAttachments.bs").useHook(a[1]),j=h.useRef(!1),k=b("bs_array").map(function(a){return b("FBID.bs").ofStringExn(b("bs_int64").to_string(a[0].contactId))},b("MWPParticipantsAndContactsForThread.bs").useValue(c));h.useEffect(function(){b("bs_curry")._1(i,void 0)},[i]);a=b("MWSharedAttachmentsSectionHooks.bs").useLoader(f,g,a[2],i);var l=a[2];h.useEffect(function(){j.current===!1&&l===!0&&(j.current=!0,b("bs_curry")._1(e,f))},[l,f,e]);var m=h.useCallback(function(a){b("MWInboxInfoSharedContentLogger.bs").logLinkPress(c,1,d,k,f.length);return b("MWInboxInfoSharedContentQPLLogger.bs").logOpenSharedContentFromSidePanel(2)},[c,d,f,k]);return h.jsx(b("MWInboxInfoSharedLinks.bs").make,{links:f,hasMore:g,onLoadMore:a[1],isLoading:a[0],thread:c,onPressLink:m})}c=a;f.make=c}),null);
__d("MWInboxInfoSharedMediaTab.bs",["FBID.bs","LSMediaUrl.bs","MWInboxInfoPhotoGallery.bs","MWInboxInfoSharedContentEmptyTab.bs","MWInboxInfoSharedContentLogger.bs","MWInboxInfoSharedContentQPLLogger.bs","MWLSLoadMoreThreadSharedAttachments.bs","MWPParticipantsAndContactsForThread.bs","MWSharedAttachmentsSectionHooks.bs","bs_array","bs_belt_Option","bs_curry","bs_int64","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={container:{paddingTop:"jb3vyjys",paddingEnd:"hv4rvrfc",paddingBottom:"qt6c0cv9",paddingStart:"dati1w0a"}};function a(a){var c=a.thread,d=a.isSecureThread,e=a.onFirstLoadedMedia,f=i.useRef(!1);a=b("MWSharedAttachmentsSectionHooks.bs").useQueryMediaAttachments(c);var g=a[0],k=b("bs_belt_Option").getWithDefault(a[4],!0),l=b("MWLSLoadMoreThreadSharedAttachments.bs").useHook(a[1]);a=b("MWSharedAttachmentsSectionHooks.bs").useLoader(g,k,a[2],l);var m=a[2],n=b("bs_array").map(function(a){return b("FBID.bs").ofStringExn(b("bs_int64").to_string(a[0].contactId))},b("MWPParticipantsAndContactsForThread.bs").useValue(c));i.useEffect(function(){f.current===!1&&m===!0&&(f.current=!0,b("bs_curry")._1(e,g))},[m,g,e]);l=i.useCallback(function(a){return b("bs_belt_Option").getWithDefault(b("LSMediaUrl.bs").Attachment.previewUrl(a),"")},[]);var o=i.useCallback(function(a){b("MWInboxInfoSharedContentLogger.bs").logMediaPress(a,c,2,d,n,g.length);return b("MWInboxInfoSharedContentQPLLogger.bs").logOpenSharedContentFromSidePanel(0)},[c,d,g,n]);return i.jsx("div",{className:(h||(h=b("stylex")))(j.container),children:g.length>0||k?i.jsx(b("MWInboxInfoPhotoGallery.bs").make,{media:g,hasMore:k,onLoadMore:a[1],isLoading:a[0],getPreviewUrl:l,onPressMedia:o,uniformGrid:!0}):i.jsx(b("MWInboxInfoSharedContentEmptyTab.bs").make,{contentType:0,thread:c})})}c=a;f.styles=j;f.make=c}),null);
__d("MWInboxInfoSharedContent.bs",["fbt","ix","CometEntityHeaderTabs.react","FBID.bs","Locale","MDSRow.react","MDSRowItem.react","MDSText.react","MWInboxInfoSharedContentFilesTab.bs","MWInboxInfoSharedContentLogger.bs","MWInboxInfoSharedContentQPLLogger.bs","MWInboxInfoSharedLinksSection.bs","MWInboxInfoSharedMediaTab.bs","MWPParticipantsAndContactsForThread.bs","TetraCircleButton.react","bs_array","bs_belt_Id","bs_belt_Set","bs_caml_array","bs_caml_obj","bs_curry","bs_int64","fbicon","react","stylex","usePrevious"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=i||b("react");c=b("bs_caml_obj").caml_compare;var l=b("bs_belt_Id").MakeComparable({cmp:c}),m={tabsContainer:{paddingTop:"jb3vyjys",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"}};function n(a){var c=a.thread,d=a.isSecureThread,e=a.sharedLinksEnabled;a=a.onFirstLoadedMedia;if(d||!e)return null;else return k.jsx(b("MWInboxInfoSharedLinksSection.bs").make,{thread:c,isSecureThread:d,onFirstLoadedMedia:a})}d={make:n};function o(a){var c=a.thread,d=a.isSecureThread;a=a.onFirstLoadedMedia;return k.jsx(b("MWInboxInfoSharedMediaTab.bs").make,{thread:c,isSecureThread:d,onFirstLoadedMedia:a})}e={make:o};function p(a){var c=a.thread,d=a.isSecureThread;a=a.onFirstLoadedMedia;return k.jsx(b("MWInboxInfoSharedContentFilesTab.bs").make,{thread:c,isSecureThread:d,onFirstLoadedMedia:a})}c={make:p};function q(a){var b=a.thread,c=a.isSecureThread,d=a.sharedLinksEnabled;a=a.onFirstLoadedMedia;return k.jsx(n,{thread:b,isSecureThread:c,sharedLinksEnabled:d,onFirstLoadedMedia:a})}var r={make:q};function a(a){var c=a.thread,d=a.isSecureThread,e=a.initialTab,f=a.onReturn;a=a.sharedLinksEnabled;var i=a?[0,1,2]:[0,1],n=e!==void 0?e:b("bs_caml_array").get(i,0);e=k.useState(function(){return n});var r=e[1],s=e[0],t=b("usePrevious")(s),u=k.useRef(b("bs_belt_Set").make(l)),v=b("bs_array").map(function(a){return b("FBID.bs").ofStringExn(b("bs_int64").to_string(a[0].contactId))},b("MWPParticipantsAndContactsForThread.bs").useValue(c));e=k.useCallback(function(a){var e;if(t==null)e=3;else switch(t){case 0:e=2;break;case 1:e=0;break;case 2:e=1;break}a=a.length;b("MWInboxInfoSharedContentLogger.bs").logOpenTab(c,s,e,d,a,v);if(b("bs_belt_Set").has(u.current,s)===!1){u.current=b("bs_belt_Set").add(u.current,s);return b("MWInboxInfoSharedContentQPLLogger.bs").logLoadTab(s,a)}},[c,s,d]);var w=k.useCallback(function(a){var c;switch(a){case 0:c=g._(/*FBT_CALL*/"Media"/*FBT_CALL*/);break;case 1:c=g._(/*FBT_CALL*/"Files"/*FBT_CALL*/);break;case 2:c=g._(/*FBT_CALL*/"Links"/*FBT_CALL*/);break}var d;switch(a){case 0:d="mw_shared_media_tab";break;case 1:d="mw_shared_files_tab";break;case 2:d="mw_shared_links_tab";break}return{label:c,onPress:function(c){return b("bs_curry")._1(r,function(b){return a})},selected:s===a,testid:d}},[s,r]);k.useEffect(function(){b("MWInboxInfoSharedContentQPLLogger.bs").logOpenTab(s)},[s]);var x;switch(s){case 0:x=k.jsx(o,{thread:c,isSecureThread:d,onFirstLoadedMedia:e});break;case 1:x=k.jsx(p,{thread:c,isSecureThread:d,onFirstLoadedMedia:e});break;case 2:x=k.jsx(q,{thread:c,isSecureThread:d,sharedLinksEnabled:a,onFirstLoadedMedia:e});break}e=k.useMemo(function(){return i.map(b("bs_curry").__1(w))},[i,w]);var y=k.useRef(!1),z=k.useCallback(function(a){y.current=!0;b("MWInboxInfoSharedContentQPLLogger.bs").logNavigateBackFromSidePanel(void 0);return b("bs_curry")._1(f,void 0)},[f]);k.useEffect(function(){b("MWInboxInfoSharedContentQPLLogger.bs").logOpenSidePanel(n);b("MWInboxInfoSharedContentLogger.bs").logOpenContentPanel(c,d,v);return function(a){if(!y.current)return b("MWInboxInfoSharedContentQPLLogger.bs").logNavigateAwaySidePanel(void 0)}},[]);return k.jsxs(k.Fragment,{children:[k.jsxs(b("MDSRow.react"),{paddingHorizontal:16,paddingTop:16,spacingHorizontal:8,children:[k.jsx(b("MDSRowItem.react"),{children:k.jsx(b("TetraCircleButton.react"),{icon:b("Locale").isRTL()?b("fbicon")._(h("514454"),20):b("fbicon")._(h("512647"),20),label:g._(/*FBT_CALL*/"Back"/*FBT_CALL*/),onPress:z,size:32,type:"deemphasized"})}),k.jsx(b("MDSRowItem.react"),{verticalAlign:"center",expanding:!0,children:k.jsx(b("MDSText.react"),{type:"bodyLink2",children:a?g._(/*FBT_CALL*/"Media, files and links"/*FBT_CALL*/):g._(/*FBT_CALL*/"Media and files"/*FBT_CALL*/)})})]}),k.jsx("div",{className:(j||(j=b("stylex")))(m.tabsContainer),children:k.jsx(b("CometEntityHeaderTabs.react"),{tabs:e})}),x]})}var s;a=a;f.Tabs=s;f.TabCmp=l;f.styles=m;f.SharedLinksSection=d;f.MediaTabContent=e;f.FilesTabContent=c;f.LinksTabContent=r;f.make=a}),null);
__d("CompositeDraftDecorator",["immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").List,h=".";a=function(){function a(a){this.$1=a.slice()}var b=a.prototype;b.isCompositionOfDecorators=function(a){if(this.$1.length!==a.length)return!1;for(var b=0;b<a.length;b++)if(this.$1[b]!==a[b])return!1;return!0};b.getDecorators=function(){return this.$1};b.getDecorations=function(a,b){var c=Array(a.getText().length).fill(null);this.$1.forEach(function(d,e){var f=0;d=d.strategy;function g(a,b){i(c,a,b)&&(j(c,a,b,e+h+f),f++)}d(a,g,b)});return g(c)};b.getComponentForKey=function(a){a=parseInt(a.split(h)[0],10);return this.$1[a].component};b.getPropsForKey=function(a){a=parseInt(a.split(h)[0],10);return this.$1[a].props};return a}();function i(a,b,c){for(var b=b;b<c;b++)if(a[b]!=null)return!1;return!0}function j(a,b,c,d){for(var b=b;b<c;b++)a[b]=d}e.exports=a}),null);
__d("FBMapFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";a={GESTURE_SINGLE_TAP:"gesture_single_tap",GESTURE_DOUBLE_TAP:"gesture_double_tap",PAN:"pan",ZOOM_MAP:"zoom_map",MARKER_CLICK:"marker_click"};b={MAP_READY:"map_ready",FIRST_TILE_LOADED:"first_tile_loaded",ALL_VISIBLE_TILES_LOADED:"all_visible_tiles_loaded"};f.MAP_INTERACTIVE_EVENTS=a;f.MAP_EVENTS=b}),66);
__d("BizkitWebRedirectFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("2232");c=b("FalcoLoggerInternal").create("bizkit_web_redirect",a);e.exports=c}),null);
__d("XWoodhengeFullScreenSignUpControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{profilish_token}/support/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XWebGraphQLQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/webgraphql/query/",{query_id:{type:"FBID"},variables:{type:"String"},doc_id:{type:"FBID"},legacy_response_format:{type:"Bool",defaultValue:!1}})}),null);
__d("WebGraphQLQueryHelper",["WebGraphQLLegacyHelper","XWebGraphQLQueryController"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return d("WebGraphQLLegacyHelper").getURI({controller:c("XWebGraphQLQueryController"),docID:a,variables:b})}function b(a,b){return d("WebGraphQLLegacyHelper").getURI({controller:c("XWebGraphQLQueryController"),docID:a,variables:b,legacyResponseFormat:!0})}g.getQueryURI=a;g.getLegacyQueryURI=b}),98);