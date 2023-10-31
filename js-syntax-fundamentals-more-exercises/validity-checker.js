function solve(x1, y1, x2, y2) {
    const calculateDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    const distance1 = calculateDistance(x1, y1, 0, 0);
    const distance2 = calculateDistance(x2, y2, 0, 0);
    const distance3 = calculateDistance(x1, y1, x2, y2);

    const printValidity = (point1, point2, distance) => {
        if (Number.isInteger(distance)) {
            console.log(`${point1} to ${point2} is valid`);
        } else {
            console.log(`${point1} to ${point2} is invalid`);
        }
    };

    printValidity(`{${x1}, ${y1}}`, '{0, 0}', distance1);
    printValidity(`{${x2}, ${y2}}`, '{0, 0}', distance2);
    printValidity(`{${x1}, ${y1}}`, `{${x2}, ${y2}}`, distance3);
}
