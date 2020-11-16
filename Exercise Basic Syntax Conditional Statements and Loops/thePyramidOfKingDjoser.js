function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let counter = 0;
    let totalBaseSqM = 0
    let stoneBase = 0;
    let stoneBaseSqM = 0;

    while (base > 2) { //do 2 zashtoto sled towa e wurha na piramidata//

        totalBaseSqM = base * base; // obshtiq perimetur//
        stoneBase = base - 2;  //stranata na kamuka //
        stoneBaseSqM = stoneBase * stoneBase; // kvadratura na kamuka//
        stone += stoneBaseSqM; 
        counter++; 
        let outerLayner = totalBaseSqM - stoneBaseSqM; // kwadratura na wynshniq sloi//

        if (counter % 10 === 5 || counter % 10 === 0) {
            lapisLazuli += outerLayner;
        } else {
            marble += outerLayner;
        }

        base -= 2; 
    }

    gold = (base * base); //izvun cikula e zashtoto vinagi e wurha na piramidata i e samo zlato bez kamuk za towa se smqta samo s ostatuka ot osnowata//
    counter++ //broi se i negowiq red//

    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapisLazuli = Math.ceil(lapisLazuli * increment);
    gold = Math.ceil(gold * increment);

    console.log(`Stone required: ${stone}`)
    console.log(`Marble required: ${marble}`)
    console.log(`Lapis Lazuli required: ${lapisLazuli}`)
    console.log(`Gold required: ${gold}`)
    console.log(`Final pyramid height: ${Math.floor(counter * increment)}`)

}

thePyramidOfKingDjoser(11, 1)