function mergeSort(nums) {

    if (nums.length == 1) {
        return nums;
    } else {
        let half = Math.floor(nums.length / 2); 
        let nums1 = nums.slice(0, half);
        let nums2 = nums.slice(half); 
        nums1 = mergeSort(nums1);
        nums2 = mergeSort(nums2);
        return merge(nums1, nums2);
    }

}

function merge(nums1, nums2) {
    let i = 0;
    let j = 0;
    let output = [];
    while (true) {
        if (i == nums1.length && j == nums1.length) {
            return output;
        }
        if (i == nums1.length) {
            output.push(nums2[j]);
            j++;
        } else if (j == nums2.length) {
            output.push(nums1[i]);
            i++;
        } else {
            // Neither pointer reached the end yet
            if (nums1[i] <= nums2[j]) {
                output.push(nums1[i]);
                i++;
            } else {
                output.push(nums2[j]);
                j++;
            }
        }
        
    }

}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));