<template>
  <div class="main-container" :style="style">
    <font-awesome-icon :icon="icon" class="px-1"></font-awesome-icon>
    <label class="h-100 text py-3">{{text}}</label>
  </div>
</template>

<script>
export default {
  name: "CustomHeader",
  props:{
    icon: {
      default: "chess-queen"
    },
    text: {
      default: "Redberry knight cup"
    },
    style: {
      default: 'background: #7025FB'
    }
  }
}
</script>

<style scoped>
.main-container{
  height: 55px;
  color: white;
  padding-left: 20px;
}
</style>