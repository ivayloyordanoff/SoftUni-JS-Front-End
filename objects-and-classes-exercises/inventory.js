function inventory(arr) {
  class Hero {
    constructor(heroName, heroLevel, ...heroItems) {
      this.heroName = heroName;
      this.heroLevel = heroLevel;
      this.heroItems = heroItems;
    }
  }

  let heroArr = [];

  for (const data of arr) {
    let [name, level, ...items] = data.split(" / ");
    heroArr.push(new Hero(name, level, items));
  }

  let sortedHeroArr = heroArr.sort((a, b) => a.heroLevel - b.heroLevel);

  for (const hero of sortedHeroArr) {
    console.log(
      `Hero: ${hero.heroName}\nlevel => ${
        hero.heroLevel
      }\nitems => ${hero.heroItems.join(" ")}`
    );
  }
}
