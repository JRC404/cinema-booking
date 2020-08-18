let twoD = 200
let threeD = 150
let both = 300


class order {
    constructor(name, age, student, food, drink) {
        this.name = name; 
        this.age = age;
        this.student = student
        this.food = food;
        this.drink = drink;
    } 
    seats(seat) {
        if(seat > 5){
            console.log("Not enough remaining seats");
        }else {
            this.seat = seat;
            console.log(this.seat);
        }
    };


    price() {
        if(this.student == "no" && this.age <= 7) {
            return("Your child ticket price will be £3")
        }
        else if (this.student == "no" && this.age >= 7 && this.age <= 65) {
                return("Your adult ticket price will be £10")
        }
        else if(this.student == "yes" && this.age >= 7 && this.age <=65) {
            return("Your student price will be £6")
        }
        else if (this.student == "no" && this.age >= 65) { 
            return("Your senior ticket price will be £5")

        }
        else {
            return("Invaild age")
        };
    } 

    refreshmentsFood() {
        if(this.food === "Twix") {
            console.log(`Your choice is: ${this.food}`)
        }
        else if(this.food === "Carmac") {
            console.log(`Your choice is: ${this.food}`)
            }
        else if(this.food === "Wispa") {
            console.log(`Your choice is ${this.food}`)
        }
        else if(this.food === "Twirl") {
            console.log(`Your choice is: ${this.food}`)
        }
    };
    refreshmentsDrink() {
        if (this.drink === "Coke") {
            console.log(`You choice is: ${this.drink}`)
        }
        else if(this.drink === "Sprite") {
            console.log(`Your choice is: ${this.drink}`)
        }
        else if(this.drink === "Water") {
            console.log(`Your choice is: ${this.drink}`)
        }
        else if(this.drink === "Tango Ice Blast") {
            console.log(`Your choice is: ${this.drink}`)
        }
    }
}