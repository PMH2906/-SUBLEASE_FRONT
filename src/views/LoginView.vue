<template>
  <div>
    <!-- <bg-comp></bg-comp> -->
    <div class="login">
      <div class="container">
        <h1 id="logo">Logo</h1>
        <b-col sm="4" class="col">
          <b-form-input
            id="id"
            :state="null"
            placeholder="Id"
            v-model="user.userId"
          ></b-form-input>
        </b-col>
        <b-col sm="4" class="col">
          <b-form-input
            id="password"
            :state="null"
            placeholder="Password"
            v-model="user.userPass"
          ></b-form-input>
        </b-col>
        <b-form-checkbox
          id="checkbox-1"
          v-model="user.userPass"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          아이디 저장
        </b-form-checkbox>
        <b-button class="btn" variant="outline-secondary" @click="login"
          >로그인</b-button
        >
        <b-button class="btn" variant="outline-secondary" @click="moveRegister"
          >회원가입</b-button
        >
        <b-button class="btn" variant="outline-secondary"
          >비밀번호 찾기</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import BgComp from "@/components/BG.vue"
const userStore = "userStore";
export default {
  name: "LoginView",
  components: {  },
  data() {
    return {
      user: {
        userId: null,
        userPass: null,
      },
    };
  },
  computed: {
    ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(userStore, ["userConfirm", "getUserInfo"]),
    async login() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      console.log("tokennnnnnnn ", token);
      // console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        console.log(this.userInfo);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push("/");
      }
    },
    moveRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.login {
  height: 100vh;
  text-align: center;
}
.login .container #logo {
  margin-bottom: 40px;
}
.login .container {
  position: absolute;
  top: 40%;
}
.login .container .col {
  margin: 10px auto;
}
.login .container .btn {
  margin: 5px;
}

.login .container .custom-control.custom-checkbox {
  width: fit-content;
  margin-left: 55%;
  margin-bottom: 10px;
}
.login .container #checkbox-1 {
  float: right;
}
</style>
