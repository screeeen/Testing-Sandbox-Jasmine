

describe("Character initialisations", function () { // Describes the suite / group of tests
  it("health starts at 1000", function () {
    var character = new Character();
    expect(character.health).toEqual(1000);
  });

  it("level starts at 1", function () {
    var character = new Character();
    expect(character.level).toEqual(1);
  });

  it("is alive", function () {
    var character = new Character();
    expect(character.isAlive()).toEqual(true);
  });
});


describe("Characters can Deal Damage should", function () { // Describes the suite / group of tests
  it("substract damage to health", function () {
    var character = new Character();
    character.receiveDamage(1);
    expect(character.health).toEqual(999);
  });

  it("The character dies when substracted damage to health exceeds current health", function () {
    var character = new Character();
    character.receiveDamage(1000);
    expect(character.isAlive()).toEqual(false);
  });

});

describe("A Character can Heal a Character", function () { // Describes the suite / group of tests
  it("Dead characters cannot be healed", function () {
    var character = new Character();
    character.alive = false;
    character.receiveHealAmonunt(1);
    expect(character.alive).toEqual(false);
  });



  
});