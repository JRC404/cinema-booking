let twoD = 200
let threeD = 150
let both = 300

let food = [{
    name: "Twix", 
    price: 1.50,
},
{
    name: "Carmac",
    price: 1.50
},
{
    name: "Wispa",
    price: 1.00,
},
{
    name: "Twirl",
    price: 5.00 
}
]

let drink = [{
    name: "Coke", 
    price: 1.50,
},
{
    name: "Sprite",
    price: 1.50
},
{
    name: "Water",
    price: 1.00,
},
{
    name: "Tango Ice Blast",
    price: 5.00
}
]

class Order {
    constructor(name, age, student, food, drink, Films) {
        this.name = name; 
        this.age = age;
        this.student = student
        this.food = food;
        this.drink = drink;
        this.Films = Films;
    } 

seats(seat) {
    if(seat > 5){
        console.log("Not enough remaining seats");
    }else {
        this.seat = seat;
        console.log(this.seat);
        }
    };
Films() {
    if(this.Films === "twoD") {
        for (let a = 0; a <= 200; a++) {
        return("This film is only shown on 2D screen.") }
    }
    else if (this.Films === "threeD") {
        for (let z = 0; z <= 150; z++) {
            return("This film is only shown on 3D screen.")}
    }
    else if (this.Films === "both") {
        for (let k = 0; k <= 300; k++) {
        return("This film is shown on 2D and 3D screen. Choice on you!")}
    }
};
price() {
    if (this.Films === "threeD") {
        return(`Your ticket price will be ${this.student} + £4`)
        }
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
}
const finalPrice = () => { 
    let total = 0;
    for (let j = 0; j < 5; j++) {
        total += price() + (food.cost()) + refreshmentsDrink();
    }
    return total; 
}
for (const item of food) {
    console.log (`You are buying : ${food.name} This cost: ${food.price}`);
}
module.exports = Order;