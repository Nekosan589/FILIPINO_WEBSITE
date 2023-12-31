let root = document.documentElement

function playVoiceline(character, voiceLineNum, color){
    var music = new Audio(character + voiceLineNum + '.ogg');
    music.play();

    music.addEventListener('play', function() {
        root.style.setProperty('--hover-' + character, 'red');
        root.style.setProperty('--' + character + '-text-color', 'red');
        root.style.setProperty('--pointer-events-value', 'none');
    });
    music.addEventListener('ended', function(){
        root.style.setProperty('--hover-' + character, color);
        root.style.setProperty('--' + character + '-text-color', 'black');
        root.style.setProperty('--pointer-events-value', 'all');
    });
    }


