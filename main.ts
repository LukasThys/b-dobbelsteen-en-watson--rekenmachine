input.onPinPressed(TouchPin.P0, function () {
    if (project == 3) {
        basic.clearScreen()
        if (uitvoeringsteken_nummer == 1) {
            uitkomst = rekenmachine_getal1 + rekenmachine_getal2
        }
        if (uitvoeringsteken_nummer == 2) {
            uitkomst = rekenmachine_getal1 - rekenmachine_getal2
        }
        if (uitvoeringsteken_nummer == 3) {
            uitkomst = rekenmachine_getal1 * rekenmachine_getal2
        }
        if (uitvoeringsteken_nummer == 4) {
            uitkomst = rekenmachine_getal1 / rekenmachine_getal2
        }
        basic.showString("" + rekenmachine_getal1 + uitvoeringsteken + rekenmachine_getal2 + "=" + uitkomst)
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    nummer = receivedNumber
    basic.showNumber(nummer)
    basic.pause(100)
    basic.clearScreen()
    nummer = 0
})
input.onButtonPressed(Button.A, function () {
    if (tijd == 0) {
        project += 1
        if (project == 4) {
            project = 1
        }
        basic.showNumber(project)
    } else {
        if (project == 1) {
            radio.sendNumber(1)
        }
        if (project == 2) {
            radio.sendNumber(0)
            basic.showNumber(1)
            basic.pause(100)
            basic.clearScreen()
        }
        if (project == 3) {
            basic.clearScreen()
            rekenmachine_getal1 += 1
            basic.showNumber(rekenmachine_getal1)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (project == 1) {
        radio.sendNumber(3)
    }
    if (project == 2) {
        radio.sendNumber(3)
    }
    if (project == 3) {
        basic.clearScreen()
        uitvoeringsteken_nummer += 1
        if (uitvoeringsteken_nummer == 5) {
            uitvoeringsteken_nummer = 1
        }
        if (uitvoeringsteken_nummer == 1) {
            uitvoeringsteken = "+"
            basic.showString("+")
        }
        if (uitvoeringsteken_nummer == 2) {
            uitvoeringsteken = "-"
            basic.showString("-")
        }
        if (uitvoeringsteken_nummer == 3) {
            uitvoeringsteken = "*"
            basic.showString("*")
        }
        if (uitvoeringsteken_nummer == 4) {
            uitvoeringsteken = "/"
            basic.showString("/")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (tijd == 0) {
        tijd = 1
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (project == 1) {
            radio.sendNumber(2)
        }
        if (project == 2) {
            radio.sendNumber(1)
            basic.showNumber(6)
            basic.pause(100)
            basic.clearScreen()
        }
        if (project == 3) {
            basic.clearScreen()
            rekenmachine_getal2 += 1
            basic.showNumber(rekenmachine_getal2)
        }
    }
})
let nummer = 0
let uitkomst = 0
let uitvoeringsteken = ""
let uitvoeringsteken_nummer = 0
let rekenmachine_getal2 = 0
let rekenmachine_getal1 = 0
let tijd = 0
let project = 0
radio.setGroup(10)
radio.setTransmitPower(7)
project = 0
tijd = 0
rekenmachine_getal1 = 0
rekenmachine_getal2 = 0
uitvoeringsteken_nummer = 0
uitvoeringsteken = ""
uitkomst = 0
