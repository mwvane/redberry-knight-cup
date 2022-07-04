<template>
  <div class="main-container">
    <div class="row">
      <div class="col-6">
        <div class="w-100 p-2" style="background-color: #7025FB">
          <p>Redberry knight cup</p>
        </div>
        <img src="../assets/chess1.png" alt="no image" class="w-100">
      </div>
      <div class="col-6" style="background: #FD5334;">
        <h1> CHES SAYS WHO WE ARE <span style="color: black; font-size: 16px">a lot about</span></h1>
        <b-button @click="register">Get started <font-awesome-icon icon="circle-right"></font-awesome-icon></b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
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
</style>