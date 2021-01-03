function loadingBar(num) {
    let load = num / 10;

    if(load < 10) {
        console.log(`${num}% [${isLoad(num)}]`);
        console.log('Still loading...')
    } else {
        console.log('100% Complete!');
        console.log(`[${isLoad(num)}]`);
    }
    
    function isLoad(n) {
        let result = ''
        let loadScale = n / 10

        if (loadScale < 10) {
            for (let i = 0; i <= loadScale-1; i++) {
                result += '%'
            } 

            for (let i = loadScale; i < 10; i++) {
                result += '.'
            }
        } else {
            for (let i = 0; i <= 10; i++) {
                result += '%'
            } 
        }

        return result
    }
}

loadingBar(100)