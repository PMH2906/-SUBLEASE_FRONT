<template>
  <div>
    <bg-comp></bg-comp>
    <div class="register">
      <div class="container">
        <h1 id="logo"><b-icon icon="building" font-scale="1.5" /> Sign Up</h1>
        <b-col sm="4" class="col">
          <b-form-input
            id="id"
            :state="null"
            placeholder="Id 입력"
            v-model="user.userId"
          ></b-form-input>
        </b-col>
        <b-col sm="4" class="col">
          <b-form-input
            id="password"
            :state="null"
            placeholder="Password 입력"
            v-model="user.userPass"
          ></b-form-input>
        </b-col>

        <b-col sm="4" class="col">
          <b-form-input
            id="checkpassword"
            :state="null"
            placeholder="check password"
          ></b-form-input>
        </b-col>
        <b-col sm="4" class="col">
          <b-form-input
            id="name"
            :state="null"
            placeholder="이름을 입력하세요"
            v-model="user.userName"
          ></b-form-input>
        </b-col>
        <b-col sm="4" class="col">
          <b-form-input
            id="email"
            :state="null"
            placeholder="이메일을 입력하세요"
            v-model="user.email"
          ></b-form-input>
        </b-col>

        <b-col sm="4" class="col">
          <b-form-input
            id="phone"
            :state="null"
            placeholder="번호를 입력하세요"
            v-model="user.phone"
          ></b-form-input>
        </b-col>

        <b-button class="btn" variant="outline-light" @click="register"
          >가입</b-button
        >
        <b-button class="btn" variant="outline-light">취소</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BgComp from "@/components/BG.vue";
const userStore = "userStore";

export default {
  name: "RegisterView",
  data() {
    return {
      user: {
        userId: "",
        userPass: "",
        userName: "",
        email: "",
        phone: "",
      },
    };
  },
  components: {
    BgComp,
  },
  methods: {
    ...mapActions(userStore, ["userRegister"]),
    async register() {
      await this.userRegister(this.user);
      console.log("registerrrrrrrrr");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  color: aliceblue;
}
.register {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.register .container {
  position: absolute;
  top: 20%;
}
.register .container #logo {
  margin-bottom: 40px;
}
.register .container .col {
  margin: 10px auto;
}

.register .container .btn {
  margin: 5px;
  border: none;
}

.register .container .btn-outline-light:hover {
  background-color: transparent;
  color: #2f2d38;
  /* border: 1px solid #887673 */
}
</style>
