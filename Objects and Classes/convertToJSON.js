function convertToJSON(name, lastName, hairColor) {
    let toObj = {};
    toObj.name = name
    toObj.lastName = lastName
    toObj.hairColor = hairColor

    let toJSON = JSON.stringify(toObj);

    console.log(toJSON);
}
convertToJSON('George',
'Jones',
'Brown'
)