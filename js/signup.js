
const signup = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const fullname = document.getElementById("fullname").value;
    const confirm_pass = document.getElementById("confirm_password").value;
    const errorBox = document.getElementById("error-box");
    const errorCont = document.getElementById("error");
    console.log(errorBox);
    const logged = api.post("/auth/signup", {
        username: username,
        password: password,
        fullnames: fullname,
        confirm_pass: confirm_pass,
        email: email
    });
    logged.then(resp => [resp.json(), resp.status]).then(res => {
        if(res[1] === 200){
            window.location = "./login.html";
        }
        res[0].then(resp => {
            console.log(resp.message);
            console.log(resp);
            errorCont.classList.remove("hidden");
            errorBox.innerText= resp.message;
        });
    });
};