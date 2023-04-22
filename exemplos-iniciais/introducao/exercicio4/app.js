new Vue({
	el: '#desafio',
	data: {
		classEfeito: '',
		classe1: 'c1',
		classe2: 'c2',
		userClass: '',
		customClass: '',
		classBool: false,
		estilos: '',
		progress: 0,
		barraContent: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classEfeito = this.classEfeito == 'destaque' ? 'encolher' : 'destaque'
			}, 500)
		},
		iniciarProgresso() {
			this.progress = 0
			this.barraContent = ''
			var refreshIntervalId = setInterval(() => {
				let fundin = 'background-color: green; height: 25px; '
				this.progress < 250 ? this.progress += 50 : clearInterval(refreshIntervalId)
				let qtdProgress = 'width: ' + this.progress + 'px'
				this.barraContent = fundin + qtdProgress
			}, 500)
		}
	}
})
