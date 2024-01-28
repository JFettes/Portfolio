var arr = new Array();

arr[0] = 5;
arr[1] = 2;
arr[2] = 3;
arr[3] = 12


var addnumber = function (num) {
    var result = num + 1;
    console.log(result);
};


var checknumber = function (func, number) {
    if (number % 2 === 0) {
        console.log("the number is odd");
    } else {
        func(number);
    }
};

for (var index in arr) {
    checknumber(addnumber, arr[index]);
}

