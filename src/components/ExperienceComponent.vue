<template>
  <div>
    <div class="row g-0">
      <div class="col-6 image" :style="backgroundImage">
        <CustomHeader></CustomHeader>
        <div class="caption">
          <p>"MANY HAVE BECOME CHESS MASTER; NO ONE HAS BECOME THE MASTER OF CHESS"</p>
          <p style="color: white">-SIEGBERT TARRASCH</p>
        </div>
      </div>
      <div class="col-6 px-3">
        <div class="w-100 p-2" style="border-bottom: 1px solid rgba(100,100,100, .2)">
          <p class="my-2" style="color: black">First Step Is Done, Continue To Finish Onboarding</p>
        </div>
        <ProgressLevel :levels="levels" class="my-3"></ProgressLevel>
        <h3 class="my-5" style="color: black">Chess experience</h3>
        <form class="my-2" style="width: 85%">
          <div class="row">
            <div class="col-6">
              <v-select v-model="model.experience_level.value"
                        :options="experiences"
                        :searchable="false"
                        :reduce="item => item.code"
                        @update:modelValue="update"
                        class="mx-2 d-block"
                        :selectable="(option) => option.code !== null">
              </v-select>

            </div>
            <div class="col-6">
              <v-select v-model="model.character_id.value"
                        :options="charactersWithPlaceholder"
                        :reduce="item => item.id"
                        :searchable="false"
                        @update:modelValue="update"
                        class="d-block"
                        :selectable="(option) => option.id !== null">
                <template v-slot:option="option">
                  <div class="d-flex justify-content-between">
                    <span>{{ option.name }}</span>
                    <img :src="option.image" alt="" style="height:50px; width: 50px">
                  </div>
                </template>
                <template v-slot:selected-option="option">
                  <div class="w-100">
                    <div class="d-flex justify-content-between">
                      <span>{{ option.name }}</span>
                      <img :src="option.image" alt="" class="mx-3" style="height: 30px; width: 30px">
                    </div>
                  </div>
                </template>
              </v-select>

            </div>
          </div>
          <div class="my-5">
            <p>Have you participated in the Redberry Championship? <span class="text-danger">*</span></p>
            <b-form-radio name="participated"
                          v-model="model.already_participated.value"
                          value="true"
                          @input="update"
            >Yes
            </b-form-radio>
            <b-form-radio name="participated"
                          v-model="model.already_participated.value"
                          value="false"
                          @input="update"
            >No
            </b-form-radio>
          </div>

          <div class="d-flex justify-content-between py-5">
            <b-button @click="back" variant="outline-dark"> Back</b-button>
            <b-button :disabled="isDoneButtonDisabled" @click="next" variant="primary">Done</b-button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader";
import ProgressLevel from "@/components/ProgressLevel";
import {registrationMixin} from "@/mixins";
import {mapActions} from "vuex";
import 'vue-select/dist/vue-select.css'

export default {
  name: "ExperienceComponent",
  components: {
    CustomHeader,
    ProgressLevel,
  },
  props: {
    data: Object,
    levels: Array,
    characters: Object,
    isDoneButtonDisabled:{
      default: false
    }
  },
  data() {
    return {
      model: {},
      validFields: {},
      experiences: [
        {
          label: 'level of knowledge *',
          code: null
        },
        {
          label: "beginner",
          code: "beginner"
        },
        {
          label: "intermediate",
          code: "normal"
        },
        {
          label: "professional",
          code: "professional"
        },
      ],
    }
  },
  watch: {
    data: {
      handler(newData) {
        this.model = {...newData}
      },
      deep: true
    }
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url(${require('../assets/chess3.png')})`,
      }
    },
    charactersWithPlaceholder() {
      return [
        {
          id: null,
          name: "Choose your character *",
          image: require("../assets/empty.png"),
        },
        ...this.characters
      ]
    },
  },
  mixins: [registrationMixin],
  methods: {
    ...mapActions(['removeErrorMessage', 'addErrorMessage']),
    update() {
      setTimeout(() => {
        this.$emit('update', this.model)
      })
    },
    back() {
      this.$emit('back')
    },
    next() {
      this.validateAndNext(["character_id", "experience_level", "already_participated"], this.validFields)
    },
  },
  beforeMount() {
    this.model = {...this.data}
  },

}
</script>

<style>
.vs__selected {
  width: 100% !important;
}

.vs__search {
  display: none;
}

.vs__selected-options {
  min-height: 35px;
}
</style>