class Key {
    private signature = Math.random()

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    getKey() {
        return this.key
    }
}

abstract class House {
    protected door: boolean = false
    protected tenants: Person[]

    constructor(protected key: Key) {
        this.key = key
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person)
        }
    }

    abstract openDoor(key: Key): void
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key)
        this.key = key
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};