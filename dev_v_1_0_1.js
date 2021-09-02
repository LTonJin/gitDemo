// 我是在dev_v_1_0_1上开发的需求
function copy(text) {
  try {
    document.execCommand(text);
  } catch (error) {
    console.log(error);
  }
}

// 需求1继续开发
Array.prototype.myCall = myCall;
function myCall(arr) {
  
}