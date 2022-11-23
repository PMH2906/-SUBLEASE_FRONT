<template>
  <div id="wrapper">
      <div id="bg"></div>
      <div id="overlay"></div>
      <div id="main">
        <!-- Header -->
        <header id="header">
          <nav>      
          </nav>
        </header>

        <!-- Footer -->
        <footer id="footer">
          <span class="copyright"
            >&copy; SSAFY
            </span
          >
        </footer>
      </div>
    </div>
</template>

<script>

window.onload = function () {
  document.body.classList.remove("is-preload");
};
window.ontouchmove = function () {
  return false;
};
window.onorientationchange = function () {
  document.body.scrollTop = 0;
};


export default {
}
</script>

<style scoped lang="css" src="@/assets/css/main.css">
/* @import "@/assets/css/main.css"; */
/* @import "@/assets/css/noscript.css"; */
*{
    color: aliceblue;
}

#wrapper{
  z-index: -1;
}
</style>