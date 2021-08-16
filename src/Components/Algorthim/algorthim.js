export const  mergedArray = [];

export const buubleSort = (data) =>{
    const AnimatedData = []
    for(let i = 0; i < data.length;i++){
        for(let j = 0; j < data.length - i - 1;j++){
            if(data[j] > data[j+1]){
                const temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp
                AnimatedData.push([j , j+1])
            }
        }
    }
    return AnimatedData

}
export const selectionSort = (data) =>{
    const AnimatedData = []
    let i , j , min_index
    for(i = 0; i < data.length - 1;i++){
        min_index = i;
        for(j =i+1; j< data.length;j++){
            if (data[j] < data[min_index]){
                min_index = j
            }
        }
        AnimatedData.push([i , min_index])
        const temp = data[i];
        data[i] = data[min_index];
        data[min_index] = temp
    }
    console.log(data)
    return AnimatedData
}

export const insertionSort = (data) =>{
    let i, key, j;
    const n = data.length
    const AnimatedData = []
    for (i = 1; i < n; i++)
    { 
        key = data[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && data[j] > key)
        { 
            AnimatedData.push([j,j+1])
            data[j + 1] = data[j]; 
            j = j - 1; 
        } 
        data[j + 1] = key; 
    }
    console.log(AnimatedData)
    return AnimatedData; 
}


// merge sort

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            mergedArray.push([k , i + l])
            i++;
        }
        else {
            arr[k] = R[j];
            mergedArray.push([k , j + m + 1])
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        mergedArray.push([k , i + l])
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        mergedArray.push([k , j + m + 1])
        j++;
        k++;
    }
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
export const mergeSort = (arr,l, r) =>{
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);

}