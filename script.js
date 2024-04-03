function LoginVerification() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.alert("Login Berhasil");
        window.location="part.html";
    }
    else if (username == "" || password == ""){
        window.alert("Masukkan Email Atau passowrd");
    }
    else {
        window.alert("Login Gagal");
    }
}
function SignUp(){
    window.alert("Belum");
}