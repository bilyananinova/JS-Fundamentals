function commonElements(arr1, arr2) {
    for (const element of arr1) {
        for (const el of arr2) {
            if(element === el) {
                console.log(element)
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)