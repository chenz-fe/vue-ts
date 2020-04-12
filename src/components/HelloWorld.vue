<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <input type="text" @keydown.enter="addFeature" />
    </p>
    <div v-for="item in features" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import axios from 'axios'

interface Feature {
  name: string
  id: number
}

interface Result<T> {
  ok: 0 | 1
  data: T
}

// 泛型方法
// function getData<T>(): Promise<Result<T>> {
//   const data: any = [
//     { id: 1, name: '类型注解', version: '2.0' },
//     { id: 2, name: '编译型语言', version: '1.0' }
//   ]
//   return Promise.resolve<Result<T>>({ ok: 0, data })
// }

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String, required: true }) private msg!: string

  // 属性相当于data
  private features: Feature[] = []

  @Emit()
  private addFeature(event: any) {
    const feature = { name: event.target.value, id: this.features.length + 1 }
    this.features.push(feature)
    event.target.value = ''
  }

  @Watch('msg')
  onMsgChange(newVal: string, oldVal: string) {
    console.log(111)
    console.log('msg change: new msg-' + newVal + ', old msg-' + oldVal)
  }

  created() {
    axios.get<Feature[]>('/api/list').then(res => {
      this.features = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
