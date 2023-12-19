function inventory(arr)
{
   let heroes = [];
   
   arr.forEach((heroInfo) =>
   {
        let [name, level, items] = heroInfo.split(" / ");

        let newHero = 
        {
            name,
            level: Number(level),
            Items: items
        }

        heroes.push(newHero);
   });

   heroes.sort((a,b) => a.level - b.level);

   heroes.forEach((hero) => 
   {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.Items}`)
   })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara' 
    ])  