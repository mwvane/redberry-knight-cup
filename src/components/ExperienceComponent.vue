<template>
  <div>
    <div class="row">
      <div class="col-6 image" :style="backgroundImage">
        <CustomHeader></CustomHeader>
        <div class="caption">
          <p>"MANY HAVE BECOME CHESS MASTER; NO ONE HAS BECOME THE MASTER OF CHESS"</p>
          <p style="color: white">-SIEGBERT TARRASCH</p>
        </div>
      </div>
      <div class="col-6">
        <div class="w-100 p-2" style="border-bottom: 1px solid rgba(100,100,100, .2)">
          <p class="my-2" style="color: black">First Step Is Done, Continue To Finish Onboarding</p>
        </div>
        <ProgressLevel :levels="levels"></ProgressLevel>
        <h3 class="my-5" style="color: black">Chess experience</h3>
        <form class="w-75 my-2">
          <b-form-select class="w-50" v-model="model.experience_level" @input="update">
            <b-form-select-option v-for="item in experiences" :key="item" :value="item">
              {{ item }}
            </b-form-select-option>
          </b-form-select>
          <b-form-select class="w-50" v-model="model.character_id" @input="update">
            <b-form-select-option v-for="person in characters" :key="person.id" :value="person.id">
              {{ person.name }}
            </b-form-select-option>

          </b-form-select>
          <div class="my-5">
            <p>Have you participated in the Redberry Championship?</p>
            <b-form-radio name="participated"
                          v-model="model.already_participated"
                          value="true"
                          @input="update"
            >Yes</b-form-radio>
            <b-form-radio name="participated"
                          v-model="model.already_participated"
                          value="false"
                          @input="update"
            >No</b-form-radio>
          </div>

          <div class="d-flex justify-content-between py-5">
            <b-button @click="back" variant="outline-dark"> Back</b-button>
            <b-button @click="done" variant="primary">Done</b-button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader";
import ProgressLevel from "@/components/ProgressLevel";
export default {
  name: "ExperienceComponent",
  components:{
    CustomHeader,
    ProgressLevel,
  },
  props: {
    data: Object,
    levels: Array,
    characters: Object,
  },
  data() {
    return {
      model: {},
      experiences: ['Beginner', 'Intermediate', 'Professional'],
    }
  },
  mounted() {
    this.model = this.data
  },
  computed:{
    backgroundImage() {
      return {
        backgroundImage: `url(${require('../assets/chess3.png')})`,
      }
    }
  },
  methods:{
    update(){
      this.$emit('update', this.model)
    },
    back(){
      this.$emit('back')
    },
    done(){
      this.$emit('done')
    },
  }
}
</script>

<style scoped>

</style>