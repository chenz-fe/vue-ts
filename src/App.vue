<template>
  <div id="app">
    <HelloWorld :msg="msg" @addFeature="handleAddFeature" />
    <Test />
    <Decor msg="this is a msg from app.vue" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Decor from './components/Decor.vue'

@Component({
  components: {
    HelloWorld,
    Test,
    Decor
  }
})
export default class App extends Vue {
  private msg = ''
  handleAddFeature(feature: any): void {
    console.log(feature.name)
  }
  created() {
    // 为了触发子组件的 watch
    setTimeout(() => {
      this.msg = 'This is a msg'
    }, 1000)
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
