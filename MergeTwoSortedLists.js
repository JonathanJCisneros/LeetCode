/**
 * Definition for singly-linked list.
 * 
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists(list1, list2) {
    if(!list1 && !list2){
        return null;
    }
    let list3 = new ListNode();
    let runner = list3
    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            runner.next = list1
            list1 = list1.next
        }
        else{
            runner.next = list2
            list2 = list2.next
        }
        runner = runner.next
    }
    if(list1 === null) {runner.next = list2;}
    if(list2 === null) {runner.next = list1;}
    
    return list3.next
};

// create first linked list: 1 -> 3 -> 10
var n3 = new ListNode(10, null);
var n2 = new ListNode(3, n3);
var n1 = new ListNode(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
var n6 = new ListNode(9, null);
var n5 = new ListNode(6, n6);
var n4 = new ListNode(5, n5);
var L2 = n4; 

console.log(mergeTwoLists(L1, L2)); 