function radioCrystals(arr) {
    let targetThickness = arr.shift();
    let thickness = 0;
    let cutCount = 0
    let lapCount = 0
    let grindCount = 0
    let etchCount = 0
    let xRayCount = 0

    for (let i = 0; i < arr.length; i++) {
        thickness = arr[i];
        console.log(`Processing chunk ${thickness} microns`)
        while (thickness > targetThickness) {

            if (thickness / 4 >= targetThickness) {
                thickness = cut(thickness);
                cutCount++;
            } else if (thickness * 0.80 >= targetThickness) {
                thickness = lap(thickness);
                lapCount++;
            } else if (thickness - 20 >= targetThickness) {
                thickness = grind(thickness);
                grindCount++;
            } else if (thickness - 2 >= targetThickness) {
                thickness = etch(thickness);
                etchCount++;
            } else if (thickness + 1 >= targetThickness && xRayCount == 0) {
                thickness = xRay(thickness);
                xRayCount++;
            }

            transportingAndWashing(thickness)

        }

        while(thickness < targetThickness) {
            thickness = xRay(thickness);
            xRayCount++;
        }

        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`)
            console.log("Transporting and washing");
        }

        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`)
            console.log("Transporting and washing");
        }

        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`)
            console.log("Transporting and washing");
        }

        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`)
            console.log("Transporting and washing");
        }

        if (xRayCount == 1) {
            console.log('X-ray x1')
        }

        console.log(`Finished crystal ${thickness} microns`);
    }


    function cut(num) {
        let cutted = num / 4;
        return Math.floor(cutted)
    }

    function lap(num) {
        let lapped = num * 0.80;
        return Math.floor(lapped)
    }

    function grind(num) {
        let grinded = num - 20;
        return Math.floor(grinded)
    }

    function etch(num) {
        let etched = num - 2;
        return Math.floor(etched)
    }

    function xRay(num) {
        let xRayed = num + 1
        return Math.floor(xRayed)
    }

    function transportingAndWashing(num) {
        return Math.floor(num);
    }

}

radioCrystals([1375, 1374])