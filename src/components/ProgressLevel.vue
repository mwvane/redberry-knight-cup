<template>
  <div class="main-container d-flex">
    <div v-for="level in levels" :key="level.number">
      <div>
        <div class="numeration">
          <div v-if="level.status === active" class="active">
            {{level.number}}
          </div>
          <div v-if="level.status === hidden" class="disabled">
            {{level.number}}
          </div>
          <div v-if="level.status === done" class="done">
            <font-awesome-icon icon="check-double"></font-awesome-icon>
          </div>
        </div>
        <label style="font-size: 13px">{{level.name}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import {status} from "@/constants";
export default {
  name: "ProgressLevel",
  props:{
    levels: Array
  },
  data(){
    return{
      active: status.active,
      hidden: status.hidden,
      done: status.done
    }
  },
}
</script>

<style scoped>
.numeration{
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid rgba(100,100,100, .3);
  color: black;
  font-size: 16px;
  text-align: center;
  margin-right: 100px;
}
.active{
  font-weight: bold;
  width: 100%;
  height: 100%;
  background-color: #E9FAF1;
}
.done{
  width: 100%;
  height: 100%;
  background-color: #E9FAF1;
  color: #3BAF77
}
.disabled{
  width: 100%;
  height: 100%;
  background-color: #E5E6E8;
}
.line{
  width: 100%;
  height: 4px;
  background-color: black;
  position: absolute;
  z-index: -1;
  top: 12px
}
</style>