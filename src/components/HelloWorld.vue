<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      class="card"
      style="width: 50rem; height: 23rem; margin: 0 auto; margin-top: 6rem;"
    >
      <div class="card-body">
        <h5 class="card-title">{{ register }}</h5>
        <form class="myForm" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="exampleInputName1">Name</label>
            <input
              type="name"
              class="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
              v-model="myFormData.name"
            />
            <small id="nameHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="myFormData.email"
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="myFormData.password"
            />
          </div>

          <button type="submit" @click="submitForm" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      register: "Register Here",
      allcomments: [],
      myFormData: {
        name: "",
        email: "",
        password: ""
      }
    };
    //{
    // console.log("my registration page");
    //}
  },
  props: {
    msg: String
  },
  methods: {
    ...mapActions(["myForm"]),
    submitForm() {
      this.myForm({ user: this.myFormData });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
