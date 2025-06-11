/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head==null || head.next==null) return null;

    let slow = head;
    let fast = head;

    while(fast!=null && fast.next!=null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            break;
        }
    }

    // break -> slow == fast or slow != fast
    if(slow != fast) {
        return null;
    }

    let p = head;
    while(p != slow) {
        slow = slow.next;
        p = p.next;
    }

    return p;
};