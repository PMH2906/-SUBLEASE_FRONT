import {
  sidoList, gugunList, houseList, dongList, pointList, tradeCnt, houseDeal, houseTrade, baseAddress,
  buildingInfo, interestArea
} from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    dongs: [{ value: null, text: "선택하세요" }],
    houses: [],
    house: null,
    points: [],
    cntarr: [],
    jibuns: [],
    tradehouse: [],
    address: [],
    markers_food: [],
    markers_tour: [],
    markers_living: [],
  },
  getters: {
    getLatLng: function (state) {
      let arr = [];
      let list = [];
      for (let i = 0; i < state.houses.length; i++) {
        arr[0] = state.houses[i].lat;
        arr[1] = state.houses[i].lng;
        list.push(arr);
      }
      console.log("GETTTTT", list);
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
      // console.log("House List",state.houses);
    },
    SET_DETAIL_HOUSE(state, house) {
      state.house = house;
      // console.log(house);
    },
    SET_POINT_LIST(state, points) {
      state.points = points;
      console.log("Points ", state.points);
    },
    SET_HOUSE_CNT_INIT(state) {
      state.cntarr = [];
    },
    SET_HOUSE_CNT(state, cnts) {
      state.cntarr.push(cnts);
    },
    SET_TRADE_HOUSE(state, tradehouse) {
      state.tradehouse = tradehouse;
      // console.log(state.tradehouse)
    },
    SET_BASE_LIST(state, address) {
      state.address = address;
      // console.log("BASE LIST ",state.address);
    },
    SET_BUILDING_INFO(state, building) {
      state.building = building;
      console.log("BUILDING INFO ", state.building);
    },
    SET_INTEREST_INFO() {
      console.log("SET-Interest_info")
    },
    CREATE_MARKER(state, data) {
      console.log(data.list, data.type)
      if (data.type === "food") {
        console.log(data.list);
        state.markers_food = data.list;
      }
      else if (data.type === "tour") {
        state.markers_tour = data.list;
      }
      else if (data.type === "living") {
        state.markers_living = data.list;
      }
    }
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
    getBaseAddress: ({ commit }, gugunCode) => {
      console.log(gugunCode)
      baseAddress(
        gugunCode,
        ({ data }) => {
          commit("SET_BASE_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      )
    },
    getPointList: ({ commit }, dongCode) => {
      const params = { dongCode: dongCode };
      pointList(
        params,
        ({ data }) => {
          commit("SET_POINT_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      )
    },
    getHouseList: ({ commit }, data) => {
      const params = {
        dongCode: data.dongCode,
        jibun: data.jibun
      };
      console.log(params);
      houseList(
        params,
        ({ data }) => {
          commit("SET_HOUSE_LIST", data);
          commit("SET_HOUSE_CNT_INIT");
          console.log("set house List", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getTradeCnt: ({ commit }, params) => {
      console.log("ㅇata 넣으므안ㅁㄹ",params)
      tradeCnt(params,({data})=>{
        console.log("tradecnt data",data);
        const obj={jibun:params.jibun,cnt:data};
        console.log("안녕",obj)
        commit("SET_HOUSE_CNT",obj);
      },
      (error)=>{
        console.log(error);
      })
    },
    getDetailHouse: ({ commit }, aptCode) => {
      houseDeal(
        aptCode,
        ({ data }) => {
          commit("SET_DETAIL_HOUSE", data);
        },
        (error) => {
          console.log(error);
        }
      )
    },
    getTradeList: ({ commit }, data) => {
      console.log(data.dongCode, data.jibun)
      const params = {
        dongCode: data.dongCode,
        jibun: data.jibun
      };
      houseTrade(
        params,
        ({ data }) => {
          commit("SET_TRADE_HOUSE", data);
        },
        (error) => {
          console.log(error);
        }
      )
    },
    getBuildingInfo: ({ commit }, data) => {
      console.log("Info ", data);
      const params = { dongCode: data };
      buildingInfo(
        params,
        ({ data }) => {
          commit("SET_BUILDING_INFO", data);
        },
        (error) => {
          console.log(error);
        }
      )
    },

    //관심지역
    setInterestArea: ({ commit }, data) => {
      console.log("Interest", data);
      const params = { dongCode: data.dongCode, userid: data.userId };
      interestArea(
        params,
        ({ data }) => {
          commit("SET_INTEREST_INFO", data);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  },
};

export default houseStore;
