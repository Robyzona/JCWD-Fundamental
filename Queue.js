class Queue {
    #container = []

    enqueue(element) {
        this.#container.push(element)
    }

    dequeue() {
        this.#container.shift()
    }

    getElements() {
        return this.#container
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.getElements())
queue.dequeue()
console.log(queue.getElements())