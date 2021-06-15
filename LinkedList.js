class MyLinkedList {
    constructor() {
        this.head = {
            value: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 0;
    }
    get(index) {
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }
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
}
const obj = new MyLinkedList();
console.log(obj.append(15));
console.log(obj.append(20));
console.log(obj.prepend(10));
console.log(obj.prepend(5));
console.log(obj.prepend(1));
console.log(obj.get(2))