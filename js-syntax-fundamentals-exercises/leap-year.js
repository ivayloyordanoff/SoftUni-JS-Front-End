function solve(year) {
    let leapYear = '';

    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
            leapYear = 'no';
        } else {
            leapYear = 'yes';
        }
    } else {
        leapYear = 'no';
    }

    console.log(leapYear);
}
