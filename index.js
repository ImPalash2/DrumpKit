var num = document.querySelectorAll(".drum").length;

for (var i = 0; i < num; i++)
{
    //detecting button press
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ch = this.innerHTML;
        makeSound(ch);
        addAnimation(ch);
    });

    //detecting keyboard press
    document.addEventListener("keydown", function (e) {
        makeSound(e.key);
        addAnimation(e.key);
    });
    
}

function makeSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(ch);
    }
}
function addAnimation(cKey) {
    var actBtn = document.querySelector("." + cKey);
    actBtn.classList.add('pressed');
    setTimeout(function () {
        actBtn.classList.remove('pressed');
    }, 100);
    
}