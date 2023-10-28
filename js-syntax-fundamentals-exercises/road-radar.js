function solve(speed, area) {
    let limit = 0;
    let diff = 0;
    let overLimit = false;
    let status = '';

    if (area === 'motorway') {
        limit = 130;
    } else if (area === 'interstate') {
        limit = 90;
    } else if (area === 'city') {
        limit = 50;
    } else if (area === 'residential') {
        limit = 20;
    }

    if (speed > limit) {
        overLimit = true;
    }

    if (overLimit) {
        diff = speed - limit;

        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}
