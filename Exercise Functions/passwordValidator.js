function passwordValidator(password) {
    

    if (!isLengthEnough(password)) {
        console.log('Password must be between 6 and 10 characters')
    }

    if (!isAlphabetical(password)) {
        console.log('Password must consist only of letters and digits')
    }

    if (!isDigitsEnough(password)) {
        console.log('Password must have at least 2 digits')
    }

    if (isAlphabetical(password) && isAlphabetical(password) && isDigitsEnough(password)) {
        console.log('Password is valid')
    } 

    function isLengthEnough(pass) {
        let length = pass.length;

        if (length >= 6 && length <= 10) {
            return pass;
        }
    }

    function isAlphabetical(pass) {
        let lowercase = (c) => c >= 97 && c <= 122;
        let uppercase = (c) => c >= 65 && c <= 90;

        let isValid = true;

        for (let char of pass) {
            let n = char.charCodeAt(0);

            
            if (!uppercase(n) && !lowercase(n) && !digits(n)) {
                isValid = false;
                break;
            }

        }

        return isValid
    }

    function isDigitsEnough (pass) {
        let counter = 0;
        let isValid = false;

        for(let char of pass) {
            let n = char.charCodeAt(0)

            if(digits(n)) {
                counter++;
            }

            if(counter === 2) {
                isValid = true;
                break;
            }
        }

        return isValid;
    }

    function digits (c) {
        return c >= 48 && c <= 57;
    }
   
}

passwordValidator('Pa$s$s')