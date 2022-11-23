<template>
  <div>
    <div>
      <h4>거래 정보</h4>
      <div>
        <label for="depositM">월세</label
        ><input
          id="depositM"
          v-model="inputs.depositM"
          type="number"
          placeholder="보증금"
        />
        /
        <input type="number" placeholder="월세" v-model="inputs.rentFee" /> 만원
        <br />
        <label for="depositY">전세</label
        ><input
          id="depositY"
          v-model="inputs.depositY"
          type="number"
          placeholder="전세"
        />
        만원
      </div>
    </div>
    <div>
      <h4>위치 정보</h4>
      <div>
        <input type="text" v-model="postcode" placeholder="우편번호" />
        <input type="button" @click="search()" value="우편번호 찾기" /><br />
        <input
          type="text"
          v-model="address"
          id="address"
          placeholder="주소"
        /><br />
        <input
          type="text"
          v-model="extraAddress"
          id="extraAddress"
          placeholder="아파트"
        />
     
      </div>
    </div>
    <div>
      <h4>기본 정보</h4>
      <div>
        <label for="area">건물 크기</label
        ><input
          type="number"
          v-model="inputs.area"
          id="area"
          placeholder="건물 크기"
        /> 평 <br />
        ><input
          type="number"
          id="floor"
          v-model="inputs.floor"
          placeholder="층 수"
        />층
      </div>
    </div>
    <div>
      <h4>추가 정보</h4>
      <div>
        <label for="manageFee">관리비</label
        ><input
          id="manageFee"
          v-model="inputs.managementFee"
          type="number"
          placeholder="관리비"
        />
        만원
        <h4>주차 여부</h4>

        <div>
          <input type="radio" v-model="inputs.parkingOpt" value="true" id="pos" checked /><label for="pos">가능</label>
          <input type="radio" v-model="inputs.parkingOpt" value="false" id="impos"/><label for="impos">불가능</label>
        </div>

      
        
        <h4>옵션 항목</h4>

        <div>
        <input type="checkbox" id="furniture" value="옷장" v-model="inputs.furnitureOpt" />
        <label for="furniture">옷장</label>
        <input type="checkbox" id="loan" value="대출" v-model="inputs.loanOpt" />
        <label for="loan">대출</label>
        <input type="checkbox" id="pet" value="반려 동물" v-model="inputs.petOpt" />
        <label for="pet">반려 동물</label>
        <input type="checkbox" id="insurance" value="보험 여부" v-model="inputs.insuranceOpt" />
        <label for="insurance">보험</label>
        <input type="checkbox" id="commission" value="중개 수수료" v-model="inputs.commissionOpt" />
        <label for="commission">중개 수수료</label> 
        </div>

      </div>
    </div>
    <div>
      <h4>사진 등록</h4>
      <div>
      
      <div class="form-group" align="left">
							<label for="upfile">파일:</label>
							<input type="file" class="form-control border" name="upfile" multiple="multiple">
						</div>
            <div class="col-auto text-center mt-3"></div>

      </div>
    </div>
    <b-button>매물 등록</b-button><b-button>취소</b-button>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
      inputs: {
        depositM: "",
        depositY: "",
        rentFee: "",
        managementFee: "",
        furnitureOpt: "false",
        parkingOpt: "false",
        loanOpt: "false",
        petOpt: "false",
        commissionOpt: "false",
        insuranceOpt: "false",
        sido:"",
        sigungu:"",
        bcode:"",
        bname:"",
        buildingName:"",
        jibun:"",
      },
    };
  },
  methods: {
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
          this.inputs.sido=data.sido;
          this.inputs.sigungu=data.sigungu;
          this.inputs.bcode=data.bcode;
          this.inputs.bname=data.bname;
          this.inputs.buildingName=data.buildingName;
          this.inputs.jibun=data.autoJibunAddress.split(' ').reverse()[0];
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
</style>
