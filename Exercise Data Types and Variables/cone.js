function cone(radius, height) {
    let volume = (1 / 3 * Math.PI) * Math.pow(radius, 2) * height
    let sqrtRadius = Math.pow(radius, 2);
    let sqrtHeight = Math.pow(height, 2);
    let s = Math.sqrt(sqrtRadius + sqrtHeight);
    let l = Math.PI * radius * s;
    let b = Math.PI * Math.pow(radius, 2);
    let area = l + b;

    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}

cone(3.3, 7.8)