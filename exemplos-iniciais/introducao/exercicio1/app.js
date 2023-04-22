new Vue({
  el: '#desafio',
  data: {
    nome: 'Felipe B Benutti',
    idade: '32',
    imgScroller: 'https://images.scrolller.com/atto/beware-beware-of-the-wolf-in-here-by-molly-cbto994ugo-1795x1080.jpg'
  },
  methods: {
    random: function(){
      return Math.random()
    }
  }
})