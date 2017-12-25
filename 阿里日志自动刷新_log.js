// ==UserScript==
// @name         python阿里日志刷新
// @namespace    https://github.com/vickxxx/monkey_script
// @version      0.1
// @description  定时刷新阿里日志输出
// @author       You
// @match        https://sls.console.aliyun.com/next/project/luojilab-logs/logsearch/passport-python*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
   var refresh_btn = $(".next-btn-medium.next-btn-primary")[0];
   function refreash_(){
       refresh_btn.click();
   }
   var interid = setInterval(refreash_, 1000);
    console.log("interval ID is ", interid);


})();