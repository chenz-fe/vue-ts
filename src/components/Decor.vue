<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

function Component(options: any) {
  return function(target: any) {
    return Vue.extend(options)
  }
}

@Component({
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
})
export default class Decor extends Vue {}
</script>

<style scoped></style>
