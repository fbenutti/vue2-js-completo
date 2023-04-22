new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: '',
    },
    methods: {
        exibirAlerta(){
            alert('oi!')
        },
        pegaValor(event){
            this.valor = event.target.value
        },
        pegaValor2(event){
            this.valor2 = event.target.value
        }
    }
})