// ==UserScript==
// @name         python阿里日志刷新
// @namespace    https://github.com/vickxxx/monkey_script
// @version      0.1
// @description  定时刷新阿里日志输出
// @author       You
// @match        https://sls.console.aliyun.com/next/project/luojilab-logs/logsearch/*
// @grant        none
// ==/UserScript==
interid = 0;


function opt_pages(){
    // 优化页面结构
    var left_dom =  $('.components-QuickAnalysis-___style__quickAnalysis___17kn-')[0];
    left_dom.remove();
}


var refresh_btn = $(".next-btn.next-btn-primary.next-btn-small")[0];
function refreash_(){
    refresh_btn.click();
}


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    if (keyName === 'Control') {
      // do not alert when only Control key is pressed.
      return;
    }
  
    if (event.ctrlKey) {
      // Even though event.key is not 'Control' (i.e. 'a' is pressed),
      // event.ctrlKey may be true if Ctrl key is pressed at the time.
      if (keyName == "z"){
            if (interid ==0){
                interid = setInterval(refreash_, 1000);
            }
            else if (keyName == "x"){
                opt_pages();
            }
            else{
                clearInterval(interid);
                interid = 0;
            }
      }

    // alert(`Combination of ctrlKey + ${keyName}`);
    } else {
    //   alert(`Key pressed ${keyName}`);
    }
  }, false);
  
  document.addEventListener('keyup', (event) => {
    const keyName = event.key;
  
    // As the user release the Ctrl key, the key is no longer active.
    // So event.ctrlKey is false.
    if (keyName === 'Control') {
    //   alert('Control key was released');
    }
  }, false);


(function() {
    'use strict';

    // Your code here...
  

   
    console.log("interval ID is ", interid);


})();
