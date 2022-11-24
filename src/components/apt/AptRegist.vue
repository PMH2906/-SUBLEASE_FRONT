<template>
  <div>
    <div>
      <div class="content-title">거래 정보</div>
      <div class="contents fee">
        <div class="fee-type">
        <b-button @click="toggle" v-if="!status">전세</b-button>
        <b-button @click="toggle" v-if="status">월세</b-button>
        </div>
        <div v-if="status">
        <input 
          id="deposit"
          v-model="inputs.deposit"
          type="number"
          placeholder=" 보증금"
        />
        /
        <input type="number" placeholder=" 월세" v-model="inputs.rentFee" />
        만원
        <br />
        </div>
        
        <div v-else>
        <input 
          id="deposit"
          v-model="inputs.deposit"
          type="number"
          placeholder=" 전세"
        />
        만원
        </div>
      </div>
    </div>
    <div>
      <div class="content-title">위치 정보</div>
      <div class="contents">
        <input type="text" v-model="postcode" placeholder=" 우편번호" />
        <b-button class="btn" @click="search()">우편번호 찾기</b-button><br />
        <input
          type="text"
          v-model="address"
          id="address"
          placeholder=" 주소"
        /><br />
        <input
          type="text"
          v-model="extraAddress"
          id="extraAddress"
          placeholder=" 아파트"
        />
      </div>
    </div>
    <div>
      <div class="content-title">기본 정보</div>
      <div class="contents">
        <input
          type="number"
          v-model="inputs.area"
          id="area"
          placeholder=" 건물 크기"
        />
        평<br />
        <input
          type="number"
          id="floor"
          v-model="inputs.floor"
          placeholder=" 층 수"
        />
        층
        
      </div>
    </div>
    <div>
      <div class="content-title">추가 정보</div>
      <div class="contents">
        <input
          id="manageFee"
          v-model="inputs.managementFee"
          type="number"
          placeholder=" 관리비"
        />
        만원<br>

        <input
          id="buildYear"
          v-model="inputs.buildYear"
          type="number"
          placeholder=" 건축연도"
        /> 년

        <div>
        <div class="content-title">주차 여부</div>
          <input
            type="radio"
            v-model="inputs.parkingOpt"
            value="TRUE"
            id="pos"
            checked
          />
          <label for="pos">가능</label>

          <input
            type="radio"
            v-model="inputs.parkingOpt"
            value="FALSE"
            id="impos"
          />
          <label for="impos">불가능</label>
        </div>

        <div class="content-title">옵션 항목</div>
          <input
            type="checkbox"
            id="furniture"
            value="옷장"
            v-model="inputs.furnitureOpt"
            class="contents-item"
          />
          <label for="furniture">옷장</label>
          <input
            type="checkbox"
            id="loan"
            value="대출"
            v-model="inputs.loanOpt"
            class="contents-item"
          />
          <label for="loan">대출</label>
          <input
            type="checkbox"
            id="pet"
            value="반려 동물"
            v-model="inputs.petOpt"
            class="contents-item"
          />
          <label for="pet">반려 동물</label>
          <input
            type="checkbox"
            id="insurance"
            value="보험 여부"
            v-model="inputs.insuranceOpt"
            class="contents-item"
          />
          <label for="insurance">보험</label>
          <input
            type="checkbox"
            id="commission"
            value="중개 수수료"
            v-model="inputs.commissionOpt"
            class="contents-item"
          />
          <label for="commission">중개 수수료</label>
      </div>
    </div>

    <b-form-file
      id="file-default"
      multiple
      input
      Array
      :file-name-formatter="formatNames"
      v-model="fileInfos"
    ></b-form-file>
    <b-button @click="regist">매물 등록</b-button><b-button>취소</b-button>
  </div>
</template>

<script>
// import userStore from '@/store/modules/userStore';
// import houseStore from "@/store/modules/houseStore";
import { mapActions, mapState } from "vuex";
const houseStore = "houseStore";
const userStore = "userStore";
export default {
  data() {
    return {
      status:"False",
      postcode: "",
      address: "",
      extraAddress: "",
      startDate: "",
      endDate: "",
      inputs: {
        deposit: "",
        // deposit: "",
        userId: "",
        livingType: false,
        rentFee: "",
        managementFee: "",
        furnitureOpt: false,
        parkingOpt: false,
        loanOpt: false,
        petOpt: false,
        commissionOpt: false,
        insuranceOpt: false,
        sido: "",
        sigungu: "",
        bcode: "",
        bname: "",
        buildingName: "",
        jibun: "",
        floor: "",
        area: "",
        tradeType: false,
        buildYear: "",
      },
      fileInfos: [],
    };
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(houseStore, ["tradeRegist"]),
      toggle(){
      this.status=!this.status;
      this.livingType=!this.status;
    },
    formatNames(files) {
      return files.length === 1
        ? files[0].name
        : `${files.length} files selected`;
    },
    async regist() {
      this.inputs.userId = this.userInfo.userId;

      const params = new FormData();
      const json = JSON.stringify(this.inputs);
      const blob = new Blob([json], { type: "application/json" });
      params.append("houseTrade", blob);

      this.fileInfos.forEach((element) => {
        params.append("upfile", element);
      });

      await this.tradeRegist(params);
    },
    search() {
      //@click을 사용할 때 함수는 이렇게 작성해야 한다.
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
          this.inputs.sido = data.sido;
          this.inputs.sigungu = data.sigungu;
          this.inputs.bcode = data.bcode;
          this.inputs.bname = data.bname;
          this.inputs.buildingName = data.buildingName;
          this.inputs.jibun = data.autoJibunAddress ? data.autoJibunAddress.split(" ").reverse()[0]: data.jibunAddress.split(" ").reverse()[0];
          console.log(this.inputs.jibun);
          console.log(data.autoJibunAddress);
          console.log("dhsafhdsha",data.jibunAddress);
        },
      }).open();
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
div {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}
.contents {
  border: 0.5px solid rgb(158, 158, 158);
  padding: 10px 0;
}
.content-title{
  margin: 0 0 5px 0;
}
.btn {
  margin: 10px;
  border: none;
  background-color: transparent;
    color: #242d54;
  cursor: pointer;
  font-weight: bold;
}


/* .btn.btn-outline-light:hover{
  background-color: transparent;
  color: #2f2d38;
  border: 1px solid #887673 
} */
input{
  border-radius: 5px;
  border-color: aliceblue;
  border-width: 1px;
  padding: 2px;
  font-size: 16px;
}
.contents.fee{
position: relative;
}
.fee-type{
  position: absolute;
  left:30px;
  top:24px;
  margin:0;
}
.fee-type .btn.btn-secondary{
  margin:2px;
  padding:10px 35px;
}
label{
  font-size: 16px;
  font-weight: normal;
  margin:10px;
}
.select-date{
  width:60%;
  margin:0 auto;
}
.form-control.border{
  width:60%;
  margin:0 auto;
  
}
.custom-file-label {
  color: black;
}
</style>
