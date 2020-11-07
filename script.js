//we are going to mak the button behave like a link
const gitButton = document.getElementById("git-button");

gitButton.addEventListener('click', function () {
    alert("soro soke werey...see you on the next page");
    window.location.href = "https://www.github.com";
})