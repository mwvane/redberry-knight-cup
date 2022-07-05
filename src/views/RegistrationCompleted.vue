<template>
  <div class="main-container">
    <div class="row">
      <div class="col-6">
        <CustomHeader></CustomHeader>
        <img src="../assets/chess4.png" alt="no image" class="w-100">
      </div>

      <div class="col-6 d-flex justify-content-center just align-items-center">
          <div class="hello">
            <img src="../assets/congret.png" alt="no image" class="w-100">
            <label style="font-weight: bold; font-size: 24px">Onboarding Completed!</label>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader";

export default {
  name: "RegistrationCompleted",
  components: {CustomHeader}
}
</script>

<style scoped>
.hello {
  width: 300px;
  height: 300px;
}
</style>