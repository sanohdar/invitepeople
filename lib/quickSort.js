
class QuickSort {

    constructor(items,l,r){
        this.items = items;
        this.left = l;
        this.right = r;
    }

    //Swaping the leftIndex with rightIndex
    swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }

    //finding the new pivot element in the continous sorted array.
    partition(items, left, right) {

        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i].user_id < pivot.user_id) {
                i++;
            }
            while (items[j].user_id > pivot.user_id) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    //Main function used for emplementing the Quick Sort with valid data set.
    qSortMain(items,left,right) {
        var index;
        if ( items.length > 1) {
            index = this.partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.qSortMain(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.qSortMain(items, index, right);
            }
        }
        return items;
    }
}

module.exports = QuickSort;