
function Character() {
  this.health = 1000;
  this.level = 1;

  this.receiveDamage = function (damage) {
    this.health -= damage;
  }

  this.receiveHealAmonunt = function (healAmount) {
    if (!this.isAlive()) return;
    this.health += healAmount;
  }

  this.isAlive = function () {
    return this.health > 0;
  }
}
