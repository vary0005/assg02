<template>
  <div class="dashboard">
    <h1>{{ dashboard }}</h1>
    <div
      class="card"
      style="width: 50rem; height: 23rem; margin: 0 auto; margin-top: 6rem;"
    >
      <h1>Welcome {{ name }}</h1>
      <br />
      <p>Your signup email is {{ email }}</p>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  data() {
    return {
      dashboard: "This is my dashboard",
      email: null,
      name: null
    };
  },
  computed: mapGetters(["getUser"]),
  created() {
    this.email = this.getUser.user.email;
    this.name = this.getUser.user.name;
  },

  props: {
    msg: String
  }
};
</script>

<style lang="css">
h1 {
  background-color: white;
}
</style>
