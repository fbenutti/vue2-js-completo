new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: 'Valor diferente'
    },
    watch: {
        resultado(){
            var refreshIntervalId = setInterval(() => {
                this.valor = 0
                clearInterval(refreshIntervalId)
            }, 2000)
        }
    },
    methods: {
        resultar() {
            this.resultado = this.valor == 37 ? 'Valor igual' : 'Valor diferente'
            return this.resultado
        }
    }
});