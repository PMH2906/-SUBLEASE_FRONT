<template>
  <div class="register">
    <b-container>
      <div class="inputs">
      <h2>가입 정보</h2>
      <b-row align-v="center">
        <b-col sm="2">
          <label for="id">ID</label>
        </b-col>
        <b-col sm="6" class="col">
          <b-form-input id="id" :state="null" placeholder="Id" v-model="user.userId"></b-form-input>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col sm="2">
          <label for="password">PW</label>
        </b-col>
        <b-col sm="6" class="col">
          <b-form-input
            id="password"
            :state="null"
            placeholder="Password"
            v-model="user.userPass"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col sm="2">
          <label for="checkpassword">PW 확인</label>
        </b-col>
        <b-col sm="6" class="col">
          <b-form-input
            id="checkpassword"
            :state="null"
            placeholder="check password"
          ></b-form-input>
        </b-col> </b-row
      ><b-row align-v="center">
        <b-col sm="2">
          <label for="name">이름</label>
        </b-col>
        <b-col sm="6" class="col">
          <b-form-input
            id="name"
            :state="null"
            placeholder="이름을 입력하세요"
            v-model="user.userName"
          ></b-form-input>
        </b-col> </b-row
      ><b-row align-v="center">
        <b-col sm="2">
          <label for="email">이메일</label>
        </b-col>
        <b-col sm="6" class="col">
          <b-form-input
            id="email"
            :state="null"
            placeholder="이메일을 입력하세요"
            v-model="user.email"
          ></b-form-input>
        </b-col> </b-row
      ><b-row align-v="center">
        <b-col sm="2">
          <label for="phone">핸드폰 번호</label>
        </b-col>
        <b-col sm="6" class="col">
          <b-form-input
            id="phone"
            :state="null"
            placeholder="번호를 입력하세요"
            v-model="user.phone"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-button class="btn" variant="outline-secondary" @click="register">가입</b-button>
      <b-button class="btn" variant="outline-secondary">취소</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>

import {mapActions} from "vuex";
const userStore = "userStore";

export default {
  name: "RegisterView",
  data() {
    return {
      user:{
        userId:"",
        userPass:"",
        userName:"",
        email:"",
        phone:"",
      }
    }
  },
  methods: {
    ...mapActions(userStore, ["userRegister"]),
    async register() { 
      await this.userRegister(this.user);
      console.log("registerrrrrrrrr");
        this.$router.push("/");
      }
    },  
};
</script>

<style>
.register .container {
  height: 100vh;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
}
.register .container .inputs{
  width: 100%;
}
</style>
