
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/passenger/passenger","pages/house/house","pages/message/message","pages/profile/profile"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"优品找房","navigationBarBackgroundColor":"#fff","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#4D5C56","selectedColor":"#42CD94","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","iconPath":"static/tab_home_nor.png","selectedIconPath":"static/tab_home_light.png","text":"首页"},{"pagePath":"pages/passenger/passenger","iconPath":"static/tab_youkan_nor.png","selectedIconPath":"static/tab_youkan_light.png","text":"客源"},{"pagePath":"pages/house/house","iconPath":"static/tab_youkan_nor.png","selectedIconPath":"static/tab_youkan_light.png","text":"房源"},{"pagePath":"pages/message/message","iconPath":"static/tab_youkan_nor.png","selectedIconPath":"static/tab_youkan_light.png","text":"消息"},{"pagePath":"pages/profile/profile","iconPath":"static/tab_youkan_nor.png","selectedIconPath":"static/tab_youkan_light.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"wet","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/passenger/passenger","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/house/house","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
