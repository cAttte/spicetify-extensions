const updater = () => {
    document.querySelector("[data-testid=progress-bar]").style.setProperty("--progress-bar-transform", Spicetify.Player.getProgressPercent() * 100 + "%")
}

let intID = null
const handler = () => {
    if (Spicetify.Player.isPlaying) intID = setInterval(updater, 50)
    else clearInterval(intID)
}

handler()
Spicetify.Player.addEventListener("onplaypause", handler)
