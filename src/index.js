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


let filmList = ["Goodfellas", "Boy in the striped pyjamas", "Hamelton", "Frozen", "Mickey Mouse"]


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
}

