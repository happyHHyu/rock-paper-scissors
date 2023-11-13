let random = 0
input.onButtonPressed(Button.A, function () {
    if (random == 0) {
        basic.showNumber(random)
    } else if (random == 2) {
        basic.showNumber(random)
    } else if (random == 5) {
        basic.showNumber(random)
    }
    random = randint(0, 5)
})
basic.forever(function () {
	
})
