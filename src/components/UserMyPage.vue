<template>
  <div>
    <ProfileNavBar />
    <BG></BG>
    <div class="mypage">
    <div class="container">
      <h1 id="logo"><b-icon icon="building" font-scale="1.5" />SubLease</h1>
      <br/><br/>
      <b-container class="mt-4">
        <b-col sm="4" class="col">
          <h4>{{ userInfo.userName }} 님 안녕하세요</h4>
        </b-col>
        <b-col sm="4" class="col">
          <label for="userId">아이디</label><br /><b-form-input
            type="text"
            id="userId"
            v-model="userInfo.userId"
            readonly
          />
        </b-col>
        <b-col sm="4" class="col">
          <label for="userPass">비밀번호</label><br /><b-form-input
            type="text"
            id="userPass"
            v-model="userInfo.userPass"
          />
        </b-col>
        <b-col sm="4" class="col">
          <label for="userName">이름</label><br /><b-form-input
            type="text"
            id="userName"
            v-model="userInfo.userName"
          />
        </b-col>
        <b-col sm="4" class="col">
          <label for="email">이메일</label><br /><b-form-input
            type="text"
            id="email"
            v-model="userInfo.email"
          />
        </b-col>
        <b-col sm="4" class="col">
          <label for="phone">핸드폰</label><br /><b-form-input
            type="text"
            id="phone"
            v-model="userInfo.phone"
          />
        </b-col>
      <b-button class="btn"  variant="outline-light" @click="updateUser">정보수정</b-button>
      <b-button class="btn"  variant="outline-light" @click="deleteUser">회원탈퇴</b-button>
      </b-container>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProfileNavBar from "@/components/ProfileNavBar.vue";
import BG from "@/components/BG.vue"
const userStore = "userStore";

export default {
  name: "UserMyPage",
  components: {
    ProfileNavBar,
    BG
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
  data() {
    return {
      originName:"",
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

<style scoped>
*{
  padding: 0;
  margin: 0;
  color: aliceblue;
}

.mypage {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.container #logo {
  margin-bottom: 40px;
}

.mypage .container {
  position: absolute;
  top: 19%;
}
.mypage .container .col {
  margin: 10px auto;
}
.mypage .container .btn {
  margin: 5px;
  border: none;
}
.mypage .container .btn.btn-outline-light:hover{
  background-color: transparent;
  color: #2f2d38;
  /* border: 1px solid #887673 */
}

.mypage .container .custom-control.custom-checkbox {
  width: fit-content;
  margin-left: 55%;
  margin-bottom: 10px;
}
input{
  color:black;
  text-align: center;
  padding: 3px;
  margin-bottom: 5px;
}
</style>
