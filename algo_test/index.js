'use strict';

var valueList = [4, 7, 1, 9, 3, 6, 2, 5, 7];

function quickSort(testList, start, end) {
    if (start >= end) {
        return;
    }
    var head = start;
    var tail = end;
    var pointer = start + 1;
    while (tail >= pointer) {
        if (testList[pointer] > testList[head]) {
            var temp = testList[tail];
            testList[tail] = testList[pointer];
            testList[pointer] = temp;
            tail--;
        } else {
            var temp = testList[head];
            testList[head] = testList[pointer];
            testList[pointer] = temp;
            head++;
            pointer++;
        }
        console.log(testList);
    }

    quickSort(testList, start, head - 1);
    quickSort(testList, head + 1, end);
}

quickSort(valueList, 0, valueList.length - 1);
console.log(valueList);