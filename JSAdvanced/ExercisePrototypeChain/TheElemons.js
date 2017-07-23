function solve() {


    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this.element = "";
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Fire";
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Earth";
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Air";
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.elements = ["Fire", "Earth", `Air`, "Water"]
        }

        morph() {
            let currEl = this.elements.shift();
            this.elements.push(currEl);
            this.element = currEl
        }
    }
    return{
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
