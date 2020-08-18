
let twoD = 200
let threeD = 150
let both = 300


class order {
    constructor( name, age, popcorn, hotDog, softDrink) {
        this.name =name; 
        this.age = age; 
        this.popcorn = popcorn;
        this.hotDog = hotDog;
        this.softDrink = softDrink;

    } 

    price() {
        if (age <= 7) {
            return("Your child ticket price will be £3")
        }
        else if (age >= 7 && age <= 65) {
                return("Your adult ticket price will be £10")
        }
        else if (age >= 65) { 
            return("Your senior ticket price will be £5")

        }
        else {
            return("Invaild age")
        }
    }
}

