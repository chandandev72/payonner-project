document.getElementById('login').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email,password);
    if(email =='cha@gmail.com'&& password== 123456){
        window.location.href= 'banking.html'
    }
})