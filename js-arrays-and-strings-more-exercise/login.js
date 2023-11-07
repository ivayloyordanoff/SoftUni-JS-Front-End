function solve(array) {
    let [username, ...elems] = array;
    let password = '';
    let counter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    for (let el of elems) {
        if (el !== password) {
            counter++;
            if (counter >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
