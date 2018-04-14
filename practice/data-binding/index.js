import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  // <div :id="dd" @click="handleClick">
  //   {{Date.now()+arr.join(1)}}
  //   <p v-html="html"></p>
  //   </div>`, // 一行语句可以返回结果的
  template: `
    <div :class="[{ 'active' : isActive}]">
      <p :style="[styles,style2]">{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3, 4, 5],
    html: '<span>ddd</span>',
    dd: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    style2: {
      background: '#fff111'
    }
  },
  computed: { // 当数据变化时 才会触发
    clasName () {}
  },
  methods: {
    handleClick () {
      alert('hhhhh')
    },
    getJoinedArr (arr) {
      return arr.join(',')
    }
  }
})
