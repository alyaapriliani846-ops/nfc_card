function showMessage(){

    window.open(
        "https://wa.me/6285136371361",
        "_blank"
    );
}
function copyEmail(){
    navigator.clipboard.writeText(
        "alyaapriliani846@gmail.com"
    );
    const btn = document.querySelector(".copy-btn");
    btn.innerHTML =
    "✓ Email Copied";
    setTimeout(() => {
        btn.innerHTML =
        '<i class="fa-solid fa-copy"></i> Copy Email';
    }, 2000);
}
