def on_button_pressed_a():
    global Number_2, Number_1
    if Number_1 > -1 and Number_1_inserted == 1:
        Number_2 += 1
        basic.show_number(Number_2)
    else:
        Number_1 += 1
        basic.show_number(Number_1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Number_1_inserted, Number_2, Number_1
    if Number_1_inserted == 0:
        Number_1_inserted = 1
    else:
        basic.show_leds("""
            . . . . .
            . # . # .
            # . # . .
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            # . # . .
            . # . # .
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . # . # .
            # . # . .
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            # . # . .
            . # . # .
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        if Type == 1:
            basic.show_number(Number_1 + Number_2)
        else:
            if Type == 2:
                basic.show_number(Number_1 - Number_2)
            else:
                if Type == 3:
                    basic.show_number(Number_1 * Number_2)
                else:
                    if Type == 4:
                        basic.show_number(Number_1 / Number_2)
                    else:
                        pass
        Number_1_inserted = 0
        Number_2 = 0
        Number_1 = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Number_2, Number_1
    if Number_1 > 0 and Number_1_inserted == 1:
        Number_2 += -1
        basic.show_number(Number_2)
    else:
        Number_1 += -1
        basic.show_number(Number_1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global Type
    if Type == 1:
        Type += 1
        music.play(music.tone_playable(494, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    else:
        if Type == 2:
            Type += 1
            music.play(music.tone_playable(440, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.IN_BACKGROUND)
            basic.show_leds("""
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                """)
        else:
            if Type == 3:
                Type += 1
                music.play(music.tone_playable(466, music.beat(BeatFraction.WHOLE)),
                    music.PlaybackMode.IN_BACKGROUND)
                basic.show_leds("""
                    . # . . #
                    . . . # .
                    . . # . .
                    . # . . .
                    # . . # .
                    """)
            else:
                if Type == 4:
                    Type += -3
                    music.play(music.tone_playable(659, music.beat(BeatFraction.WHOLE)),
                        music.PlaybackMode.IN_BACKGROUND)
                    basic.show_leds("""
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        """)
                else:
                    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Number_1_inserted = 0
Number_2 = 0
Number_1 = 0
Type = 0
basic.show_leds("""
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    """)
Type = 1
Number_1 = 0
Number_2 = 0
Number_1_inserted = 0