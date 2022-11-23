<template>
  <div id="wrapper">
      <div id="bg"></div>
      <div id="overlay"></div>
      <div id="main">
        <!-- Header -->
        <header id="header">
          <h1><b-icon icon="building" font-scale="1.5"/>SubLease</h1>
          <p>
            The site for students to find subleases 
          </p>
          <nav>
            <ul>
              <li>
                <router-link class="bar-item" to="/apt"><b-icon icon="geo-alt" font-scale="2"></b-icon></router-link>
              </li>
              <!-- <li>
                <b-icon icon="house-door" font-scale="2"></b-icon>
              </li> -->
              <li>
                <router-link class="bar-item" to="/apt"><b-icon icon="upload" font-scale="2"></b-icon></router-link>
              </li>
              <li>
                <router-link class="bar-item" to="/login"><b-icon icon="person-check" font-scale="2"></b-icon></router-link>
              </li>
            </ul>
            
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
    name: "MainView",
}
</script>

<style scoped lang="css" src="@/assets/css/main.css">
/* @import "@/assets/css/main.css"; */
/* @import "@/assets/css/noscript.css"; */
*{
    color: aliceblue;
}
*{
    z-index: 3;
}


</style>