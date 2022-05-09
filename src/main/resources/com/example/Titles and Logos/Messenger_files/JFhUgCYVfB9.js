if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("LSBumpThread",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.i64.eq(a[1],[0,1])?b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastReadWatermarkTimestampMs:a[0],lastActivityTimestampMs:a[0]})}):b.i64.eq(a[1],[0,2])?b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastActivityTimestampMs:a[0]})}):b.i64.eq(a[1],[0,3])?b.db.table(9).fetch([[[a[2]]]]).next().then(function(c,d){var e=c.done;c=c.value;return e?0:(d=c.item,b.i64.le(d.lastActivityTimestampMs,d.lastReadWatermarkTimestampMs)?b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastReadWatermarkTimestampMs:a[0],lastActivityTimestampMs:a[0]})}):b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastActivityTimestampMs:a[0]})}))}):b.resolve(0)},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSCheckAuthoritativeMessageExists",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(e){return b.seq([function(d){return b.ftr(b.db.table(12).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&c.offlineThreadingId===a[1]&&b.i64.eq(c.authorityLevel,[0,80])}).next().then(function(a,b){b=a.done;a=a.value;return b?c[0]=!1:(a.item,c[0]=!0)})},function(a){return d[0]=c[0]}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSInsertMessage",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[],e;return b.seq([function(d){return b.i64.eq(a[2],[0,20])?b.db.table(12).add({threadKey:a[3],timestampMs:a[5],messageId:a[8],offlineThreadingId:a[9],authorityLevel:a[2],primarySortKey:a[6],senderId:a[10],isAdminMessage:a[12],sendStatus:a[14],sendStatusV2:a[15],text:a[0],subscriptErrorMessage:a[1],secondarySortKey:a[7],stickerId:a[11],isUnsent:a[16],unsentTimestampMs:a[17],mentionOffsets:a[18],mentionLengths:a[19],mentionIds:a[20],mentionTypes:a[21],replySourceId:a[22],replySourceType:a[23],replySourceTypeV2:a[24],replyStatus:a[25],replySnippet:a[26],replyMessageText:a[27],replyToUserId:a[28],replyMediaExpirationTimestampMs:a[29],replyMediaUrl:a[30],replyMediaPreviewWidth:a[32],replyMediaPreviewHeight:a[33],replyMediaUrlMimeType:a[34],replyMediaUrlFallback:a[35],replyCtaId:a[36],replyCtaTitle:a[37],replyAttachmentType:a[38],replyAttachmentId:a[39],replyAttachmentExtra:a[40],isForwarded:a[41],forwardScore:a[42],hasQuickReplies:a[43],adminMsgCtaId:a[44],adminMsgCtaTitle:a[45],adminMsgCtaType:a[46],cannotUnsendReason:a[47],textHasLinks:a[48],viewFlags:a[49],displayedContentTypes:a[50],viewedPluginKey:a[51],viewedPluginContext:a[52],quickReplyType:a[53],hotEmojiSize:a[54],replySourceTimestampMs:a[55],ephemeralDurationInSec:a[56],msUntilExpirationTs:a[57],ephemeralExpirationTs:a[58]}):b.seq([function(d){return b.db.table(12).fetch([[[a[9]]],"optimistic"]).next().then(function(b,d){var f=b.done;b=b.value;return f?(f=[a[6],a[7],e],c[0]=f[0],c[1]=f[1],c[2]=f[2],f):(d=b.item,f=[d.primarySortKey,d.secondarySortKey,d.localDataId],c[0]=f[0],c[1]=f[1],c[2]=f[2],f)})},function(c){return b.fe(b.ftr(b.db.table(12).fetch([[[a[9]]],"optimistic"]),function(c){return c.offlineThreadingId===a[9]&&b.i64.lt(c.authorityLevel,a[2])}),function(a){return a["delete"]()})},function(d){return b.db.table(12).add({threadKey:a[3],timestampMs:a[5],messageId:a[8],offlineThreadingId:a[9],authorityLevel:a[2],primarySortKey:c[0],senderId:a[10],isAdminMessage:a[12],sendStatus:a[14],sendStatusV2:a[15],text:a[0],subscriptErrorMessage:a[1],secondarySortKey:c[1],stickerId:a[11],isUnsent:a[16],unsentTimestampMs:a[17],mentionOffsets:a[18],mentionLengths:a[19],mentionIds:a[20],mentionTypes:a[21],replySourceId:a[22],replySourceType:a[23],replySourceTypeV2:a[24],replyStatus:a[25],replySnippet:a[26],replyMessageText:a[27],replyToUserId:a[28],replyMediaExpirationTimestampMs:a[29],replyMediaUrl:a[30],replyMediaPreviewWidth:a[32],replyMediaPreviewHeight:a[33],replyMediaUrlMimeType:a[34],replyMediaUrlFallback:a[35],replyCtaId:a[36],replyCtaTitle:a[37],replyAttachmentType:a[38],replyAttachmentId:a[39],replyAttachmentExtra:a[40],isForwarded:a[41],forwardScore:a[42],hasQuickReplies:a[43],adminMsgCtaId:a[44],adminMsgCtaTitle:a[45],adminMsgCtaType:a[46],cannotUnsendReason:a[47],textHasLinks:a[48],viewFlags:a[49],displayedContentTypes:a[50],viewedPluginKey:a[51],viewedPluginContext:a[52],quickReplyType:a[53],hotEmojiSize:a[54],replySourceTimestampMs:a[55],ephemeralDurationInSec:a[56],msUntilExpirationTs:a[57],ephemeralExpirationTs:a[58],localDataId:c[2]})}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSUpdateThreadSnippet",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[],e;return b.seq([function(d){return a[7]?b.seq([function(d){return b.i64.neq(a[3],e)?b.seq([function(d){return b.seq([function(d){return b.ftr(b.db.table(14).fetch([[[a[0],a[3]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq([0,0],[0,0])&&b.i64.eq(c.contactId,a[3])}).next().then(function(a,b){var d=a.done;a=a.value;return d?c[3]=e:(b=a.item,c[3]=b.nickname)})},function(d){return b.ftr(b.db.table(7).fetch([[[a[3]]]]),function(c){return b.i64.eq(c.id,a[3])&&b.i64.eq([0,1],[0,1])}).next().then(function(a,d){var f=a.done;a=a.value;return f?(c[7]=b.localizeV2([0,14617150],e),c[5]=c[7]):(d=a.item,c[5]=d.firstName==null?d.name:d.firstName)})},function(a){return c[1]=c[3]==null?c[5]:c[3]}])},function(b){return a[1]!==e?c[2]=[c[1],": ",a[1]].join(""):c[2]=e,c[0]=c[2]}]):b.resolve(c[0]=a[1])},function(d){return b.fe(b.db.table(9).fetch([[[a[0]]]]),function(b){var d=b.update;b.item;return d({snippet:c[0],snippetStringHash:e,snippetStringArgument1:e,snippetAttribution:e,snippetAttributionStringHash:e,isAdminSnippet:a[2],snippetSenderContactId:a[3],snippetHasEmoji:a[4],viewedPluginKey:a[5],viewedPluginContext:a[6]})})}]):b.fe(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({snippet:a[1],snippetStringHash:e,snippetStringArgument1:e,snippetAttribution:e,snippetAttributionStringHash:e,isAdminSnippet:a[2],snippetSenderContactId:a[3],snippetHasEmoji:a[4],viewedPluginKey:a[5],viewedPluginContext:a[6]})})},function(a){return b.resolve(d)}])}e.exports=a}),null);