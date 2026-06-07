input.onButtonPressed(Button.A, function () {
    radio.sendString("accurate hitboxes")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("inaccurate hitboxes")
})
radio.onReceivedString(function (receivedString) {
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    basic.showString(receivedString)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("negative hitboxes")
})
radio.setGroup(1)
