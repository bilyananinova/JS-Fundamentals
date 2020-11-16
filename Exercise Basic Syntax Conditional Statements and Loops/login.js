function login(login) {
    let username = login.shift();
    let password = username.split('').reverse('').join('');

    for (let i = 0; i < login.length; i++) {

        if (login[i] === password) {
            console.log(`User ${username} logged in.`);
        } else {

            if (i == 3) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])