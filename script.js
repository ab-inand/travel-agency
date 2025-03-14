function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
// used in page 2 
var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



// Beach Destinations Image Sequence Animation
function beachDestinationsAnimation(){
    const canvas = document.querySelector("#beach-destinations > canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        ./travel-images/beach/frame001.jpg
        ./travel-images/beach/frame002.jpg
        ./travel-images/beach/frame003.jpg
        ./travel-images/beach/frame004.jpg
        ./travel-images/beach/frame005.jpg
        ./travel-images/beach/frame006.jpg
        ./travel-images/beach/frame007.jpg
        ./travel-images/beach/frame008.jpg
        ./travel-images/beach/frame009.jpg
        ./travel-images/beach/frame010.jpg
        ./travel-images/beach/frame011.jpg
        ./travel-images/beach/frame012.jpg
        ./travel-images/beach/frame013.jpg
        ./travel-images/beach/frame014.jpg
        ./travel-images/beach/frame015.jpg
        ./travel-images/beach/frame016.jpg
        ./travel-images/beach/frame017.jpg
        ./travel-images/beach/frame018.jpg
        ./travel-images/beach/frame019.jpg
        ./travel-images/beach/frame020.jpg
        ./travel-images/beach/frame021.jpg
        ./travel-images/beach/frame022.jpg
        ./travel-images/beach/frame023.jpg
        ./travel-images/beach/frame024.jpg
        ./travel-images/beach/frame025.jpg
        ./travel-images/beach/frame026.jpg
        ./travel-images/beach/frame027.jpg
        ./travel-images/beach/frame028.jpg
        ./travel-images/beach/frame029.jpg
        ./travel-images/beach/frame030.jpg
        `;
        return data.split("\n")[index];
    }

    const frameCount = 30;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#beach-destinations`,
            start: `top top`,
            end: `250% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    
    ScrollTrigger.create({
        trigger: "#beach-destinations",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
    });
}
beachDestinationsAnimation();

// Mountain Destinations Heading Animation
var mountainHeadingChars = "";
document.querySelector("#mountain-destinations > h1").textContent.split("").forEach(function(letter){
    mountainHeadingChars += `<span>${letter}</span>`;
    document.querySelector("#mountain-destinations > h1").innerHTML = mountainHeadingChars;
});

gsap.to("#mountain-destinations > h1 > span", {
    scrollTrigger: {
        trigger: `#mountain-destinations > h1 > span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5,
    },
    stagger: .2,
    color: `#fff`
});

// Mountain Destinations Image Sequence Animation
function mountainDestinationsAnimation(){
    const canvas = document.querySelector("#mountain-view > canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        ./travel-images/mountain/frame001.jpg
        ./travel-images/mountain/frame002.jpg
        ./travel-images/mountain/frame003.jpg
        ./travel-images/mountain/frame004.jpg
        ./travel-images/mountain/frame005.jpg
        ./travel-images/mountain/frame006.jpg
        ./travel-images/mountain/frame007.jpg
        ./travel-images/mountain/frame008.jpg
        ./travel-images/mountain/frame009.jpg
        ./travel-images/mountain/frame010.jpg
        ./travel-images/mountain/frame011.jpg
        ./travel-images/mountain/frame012.jpg
        ./travel-images/mountain/frame013.jpg
        ./travel-images/mountain/frame014.jpg
        ./travel-images/mountain/frame015.jpg
        ./travel-images/mountain/frame016.jpg
        ./travel-images/mountain/frame017.jpg
        ./travel-images/mountain/frame018.jpg
        ./travel-images/mountain/frame019.jpg
        ./travel-images/mountain/frame020.jpg
        ./travel-images/mountain/frame021.jpg
        ./travel-images/mountain/frame022.jpg
        ./travel-images/mountain/frame023.jpg
        ./travel-images/mountain/frame024.jpg
        ./travel-images/mountain/frame025.jpg
        ./travel-images/mountain/frame026.jpg
        ./travel-images/mountain/frame027.jpg
        ./travel-images/mountain/frame028.jpg
        ./travel-images/mountain/frame029.jpg
        ./travel-images/mountain/frame030.jpg
        `;
        return data.split("\n")[index];
    }

    const frameCount = 30;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#mountain-view`,
            start: `top top`,
            end: `250% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    
    ScrollTrigger.create({
        trigger: "#mountain-view",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `250% top`,
    });
}
mountainDestinationsAnimation();

// City Tours Heading Animation
var cityToursChars = "";
document.querySelector("#city-tours > h1").textContent.split("").forEach(function(letter){
    cityToursChars += `<span>${letter}</span>`;
    document.querySelector("#city-tours > h1").innerHTML = cityToursChars;
});

gsap.to("#city-tours > h1 > span", {
    scrollTrigger: {
        trigger: `#city-tours > h1 > span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5,
    },
    stagger: .2,
    color: `#fff`
});

function cityToursAnimation() {
    const canvas = document.querySelector("#page13>canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
  
    function files(index) {
      var data = `
      ./city-tours/paris00001.webp
      ./city-tours/paris00004.webp
      ./city-tours/paris00007.webp
      ./city-tours/paris00010.webp
      ./city-tours/paris00013.webp
      ./city-tours/paris00016.webp
      ./city-tours/paris00019.webp
      ./city-tours/paris00022.webp
      ./city-tours/paris00025.webp
      ./city-tours/paris00028.webp
      ./city-tours/paris00031.webp
      ./city-tours/paris00034.webp
      ./city-tours/paris00037.webp
      ./city-tours/paris00040.webp
      ./city-tours/paris00043.webp
      ./city-tours/paris00046.webp
      ./city-tours/paris00049.webp
      ./city-tours/paris00052.webp
      ./city-tours/paris00055.webp
      ./city-tours/paris00058.webp
      ./city-tours/paris00061.webp
      ./city-tours/paris00064.webp
      ./city-tours/paris00067.webp
      ./city-tours/paris00070.webp
      ./city-tours/paris00073.webp
      ./city-tours/paris00076.webp
      ./city-tours/paris00079.webp
      ./city-tours/paris00082.webp
      ./city-tours/paris00085.webp
      ./city-tours/paris00088.webp
      ./city-tours/paris00091.webp
      ./city-tours/paris00094.webp
      ./city-tours/paris00097.webp
      ./city-tours/paris00100.webp
      `;
      return data.split("\n")[index];
    }
  
    const frameCount = 34;
    const images = [];
    const imageSeq = {
      frame: 1,
    };
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        trigger: "#page13",
        start: "top top",
        end: "250% top",
        scroller: "#main",
      },
      onUpdate: render,
    });
  
    images[1].onload = render;
  
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  
    ScrollTrigger.create({
      trigger: "#page13",
      pin: true,
      scroller: "#main",
      start: "top top",
      end: "250% top",
    });
  }
  cityToursAnimation();
  
  // Add animated heading effect for city tours section
  var cityHeadingText = "";
  document.querySelector("#page13>h1").textContent.split("").forEach(function(dets) {
    cityHeadingText += `<span>${dets}</span>`;
    document.querySelector("#page13>h1").innerHTML = cityHeadingText;
  });
  
  gsap.to("#page13>h1>span", {
    scrollTrigger: {
      trigger: "#page13>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.5,
    },
    stagger: 0.2,
    color: "#fff"
  });
  
  // Add animated city selection buttons
  gsap.from(".city-selection-buttons .btn", {
    scrollTrigger: {
      trigger: ".city-selection-buttons",
      start: "top 80%",
      end: "bottom 60%",
      scroller: "#main",
      scrub: 0.3,
    },
    y: 100,
    opacity: 0,
    stagger: 0.1
  });
