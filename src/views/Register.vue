<template>
  <div class="main-container">
    <div class="row" v-if="level === 'Personal info'">
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
            <b-button @click="submit" variant="primary">Next</b-button>
          </div>
        </b-form>
      </div>
    </div>

    <div class="row" v-if="level === 'Experience'">
      <div class="col-6">
        <div class="w-100 p-2" style="background-color: #7025FB;">
          <p class="my-2">chess</p>
        </div>
        <img src="../assets/chess3.png" alt="no image" class="w-100">
        <div class="caption">
          <p>"MANY HAVE BECOME CHESS MASTER; NO ONE HAS BECOME THE MASTER OF CHESS"</p>
          <p STYLE="color: white">-SIEGBERT TARRASCH</p>
        </div>
      </div>
      <div class="col-6">
        <div class="w-100 p-2" style="border-bottom: 1px solid rgba(100,100,100, .2)">
          <p class="my-2" style="color: black">First Step Is Done, Continue To Finish Onboarding</p>
        </div>
        <h3 class="my-5" style="color: black">Chess experience</h3>
        <b-form class="w-75 my-2">
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
            <b-form-radio name="participated" v-model="model.already_participated" value="true">Yes</b-form-radio>
            <b-form-radio name="participated" v-model="model.already_participated" value="false">No</b-form-radio>
          </div>

          <div class="d-flex justify-content-between py-5">
            <b-button @click="backLevel" variant="outline-dark"> Back</b-button>
            <b-button @click="done" variant="primary">Done</b-button>
          </div>
        </b-form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      model: {
        name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        experience_level: '',
        already_participated: false,
        character_id: 0,
      },
      level: "Personal info",
      experiences: ['Beginner', 'Intermediate', 'Professional'],
      characters: [],
    }
  },
  mounted() {
    let data = localStorage.getItem('user')
    data = JSON.parse(data)
    if(data){
      this.model.name = data.name
      this.model.email = data.email
      this.model.phone = data.phone
      this.model.date_of_birth = data.date_of_birth
      this.model.character_id = data.character_id
      this.model.already_participated = data.already_participated

    }
    fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
        .then(res => res.json())
        .then(data => this.characters = data)
  },
  methods: {
    update(){
      setTimeout(()=>{
        localStorage.setItem("user",JSON.stringify(this.model))

      },0)
    },
    submit() {
      this.level = 'Experience'
    },
    cancel() {
      this.$router.push({name: 'index'})
    },
    backLevel(){
      this.level = "Personal info"
    },
    done() {
        localStorage.removeItem("user")
    }
  }
}
</script>

<style scoped>
.main-container {
  color: black;
}

.caption {
  color: black;
  max-width: 300px;
  position: absolute;
  top: 211px;
  left: 132px;
  font-weight: bold;

}
</style>