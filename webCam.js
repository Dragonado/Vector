
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var scan_text = "test";

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;

    if(navigator.getUserMedia){
        navigator.getUserMedia({video:true}, streamWebCam, throwError);
    }

    function streamWebCam (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }

    function throwError (e) {
        alert(e.name);
    }

    function snap () {
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        context.drawImage(video, 0, 0);
        scan_text = OCRAD(context);
        alert(scan_text);
        localStorage.setItem("scan_text_cam", scan_text);
        localStorage.setItem("cam", "true");

        window.location = "MCQ_Page.html";
    }
