importScripts('anime.js');

function closeLogin(){
  anime({
    targets: '.login',
    translateX: 40,
    opacity: 0,
    easing: 'spring(1, 60, 60, 0)',
    duration: 800
  });

  anime({
    targets: '.register',
    translateX: 0,
    opacity: 1,
    easing: 'spring(1, 60, 60, 0)',
    duration: 800
  });
}


function closeRegister(){
  anime({
    targets: '.register',
    translateX: 40,
    opacity: 0,
    easing: 'spring(1, 60, 60, 0)',
    duration: 800
  });

  anime({
    targets: '.login',
    translateX: 0,
    opacity: 1,
    easing: 'spring(1, 60, 60, 0)',
    duration: 800
  });
}