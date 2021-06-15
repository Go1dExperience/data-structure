class MyLinkedList {
    constructor() {
        this.head = {
            value: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 0;
    }
    // 0(n)
    get(index) {
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }
    // 0(1)
    prepend(value) {
        const newNode = {
            value,
            next: this.head,
        };
        this.head = newNode;
        if (this.length === 0) {
            this.tail = this.head;
            this.tail.next = null;
        }
        this.length++;
        return JSON.stringify(this);
    }
    // 0(1)
    append(value) {
        const newNode = {
            value,
            next: null,
        };
        this.tail.next = newNode;
        this.tail = newNode;
        if (this.length === 0) {
            this.head = this.tail;
        }
        this.length++;
        return JSON.stringify(this);
    }
    // 0(n)
    insert(index, value) {
        const newNode = {
            value,
            next: null,
        };
        const leadNode = this.get(index);
        newNode.next = leadNode.next;
        leadNode.next = newNode;
        this.length++;
        return JSON.stringify(this);
    }
    // 0(n)
    delete(index) {
        const leadNode = this.get(index - 1);
        const node = this.get(index);
        leadNode.next = node.next;
        this.length--;
        return JSON.stringify(this);
    }
}
const obj = new MyLinkedList();
console.log(obj.append(15));
console.log(obj.prepend(5));
console.log(obj.prepend(1));
console.log(obj.get(1));
console.log(obj.insert(1, 10));
console.log(obj.delete(2));
