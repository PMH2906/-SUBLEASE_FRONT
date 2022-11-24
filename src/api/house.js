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
  api.get(`/apt/dongsearch/${params.dongCode}`).then(success).catch(fail);
}

function houseList(params, success, fail) {
  console.log(params);
  house.get(`/apt/houseInfosearch/${params.dongCode}`).then(success).catch(fail);
}

//거래 매물 수
function tradeCnt(params, success, fail){
  house.get(`/apttrade/houseTradeCnt`,{params:params}).then(success).catch(fail);
}

//상세 정보
function houseDeal(params,success,fail){
  console.log("houseDeal", params)
  house.get(`/apt/housedeal/${params}`).then(success).catch(fail);
}

//거래 정보
function houseTrade(params,success,fail){
  console.log(params);
  house.get(`/apttrade/houseTradeSearch`,{params:params}).then(success).catch(fail);
} 

function houseTradeNo(params,success,fail){
  house.get(`/apttrade/houseTrade/${params.tradeNo}`).then(success).catch(fail);
}

function buildingInfo(params,success,fail){
  house.get(`/building/${params.dongCode}`).then(success).catch(fail);
}


//관심지역
function interestArea(params,success,fail){
  console.log("HOUSE.JS",params);
  house.post(`/interest/registarea`,JSON.stringify(params)).then(success).catch(fail);
}

function interestAreaList(params,success,fail){
  house.get(`/interest/areasearch/${params.userId}`).then(success).catch(fail);
}

function removeInterestArea(params,success,fail){
  house.delete(`/interest/deletearea/${params.dongCode}`).then(success).catch(fail);
}

function registtrade(params,success,fail){
  house.post(`/interest/registtrade`,JSON.stringify(params)).then(success).catch(fail);
}

function tradesearch(params,success,fail){
  house.get(`/interest/tradesearch/${params.userId}`).then(success).catch(fail);
}

function deleteTradeInfo(params,success,fail){
  house.delete(`/interest/deletetrade/${params.tradeNo}`).then(success).catch(fail);
}

function tradeRegister(params, success, fail){
  house.post('http://localhost:9999/apttrade', params,{
    headers: {'Content-Type': 'multipart/form-data'}
  }).then(success).catch(fail);
}


export { sidoList, gugunList, houseList,dongList, pointList,tradeCnt,houseDeal,houseTrade,buildingInfo,
  interestArea,interestAreaList,removeInterestArea,registtrade,tradesearch,deleteTradeInfo,houseTradeNo,tradeRegister};
