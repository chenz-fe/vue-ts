<template>
  <div>
    <p>----------------------</p>
    <p>Test 组件 vuex 测试</p>
    <input type="text" @keydown.enter="addFeature" />
    <div v-for="item in features" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { State, Action, Mutation } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Test extends Vue {
  @State features!: string[]
  @Action addFeatureAction: any
  @Mutation addFeatureMutation: any

  private addFeature(event: any) {
    this.addFeatureAction(event.target.value)
    event.target.value = ''
  }
}
</script>

<style scoped></style>
