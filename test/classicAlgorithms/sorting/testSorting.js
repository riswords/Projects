(function() {
    var sorting = require("../../../classicAlgorithms/sorting/sorting");
    
    var testNumbersArray = [3, 5, 1, 6, 4, 2, 3];
    var testStringsArray = ["taylor", "jamie", "cameron", "pat", "jordan"];
    
    testNumbersBubbleSort();
    console.log();
    testStringsBubbleSort();
    console.log();
    
    testNumbersInsertionSort();
    console.log();
    testStringsInsertionSort();
    console.log();
    
    testNumbersMergeSort();
    console.log();
    testStringsMergeSort();
    console.log();
    
    function testNumbersBubbleSort() {
        var testNumbersArray = [3, 5, 1, 6, 4, 2, 3];
        console.log("Unsorted: " + testNumbersArray);
        sorting.bubbleSort(testNumbersArray);
        console.log("Sorted (bubbleSort): " + testNumbersArray);
    }
    
    function testStringsBubbleSort() {
        var testStringsArray = [3, 5, 1, 6, 4, 2, 3];
        console.log("Unsorted: " + testStringsArray);
        sorting.bubbleSort(testStringsArray);
        console.log("Sorted (bubbleSort): " + testStringsArray);
    }
    
    function testNumbersInsertionSort() {
        var testNumbersArray = [3, 5, 1, 6, 4, 2, 3];
        console.log("Unsorted: " + testNumbersArray);
        testNumbersArray = sorting.insertionSort(testNumbersArray);
        console.log("Sorted (insertionSort): " + testNumbersArray);
    }
    
    function testStringsInsertionSort() {
        var testStringsArray = [3, 5, 1, 6, 4, 2, 3];
        console.log("Unsorted: " + testStringsArray);
        testStringsArray = sorting.insertionSort(testStringsArray);
        console.log("Sorted (insertionSort): " + testStringsArray);
    }
    
    function testNumbersMergeSort() {
        var testNumbersArray = [3, 5, 1, 6, 4, 2, 3];
        console.log("Unsorted: " + testNumbersArray);
        testNumbersArray = sorting.mergeSort(testNumbersArray);
        console.log("Sorted (mergeSort): " + testNumbersArray);
    }
    
    function testStringsMergeSort() {
        var testStringsArray = [3, 5, 1, 6, 4, 2, 3];
        console.log("Unsorted: " + testStringsArray);
        testStringsArray = sorting.mergeSort(testStringsArray);
        console.log("Sorted (mergeSort): " + testStringsArray);
    }
})();