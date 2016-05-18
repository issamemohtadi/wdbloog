// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);

// Timeago jQuery plugin ~ URL: http://timeago.yarp.com
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function r(){var n=i(this);var r=t.settings;if(!isNaN(n.datetime)){if(r.cutoff==0||Math.abs(o(n.datetime))<r.cutoff){e(this).text(s(n.datetime))}}return this}function i(n){n=e(n);if(!n.data("timeago")){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());if(t.settings.localeTitle){n.attr("title",n.data("timeago").datetime.toLocaleString())}else if(r.length>0&&!(t.isTime(n)&&n.attr("title"))){n.attr("title",r)}}return n.data("timeago")}function s(e){return t.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){if(t instanceof Date){return s(t)}else if(typeof t==="string"){return s(e.timeago.parse(t))}else if(typeof t==="number"){return s(new Date(t))}else{return s(e.timeago.datetime(t))}};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"in a moment",seconds:"a few seconds",minute:"%d minute",minutes:"%d mins",hour:"%d hour",hours:"%d hrs",day:"%d day",days:"%d days",month:"month",months:"%d months",year:"%d year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function l(r,i){var s=e.isFunction(r)?r(i,t):r;var o=n.numbers&&n.numbers[i]||i;return s.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var n=this.settings.strings;var r=n.prefixAgo;var i=n.suffixAgo;if(this.settings.allowFuture){if(t<0){r=n.prefixFromNow;i=n.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var s=Math.abs(t)/1e3;var o=s/60;var u=o/60;var a=u/24;var f=a/365;var c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f));var h=n.wordSeparator||"";if(n.wordSeparator===undefined){h=" "}return e.trim([r,c,i].join(h))},parse:function(t){var n=e.trim(t);n=n.replace(/\.\d+/,"");n=n.replace(/-/,"/").replace(/-/,"/");n=n.replace(/T/," ").replace(/Z/," UTC");n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");n=n.replace(/([\+\-]\d\d)$/," $100");return new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"):e(n).attr("title");return t.parse(r)},isTime:function(t){return e(t).get(0).tagName.toLowerCase()==="time"}});var n={init:function(){var n=e.proxy(r,this);n();var i=t.settings;if(i.refreshMillis>0){this._timeagoInterval=setInterval(n,i.refreshMillis)}},update:function(n){var i=t.parse(n);e(this).data("timeago",{datetime:i});if(t.settings.localeTitle)e(this).attr("title",i.toLocaleString());r.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:t.parse(t.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))});r.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};e.fn.timeago=function(e,t){var r=e?n[e]:n.init;if(!r){throw new Error("Unknown function name '"+e+"' for timeago")}this.each(function(){r.call(this,t)});return this};document.createElement("abbr");document.createElement("time")});

// SelectNav.js - by: https://github.com/lukaszfiszer/selectnav.js - Adaptado por http://www.ideiasblog.com
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"?",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(){selectnav('nav');selectnav('nav1');});

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

// Shortcodes 
(function(){var e=document.getElementsByTagName("pre"),t=e.length;for(var n=0;n<t;n++){e[n].innerHTML='<span class="line-number"></span>'+e[n].innerHTML+'<span class="cl"></span>';var r=e[n].innerHTML.split(/\n/).length;for(var i=0;i<r;i++){var s=e[n].getElementsByTagName("span")[0];s.innerHTML+="<span><a>"+(i+1)+"</a></span>"}}})();

// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simpleTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simpleTab").prepend('<ul class="tab-wrapper"></ul>');c.addClass("tab-content").each(function(){a(this).hide();e.find(".tab-wrapper").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".tab-wrapper a").on("click",function(){var f=a(this).parent().index();a(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

// msubtitle
$("#related-posts").each(function(){var e=$(this).html();$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=9",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<div class="rnav owl-carousel">';for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].content.$t;var u=$("<div>").html(o);var a=u.find("img:first").attr("src");var f=e.feed.entry[r].media$thumbnail.url;if(a===undefined){var l='<a class="rnav-img" href="'+t+'" style="background:url('+f+') no-repeat center center;background-size:cover"/>'}else{var l='<a class="rnav-img" href="'+t+'" style="background:url('+a+') no-repeat center center;background-size:cover"/>'}n+="<li>"+l+'<div class="rnav-conent"><h3 class="rnav-title"><a href="'+t+'">'+s+"</a></h3></div></li>"}n+='</div><div class="clear"/>';$("#related-posts").html(n);$(".rnav.owl-carousel").owlCarousel({items:3,navigation:true,navigationText:["",""],itemsDesktop:[1e3,3],itemsDesktopSmall:[647,1],itemsTablet:[396,1],itemsMobile:false,pagination:false});$(".rnav-img").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})});$(document).ready(function(){$("#sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");$("#footer-wrapper .widget h2").wrap("<div class='widget-title'/>");$("ul#sub-menu").parent("li").addClass("hasSub");$(".index .post-outer").each(function(){$(this).find(".post-thumb a").attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$(".share-container").each(function(){var e=$(this);e.find(".post-sharebtn").click(function(){e.find(".post-share").fadeToggle("slow")});$(document).bind("click",function(e){if($(e.target).parents(".share-container").length===0){$(".post-share").fadeOut(300)}})});$(document).ready(function(e){e("abbr.timeago").timeago()});$("#header-search .search-icon").click(function(){var e=$("#header-search input");if(e.is(":hidden")){e.fadeIn(300);$(this).removeClass("icon-search");$(this).addClass("icon-cancel");$("#menu").hide()}else{e.fadeOut(300);$(this).removeClass("icon-cancel");$(this).addClass("icon-search");$("#menu").show()}return false});$(document).bind("click",function(e){if($(e.target).parents("#header-search").length===0){$("#header-search input").fadeOut(300);$("#header-search .search-icn").removeClass("icon-cancel");$("#header-search .search-icn").addClass("icon-search");$("#menu").show()}});$(".menu li").each(function(){$(this).hoverTimeout(0,function(){$(this).children("ul").slideDown()},0,function(){$(this).children("ul").hide()})});$(function(){$(".upbt").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},1e3);return false}}})});$(".widget-content").each(function(){var e=$(this).text();if(e.substr(0,10).match("fbbox")){e=e.replace("fbbox/","");$(this).html('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//www.facebook.com/plugins/likebox.php?href='+e+'&width=340px&height=258&colorscheme=light&show_faces=true&header=false&stream=false&show_border=false&appId=492409184153294" style="border:none; overflow:hidden; width:100%; height:230px;"></iframe>')}});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)});var e="[";var t="]";$(".menu li *").replaceText(e,'<span class="msubtitle">');$(".menu li *").replaceText(t,"</span>");$(".menu #nav").show();$(".social-counter").each(function(){var e=$(this);var t=$(this).find(".social-item");if(t.length===0){e.remove()}$(this).find(".widget").removeClass("LinkList");$(".social-counter .social-item.facebook").find(".item-text").text("Likes");$(".social-counter .social-item.rss,.social-counter .social-item.youtube").find(".item-text").text("Subscribes");var n="[";var r="]";$(".social-counter *").replaceText(n,'<span class="item-count">');$(".social-counter *").replaceText(r,"</span>");$(".social-item").each(function(){var e=$(this).find(".remove-count");var t=$(this).find(".item-count");$(e).before($(t));$(e).remove()})});$(".contact-button a").click(function(){var e=$(".contact-sec");if(e.is(":hidden")){e.fadeIn(300);e.addClass("contact-show");$("#outer-wrapper").addClass("pop_contact ")}return false});$(document).bind("click",function(e){if($(e.target).parents(".contact-sec").length===0){$(".contact-sec").fadeOut(300);$("#outer-wrapper").removeClass("pop_contact ");$(".contact-sec").removeClass("contact-show")}});$(".contact-close").click(function(){$(".contact-sec").fadeOut(300);$("#outer-wrapper").removeClass("pop_contact ");$(".contact-sec").removeClass("contact-show");return false});var n=$("#sidetabs #tabside1 .widget h2").text();$(".menu-tab .item-1 a").text(n);var r=$("#sidetabs #tabside2 .widget h2").text();$(".menu-tab .item-2 a").text(r);var i=$("#sidetabs #tabside3 .widget h2").text();$(".menu-tab .item-3 a").text(i);$("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove();$(".sidetabs").tabslet({mouseevent:"click",attribute:"href",animation:true});if($(".sidetabs .widget").length===0){$(".sidetabs").remove()}if($(".home .post-outer").length===0){$(".home #main-wrapper #main").remove();$(".posts-title").remove()}if($("#footer .widget").length===0){$("#footer").remove();$("#footer-wrapper").css("padding-bottom","0");$(".bottom-nav").css("margin-bottom","0");$(".bottom-nav").css("border-bottom","0")}if($("#ticker .widget").length===0){$("#ticker").remove()}var s="[full_width]";var o="[left_sidebar]";var u="[right_sidebar]";$(".post *").replaceText(s,"<style>.item #main-wrapper{width:100% !important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}</style>");$(".post-body *").replaceText(o,"<style>@media screen and (min-width: 1000px){.item #main-wrapper{float:right!important;border-left:1px solid #EEE!important;border-right:0!important}.item #sidebar-wrapper{float:left!important;padding-left:0!important;padding-right:2%!important;border-right:1px solid #EEE!important;border-left:0!important;left:1px!important}.item #main-wrapper #main{margin-left:2.85%!important;margin-right:0!important}}</style>");$(".post-body *").replaceText(u,"<style>@media screen and (min-width: 1000px){.item #main-wrapper{float:left!important;border-right:1px solid #EEE!important;border-left:0!important}.item #sidebar-wrapper{float:right!important;padding-right:0!important;padding-left:2%!important;border-left:1px solid #EEE!important;left:-1px!important;border-right:0!important}.item #main-wrapper #main{margin-right:2.85%!important;margin-left:0!important}}</style>");(function(e){var t=e("a.newer-link");var n=e("a.older-link");e.get(t.attr("href"),function(n){t.html('<strong>التالى <i class="fa fa-angle-double-right"></i></strong> <span>'+e(n).find(".post h1.post-title").text()+"</span>")},"html");e.get(n.attr("href"),function(t){n.html('<strong><i class="fa fa-angle-double-left"></i> السابق</strong> <span>'+e(t).find(".post h1.post-title").text()+"</span>")},"html")})(jQuery)});$(window).bind("load",function(){$(".intro-loader").remove();$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})});




// Main Scripts 
$(document).ready(function(){$(".cmm-tabs").simplyTab({active:1,fx:"fade",showSpeed:400,hideSpeed:400});$('.blogger-tab').append($('#comments'));$(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>");$('.cmm-tabs-header').prepend('<h3><h8>شارك بإضافة </h8>تعليق على الموضوع<h9>s</h9></h3>')});$(document).ready(function(e){e("abbr.timeago").timeago()});$(document).ready(function(){$("ul#sub-menu").parent("li").addClass("hasSub");(jQuery)});$(document).ready(function(){$('a[name="ads-post-in"]').before($('#ads-post10').html());$('#ads-post10').html('')});$(document).ready(function(){$(".sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");$(".footer-sections .widget h2").wrap("<div class='widget-title'/>");$("#menu ul li").each(function(){$(this).hoverTimeout(0,function(){$(this).children("ul").slideDown()},0,function(){$(this).children("ul").hide()})});$(".index .post-outer,.archive .post-outer").each(function(){$(this).find(".block-image .thumb a").attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$(".widget-content").each(function(){var e=$(this).text();if(e.substr(0,10).match("page")){e=e.replace("page/","");$(this).html('<center><div id="fb-root"></div><div class="fb-page" data-href="'+e+'" data-width="300" data-height="230" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"></center>')}});$(window).scroll(function(){if($(this).scrollTop()>200){$('#back-to-top').fadeIn()}else{$('#back-to-top').fadeOut()}});$('#back-to-top').hide().click(function(){$('html, body').animate({scrollTop:0},1000);return false});var search=$('.search');search.click(function(e){e.preventDefault();if(search.is('.active')&&$(e.target).is(search)){search.removeClass('active')}else{search.addClass('active');search.find('input').focus()}});$('body').click(function(e){if(search.is('.active')&&!$(e.target).is('.search, .search form, .search input')){search.removeClass('active')}});var e="[";var t="]";$(".social-widget").each(function(){var e=$(this);var t=$(this).find(".sw-item");if(t.length===0){e.remove()}$(this).find(".widget").removeClass("LinkList");$(".social-widget .sw-item.facebook").find(".sw-desc").text("Likes");$(".social-widget .sw-item.rss,.social-widget .sw-item.youtube").find(".sw-desc").text("Subscribes");var n="[";var r="]";$(".social-widget *").replaceText(n,'<span class="sw-counter">');$(".social-widget *").replaceText(r,"</span>");$(".sw-item").each(function(){var e=$(this).find(".delete-count");var t=$(this).find(".sw-counter");$(e).before($(t));$(e).remove()})});var n=$("#sidebar_tabs #tab1 .widget h2").text();$(".tab-opt .opt-1 a").text(n);var r=$("#sidebar_tabs #tab2 .widget h2").text();$(".tab-opt .opt-2 a").text(r);var i=$("#sidebar_tabs #tab3 .widget h2").text();$(".tab-opt .opt-3 a").text(i);$("#tab1 .widget h2,#tab2 .widget h2,#tab3 .widget h2,#tab1 .widget-title,#tab2 .widget-title,#tab3 .widget-title").remove();$(".sidebar_tabs").tabslet({mouseevent:"click",attribute:"href",animation:true});if($(".sidebar_tabs .widget").length===0){$(".sidebar_tabs").remove()}var s="[full_width]";var o="[right_sidebar]";var u="[left_sidebar]";$(".post *").replaceText(s,"<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;float:none!important;border-left:0!important;border-right:0!important}.item .sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-right:0!important;margin-left:0!important}.related li {width: 31.655%;}.related-thumb,.related li .related-img{height: 150px;}}</style>");$(".post-body *").replaceText(o,"<style>@media screen and (min-width: 980px){.item #main-wrapper{float:left!important;border-left:0!important;margin-left: 0px !important;}.item .sidebar-wrapper{float:right!important;padding-right:0!important;}}</style>");$(".post-body *").replaceText(u,"<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-left:0!important;margin-left: 0px !important;}.item .sidebar-wrapper{float:left!important;padding-right:0!important;}}</style>");(function(e){var t=e("a.newer-link");var n=e("a.older-link");e.get(t.attr("href"),function(n){t.html('<strong>التالى</strong><span>'+e(n).find(".post h1.post-title").text()+"</span>")},"html");e.get(n.attr("href"),function(t){n.html('<strong>السابق</strong><span>'+e(t).find(".post h1.post-title").text()+"</span>")},"html")})(jQuery)});

$(document).ready(function() {
$('.HTML .widget-content').each(function () {
  var text = $(this).text();
if (text.match('recentcomments')) {
    $.ajax({
      url: "/feeds/comments/default?alt=json-in-script&max-results=" + recentcomments_number,
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
                var posturl = "";
                var htmlcode = '<ul class="cmmwidget">';
                for (var i = 0; i < data.feed.entry.length; i++) {
                    if (i == data.feed.entry.length) break;
                    for (var k = 0; k < data.feed.entry[i].link.length; k++) {
                        if (data.feed.entry[i].link[k].rel == 'alternate') {
                            posturl = data.feed.entry[i].link[k].href;
                            break
                        }
                    }
                    if ("content" in data.feed.entry[i]) {
                        var content = data.feed.entry[i].content.$t
                    } else if ("summary" in b_rc) {
                        var content = data.feed.entry[i].summary.$t
                    } else var content = "";
                    var re = /<\S[^>]*>/g;
                    content = content.replace(re, "");
                    if (content.length > 90) {
                        content = '' + content.substring(0, 30) + ''
                    }
                    var posttitle = data.feed.entry[i].title.$t;
                    var author = data.feed.entry[i].author[0].name.$t;
                    var thumburl = data.feed.entry[i].author[0].gd$image.src;
                    if (thumburl.match('http://img1.blogblog.com/img/blank.gif')) {
                        var thumb = '<div class="avatarImage avatarRound"><img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/></div>'
                    } else {
                        if (thumburl.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                            var thumb = '<div class="avatarImage avatarRound"><img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/></div>'
                        } else {
                            var thumb = '<div class="avatarImage avatarRound"><img class="avatarRound" src="' + thumburl + '"/></div>'
                        }
                    };
                    htmlcode += '<li>' + thumb + '<a href="' + posturl + '">' + author + '</a><span>"' + content + '"</span></li>'
                }
                htmlcode += '</ul><div class="clear"/>';
                $('.HTML .widget-content').each(function() {
                    if ($(this).text().match('recentcomments')) {
                        $(this).html(htmlcode);
                        $("p.trans").each(function() {
                            var e = $(this).text();
                            var t = $(this).attr("data-tran");
                            $("#pages-wrap *").replaceText(e, t)
                        });
                    }
                })
            }
        });
    }
  if (text.match('randomposts')) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: 'get',
      dataType: "jsonp",
      success: function (datax) {
        var numpost = datax.feed.entry.length;
        var min = 0; 
        var max = numpost-randomposts_number; 
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&start-index=" + random + "&max-results=" + randomposts_number,
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
                        var posturl = "";
                        var htmlcode = '<ul class="roma-widget">';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    posturl = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var posttitle = data.feed.entry[i].title.$t;
                            var author = data.feed.entry[i].author[0].name.$t;
                            var get_date = data.feed.entry[i].published.$t,
                                year = get_date.substring(0, 4),
                                month = get_date.substring(5, 7),
                                day = get_date.substring(8, 10),
                                date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
                            var tag = data.feed.entry[i].category[0].term;
                            var content = data.feed.entry[i].content.$t;
                            var $content = $('<div>').html(content);
                            if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                                var src2 = data.feed.entry[i].media$thumbnail.url;
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                            } else if (content.indexOf("<img") > -1) {
                                var src = $content.find('img:first').attr('src');
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                            }
                            htmlcode += '<li><div class="wid-thumb">' + thumb + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3><span class="p-author">' + author + '</span><span class="p-date">' + date + '</span></div></li>'
                        }
                        htmlcode += '</ul><div class="clear"/>';
                        $('.HTML .widget-content').each(function() {
                            if ($(this).text().match('randomposts')) {
                                $(this).html(htmlcode);
                                $(this).find('.mag-thumb').each(function() {
                                    $(this).attr('style', function(i, src) {
                                        return src.replace('/default.jpg', '/mqdefault.jpg');
                                    }).attr('style', function(i, src) {
                                        return src.replace('s72-c', 's1600');
                                    })
                                });
                                $("p.trans").each(function() {
                                    var e = $(this).text();
                                    var t = $(this).attr("data-tran");
                                    $("#pages-wrap *").replaceText(e, t)
                                });
                            }
                        });
                    }
                });
            }
        });
    }
  if (text.match('recentposts')) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: 'get',
      dataType: "jsonp",
      success: function (datax) {
      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=" + recentposts_number,
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
                        var posturl = "";
                        var htmlcode = '<ul class="roma-widget">';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    posturl = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var posttitle = data.feed.entry[i].title.$t;
                            var author = data.feed.entry[i].author[0].name.$t;
                            var get_date = data.feed.entry[i].published.$t,
                                year = get_date.substring(0, 4),
                                month = get_date.substring(5, 7),
                                day = get_date.substring(8, 10),
                                date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
                            var tag = data.feed.entry[i].category[0].term;
                            var content = data.feed.entry[i].content.$t;
                            var $content = $('<div>').html(content);
                            if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                                var src2 = data.feed.entry[i].media$thumbnail.url;
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                            } else if (content.indexOf("<img") > -1) {
                                var src = $content.find('img:first').attr('src');
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                            }
                            htmlcode += '<li><div class="wid-thumb">' + thumb + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3><span class="p-author">' + author + '</span><span class="p-date">' + date + '</span></div></li>'
                        }
                        htmlcode += '</ul><div class="clear"/>';
                        $('.HTML .widget-content').each(function() {
                            if ($(this).text().match('recentposts')) {
                                $(this).html(htmlcode);
                                $(this).find('.mag-thumb').each(function() {
                                    $(this).attr('style', function(i, src) {
                                        return src.replace('/default.jpg', '/mqdefault.jpg');
                                    }).attr('style', function(i, src) {
                                        return src.replace('s72-c', 's1600');
                                    })
                                });
                                $("p.trans").each(function() {
                                    var e = $(this).text();
                                    var t = $(this).attr("data-tran");
                                    $("#pages-wrap *").replaceText(e, t)
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

$(".feat-layout .HTML .widget-content").each(function() {
    var t = $(this).html(),
        k = $(this).prev("h2").text();
    var z = t.match(/[^[\]]+(?=])/g);
    $(this).html("<span>" + z[0] + "</span>");
    var kkk = $(this).text();
    var g = $(this).find("span").eq(0).text();
    var style = "<span>feat1</span>";
    var feat1_number = 4;
    if (style.match('feat1')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + feat1_number,
            type: 'get',
            dataType: "jsonp",
            success: function(data) {
                var posturl = "";
                var htmlcode = '<ul>';
                for (var i = 0; i < data.feed.entry.length; i++) {
                    for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                        if (data.feed.entry[i].link[j].rel == "alternate") {
                            posturl = data.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var posttitle = data.feed.entry[i].title.$t;
                    var author = data.feed.entry[i].author[0].name.$t;
                    var get_date = data.feed.entry[i].published.$t,
                        year = get_date.substring(0, 4),
                        month = get_date.substring(5, 7),
                        day = get_date.substring(8, 10),
                        date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
                    var content = data.feed.entry[i].content.$t;
                    var $content = $('<div>').html(content);
                    if (i == 0) {
                        var re = /<\S[^>]*>/g;
                        var postcontent = content.replace(re, "");
                        if (postcontent.length > 100) {
                            postcontent = '' + postcontent.substring(0, 85) + '...'
                        }
                        if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                        } else if (content.indexOf("<img") > -1) {
                            var src = $content.find('img:first').attr('src');
                            var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                        } else {
                            var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                        }
                    } else {
                        if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                        } else if (content.indexOf("<img") > -1) {
                            var src = $content.find('img:first').attr('src');
                            var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                        } else {
                            var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                        }
                    };
                    if (i == 0) {
                        htmlcode += '<div class="primeiro"><div class="feat-thumb">' + thumb + '</div><div class="primeiro-content"><h3 class="feat-headline"><a href="' + posturl + '">' + posttitle + '</a></h3><span class="p-author">' + author + '</span><span class="p-date">' + date + '</span><p class="recent-des">' + postcontent + '<a class="feat-readmore" href="' + posturl + '">Read More</a><p></div></div>'
                    } else {
                        htmlcode += '<li><div class="feat-thumb">' + thumb + '</div><div class="mag-content"><h3 class="feat-headline"><a href="' + posturl + '">' + posttitle + '</a></h3></div><div class="clear"/></li>'
                    }
                }
                htmlcode += '</ul>';
                $(".feat-layout .HTML .widget-content").each(function() {
                    var text = $(this).text();
                    if (text == kkk) {
                        $(this).html(htmlcode);
                        $(this).parent().addClass('feat1');
                        $(this).parent().addClass('feat');
                        $(this).prev("h2").html('<a href="/search/label/' + g + '">' + k + '</a>');
                        $(this).prev("h2").wrap('<div class="feat-title"></div>');
                        $(this).removeClass('widget-content').addClass('layout-content');
                        $(this).find('.mag-thumb').each(function() {
                            $(this).attr('style', function(i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg');
                            }).attr('style', function(i, src) {
                                return src.replace('s72-c', 's1600');
                            })
                        });
                        $(this).find('.primeiro-thumb').each(function() {
                            $(this).attr('style', function(i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg');
                            }).attr('style', function(i, src) {
                                return src.replace('s72-c', 's1600');
                            })
                        });
                        $("p.trans").each(function() {
                            var e = $(this).text();
                            var t = $(this).attr("data-tran");
                            $("#pages-wrap *").replaceText(e, t)
                        });
                    }
                });
            }
        });
    }
});

});

var static_page_text = $.trim($('.static_page .post-body').text());
if (static_page_text === "[sitemap]") {
    var postbody = $('.static_page .post-body');
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: 'get',
        dataType: "jsonp",
        success: function(dataZ) {
            var blogLabels = [];
            for (var t = 0; t < dataZ.feed.category.length; t++) {
                blogLabels.push(dataZ.feed.category[t].term)
            }
            var blogLabels = blogLabels.join('/');
            postbody.html('<div class="siteLabel"></div>');
            $('.static_page .post-body .siteLabel').text(blogLabels);
            var splabel = $(".siteLabel").text().split("/");
            var splabels = "";
            for (get = 0; get < splabel.length; ++get) {
                splabels += "<span>" + splabel[get] + "</span>"
            }
            $(".siteLabel").html(splabels);
            $('.siteLabel span').each(function() {
                var mapLabel = $(this);
                var mapLabel_text = $(this).text();
                $.ajax({
                    url: "/feeds/posts/default/-/" + mapLabel_text + "?alt=json-in-script",
                    type: 'get',
                    dataType: "jsonp",
                    success: function(data) {
                        var posturl = "";
                        var htmlcode = '<div class="mapa">';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    posturl = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var posttitle = data.feed.entry[i].title.$t;
                            var author = data.feed.entry[i].author[0].name.$t;
                            var get_date = data.feed.entry[i].published.$t,
                                year = get_date.substring(0, 4),
                                month = get_date.substring(5, 7),
                                day = get_date.substring(8, 10),
                                date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
                            var tag = data.feed.entry[i].category[0].term;
                            var content = data.feed.entry[i].content.$t;
                            var $content = $('<div>').html(content);
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            htmlcode += '<div class="mapapost"><div class="map-thumb"><div class="map-img"><a href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/></div></div><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3><div class="map-meta"><span class="p-author">' + author + '</span><span class="p-date">' + date + '</span></div></div>'
                        }
                        htmlcode += '</div>';
                        mapLabel.replaceWith('<div class="mapasite"><h2>' + mapLabel_text + '<span class="botao"><i class="fa fa-plus-circle"></i></span></h2>' + htmlcode + '</div>');
                        $(document).on('click', '.mapasite h2', function() {
                            $(this).parent('.mapasite').addClass('active');
                            $(this).find('.botao .fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');
                        });
                        $(document).on('click', '.mapasite.active h2', function() {
                            $(this).parent('.mapasite').removeClass('active');
                            $(this).find('.botao .fa').addClass('fa-plus-circle').removeClass('fa-minus-circle');
                        });
                    }
                });
            });
        }
    });
}

$("#related-posts").each(function() {
    var g = $(this).html();
    var related_number = 3;
    $.ajax({
        url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
        type: 'get',
        dataType: "jsonp",
        success: function(data) {
            var posturl = "";
            var htmlcode = '<div class="related">';
            for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                    if (data.feed.entry[i].link[j].rel == "alternate") {
                        posturl = data.feed.entry[i].link[j].href;
                        break
                    }
                }
                var posttitle = data.feed.entry[i].title.$t;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                    var src2 = data.feed.entry[i].media$thumbnail.url;
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                } else if (content.indexOf("<img") > -1) {
                    var src = $content.find('img:first').attr('src');
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                } else {
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                }
                htmlcode += '<li><div class="related-thumb">' + thumb + '</div><h3 class="related-title"><a href="' + posturl + '">' + posttitle + '</a></h3></li>'
            }
            htmlcode += '</div><div class="clear"/>';
            $("#related-posts").html(htmlcode);
            $('.related-img').each(function() {
                $(this).attr('style', function(i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg');
                }).attr('style', function(i, src) {
                    return src.replace('s72-c', 's1600');
                })
            });
            $("p.trans").each(function() {
                var e = $(this).text();
                var t = $(this).attr("data-tran");
                $("#pages-wrap *").replaceText(e, t)
            });
        }
    });
});
