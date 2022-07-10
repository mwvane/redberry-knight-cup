<template>
  <div v-if="isLoaded">
    <div class="row g-0">
      <div class="col-6 image" :style="backgroundImage">
        <CustomHeader></CustomHeader>
        <div class="caption">
          <p>"WHEN YOU SEE A GOOD MOVIE, LOOK FOR A BETTER ONE"</p>
          <p style="color: white">-EMANUEL LASKER</p>
        </div>
      </div>
      <div class="col-6 px-3">
        <div class="w-100 p-2" style="border-bottom: 1px solid rgba(100,100,100, .2)">
          <p class="my-2" style="color: black">Start Creating Your Account</p>
        </div>
        <ProgressLevel class="my-3" :levels="levels"></ProgressLevel>
        <h3 class="my-5" style="color: black">Personal Information</h3>
        <b-form @submit.prevent="next" class="w-75 my-2">
          <b-form-group class="position-relative">
            <b-form-input
                type="text"
                class="my-3 custom-input"
                v-model="model.name.value"
                @input="update('name')"
                :class="{
                  'is-valid': validFields['name'] === true,
                 'text-danger': validFields['name'] === false,
                 'has-value': model.name.value}"
            ></b-form-input>
            <label class="custom-label">name <span class="text-danger">*</span></label>
          </b-form-group>
          <b-form-group class="position-relative">
            <b-form-input
                type="email"
                class="my-3 custom-input"
                v-model="model.email.value"
                @input="update('email')"
                :class="{
                  'is-valid': validFields['email'] === true,
                  'text-danger': validFields['email'] === false,
                  'has-value': model.email.value}"
            ></b-form-input>
            <label class="custom-label">email <span class="text-danger">*</span></label>
          </b-form-group>

          <b-form-group class="position-relative">
            <b-form-input
                type="number"
                class="my-3 custom-input"
                v-model="model.phone.value"
                @input="update('phone')"
                :class="{
                  'is-valid': validFields['phone'] === true,
                   'text-danger': validFields['phone'] === false,
                   'has-value': model.phone.value}"
            ></b-form-input>
            <label class="custom-label">phone <span class="text-danger">*</span></label>
            </b-form-group>

          <b-form-group class="position-relative">
            <b-form-input
                type="text"
                onfocus="(this.type='date')"
                onblur="if(!this.value)this.type='text'"
                class="my-3 custom-input"
                v-model="model.date_of_birth.value"
                @input="update('date_of_birth')"
                :class="{
                  'is-valid': validFields['date_of_birth'] === true,
                   'text-danger': validFields['date_of_birth '] === false,
                   'has-value': model.date_of_birth.value}"
            ></b-form-input>
            <label class="custom-label">date of birth <span class="text-danger">*</span></label>

          </b-form-group>
          <div class="d-flex justify-content-between py-5">
            <b-button @click="cancel" variant="outline-dark"> Cancel</b-button>
            <b-button type="submit" variant="primary">Next</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressLevel from "@/components/ProgressLevel";
import CustomHeader from "@/components/CustomHeader";
import {mapActions, mapState} from "vuex";
import {registrationMixin} from "@/mixins";

export default {
  name: "PersonalInfoComponent",
  components: {
    ProgressLevel,
    CustomHeader,
  },
  props: {
    data: Object,
    levels: Array
  },
  data() {
    return {
      model: {},
      isLoaded: false,
      error: null,
      validFields: {}
    }
  },
  computed: {
    ...mapState(['errorMessages']),
    backgroundImage() {
      return {
        backgroundImage: `url(${require('../assets/chess2.png')})`,
      }
    }
  },
  mixins: [registrationMixin],
  methods: {
    ...mapActions(['addErrorMessage', 'removeErrorMessage']),
    update(field) {
      this.validFields[field] = null;
      setTimeout(() => {
        this.$emit('update', this.model)
      })
    },
    next() {
      this.validateAndNext(['name', "email", "phone", "date_of_birth"], this.validFields)
    },
    cancel() {
      this.$emit("cancel")
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
  mounted() {
    this.model = {...this.data}
    this.isLoaded = true
  },
}
</script>

<style>
.image {
  height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  display: block;
  justify-content: center;
  justify-items: center;
}

.caption {
  max-width: 300px;
  margin-top: 130px;
  margin-left: 70px;
}

.custom-input {
  border: none !important;
  border-bottom: 3px solid rgba(223, 223, 223, 1) !important;
}

.custom-input:focus {
  background: #E9ECEF !important;
  outline: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.form-control.is-valid {
  background-image: url("../assets/done.png") !important;
  padding-right: calc(1.5em + 0.75rem) !important;
  background-repeat: no-repeat !important;
  background-position: right calc(0.375em + 0.1875rem) center !important;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) !important;
}

.custom-label {
  position: absolute;
  top: 50%;
  left: 0px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 16px;
  color: #333;
  pointer-events: none;
  -webkit-transition: all 0.15s ease-out 0s;
  transition: all 0.15s ease-out 0s;
}

.custom-input:focus + .custom-label,
.custom-input.has-value + .custom-label {
  top: 5px;
  font-size: 14px;
}

</style>