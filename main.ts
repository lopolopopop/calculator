input.onButtonPressed(Button.A, function () {
    if (Number_1 > -1 && Number_1_inserted == 1) {
        Number_2 += 1
        basic.showNumber(Number_2)
    } else {
        Number_1 += 1
        basic.showNumber(Number_1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Number_1_inserted == 0) {
        Number_1_inserted = 1
    } else {
        if (Type == 1) {
            basic.showNumber(Number_1 + Number_2)
        } else if (Type == 2) {
            basic.showNumber(Number_1 - Number_2)
        } else if (Type == 3) {
            basic.showNumber(Number_1 * Number_2)
        } else if (Type == 4) {
            basic.showNumber(Number_1 / Number_2)
        } else {
            basic.showNumber(Number_1 ** Number_2)
        }
        Number_1_inserted = 0
        Number_2 = 0
        Number_1 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Number_1 > 0 && Number_1_inserted == 1) {
        Number_2 += -1
        basic.showNumber(Number_2)
    } else {
        Number_1 += -1
        basic.showNumber(Number_1)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Type == 1) {
        Type += 1
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (Type == 2) {
        Type += 1
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Type == 3) {
        Type += 1
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . # . . #
            . . . # .
            . . # . .
            . # . . .
            # . . # .
            `)
    } else if (Type == 4) {
        Type += 1
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        Type += -4
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Type == 1) {
        Type += 1
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (Type == 2) {
        Type += 1
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Type == 3) {
        Type += 1
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . # . . #
            . . . # .
            . . # . .
            . # . . .
            # . . # .
            `)
    } else if (Type == 4) {
        Type += 1
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        Type += -4
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
let Number_1_inserted = 0
let Number_2 = 0
let Number_1 = 0
let Type = 0
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
Type = 1
Number_1 = 0
Number_2 = 0
Number_1_inserted = 0
