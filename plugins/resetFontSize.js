import Vue from "vue";
Vue.prototype.resetFontSize = () => {
  function a() {
    let b = document.documentElement.clientWidth;
    b = b > 1920 ? 1920 : b;
    const c = (b / 1920) * 16;
    document.getElementsByTagName("html")[0].style.fontSize = c + "px";
  }

  a();
  window.onresize = a;
};
