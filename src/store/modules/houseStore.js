import { sidoList, gugunList, houseList,dongList,pointList,tradeCnt } from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    dongs: [{ value: null, text:"선택하세요"}],
    houses: [],
    house: null,
    points: [],
    cnts: [],
    jibuns:[],
  },
  getters: {
    getLatLng:function(state){
      let arr=[];
      let list=[];
      for(let i=0;i<state.houses.length;i++){
        arr[0]=state.houses[i].lat;
        arr[1]=state.houses[i].lng;
        list.push(arr);
      }
      console.log("GETTTTT",list);
      return list;
    }
  },
  mutations: {
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongs = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_APT_LIST(state) {
      state.houses = [];
      state.house = null;
    },
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_DONG_LIST(state, dongs) {
      dongs.forEach((dong) => {
        state.dongs.push({ value: dong.dongCode, text: dong.dongName });
      });
    },
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses.list;
      console.log("House List",state.houses);
    },
    SET_DETAIL_HOUSE(state, house) {
      state.house = house;
    },
    SET_POINT_LIST(state, points){
      state.points=points;
      // console.log("Points ",state.points);
    },
    SET_HOUSE_CNT(state,cnts){
      state.cnts=cnts;
      // console.log("Cnts ",state.cnts);
    },
  },
  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      const params = { sidoCode: sidoCode };
      gugunList(
        params,
        ({ data }) => {
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    //동 검색 추가
    getDong: ({ commit }, gugunCode) => {
      const params = { gugunCode: gugunCode };
      dongList(
        params,
        ({ data }) => {
          commit("SET_DONG_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getPointList: ({commit}, gugunCode)=>{
      const params={gugunCode: gugunCode};
      pointList(
        params,
        ({data})=>{
          commit("SET_POINT_LIST",data);
        },
        (error)=>{
          console.log(error);
        }
      )
    },
    getHouseList: ({ commit }, dongCode) => {
      const params = {
        dongCode: dongCode,
      };
      houseList(
        params,
        ({ data }) => {
          commit("SET_HOUSE_LIST", data);
          data.list.forEach(e => {
            tradeCnt(e,({data})=>{
              commit("SET_HOUSE_CNT",data);
              // console.log("trrrrrrrrrrrrrrrrrade",data);
            },
            (error)=>{
              console.log(error);
            })
          });
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailHouse: ({ commit }, house) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      commit("SET_DETAIL_HOUSE", house);
    },
  },
};

export default houseStore;
