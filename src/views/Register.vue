<template>
  <div class="main-container">
    <div class="row">
      <div class="col-6">
        <div class="w-100 p-2" style="background-color: #7025FB;">
          <p class="my-2">chess</p>
        </div>
        <img src="../assets/chess2.png" alt="no image" class="w-100">
        <div class="caption">
          <p>"WHEN YOU SEE A GOOD MOVIE, LOOK FOR A BETTER ONE"</p>
          <p STYLE="color: white">-EMANUEL LASKER</p>
        </div>
      </div>
      <div class="col-6">
        <div class="w-100 p-2" style="border-bottom: 1px solid rgba(100,100,100, .2)">
          <p class="my-2" style="color: black">Start Creating Your Account</p>
        </div>
        <h3 class="my-5" style="color: black">Personal Information</h3>
        <b-form class="w-75 my-2">
          <b-form-input type="text" class="my-3" v-model="name"></b-form-input>
          <b-form-input type="email" class="my-3" v-model="email"></b-form-input>
          <b-form-input type="number" class="my-3" v-model="phone"></b-form-input>
          <b-form-input type="date" class="my-3" v-model="DOB"></b-form-input>
          <div class="d-flex justify-content-between py-5">
            <b-button @click="cancel" variant="outline-dark"> Cancel</b-button>
            <b-button @click="submit" variant="primary">Next</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      name: '',
      email: '',
      phone: '',
      DOB: '',
    }
  },
  methods:{
    submit(){

    },
    cancel(){
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style scoped>
.main-container{
  color: white;
}
.caption{
  color: black;
  max-width: 300px;
  position: absolute;
  top: 211px;
  left: 132px;
  font-weight: bold;

}
</style>