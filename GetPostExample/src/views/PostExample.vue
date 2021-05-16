<template>
  <b-jumbotron class="jumbotron jumbotron-home">
    <b-jumbotron header="Vue.js demo" lead="Example 2 POST request">
    <navbar></navbar>

  
    <b-form @submit.prevent="regiter">
      <b-form-group id="input-group-1" label="Your Username:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
          placeholder="Enter username"
          :state="validation"
        ></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Your username must be 5-12 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        description="We'll use this email to activate your account"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-1"
          v-model="form.password1"
          type="password"
          required
          placeholder="Enter your Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>



    </b-form>
    </b-jumbotron>
  </b-jumbotron>
</template>


<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  name: "PostExample",
  data() {
    return {
      form: {
        username: '',
        email: '',
        password1: '',
      },
      resp: ''
    };
  },

  methods: {
    regiter(){
      const options = {
        method: 'POST',
        url: 'http://auctionportalbackend.herokuapp.com/api/users/',
        data: {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password1,
        },
      };
      axios.request(options)
      .then(response => this.resp = response)
      .then(
        console.log(this.resp),
        console.log(this.resp.data)
      )
      .catch(err => console.log(err))
      },
    
  },

  computed: {
    validation() {
      return this.form.username.length > 4 && this.form.username.length < 13
    }
  }
};

</script>

<style scoped>

.jumbotron-home{
    margin: auto;
    padding: auto;
    max-width: 1400px;
    min-height: 1000px;
}
</style>