<template>
  <header>
    <nav class="header-nav">
      <b-row class="text-center">
        <b-col class="sm-3"> </b-col>
        <b-col class="sm-3"> </b-col>
        <b-col class="sm-3"> </b-col>
        <b-col> </b-col>
        <b-col class="tag"> </b-col>
        <b-col>
          <router-link class="bar-item" to="/login" v-if="!userInfo"
            >LOGIN</router-link
          >
          <div v-else>
            <b-icon
              icon="person-fill"
              font-scale="1.5"
              v-if="userInfo"
              style="color: black"
            /><span id="title" />
            <span style="padding: 10px" class="name"
              >{{ userInfo.userName }}님</span
            >
            <span class="bar-item" @click="logout">LOGOUT</span>
          </div>
        </b-col>
      </b-row>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
const userStore = "userStore";
export default {
  data() {
    return {};
  },
  computed: {
    name: "ProfileNavbar",

    ...mapState(userStore, ["userInfo"]),
  },
  created() {},
  methods: {
    ...mapActions(userStore, ["userLogout"]),

    logout() {
      console.log(this.userInfo);
      this.userLogout(this.userInfo.userId);
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  color: #242d54;
  z-index: 1;
}

.header-nav {
  margin-left: 50px;
  padding: 7px 0;
  box-shadow: 0px 4px 5px grey;
  background-color: white;
  height: 43px;
}
.bar-item {
  /* cursor: pointer; */
  text-decoration: none;
}
.custom-select {
  /* border-radius: 20px;
  width: fit-content;
  padding: 0 10px; */
  border: none;
}
/* .bar-item :hover{
  color: #311906;
} */
.login {
  color: black;
}
.btn {
  border: none;
  color: #242d54;
}
.btn.btn-outline-light {
  padding: 0;
}
button:hover {
  /* color: #311906; */
  font-weight: bold;
  background-color: transparent;
  /* transform: scale(1.2); */
}
.bar-item,
a {
  text-decoration: none;
}
.bar-item:hover,
a:hover {
  /* transform: scale(1.2); */
  color: #242d54;
  cursor: pointer;
  font-weight: bold;
}
.btn.filter {
  padding: 0 7px;
}
.name {
  font-weight: bolder;
}
</style>
