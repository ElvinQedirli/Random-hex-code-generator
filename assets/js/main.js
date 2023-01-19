let Button = document.querySelector("#generate_btn")


Button.addEventListener("click", () => {
    let charset = "0123456789ABCDEF",
        hex = "";
    for (let i = 0, n = charset.length; i < 6; i++) {
    hex += charset.charAt(Math.floor(Math.random() * n));
}
document.querySelector("#color_hex").innerHTML = `#${hex}`;
document.querySelector("body").style.background = `#${hex}`;
})
