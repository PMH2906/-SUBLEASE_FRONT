import { apiInstance, houseInstance } from "./index.js";

const api = apiInstance();
const house = houseInstance();

function sidoList(success, fail) {
  api.get(`/apt/sido`).then(success).catch(fail);
}

function gugunList(params, success, fail) {
  console.log("gugun ",params);
  api.get(`/apt/gugun`, { params: params }).then(success).catch(fail);
}

function dongList(params, success, fail) {
  console.log("dong ",params);
  api.get(`/apt/dong`, { params: params }).then(success).catch(fail);
}

//좌표리스트
function pointList(params, success, fail) {
  console.log("dong ",params);
  api.get(`/apt/dong`,{params:params}).then(success).catch(fail);
}

function houseList(params, success, fail) {
  console.log(params);
  house.get(`/apt/houseInfosearch/${params.dongCode}`).then(success).catch(fail);
}

//거래 매물 수
function tradeCnt(params, success, fail){
  house.get(`/apttrade/houseTradeCnt`,{params:params}).then(success).catch(fail);
}

export { sidoList, gugunList, houseList,dongList, pointList,tradeCnt };
