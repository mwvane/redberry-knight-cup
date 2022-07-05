<template>
  <div class="main-container overflow-hidden">
    <div v-show="level === personalInfo">
      <PersonalInfoComponent :data="model"
                             :levels="levels"
                             @next="next"
                             @cancel="cancel"
                             @update="update"
      ></PersonalInfoComponent>
    </div>
    <div v-show="level === experience">
      <ExperienceComponent :levels="levels"
                           :data="model"
                           :characters="characters"
                           @update="update"
                           @back="back"
                           @done="done">

      </ExperienceComponent>
    </div>

  </div>
</template>

<script>
import {level, status} from "@/constants";
import PersonalInfoComponent from "@/components/PersonalInfoComponent";
import ExperienceComponent from "@/components/ExperienceComponent";

export default {
  name: "Register",
  components: {
    PersonalInfoComponent,
    ExperienceComponent
  },
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
          status: status.disabled
        },
      ]
    }
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
    fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
        .then(res => res.json())
        .then(data => this.characters = data)
  },
  computed: {
    personalInfo() {
      return level.personalInfo
    },
    experience() {
      return level.experience
    },
  },
  methods: {
    update() {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify(this.model))
      }, 0)
    },
    next() {
      this.level = level.experience
      debugger
      this.levels[this.currentLevelIndex].status = 'done'
      this.levels[this.currentLevelIndex + 1].status = 'active'
      this.level = this.levels[this.currentLevelIndex].name
    },
    cancel() {
      this.$router.push({name: 'index'})
    },
    back() {
      this.level = level.personalInfo
      this.levels[this.currentLevelIndex].status = status.disabled
      this.levels[--this.currentLevelIndex].status = status.active
    },
    done() {
      localStorage.removeItem("user")
      this.levels[this.currentLevelIndex].status = status.done
      this.$router.push({name: 'completed'})
    }
  }
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
</style>