<template>
  <div class="main-container overflow-hidden">
    <div v-show="isPersonalInfoLevel">
      <PersonalInfoComponent :data="model"
                             :levels="levels"
                             @cancel="cancel"
                             @update="update"
                             @next="next"
      ></PersonalInfoComponent>
    </div>
    <div v-show="isExperienceLevel">
      <ExperienceComponent :levels="levels"
                           :data="model"
                           :characters="characters"
                           :is-done-button-disabled="isDoneButtonDisabled"
                           @update="update"
                           @back="back"
                           @next="next">
      </ExperienceComponent>
    </div>
    <ErrorPopup></ErrorPopup>

  </div>
</template>

<script>
import {status} from "@/constants";
import PersonalInfoComponent from "@/components/PersonalInfoComponent";
import ExperienceComponent from "@/components/ExperienceComponent";
import ErrorPopup from "@/components/ErrorPopup";
import {mapActions} from "vuex";
import {registrationMixin} from "@/mixins";

export default {
  name: "Register",
  components: {
    PersonalInfoComponent,
    ExperienceComponent,
    ErrorPopup,
  },
  data() {
    return {
      model: {
        name: {
          value: '',
          isRequired: true
        },
        email: {
          value: '',
          isRequired: true
        },
        phone: {
          value: '',
          isRequired: true
        },
        date_of_birth: {
          value: '',
          isRequired: true
        },
        experience_level: {
          value: null,
          isRequired: true
        },
        already_participated: {
          value: null,
          isRequired: true
        },
        character_id: {
          value: null,
          isRequired: true
        },
      },
      level: "Personal info",
      characters: [],
      currentLevelIndex: 0,
      levels: [
        {
          name: "Personal info",
          number: 1,
          status: status.active
        },
        {
          name: "Experience",
          number: 2,
          status: status.hidden
        },
      ],
      apiUrl: "https://chess-tournament-api.devtest.ge",
      isDoneButtonDisabled: false
    }
  },

  computed: {
    isPersonalInfoLevel() {
      return this.currentLevelIndex === 0
    },
    isExperienceLevel() {
      return this.currentLevelIndex === 1
    }
  },
  mixins:[registrationMixin],
  methods: {
    ...mapActions(['addErrorMessage', 'removeErrorMessage']),
    update(model) {
      this.model = {...model}
      localStorage.setItem("user", JSON.stringify(this.model))
    },
    next() {
      if (this.currentLevelIndex + 1 < this.levels.length) {
        this.levels[this.currentLevelIndex].status = 'done'
        this.levels[++this.currentLevelIndex].status = 'active'
        localStorage.setItem('level', this.currentLevelIndex)
      } else {
        this.isDoneButtonDisabled = true
        const data = {
          name: this.model.name.value,
          email: this.model.email.value,
          phone: this.model.phone.value,
          date_of_birth: this.model.date_of_birth.value,
          experience_level: this.model.experience_level.value,
          // already_participated: this.model.already_participated.value === 'true',
          character_id: this.model.character_id.value,
        }
        fetch(`${this.apiUrl}/api/register`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
            .then(res => {
              // res.json()
              if(res.ok){
                return {errors: []}
              }else{
                return res.json()
              }
            })
            .then(res => {
              if (res.errors && res.errors.length) {
                const errors = []
                for(let [i,error] of res.errors.entries()){
                  errors.push({
                    type: 'error',
                    message: error.msg,
                    id: i + 1
                  })
                }
                this.showErrors(errors)
              }else{
                localStorage.removeItem("user")
                this.levels[this.currentLevelIndex].status = status.done
                this.$router.push({name: 'completed'})
              }
              this.isDoneButtonDisabled = false
            })

      }
    },
    cancel() {
      this.$router.push({name: 'index'})
    },
    back() {
      this.levels[this.currentLevelIndex].status = status.hidden
      this.levels[--this.currentLevelIndex].status = status.active
      localStorage.setItem('level', this.currentLevelIndex)
    },
  },
  mounted() {
    let data = localStorage.getItem('user')
    data = JSON.parse(data)
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(this.model, key)) {
          this.model[key] = data[key]
        }
      }
    }
    let levelIndex = localStorage.getItem('level')
    if (!levelIndex) {
      levelIndex = 0
    } else {
      levelIndex = Number(levelIndex)
    }
    this.currentLevelIndex = levelIndex
    for (let i = 0; i < this.currentLevelIndex; i++) {
      this.levels[i].status = status.done
    }
    this.levels[this.currentLevelIndex].status = status.active
    fetch(`${this.apiUrl}/api/grandmasters`)
        .then(res => res.json())
        .then(data => {
          this.characters = data.map(item => {
            item.image = `${this.apiUrl}${item.image}`
            return item
          })
        })
  },
  beforeRouteLeave() {
    localStorage.removeItem('level')
  },
}
</script>

<style scoped>

.caption {
  color: black;
  max-width: 300px;
  top: 211px;
  left: 132px;
  font-weight: bold;
}

.popup {
  position: absolute;
  top: 100px;
  right: 30px;
}
</style>