let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    seen: true,
    todoList: ['test', '2', '3,', 'four'],
    message2: 'testing'
  },
  methods: {
    reverseMessage() {
      this.message2 = this.message2
        .split('')
        .reverse()
        .join('')
    }
  }
})
