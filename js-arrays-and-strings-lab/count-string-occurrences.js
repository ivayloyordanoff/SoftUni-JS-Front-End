function solve(inputString, searchedWord) {
    console.log(inputString.split(' ').filter((word) => word === searchedWord).length);
}
