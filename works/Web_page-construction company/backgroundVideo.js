 
    var backgroundVideo = new BackgroundVideo('.bv-video', {
      src: [
        '/video/header-video.mp4',
        '/video/header-video.webm'
      ],
      onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        var vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
      }
    });