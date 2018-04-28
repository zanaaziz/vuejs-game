new Vue({
    el: "#game",
    data: {
        gameActive: false,
        playerHealth: 100,
        enemyHealth: 100,
        logs: []
    },
    methods: {
        startGame: function () {
            this.gameActive = true;
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.logs = ["May the best player win!"];
        },
        gameStatus: function () {
            if (this.enemyHealth <= 0) {
                this.enemyHealth = 0;
                alert("Winner winner chicken dinner!");
                this.gameActive = false;
            }else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                alert("Better luck next time.");
                this.gameActive = false;
            }
        },
        attack: function () {
            var enemyDamage = Math.floor(Math.random() * (10 - 2 + 1)) + 2
            this.enemyHealth -= enemyDamage;

            var playerDamage = Math.floor(Math.random() * (10 - 5 + 1)) + 5
            this.playerHealth -= playerDamage;

            this.logs.push("You (attacked) and inflicted (" + enemyDamage + ") damage but the enemy countered with (" + playerDamage + ") damage on you.");

            this.gameStatus();
        },
        specialAttack: function () {
            var enemyDamage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            this.enemyHealth -= enemyDamage;

            var playerDamage = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
            this.playerHealth -= playerDamage;

            this.logs.push("You (special attacked) and inflicted (" + enemyDamage + ") damage but the enemy countered with (" + playerDamage + ") damage on you.");

            this.gameStatus();
        },
        heal: function () {
            var enemyDamage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
            var heal = 12 - enemyDamage;
            this.playerHealth += heal;

            if (this.playerHealth > 100) {
                this.playerHealth = 100;
                this.logs.push("You have max health!");
            }else{
                this.logs.push("You managed to heal (" + heal + ") health.");
            }
        }
    }
});