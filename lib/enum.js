class Enum {
    constructor(keys) {
        return this.setProperties(keys);
    }

    setProperties(keys) {
        for (const [index, key] of keys.entries()) {
            this[key] = index;
            this[index] = key;
        }
        return this;
    }
}

export default function (keys) {
    return new Enum(keys);
}