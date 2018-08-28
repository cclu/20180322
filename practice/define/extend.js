import Vue from 'vue'

const compoent = {
  template: `
    <div>
      <input type="text" v-model.number="text"/>
      <span v-show="active">see me if active</span>
      <span @click="handleChange">{{propOne}}</span>
    </div>
  `,
  props: {
    active: Boolean,
    propOne: {
      // required: true,
      type: String
    }
  },
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent',
  data () {
    return {
      text: '11123321'
    }
  }
})

const componet2 = {

  extends: compoent,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
  }
}

// const CompVue = Vue.extend(compoent)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'

//   },
//   data () {
//     return {
//       text: 123

//     }
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: componet2
  },
  template: `<comp></comp>`,
  mounted () {
    console.log(this.$parent.$options.name)
  }
})
