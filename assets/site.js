
function checkVideoPlay(){
    var desktop = window.matchMedia('(min-width: 768px)');
    var videos = Array.from(document.querySelectorAll('.video'));

    videos.forEach(video => {
        const desktopVideo = video.classList.contains('desktop');
        if(video.classList.contains('playable')){
            if((desktop.matches && desktopVideo) || (!desktop.matches && !desktopVideo)){
                video.play();
            }else{
                video.pause();
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function(){

    var videos = Array.from(document.querySelectorAll('.video'));
    var posters = Array.from(document.querySelectorAll('.poster'));

    videos.forEach(video => {
      video.oncanplay = function(){
        video.classList.add('playable');
        checkVideoPlay()
      }
    });

    posters.forEach(poster => {
      poster.addEventListener('load', function(){
        poster.classList.add('loaded');
      });

      if(poster.complete){
        poster.classList.add('loaded');
      }
    });

    checkVideoPlay();

});