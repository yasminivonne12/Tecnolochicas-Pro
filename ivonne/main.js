let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 65,
});

typewriter
.pauseFor(2500)
.typeString(' " No existe modernidad <br> sin una buena tradicion" <br> anonimo ')
.pauseFor(200)
.deleteChars(10)
.start();