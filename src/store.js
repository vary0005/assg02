import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: []
  },
  mutations: {
    GET_FORM(state, user) {
      state.user = user;
    }
  },
  actions: {
    //  fetchData({ commit }) {
    //   axios.get("https://vary0005-assg02.firebaseio.com/").then(response => {
    //    commit("GET_FORM", response.data);
    //    });
    // },
    myForm({ commit }, { user }) {
      commit("GET_FORM", {
        user
      });
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },
  mounted() {
    if (window.localStorage.getItem("myData") === null) {
      this.$store.dispatch("FETCH_MY_DATA");
    } else {
      this.$store.commit(
        "FETCH_MY_DATA",
        JSON.parse(window.localStorage.getItem("myData"))
      );
    }
  }
});
