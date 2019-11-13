const square = function(x) {
    return x * x
}

const squareArrow = (x) => {
    return x*x
}

const squareArrow2 = (x) => x*x;

const event = {
    name: 'Birthday Party',
    printGuestList: function() {
        console.log('Guest List for ' + this.name)
    }
}

const event2 = {
    name: 'Birthday Party',
    guestList: ['a', 'b', 'c'],
    printGuestList () {
        console.log('Guest List for ' + this.name)
        this.guestList.forEach( function (guest) { // switch to arrow function : not bind
            console.log(guest + ' is attending ' + this.name);
        })
    }
}


console.log(squareArrow(4))
console.log(squareArrow2(3))

// arrow function : mot suited for methods that access 'this'
event.printGuestList();
event2.printGuestList();