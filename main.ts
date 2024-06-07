if (input.buttonIsPressed(Button.B)) {
    music.play(music.stringPlayable("C5 B A G A B A G ", 120), music.PlaybackMode.UntilDone)
}
if (input.buttonIsPressed(Button.A)) {
    for (let index = 0; index < 2; index++) {
        basic.showString("UwU")
    }
    for (let index = 0; index < 3; index++) {
        basic.showString("Yasss SLAYY")
    }
}
if (input.buttonIsPressed(Button.AB)) {
    basic.showIcon(IconNames.Ghost)
    music.play(music.stringPlayable("G A G F G A B G ", 120), music.PlaybackMode.UntilDone)
}
