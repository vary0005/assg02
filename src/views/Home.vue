<template>
  <div class="home">
    <HelloWorld msg="Sign Up" />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(["myForm"])
    // newComputed() {}
  },
  methods: {
    ...mapActions(["updateForm"]),
    theForm(form, dash) {
      // send the quantity to store and update the state and database
      if (form >= 0) {
        this.updateForm({ form: form, dash: dash });
      } else {
        // throw an error
        console.log("This form does not submit");
      }
    }
  }
};
</script>
