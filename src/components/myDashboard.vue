<template>
  <div class="dashboard">
    <h1>{{ dashboard }}</h1>
    <div
      class="card"
      style="width: 50rem; height: 23rem; margin: 0 auto; margin-top: 6rem;"
    >
      <P>Welcome {{ name }}</P>
      <p>Your signup email is {{ email }}</p>
      <button
        type="reset"
        @click="resetForm(myForm)"
        style="width: 25%; margin: 0 auto; margin-top: 10rem;"
        class="btn btn-primary"
      >
        CLEAR DATA
      </button>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
