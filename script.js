

$(document).ready(function() {
    var audio = new Audio('Files/s2.mp3');
    $(".write1").click(function(){
        audio.loop = true;
        audio.play();
        $(".track").addClass("extraTrack");
        $(".car").addClass("extraCar");
        $(".wheel img").addClass("extraWheel");
    });

    $(".horn").click(function(){
        var b= new Audio('Files/horn.wav');
        b.play();
        b.play();
    })

    $(".write2").click(function(){
        var a= new Audio('Files/x.mp3');
        a.play();
        setTimeout(() => {
            audio.pause();
            $(".track").removeClass("extraTrack");
            $(".car").removeClass("extraCar");
          }, 600);
        $(".wheel img").removeClass("extraWheel");
    });
});