/**
 * Created by three on 15/9/7.
 */
!function(e){e.controller("TestCtrl",["WuActionSheet","WuDialog","WuToast",function(e,t,n){this.actionSheet=function(){e.open({btnGroups:[{action:"Ok",buttons:[{title:"11",value:"11"},{title:"22",value:"22"},{title:"33",value:"33"},{title:"44",value:"44"}]},{action:"Cancel",buttons:[{title:"cancel1",value:"cancel1"}]},{action:"Close",buttons:[{title:"cancel11",value:"cancel1"}]}]}).result.then(function(e){console.log(e)},function(e){console.log(e)})},this.confirm=function(){t.confirm({title:"确认框",content:"xxxx确认内容sfsfsdfsadfsadfdsafdsafsdaf"}).result.then(function(){console.log("ok")},function(){console.log("cancel")})},this.confirmNoTitle=function(){t.confirm({content:"sfsafsfsasadfsfsfsfasfas"}).result.then(function(){console.log("ok")},function(){console.log("cancel")})},this.alert=function(){t.alert({title:"提示框",content:'<div style="color: red;">xxxx Alert内容<div>'}).result.then(function(){console.log("ok")},function(){console.log("close alert")})},this.dialog=function(){t.open({title:"自定义按钮",content:"自定义按钮测试",buttons:[{action:"ok",title:"btn1","class":"default",value:"btn1"},{action:"ok",title:"btn2","class":"primary",value:"btn2"},{action:"cancel",title:"btn3","class":"default",value:"btn3"},{action:"cancel",title:"btn4","class":"primary",value:"btn4"}]}).result.then(function(){console.log("OK: ",arguments[0])},function(){console.log("Cancel: ",arguments[0])})},this.dialogAndroid=function(){t.open({title:"自定义按钮",content:"自定义按钮测试",template:"wu-dialog-android-template",buttons:[{action:"ok",title:"btn1","class":"default",value:"btn1"},{action:"ok",title:"btn2","class":"primary",value:"btn2"},{action:"cancel",title:"btn3","class":"default",value:"btn3"},{action:"cancel",title:"btn4","class":"primary",value:"btn4"}]}).result.then(function(){console.log("OK: ",arguments[0])},function(){console.log("Cancel: ",arguments[0])})},this.toastComplete=function(){n.complete({time:1e3})},this.toastLoading=function(){var e=n.loading({message:"数据加载中"});setTimeout(function(){e.close()},1e3)},this.toastMessage=function(){n.message({message:"test asdfasdf sdfasdf asdfsadfv sdfsad asfsadf sdfasfda sdfasfasdf message show"})},this.wuButtonTest=function(){console.log("xxxxxxxxxxxxxxx")},this.testVar="nihao",this.wuButtonTest1=function(e){console.log("000000000000000",e)},this.cancelProgress=function(){this.wuProgress=50}}])}(angular.module("test",["ng.weui"])),function(e){e.controller("TestGalleryCtrl",["WuActionSheet","WuDialog","WuToast",function(){this.previewImages=[{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"},{thumb:"images/pic_article.png",url:"images/pic_article.png"}]}])}(angular.module("test.gallery",["ng.weui"])),angular.module("ng.weui.core",[]),angular.module("ng.weui.jssdk",[]),angular.module("ng.weui.swiper",["ng.weui.core"]),angular.module("ng.weui.button",[]),angular.module("ng.weui.progress",[]),angular.module("ng.weui.dialog",["ng.weui.core"]),angular.module("ng.weui.actionsheet",["ng.weui.core"]),angular.module("ng.weui.toast",["ng.weui.core"]),angular.module("ng.weui.form",["ng.weui.core"]),angular.module("ng.weui.gallery",["ng.weui.core","ng.weui.swiper"]),angular.module("ng.weui.loading",["ng.weui.core"]),angular.module("ng.weui",["ng.weui.core","ng.weui.button","ng.weui.actionsheet","ng.weui.dialog","ng.weui.toast","ng.weui.form","ng.weui.gallery","ng.weui.loading","ng.weui.progress"]),function(e,t){e.factory("WuWxJsSdk",["$q",function(e){function n(e){return t.wx?t.wx:(e({errMsg:"没有js接口对象，请确认是否引入微信js文件"}),!1)}function i(e,t,n){return e.success=function(e){t(e)},e.fail=function(e){n(e)},e.complete=function(){},e.cancel=function(){n({errMsg:"用户取消"})},e.trigger=function(){},e}for(var a={config:function(){return e(function(e,i){var a=n(i);a&&(a.config.apply(t,arguments),a.ready(function(){e({errMsg:"config:ok"})}),a.error(function(e){i(e)}))})}},o=["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareWeibo","chooseImage","previewImage","uploadImage","downloadImage","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice","translateVoice","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","scanQRCode","startSearchBeacons","stopSearchBeacons","onSearchBeacons","openProductSpecificView","chooseCard","addCard","openCard","consumeAndShareCard","chooseWXPay"],r=0;r<o.length;r++){var l=o[r];a[l]=function(t){return e(function(e,a){var o=n(a);o&&o[l](i(t,e,a))})}}return a}])}(angular.module("ng.weui.jssdk"),window),function(e){e.provider("WuToast",[function(){var e=this;e.$get=["$wuModal","$timeout",function(e,t){return{complete:function(n){n=n||{};var i=e.open({backdrop:!1,windowTemplateUrl:"weui/template/wu-window.html",templateUrl:"weui/template/toast/complete.html",controller:["$scope",function(e){e.message=n.message||"已完成"}]});return n.hasOwnProperty("time")&&t(function(){i.close()},parseInt(n.time)),{close:function(){i.close()}}},loading:function(n){n=n||{};var i=e.open({backdrop:!1,windowTemplateUrl:"weui/template/wu-window.html",templateUrl:"weui/template/toast/loading.html",controller:["$scope",function(e){e.message=n.message||"数据加载中"}]});return n.hasOwnProperty("time")&&t(function(){i.close()},parseInt(n.time)),{close:function(){i.close()}}},message:function(n){n=n||{};var i=e.open({backdrop:!1,windowTemplateUrl:"weui/template/wu-window.html",templateUrl:"weui/template/toast/message.html",controller:["$scope",function(e){e.message=n.message||"消息提示"}]});return n.hasOwnProperty("time")&&t(function(){i.close()},parseInt(n.time)),{close:function(){i.close()}}}}}]}])}(angular.module("ng.weui.toast")),function(e){e.directive("wuProgress",[function(){return{restrict:"EA",replace:!0,scope:{wuProgress:"=",wuColor:"=",wuHeight:"="},transclude:!0,template:'            <div class="weui-progress">                 <div class="weui-progress__bar"  data-ng-style="{height: filterHeight(wuHeight) }">                     <div class="weui-progress__inner-bar" data-ng-style="{                        width: filterProgress(wuProgress),                        \'background-color\': wuColor                    }"></div>                 </div>                 <a href="javascript:;" class="weui-progress__opr" data-ng-transclude>                 </a>             </div>',link:function(e){e.filterProgress=function(e){return e>100?"100%":0>e?"0%":parseFloat(e)+"%"},e.filterHeight=function(e){return(e&&e>1?e:3)+"px"}}}}])}(angular.module("ng.weui.progress")),function(e,t){"use strict";t.directive("wuSwiperContainer",["IdWorkerFactory",function(e){var t=e("wuSwiperContainer");return{restrict:"E",transclude:!0,scope:{onReady:"&",slidesPerView:"=",slidesPerColumn:"=",spaceBetween:"=",parallax:"=",parallaxTransition:"@",paginationIsActive:"=",paginationClickable:"=",showNavButtons:"=",showScrollBar:"=",loop:"=",autoplay:"=",initialSlide:"=",containerCls:"@",wrapperCls:"@",paginationCls:"@",slideCls:"@",direction:"@",swiper:"=",overrideParameters:"="},controller:function(e,n,i){var a=t();e.swiper_uuid=a;var o={slidesPerView:e.slidesPerView||1,slidesPerColumn:e.slidesPerColumn||1,spaceBetween:e.spaceBetween||0,direction:e.direction||"horizontal",loop:e.loop||!1,initialSlide:e.initialSlide||0,showNavButtons:!1};angular.isUndefined(e.autoplay)||"number"!=typeof e.autoplay||(o=angular.extend({},o,{autoplay:e.autoplay})),e.paginationIsActive===!0&&(o=angular.extend({},o,{paginationClickable:e.paginationClickable||!0,pagination:"#paginator-"+e.swiper_uuid})),e.showNavButtons===!0&&(o.nextButton="#nextButton-"+e.swiper_uuid,o.prevButton="#prevButton-"+e.swiper_uuid),e.showScrollBar===!0&&(o.scrollbar="#scrollBar-"+e.swiper_uuid),e.overrideParameters&&(o=angular.extend({},o,e.overrideParameters)),i(function(){var t=null;angular.isObject(e.swiper)?(e.swiper=new Swiper(n[0].firstChild,o),t=e.swiper):t=new Swiper(n[0].firstChild,o),angular.isUndefined(e.onReady)||e.onReady({swiper:t})})},link:function(e,t){var n=e.swiper_uuid,i="paginator-"+n,a="prevButton-"+n,o="nextButton-"+n,r="scrollBar-"+n,l=t[0];angular.element(l.querySelector(".swiper-pagination")).attr("id",i),angular.element(l.querySelector(".swiper-button-next")).attr("id",o),angular.element(l.querySelector(".swiper-button-prev")).attr("id",a),angular.element(t[0].querySelector(".swiper-scrollbar")).attr("id",r)},template:'<div class="swiper-container {{containerCls}}"><div class="parallax-bg" data-swiper-parallax="{{parallaxTransition}}" ng-show="parallax"></div><div class="swiper-wrapper {{wrapperCls}}" ng-transclude></div><div class="swiper-pagination {{paginationCls}}"></div><div class="swiper-button-next" ng-show="showNavButtons"></div><div class="swiper-button-prev" ng-show="showNavButtons"></div><div class="swiper-scrollbar" ng-show="showScrollBar"></div></div>'}}]).directive("wuSwiperSlide",[function(){return{restrict:"E",require:"^ksSwiperContainer",transclude:!0,scope:{sliderCls:"@"},template:'<div class="swiper-slide {{sliderCls}}" ng-transclude></div>',replace:!0}}])}(window,angular.module("ng.weui.swiper"),void 0),function(e){e.directive("loadingEnable",[function(){return{restrict:"A",replace:!0,templateUrl:"weui/template/loading/loading.html",transclude:!0,link:function(){}}}])}(angular.module("ng.weui.loading"),window),function(e){e.factory("PreviewImages",["WuWxJsSdk",function(e){return{show:function(t,n){e.previewImage({current:t,urls:n})}}}]),e.directive("previewImages",["PreviewImages",function(e){return{restrict:"AE",link:function(t,n,i){var a=n,o=i.preview?i.preview:"img",r=i.attrName?i.attrName:"src";n.on("click",o,function(t){var n=$(this),i=[];return a.find(o).each(function(e,t){i.push(t.attr(r))}),e.show(n.attr(r),i),t.preventDefault(),t.stopPropagation(),!1})}}}]),e.directive("gallery",["$timeout","IdWorkerFactory",function(e,t){var n=t.new("weui-gallery_swiper");return{restrict:"EA",templateUrl:"weui/template/gallery/gallery.html",scope:{images:"="},link:function(t,i){function a(){e(function(){console.log("#"+o+" .swiper-images");var e=new Swiper("#"+o+" .swiper-images",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:10,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}});if(t.showThumb){var n=new Swiper("#"+o+" .gallery-thumbs",{spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0});e.params.control=n,n.params.control=e}},10)}var o=n();i.attr("id",o),i.addClass("weui-gallery"),i.show(),t.showThumb=!1,angular.isArray(t.images)&&t.images.length>0&&(t.images[0].hasOwnProperty("thumb")&&(t.showThumb=!0),a()),t.imageStyle=function(e){return{"background-image":"url("+e.url+")"}}}}}])}(angular.module("ng.weui.gallery")),function(e){e.directive("inputTextarea",[function(){return{restrict:"EA",replace:!0,templateUrl:"weui/template/form/input-textarea.html",require:"ngModel",link:function(e,t,n,i){i.$render=function(){console.log()}}}}]),e.directive("inputImage",[function(){return{restrict:"EA",replace:!0,templateUrl:"weui/template/form/input-image.html",require:"ngModel",link:function(e,t,n,i){i.$render=function(){console.log()}}}}])}(angular.module("ng.weui.form")),function(e){e.provider("WuDialog",[function(){var e=this;e.$get=["$wuModal",function(e){return{open:function(t){t.buttons=t.buttons||[{action:"ok",title:"确定","class":"default",value:"ok"}];var n="wu-dialog-default-template";return t.hasOwnProperty("template")&&t.template&&(n=t.template),e.open({backdrop:!1,windowTemplateUrl:"weui/template/wu-window.html",template:"<div "+n+"></div>",controller:["$scope",function(e){e.title=t.title,e.content=t.content,e.buttons=t.buttons,e.clickBtn=function(t){"ok"===t.action.toLowerCase()?e.$close(t.value):e.$dismiss(t.value)}}]})},alert:function(e){return this.open({title:e.title,content:e.content})},confirm:function(e){return this.open({title:e.title,content:e.content,buttons:[{action:"cancel",title:"取消","class":"default",value:"cancel"},{action:"ok",title:"确定","class":"primary",value:"ok"}]})}}}]}]);var t=function(e,t){var n=t.find(".weui-mask");n.on("click",function(){e.$apply(function(){e.$dismiss("mask:click")})});var i="weui-dialog__alert";e.buttons.length>1&&(i="weui-dialog__confirm"),t.addClass(i)};e.directive("wuDialogDefaultTemplate",[function(){return{restrict:"A",templateUrl:"weui/template/dialog/default.html",link:t}}]).directive("wuDialogAndroidTemplate",[function(){return{restrict:"A",templateUrl:"weui/template/dialog/android.html",link:t}}]),e.directive("unsafeShowHtml",["$compile",function(e){return{restrict:"A",scope:{content:"=unsafeShowHtml"},link:function(t,n){var i=function(){var i="<div>"+t.content+"</div>";n.html("").append(e(i)(t))};i()}}}])}(angular.module("ng.weui.dialog")),function(e,t){e.factory("$$stackedMap",function(){return{createNew:function(){var e=[];return{add:function(t,n){e.push({key:t,value:n})},get:function(t){for(var n=0;n<e.length;n++)if(t===e[n].key)return e[n]},keys:function(){for(var t=[],n=0;n<e.length;n++)t.push(e[n].key);return t},top:function(){return e[e.length-1]},remove:function(t){for(var n=-1,i=0;i<e.length;i++)if(t===e[i].key){n=i;break}return e.splice(n,1)[0]},removeTop:function(){return e.splice(e.length-1,1)[0]},length:function(){return e.length}}}}}).factory("$$multiMap",function(){return{createNew:function(){var e={};return{entries:function(){return Object.keys(e).map(function(t){return{key:t,value:e[t]}})},get:function(t){return e[t]},hasKey:function(t){return!!e[t]},keys:function(){return Object.keys(e)},put:function(t,n){e[t]||(e[t]=[]),e[t].push(n)},remove:function(t,n){var i=e[t];if(i){var a=i.indexOf(n);-1!==a&&i.splice(a,1),i.length||delete e[t]}}}}}}).provider("$wuResolve",function(){var e=this;this.resolver=null,this.setResolver=function(e){this.resolver=e},this.$get=["$injector","$q",function(t,n){var i=e.resolver?t.get(e.resolver):null;return{resolve:function(e,a,o,r){if(i)return i.resolve(e,a,o,r);var l=[];return angular.forEach(e,function(e){l.push(angular.isFunction(e)||angular.isArray(e)?n.resolve(t.invoke(e)):angular.isString(e)?n.resolve(t.get(e)):n.resolve(e))}),n.all(l).then(function(t){var n={},i=0;return angular.forEach(e,function(e,a){n[a]=t[i++]}),n})}}}]}).directive("wuModalTransclude",function(){return{link:function(e,t,n,i,a){a(e.$parent,function(e){t.empty(),t.append(e)})}}}).factory("$wuModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap",function(e,t,n,i,a,o,r,l){function s(){for(var e=-1,t=b.keys(),n=0;n<t.length;n++)b.get(t[n]).value.backdrop&&(e=n);return e}function u(e,t){var n=b.get(e).value,i=n.appendTo;b.remove(e),p(n.modalDomEl,n.modalScope,function(){var t=n.openedClass||h;_.remove(t,e),i.toggleClass(t,_.hasKey(t)),c(!0)}),d(),t&&t.focus?t.focus():i.focus&&i.focus()}function c(e){var t;b.length()>0&&(t=b.top().value,t.modalDomEl.toggleClass(t.windowTopClass||"",e))}function d(){if(m&&-1===s()){var e=f;p(m,f,function(){e=null}),m=void 0,f=void 0}}function p(e,n,i,a){function r(){r.done||(r.done=!0,t(e,{event:"leave"}).start().then(function(){e.remove(),a&&a.resolve()}),n.$destroy(),i&&i())}var l,s=null,u=function(){return l||(l=o.defer(),s=l.promise),function(){l.resolve()}};return n.$broadcast(k.NOW_CLOSING_EVENT,u),o.when(s).then(r)}function g(e){if(e.isDefaultPrevented())return e;var t=b.top();if(t)switch(e.which){case 27:t.value.keyboard&&(e.preventDefault(),a.$apply(function(){k.dismiss(t.key,"escape key press")}));break;case 9:k.loadFocusElementList(t);var n=!1;e.shiftKey?k.isFocusInFirstItem(e)&&(n=k.focusLastFocusableElement()):k.isFocusInLastItem(e)&&(n=k.focusFirstFocusableElement()),n&&(e.preventDefault(),e.stopPropagation())}}function w(e,t,n){return!e.value.modalScope.$broadcast("modal.closing",t,n).defaultPrevented}var m,f,v,h="modal-open",b=l.createNew(),_=r.createNew(),k={NOW_CLOSING_EVENT:"modal.stack.now-closing"},y=0,$="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return a.$watch(s,function(e){f&&(f.index=e)}),n.on("keydown",g),a.$on("$destroy",function(){n.off("keydown",g)}),k.open=function(t,o){var r=n[0].activeElement,l=o.openedClass||h;c(!1),b.add(t,{deferred:o.deferred,renderDeferred:o.renderDeferred,closedDeferred:o.closedDeferred,modalScope:o.scope,backdrop:o.backdrop,keyboard:o.keyboard,openedClass:o.openedClass,windowTopClass:o.windowTopClass,animation:o.animation,appendTo:o.appendTo}),_.put(l,t);var u=o.appendTo,d=s();if(!u.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");d>=0&&!m&&(f=a.$new(!0),f.modalOptions=o,f.index=d,m=angular.element('<div wu-modal-backdrop="modal-backdrop"></div>'),m.attr("backdrop-class",o.backdropClass),o.animation&&m.attr("modal-animation","true"),i(m)(f),e.enter(m,u));var p=angular.element('<div wu-modal-window="modal-window"></div>');p.attr({"template-url":o.windowTemplateUrl,"window-class":o.windowClass,"window-top-class":o.windowTopClass,size:o.size,index:b.length()-1,animate:"animate"}).html(o.content),o.animation&&p.attr("modal-animation","true"),e.enter(p,u).then(function(){i(p)(o.scope),e.addClass(u,l)}),b.top().value.modalDomEl=p,b.top().value.modalOpener=r,k.clearFocusListCache()},k.close=function(e,t){var n=b.get(e);return n&&w(n,t,!0)?(n.value.modalScope.$$wuDestructionScheduled=!0,n.value.deferred.resolve(t),u(e,n.value.modalOpener),!0):!n},k.dismiss=function(e,t){var n=b.get(e);return n&&w(n,t,!1)?(n.value.modalScope.$$wuDestructionScheduled=!0,n.value.deferred.reject(t),u(e,n.value.modalOpener),!0):!n},k.dismissAll=function(e){for(var t=this.getTop();t&&this.dismiss(t.key,e);)t=this.getTop()},k.getTop=function(){return b.top()},k.modalRendered=function(e){var t=b.get(e);t&&t.value.renderDeferred.resolve()},k.focusFirstFocusableElement=function(){return v.length>0?(v[0].focus(),!0):!1},k.focusLastFocusableElement=function(){return v.length>0?(v[v.length-1].focus(),!0):!1},k.isFocusInFirstItem=function(e){return v.length>0?(e.target||e.srcElement)===v[0]:!1},k.isFocusInLastItem=function(e){return v.length>0?(e.target||e.srcElement)===v[v.length-1]:!1},k.clearFocusListCache=function(){v=[],y=0},k.loadFocusElementList=function(e){if((void 0===v||!v.length)&&e){var t=e.value.modalDomEl;t&&t.length&&(v=t[0].querySelectorAll($))}},k}]).provider("$wuModal",function(){var e={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$wuResolve","$wuModalStack",function(t,n,i,a,o,r,l){function s(e){return e.template?n.when(e.template):a(angular.isFunction(e.templateUrl)?e.templateUrl():e.templateUrl)}var u={},c=null;return u.getPromiseChain=function(){return c},u.open=function(a){function u(){return v}var d=n.defer(),p=n.defer(),g=n.defer(),w=n.defer(),m={result:d.promise,opened:p.promise,closed:g.promise,rendered:w.promise,close:function(e){return l.close(m,e)},dismiss:function(e){return l.dismiss(m,e)}};if(a=angular.extend({},e.options,a),a.resolve=a.resolve||{},a.appendTo=a.appendTo||i.find("body").eq(0),!a.template&&!a.templateUrl)throw new Error("One of template or templateUrl options is required.");var f,v=n.all([s(a),r.resolve(a.resolve,{},null,null)]);return f=c=n.all([c]).then(u,u).then(function(e){var n=a.scope||t,i=n.$new();i.$close=m.close,i.$dismiss=m.dismiss,i.$on("$destroy",function(){i.$$wuDestructionScheduled||i.$dismiss("$wuUnscheduledDestruction")});var r,s={};a.controller&&(s.$scope=i,s.$wuModalInstance=m,angular.forEach(e[1],function(e,t){s[t]=e}),r=o(a.controller,s),a.controllerAs&&(a.bindToController&&(r.$close=i.$close,r.$dismiss=i.$dismiss,angular.extend(r,n)),i[a.controllerAs]=r)),l.open(m,{scope:i,deferred:d,renderDeferred:w,closedDeferred:g,content:e[0],animation:a.animation,backdrop:a.backdrop,keyboard:a.keyboard,backdropClass:a.backdropClass,windowTopClass:a.windowTopClass,windowClass:a.windowClass,windowTemplateUrl:a.windowTemplateUrl,size:a.size,openedClass:a.openedClass,appendTo:a.appendTo}),p.resolve(!0)},function(e){p.reject(e),d.reject(e)})["finally"](function(){c===f&&(c=null)}),m},u}]};return e}),t.weui_client_browser_checker=function(){var e={ie:0,gecko:0,webkit:0,khtml:0,opera:0,ver:null},n={ie:0,firefox:0,safari:0,konq:0,opera:0,chrome:0,wx:0,wxpc:0,ver:null},i={win:!1,mac:!1,x11:!1,iphone:!1,ipod:!1,ipad:!1,ios:!1,android:!1,nokiaN:!1,winMobile:!1,wii:!1,ps:!1},a=navigator.userAgent;if(t.opera)e.ver=n.ver=t.opera.version(),e.opera=n.opera=parseFloat(e.ver);else if(/AppleWebKit\/(\S+)/.test(a))if(e.ver=RegExp.$1,e.webkit=parseFloat(e.ver),/Chrome\/(\S+)/.test(a))n.ver=RegExp.$1,n.chrome=parseFloat(n.ver);else if(/Version\/(\S+)/.test(a))n.ver=RegExp.$1,n.safari=parseFloat(n.ver);else{var o=1;o=e.webkit<100?1:e.webkit<312?1.2:e.webkit<412?1.3:2,n.safari=n.ver=o}else/KHTML\/(\S+)/.test(a)||/Konqueror\/([^;]+])/.test(a)?(e.ver=n.ver=RegExp.$1,e.khtml=n.konq=parseFloat(e.ver)):/rv:([^\)]+)\) Gecko\/\d{8}/.test(a)?(e.ver=RegExp.$1,n.gecko=parseFloat(e.ver),/Firefox\/(\S+)/.test(a)&&(n.ver=RegExp.$1,n.firefox=parseFloat(n.ver))):/MSIE ([^;]+)/.test(a)&&(e.ver=n.ver=RegExp.$1,e.ie=n.ie=parseFloat(e.ver));/MicroMessenger\/([\d\.]+)/i.test(a)&&(n.ver=RegExp.$1,n.wx="micromessenger",n.wxpc=/WindowsWechat/i.test(a)),n.ie=e.ie,n.opera=e.opera;var r=navigator.platform;if(i.win=r.indexOf("Win")>=0,i.mac=r.indexOf("Mac")>=0,i.x11="X11"==r||0==r.indexOf("Linux"),i.win&&/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(a))if("NT"==RegExp.$1)switch(RegExp.$2){case"5.0":i.win="2000";break;case"5.1":i.win="XP";break;case"6.0":i.win="vista";break;case"6.1":i.win="7";break;default:i.win="NT"}else i.win="9x"==RegExp.$1?"ME":RegExp.$1;return i.iphone=a.indexOf("iPhone")>-1,i.ipod=a.indexOf("iPod")>-1,i.ipad=a.indexOf("iPad")>-1,i.nokiaN=a.indexOf("NokinaN")>-1,"CE"==i.win?i.winMobile=i.win:"Ph"==i.win&&/Window Phone OS (\d+.\d+)/.test(a)&&(i.win="Phone",i.winMobile=parseFloat(RegExp.$1)),i.iphone&&a.indexOf("Mobile")>-1&&(i.ios=/CPU (?:iPhone)?[ ]?OS (\d+_\d+)/.test(a)?parseFloat(RegExp.$1.replace("_",".")):2),/Android (\d+\.\d+)/.test(a)&&(i.android=parseFloat(RegExp.$1)),i.wii=a.indexOf("Wii")>-1,i.ps=/playstation/i.test(a),{engine:e,browser:n,system:i}}(),e.provider("WuBrowserChecker",[function(){var e=this;e.$get=[function(){return t.weui_client_browser_checker}]}]),e.provider("IdWorkerFactory",[function(){var e={};this.new=function(t){return e.hasOwnProperty(t)||(e[t]=function(e){var t=0;return function(){return e+"_"+t++}}(t)),e[t]},this.$get=[function(){return this}]}])}(angular.module("ng.weui.core"),window),function(e){e.directive("wuClick",["$parse","$timeout","$rootScope",function(e,t){return{restrict:"EA",compile:function(n,i){var a=e(i.wuClick),o=e(i.wuInterval||"300");return function(e,n){var i=parseInt(o(e)),r=!1;n.on("click",function(o){r||(e.$apply(function(){a(e,{$event:o})}),n.attr("disabled","disabled").addClass("weui_btn_disabled"),r=!0,t(function(){n.removeAttr("disabled").removeClass("weui_btn_disabled"),r=!1},i))})}}}}])}(angular.module("ng.weui.button")),function(e){e.provider("WuActionSheet",[function(){var e=this;e.$get=["$wuModal",function(e){return{open:function(t){return e.open({backdrop:!1,windowTemplateUrl:"weui/template/wu-window.html",template:"<div wu-action-sheet-template></div>",controller:["$scope",function(e){e.btnGroups=t.btnGroups||[{action:"Cancel",buttons:[{title:"取消",value:"cancel"}]}],e.triggerBtn=function(t,n){var i=t.action.toLowerCase();"ok"===i?e.$close(n.value):e.$dismiss(n.value)}}]})}}}]}]).directive("wuActionSheetTemplate",["$q",function(e){return{restrict:"A",templateUrl:"weui/template/action-sheet/action-sheet.html",link:function(t,n){function i(t,n){return e(function(e){t.removeClass("weui-actionsheet_toggle"),n.removeClass("actionsheet__mask_show"),t.on("transitionend",function(){n.hide(),e()}).on("webkitTransitionEnd",function(){n.hide(),e()})})}var a=n.find(".weui-mask_transparent.actionsheet__mask"),o=n.find(".weui-actionsheet");!function(){a.show().addClass("actionsheet__mask_show").on("click",function(){i(o,a).then(function(){t.$dismiss("mask:click")})}),o.addClass("weui-actionsheet_toggle")}(),t.clickBtn=function(e,n){i(o,a).then(function(){t.triggerBtn(e,n)})}}}}])}(angular.module("ng.weui.actionsheet")),angular.module("ng.weui").run(["$templateCache",function(e){e.put("weui/template/wu-window.html",'<div wu-modal-transclude=""></div>'),e.put("weui/template/action-sheet/action-sheet.html",'<div class="weui-mask_transparent actionsheet__mask" style="display: none; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></div><div class="weui-actionsheet"><div data-ng-class="{\'weui-actionsheet__menu\':$first, \'weui-actionsheet__action\':!$first}" data-ng-repeat="group in btnGroups"><div class="weui-actionsheet__cell" data-ng-click="clickBtn(group, btn)" data-ng-repeat="btn in group.buttons">{{btn.title}}</div></div></div>'),e.put("weui/template/dialog/android.html",'<div><div class="weui-mask"></div><div class="weui-dialog weui-skin_android"><div class="weui-dialog__hd" data-ng-if="title"><strong class="weui-dialog__title" data-ng-bind="title"></strong></div><div class="weui-dialog__bd" unsafe-show-html="content"></div><div class="weui-dialog__ft"><a href="javascript:;" class="weui-dialog__btn {{btn.class}}" data-ng-repeat="btn in buttons" data-ng-bind="btn.title" data-ng-click="clickBtn(btn)"></a></div></div></div>'),e.put("weui/template/dialog/default.html",'<div><div class="weui-mask"></div><div class="weui-dialog"><div class="weui-dialog__hd" data-ng-if="title"><strong class="weui-dialog__title" data-ng-bind="title"></strong></div><div class="weui-dialog__bd" unsafe-show-html="content"></div><div class="weui-dialog__ft"><a href="javascript:;" class="weui-dialog__btn {{btn.class}}" data-ng-repeat="btn in buttons" data-ng-bind="btn.title" data-ng-click="clickBtn(btn)"></a></div></div></div>'),e.put("weui/template/form/input-image.html",'<div class="weui-cell"><div class="weui-cell__bd"><div class="weui-uploader"><div class="weui-uploader__hd"><p class="weui-uploader__title">图片上传</p><div class="weui-uploader__info">0/2</div></div><div class="weui-uploader__bd"><ul class="weui-uploader__files" id="uploaderFiles"><li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li><li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li><li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li><li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./images/pic_160.png)"><div class="weui-uploader__file-content" status="error"><i class="weui-icon-warn"></i></div><div class="weui-uploader__file-content" status="progress">50%</div></li></ul><div class="weui-uploader__input-box"><input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""></div></div></div></div></div>'),e.put("weui/template/form/input-textarea.html",'<div class="weui-cell"><div class="weui-cell__bd"><textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea><div class="weui-textarea-counter"><span>0</span>/200</div></div></div>'),e.put("weui/template/gallery/gallery.html",'<div class="weui-page" data-ng-click="clickElement($event)"><div class="weui-gallery_swiper"><div class="swiper-container swiper-images" data-ng-class="{\'gallery-top\':showThumb}"><div class="swiper-wrapper"><div class="swiper-slide" data-ng-repeat="img in images track by $index"><span class="weui-gallery__img" data-ng-style="{{imageStyle(img)}}"></span></div></div><div class="swiper-button-next swiper-button-white"></div><div class="swiper-button-prev swiper-button-white"></div></div><div class="swiper-container gallery-thumbs" data-ng-if="showThumb"><div class="swiper-wrapper"><div class="swiper-slide" data-ng-repeat="img in images track by $index" data-ng-style="{{imageStyle(img)}}"></div></div></div></div></div>'),e.put("weui/template/loading/loading.html",'<div class="page__bd"><div class="weui-loadmore"><i class="weui-loading"></i> <span class="weui-loadmore__tips">正在加载</span></div><div class="weui-loadmore weui-loadmore_line"><span class="weui-loadmore__tips">暂无数据</span></div><div class="weui-loadmore weui-loadmore_line weui-loadmore_dot"><span class="weui-loadmore__tips"></span></div><div data-ng-transclude=""></div></div>'),e.put("weui/template/toast/complete.html",'<div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-icon-success-no-circle weui-icon_toast"></i><p class="weui-toast__content" data-ng-bind="message"></p></div>'),e.put("weui/template/toast/loading.html",'<div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content" data-ng-bind="message"></p></div>'),e.put("weui/template/toast/message.html",'<div class="weui-mask_transparent"></div><div class="weui-toast wu_toast_message"><div data-ng-bind="message"></div></div>')}]);