new Vue({
	el: '#desafio',
	data: {
		progress: 0,
		barraContent: ''
	},
	methods: {
		iniciarProgresso() {
			this.progress = 0
			this.barraContent = ''
			var refreshIntervalId = setInterval(() => {
				let fundin = 'background-color: green; height: 21px; '
				this.progress < 245 ? this.progress += 49 : clearInterval(refreshIntervalId)
				let qtdProgress = 'width: ' + this.progress + 'px'
				this.barraContent = fundin + qtdProgress
			}, 500)
		}
	}
});
