import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name:{{name}}</p>
      <p>Name:{{getName()}}</p>
      <p>Number:{{number}}</p>
      <p>fullName:{{fullName}}</p>
      <p><input type="text" v-model="number"></p>
      <p>firstName: <input type="text" v-model="firstName"></p>
      <p>lastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
      </div>
  `,
  data: {
    firstName: 'cclu',
    lastName: 'lee',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true, // true: 声明handler后 立刻执行;flase: 数据发生改变才执行
      deep: true //
    },
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true // true: 声明handler后 立刻执行;flase: 数据发生改变才执行
      // deep: true // 深入观察 该对象下的所有键都会被监听观察
    }
  },
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split('')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
