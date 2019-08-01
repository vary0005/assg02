<template>
  <div class="dashboard">
    <myDashboard msg="Connection to dashboard page" />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import myDashboard from "@/components/myDashboard.vue";
import home from "@/views/Home.vue";

export default {
  name: "dashboard",
  components: {
    myDashboard
  },
  data() {
    return {};
  }
};
</script>
