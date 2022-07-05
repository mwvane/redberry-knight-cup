<template>
  <div>
    <div class="row">
      <div class="col-6 image" :style="backgroundImage">
        <CustomHeader></CustomHeader>
        <div class="caption">
          <p>"WHEN YOU SEE A GOOD MOVIE, LOOK FOR A BETTER ONE"</p>
          <p style="color: white">-EMANUEL LASKER</p>
        </div>
      </div>
      <div class="col-6">
        <div class="w-100 p-1" style="border-bottom: 1px solid rgba(100,100,100, .2)">
          <p class="my-1" style="color: black">Start Creating Your Account</p>
        </div>
        <ProgressLevel class="my-3" :levels="levels"></ProgressLevel>
        <h3 class="my-5" style="color: black">Personal Information</h3>
        <b-form @submit="next" class="w-75 my-2">
          <b-form-input
              type="text"
              class="my-3"
              v-model="model.name"
              @input="update"
          ></b-form-input>
          <b-form-input
              type="email"
              class="my-3"
              v-model="model.email"
              @input="update"
          ></b-form-input>
          <b-form-input
              type="number"
              class="my-3"
              v-model="model.phone"
              @input="update"
          ></b-form-input>
          <b-form-input
              type="date"
              class="my-3"
              v-model="model.date_of_birth"
              @input="update"
          ></b-form-input>
          <div class="d-flex justify-content-between py-5">
            <b-button @click="cancel" variant="outline-dark"> Cancel</b-button>
            <b-button type="submit" @click="next" variant="primary">Next</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressLevel from "@/components/ProgressLevel";
import CustomHeader from "@/components/CustomHeader";

export default {
  name: "PersonalInfoComponent",
  components: {
    ProgressLevel,
    CustomHeader
  },
  props: {
    data: Object,
    levels: Array
  },
  data() {
    return {
      model: {}
    }
  },
  mounted() {
    this.model = this.data
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url(${require('../assets/chess2.png')})`,
      }
    }
  },
  methods: {
    update() {
      this.$emit('update', this.model)
    },
    next() {
      this.$emit("next")
    },
    cancel() {
      this.$emit("cancel")
    }
  }
}
</script>

<style>
.image{
  height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  display: block;
  justify-content: center;
  justify-items: center;
}
.caption{
  max-width: 300px;
  margin-top: 130px;
  margin-left: 70px;
}
</style>