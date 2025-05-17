var sortColors = function(nums) {
    let n = nums.length;
    let i = 0;
    let j = 0;
    let k = n-1;

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    while(j <= k) {
        if(nums[j] == 2) {
            swap(nums, j, k);
            k--;
        } else if(nums[j] == 0) {
            swap(nums, i, j);
            i++;
            j++;
        } else {
            j++;
        }
    }
};