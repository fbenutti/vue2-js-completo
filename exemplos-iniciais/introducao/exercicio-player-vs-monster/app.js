new Vue({
	el: '#desafio',
	data: {
		start: false,
		playerLife: 100,
		monsterLife: 100,
		monsterLifeClass: 'bg-success',
		playerLifeClass: 'bg-success',
		actionLog: [],
		loseEndgame: false,
		winEndgame: false
	},
	methods: {
		startGame(){
			this.start = true
			this.resetStatus()
			this.actionLog.push(['Game started', 'bg-info text-primary-emphasis'])
		},
		quitGame(){
			this.start = false
			this.resetStatus()
		},
		attack(){
			let monsterDmg = this.randomIntFromInterval(6, 13)
			this.actionLog.push([`Monster dealt <strong>${monsterDmg} points</strong> of damage to Player`, 'bg-danger text-white text-uppercase'])
			let playerDmg = this.randomIntFromInterval(7, 10)
			this.actionLog.push([`Player dealt <strong>${playerDmg} points</strong> of damage to Monster`, 'bg-primary text-white text-uppercase'])

			this.playerLife -= monsterDmg
			this.monsterLife -= playerDmg
			this.checkLife()
		},
		specialAttack(){
			let monsterDmg = this.randomIntFromInterval(7, 10)
			this.actionLog.push([`Monster dealt <strong>${monsterDmg} points</strong> of damage to Player`, 'bg-danger text-white text-uppercase'])
			let playerDmg = this.randomIntFromInterval(6, 13)
			this.actionLog.push([`Player dealt <strong>${playerDmg} points</strong> of damage to Monster`, 'bg-primary text-white text-uppercase'])

			this.playerLife -= monsterDmg
			this.monsterLife -= playerDmg

			this.checkLife()
		},
		heal(){
			let monsterDmg = this.randomIntFromInterval(7, 10)
			this.actionLog.push([`Monster dealt <strong>${monsterDmg} points</strong> of damage to Player`, 'bg-danger text-white text-uppercase'])
			let playerHeal = this.randomIntFromInterval(4, 18)
			this.actionLog.push([`Player healed <strong>${playerHeal} points</strong> of damage to Monster`, 'bg-success text-white text-uppercase'])

			this.playerLife -= monsterDmg
			this.playerLife += playerHeal

			this.checkLife()
		},
		randomIntFromInterval(min, max) { // min and max included 
			return Math.floor(Math.random() * (max - min + 1) + min)
		},
		checkLife(){
			this.playerLifeClass = this.returnLifeClassByPercent(this.playerLife)
			this.monsterLifeClass = this.returnLifeClassByPercent(this.monsterLife)
			if (this.playerLife <= 0){
				this.playerLife = 0
				this.loseEndgame = true
				this.start = false
				this.actionLog.push([`End game!`, 'bg-dark text-white text-uppercase'])
			}
			
			if (this.monsterLife <= 0){
				this.monsterLife = 0 
				this.winEndgame = true
				this.start = false
				this.actionLog.push([`End game!`, 'bg-dark text-white text-uppercase'])
			}
			
			if (this.playerLife >= 100)
				this.playerLife = 100
			if (this.monsterLife >= 100)
				this.monsterLife = 100
		},
		returnLifeClassByPercent(life){
			if (life > 60) {
				return 'bg-success'
			} else if (life > 25) {
				return 'bg-warning'
			} else {
				return 'bg-danger'
			}
		},
		resetStatus(){
			this.playerLife = 100
			this.monsterLife = 100
			this.monsterLifeClass = 'bg-success'
			this.playerLifeClass = 'bg-success'
			this.winEndgame = false
			this.loseEndgame = false
			this.actionLog = []
		},
		getClassFromLog(action, value){
			console.log("getClassFromLog: action = " + action + " | value = " + value)
			if(action == 'classMsg')
				return value
		},
		getValueFromLog(action, value){
			console.log("getValueFromLog: action = " + action + " | value = " + value)
			if(action == 'msg')
				return value
		}
	}
});
