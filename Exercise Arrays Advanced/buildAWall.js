function buildAWall(arr) {
    arr = arr.map(Number);
    let crews = arr.filter(len => len < 30).length;
    let allConcrate = 0;
    let dailyConcrete = []
    let costs = 0;
    while (crews != 0) {
        let concrete = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 30) {
                arr[i]++;
                concrete += 195
                if (arr[i] == 30) {
                    crews--;
                }
            }
        }
        allConcrate += concrete;
        dailyConcrete.push(concrete);
    }

    costs = allConcrate * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}


buildAWall([17, 22, 17, 19, 17])