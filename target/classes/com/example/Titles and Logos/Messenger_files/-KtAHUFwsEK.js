if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("LSSetThreadImageURL",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(c){return b.fe(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({threadPictureUrl:a[1]===""?d:a[1],threadPictureUrlFallback:a[2],threadPictureUrlExpirationTimestampMs:a[3],isCustomThreadPicture:a[4],shouldRoundThreadPicture:a[5]})})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSDeleteThenInsertContact",["LSSetThreadImageURL"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(b){return c.i64.eq(a[23],[0,39423])?d[0]=[0,1]:(c.i64.eq(a[23],[0,14342874])?d[1]=[0,2]:d[1]=f,d[0]=d[1]),c.ftr(c.db.table(7).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.id,a[0])&&c.i64.eq([0,1],[0,1])&&c.i64.gt(b.authorityLevel,a[21])}).next().then(function(b){var e=b.done;b.value;return e?c.db.table(7).put({id:a[0],profilePictureUrl:a[2],profilePictureFallbackUrl:a[3],profilePictureUrlExpirationTimestampMs:a[4],profilePictureLargeUrl:a[5],profilePictureLargeFallbackUrl:a[6],profilePictureLargeUrlExpirationTimestampMs:a[7],name:a[9],secondaryName:a[41],normalizedNameForSearch:a[10],normalizedSearchTerms:a[33],isMessengerUser:a[11],isMemorialized:a[12],isManagedByViewer:a[35],blockedByViewerStatus:a[14],rank:a[17],firstName:a[18],contactType:a[19],contactTypeExact:a[20],authorityLevel:a[21],messengerCallLogThirdPartyId:a[22],profileRingColor:a[23],requiresMultiway:a[24],blockedSinceTimestampMs:a[25],canViewerMessage:a[26],profileRingColorExpirationTimestampMs:a[27],phoneNumber:a[28],emailAddress:a[29],workCompanyId:a[30],workCompanyName:a[31],workJobTitle:a[32],deviceContactId:a[34],workForeignEntityType:a[36],capabilities:a[37],capabilities2:a[38],profileRingState:d[0],contactViewerRelationship:a[39],gender:a[40],contactReachabilityStatusType:a[43],restrictionType:[0,0],waConnectStatus:a[44]}):0})},function(d){return c.sp(b("LSSetThreadImageURL"),a[0],a[2],a[3],a[4],!1,!0)}])},function(a){return c.resolve(e)}])}e.exports=a}),null);