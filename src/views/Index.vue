<template>
  <div class="main-container overflow-hidden">
    <div class="row">
      <div class="col-6 image" :style="backgroundImage">
        <CustomHeader class="w-100"></CustomHeader>
      </div>
      <div class="col-6 d-flex justify-content-center align-items-center" style="background: #FD5334;">
        <div class="w-50">
          <h1> CHES SAYS <span style="color: black; font-size: 16px">a lot about</span> WHO WE ARE</h1>
          <b-button @click="register" class="my-4">Get started <font-awesome-icon icon="circle-right"></font-awesome-icon></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader";
export default {
  name: "Index",
  components:{CustomHeader},
  computed:{
    backgroundImage() {
      return {
        backgroundImage: `url(${require('../assets/chess1.png')})`,
      }
    }
  },
  methods:{
    register(){
      this.$router.push({name: 'register'})
    }
  }
}
</script>

<style scoped>
.main-container{
  color: white;
}
.image{
  height: 100vh;
  background-size: cover;
}
</style>