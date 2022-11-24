<template>
  <!-- <div>
    <BG></BG>
    <b-container v-if="userInfo">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <div>
            <div>My Page</div>

            <div> {{ userInfo.userId }} 님의 정보입니다 </div>

            <hr/>

            <b-container class="mt-4">
              <b-row>
                <b-col cols="2"></b-col>
                <label for="userId">아이디</label><br /><input
                  type="text"
                  id="userId"
                  v-model="userInfo.userId"
                  readonly
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="userPass">비밀번호</label><br /><input
                  type="text"
                  id="userPass"
                  v-model="userInfo.userPass"
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="userName">이름</label><br /><input
                  type="text"
                  id="userName"
                  v-model="userInfo.userName"
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="email">이메일</label><br /><input
                  type="text"
                  id="email"
                  v-model="userInfo.email"
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="phone">핸드폰</label><br /><input
                  type="text"
                  id="phone"
                  v-model="userInfo.phone"
                />
                <b-col cols="2"></b-col>
              </b-row>
            </b-container>
            <hr class="my-4" />

            <b-button variant="primary" @click="updateUser" class="mr-1"
              >정보수정</b-button
            >
            <b-button variant="danger" @click="deleteUser">회원탈퇴</b-button>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div> -->
    <!-- <bg-comp></bg-comp> -->
    <div>
      <div class="container">
      <BG></BG>
        <h1 id="logo"><b-icon icon="building" font-scale="1"/>SubLease</h1>
            <div> {{ userInfo.userId }} 님의 정보입니다 </div>

            <hr/>

            <b-container class="mt-4">
              <b-row>
                <b-col cols="2"></b-col>
                <label for="userId">아이디</label><br /><input
                  type="text"
                  id="userId"
                  v-model="userInfo.userId"
                  readonly
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="userPass">비밀번호</label><br /><input
                  type="text"
                  id="userPass"
                  v-model="userInfo.userPass"
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="userName">이름</label><br /><input
                  type="text"
                  id="userName"
                  v-model="userInfo.userName"
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="email">이메일</label><br /><input
                  type="text"
                  id="email"
                  v-model="userInfo.email"
                />
                <b-col cols="2"></b-col>
              </b-row>
              <b-row>
                <b-col cols="2"></b-col>
                <label for="phone">핸드폰</label><br /><input
                  type="text"
                  id="phone"
                  v-model="userInfo.phone"
                />
                <b-col cols="2"></b-col>
              </b-row>
            </b-container>
<b-button class="btn" @click="login"
          >정보수정</b-button
        >
        <b-button class="btn" @click="moveRegister"
          >회원탈퇴</b-button
          
        >
      
      </div>
          </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
import BG from "@/components/BG.vue";
const userStore = "userStore";

export default {
  name: "UserMyPage",
  components: { BG },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
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
  methods: {
    ...mapActions(userStore, ["userUpdate", "userDelete"]),
    updateUser() {
      this.userUpdate(this.userInfo);
    },
    deleteUser() {
      console.log("123123123", this.userInfo.userId);
      this.userDelete(this.userInfo.userId);
    },
  },
};
</script>

<style>
html{
  height:100vh;
}

input {
  border-radius: 5px;
  border-color: aliceblue;
  border-width: 1px;
  padding: 2px;
  font-size: 16px;
}

.container{

  margin:0 auto;  
}

.btn.btn-secondary{
    margin: 10px;
  border: none;
  background-color: transparent;
  color: #242d54;
  cursor: pointer;
  font-weight: bold;
  margin:2px;
  padding:10px 35px;
}



</style>
