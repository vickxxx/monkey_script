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
       //refresh_btn.click();
   }
   var interid = setInterval(refreash_, 1000);
    console.log("interval ID is ", interid);


    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
      
        if (keyName === 'Control') {
          // do not alert when only Control key is pressed.
          return;
        }
      
        if (event.ctrlKey) {
          // Even though event.key is not 'Control' (i.e. 'a' is pressed),
          // event.ctrlKey may be true if Ctrl key is pressed at the time.
          alert(`Combination of ctrlKey + ${keyName}`);
        } else {
          alert(`Key pressed ${keyName}`);
        }
      }, false);
      
      document.addEventListener('keyup', (event) => {
        const keyName = event.key;
      
        // As the user release the Ctrl key, the key is no longer active.
        // So event.ctrlKey is false.
        if (keyName === 'Control') {
          alert('Control key was released');
        }
      }, false);




})();