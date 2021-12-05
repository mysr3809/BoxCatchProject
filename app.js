document.querySelector("#btn1").addEventListener("click", getTextFile);
document.querySelector("#btn2").addEventListener("click", getJSON);
document.querySelector("#btn3").addEventListener("click", getApi);

function getTextFile() {
    fetch("textfile.txt").then(response => response.text())
        .then(data => document.getElementById("output").innerHTML += data)
}

function getJSON() {
    fetch("article.json").then(response => response.json())
        .then(infos => {
            let output = "";
            infos.forEach(info => {
                output += `<li> ${info.studentName} - ${info.studentSurname}</li> `
            });
            document.getElementById("outputUl").innerHTML += output;
        })
}

function getApi() {
    fetch("https://api.github.com/users").then(response => response.json())
        .then(users => {
            let output = "";
            users.forEach(user => {
                output += `<li> Kullanici: ${user.id} ${user.login}</li> `

            });
            document.getElementById("outputUl").innerHTML += output;
        })

}