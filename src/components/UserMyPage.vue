<template>
  <b-container class="mt-4" v-if="userInfo">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>내정보</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-jumbotron>
          <template #header>My Page</template>

          <template #lead> 내 정보 확인페이지입니다. </template>

          <hr class="my-4" />

          <b-container class="mt-4">
            <b-row>
              <b-col cols="2"></b-col>
              <label for="userId">아이디</label><br><input type="text" id="userId" v-model="userInfo.userId" readonly>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <label for="userPass">비밀번호</label><br><input type="text" id="userPass" v-model="userInfo.userPass">
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <label for="userName">이름</label><br><input type="text" id="userName" v-model="userInfo.userName">
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
                <label for="email">이메일</label><br><input type="text" id="email" v-model="userInfo.email">
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
                <label for="phone">핸드폰</label><br><input type="text" id="phone" v-model="userInfo.phone">
              <b-col cols="2"></b-col>
            </b-row>
          </b-container>
          <hr class="my-4" />

          <b-button variant="primary" @click="updateUser" class="mr-1">정보수정</b-button>
          <b-button variant="danger" @click="deleteUser">회원탈퇴</b-button>
        </b-jumbotron>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
const userStore = "userStore";

export default {
  name: "UserMyPage",
  components: {},
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
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
  methods:{
    ...mapActions(userStore,["userUpdate","userDelete"]),
    updateUser(){
      this.userUpdate(this.userInfo);
    },
    deleteUser(){
      console.log("123123123",this.userInfo.userId);
      this.userDelete(this.userInfo.userId);
    }
  }
};
</script>

<style></style>
