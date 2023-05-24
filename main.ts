input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
input.onGesture(Gesture.EightG, function () {
    music.playMelody("C5 C C5 C C5 C C5 C ", 120)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("C5 C C5 C C5 C C5 C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
