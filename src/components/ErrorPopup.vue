<template>
  <div v-if="errorMessages" class="main-container">
    <div v-for="error  in errorMessages" :key="error.id" >
      <div class="error-item mx-2">
        <div class="error-header">
          <font-awesome-icon icon="circle-exclamation"></font-awesome-icon>
          <span class="mx-2">{{error.type}}</span>
        </div>
        <div class="error-body">
          <span>{{ error.message }}</span>
        </div>
        <button class="custom-btn" @click="close(error.id)">
          <font-awesome-icon icon="xmark"></font-awesome-icon>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ErrorPopup",
  props: {
    errorType: {
      default: "Error"
    },
    errorText: {
      default: "Error"
    },
  },
  computed: {
    ...mapState(['errorMessages'])
  },
  methods: {
    ...mapActions(["removeErrorMessage"]),
    close(id) {
      this.removeErrorMessage(id)
    },
  },
}
</script>

<style scoped>
.main-container {
  max-width: 300px;
  display: block;
  top: 15px;
  right: 25px;
  position: absolute;
  z-index: 99;
}

.error-item {
  margin: 4px;
  padding: 4px;
  position: relative;
  display: block;
  color: black;
  border-radius: 8px;
  box-shadow: 0 4px 10px 0 rgba(45, 45, 45, .3);
  width: 100%;
  border: 2px solid rgba(100, 100, 100, .1);
  background: white;
}

.error-header {
  color: red;
  font-size: 12px;
  padding: 4px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.error-body {
  font-size: 14px;
  padding: 8px;
}

.custom-btn {
  font-size: 12px;
  position: absolute;
  border: none;
  background: transparent;
  top: 10px;
  right: 10px;
}
</style>