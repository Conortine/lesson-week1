var gameover = false; 
var battle = false;

function Character(name, hp, att) {
  this.name = 텐타시온;
  this.hp = 3000;
  this.atk = 200;
  this.def = 25;
}

function Character2(name, hp, att) {
    this.name = 쥬스월드;
    this.hp = 2000;
    this.atk = 150;
    this.def = 50;
}

Character.prototype.attacked = function (damage) { 
  this.hp -= damage;
  damage = this.atk-that.def
  if (this.hp <= 0) {
      battle = false;
  }
  Character2.prototype.attacked = function (damage) { 
    this.hp -= damage;
    damage = this.atk-that.def
    if (this.hp <= 0) {
        battle = false;
}
Character.prototype.attack = function (target) { 
  target.attacked(this.att);
}


export function attack(a, b) {
  
  return a.atk - b.def;
}
