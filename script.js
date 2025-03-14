function initSmoothScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll for smooth scrolling experience
const smoothScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Sync ScrollTrigger with Locomotive Scroll
smoothScroll.on("scroll", ScrollTrigger.update);

// Set up ScrollTrigger proxy for the "#main" element
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? smoothScroll.scrollTo(value, 0, 0) : smoothScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // Handle different scroll behavior on mobile
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger when window updates and update Locomotive Scroll
ScrollTrigger.addEventListener("refresh", () => smoothScroll.update());

// Initial refresh
ScrollTrigger.refresh();
}
initSmoothScroll();

// Animate travel destinations heading
var destinationHeadingChars = "";
document.querySelector("#destinations-section > h1").textContent.split("").forEach(function(letter){
    destinationHeadingChars += `<span>${letter}</span>`;
    document.querySelector("#destinations-section > h1").innerHTML = destinationHeadingChars;
});

// Animated color change for destination heading
gsap.to("#destinations-section > h1 > span", {
    scrollTrigger: {
        trigger: `#destinations-section > h1 > span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5,
    },
    stagger: .2,
    color: `#fff`
});

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