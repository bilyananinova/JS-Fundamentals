function flightSchedule(arr) {
    let flights = flightsFunction(arr.shift(), flightsArray = []);
    let newChangedStatus = check(arr.shift(), flightsArray);
    let printStatus = print(arr.shift().toString(), flightsArray);

    function flightsFunction(array, flightsArray) {

        for (let i = 0; i < array.length; i++) {
            let [number, info] = array[i].split(' ');
            flightsArray.push({ number, info, status: 'Ready to fly' });
        }
        return flightsArray
    }

    function check(array, flightsArray) {
        for (let line of array) {
            let [number, change] = line.split(' ');
            let find = flightsArray.find(x => x.number == number)
            if (find) {
                find.status = change
            }
        }        
        return flightsArray
    }

    function print (string, flightsArray) {
        for (let canceled of flightsArray) {
            if (canceled.status == string) {
                console.log(`{ Destination: '${canceled.info}', Status: '${canceled.status}' }`);
            }
        }
    }
}

flightSchedule([['WN269 Delaware',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']])
