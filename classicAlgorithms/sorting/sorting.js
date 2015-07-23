(function() {
    module.exports = {
        bubbleSort : bubbleSort,
        insertionSort : insertionSort,
        mergeSort : mergeSort
    };
    
    // bubble sort
    function bubbleSort(arr) {
        for(var i = 0; i<arr.length; i++) {
            for(var j=i; j<arr.length; j++) {
                if(arr[j] < arr[i])
                    swap(arr, i, j);
            }
        }
        return arr;
        
        function swap(arr, i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // insertion sort
    function insertionSort(arr) {
        if(arr.length <= 1)
            return arr;
        return insert(arr[0], insertionSort(arr.slice(1)));
        
        function insert(val, sortedArr) {
            var i = 0;
            while(i < sortedArr.length && val >= sortedArr[i])
                i++;
            sortedArr.splice(i , 0, val);
            return sortedArr;
        }
    }
    
    // merge sort
    function mergeSort(arr) {
        if(arr.length <= 1)
            return arr;
        
        var splitPoint = Math.floor(arr.length / 2);
        var leftArr = arr.slice(0, splitPoint);
        var rightArr = arr.slice(splitPoint, arr.length);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    
        // merge two sorted arrays into one
        function merge(leftArr, rightArr) {
            var result = [];
            var leftIndex = 0, rightIndex = 0;
            while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
                if(leftArr[leftIndex] <= rightArr[rightIndex]) {
                    result.push(leftArr[leftIndex]);
                    leftIndex++;
                }
                else {
                    result.push(rightArr[rightIndex]);
                    rightIndex++;
                }
            }
            //if(leftIndex < leftArr.length)  <-- this isn't needed because JavaScript doesn't care...
            result = result.concat(leftArr.slice(leftIndex));
            result = result.concat(rightArr.slice(rightIndex));
            
            return result;
        }
    }
    
    
})();