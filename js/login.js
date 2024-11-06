const onLogin = () => {
    sessionStorage.setItem('email', $('#email').val());
    window.location.href = "services-managment.html";
}