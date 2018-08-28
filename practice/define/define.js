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
    active: {
      type: Boolean,
      default () {
        return false
      },
      validator (value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String
  },
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', compoent)

new Vue({
  el: '#root',
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" prop-one="text2"></comp-one>
    </div>
    `,
  data: {
    prop1: 'text1'

  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  components: {
    CompOne: compoent
  }
})
