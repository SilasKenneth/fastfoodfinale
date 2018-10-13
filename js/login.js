
const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorBox = document.getElementById("error-box");
    const errorCont = document.getElementById("error");
    console.log(errorBox);
    const logged = api.post("/auth/login", {
        username: username,
        password: password
    });
    logged.then(resp => [resp.json(), resp.status]).then(res => {
        if(res[1] === 200){
            window.location = "./home.html";
        }
        res[0].then(resp => {
           console.log(resp.message);
           errorCont.classList.remove("hidden");
           errorBox.innerText= resp.message;
        });
    });
};