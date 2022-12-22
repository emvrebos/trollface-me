// this code will be executed after page load
(function () {

  //Verifies that the Troll Me content is still on top in case of other dynamic scripts running in the page
  function checkIfTrollFaceMeIsOnTop() {
    let trollfaceMe = document.getElementById("trollface-extension-wrapper");
    let topDiv = document.body.getElementsByTagName("div")[0];
    if (trollfaceMe !== topDiv) {
      document.body.prepend(trollfaceMe);
    }
  }

  //Creates the Trollface Me extension content
  function createTrollOverlay() {
    console.log('... Activating Troll Me extension');
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.margin = "0%";
    wrapper.style.padding = "0%";
    wrapper.style.zIndex = "100";
    wrapper.style.position = "absolute"
    wrapper.style.display = "none";
    wrapper.setAttribute("id", "trollface-extension-wrapper");

    const img = document.createElement("img");
    img.setAttribute("src", "assets/trollface.svg");
    //img.setAttribute("src", "assets/trollface.svg");
    img.style.position = "absolute"
    img.style.top = "0px";
    img.style.left = "0px";
    img.style.zIndex = "100";
    img.style.width = "75%";
    img.style.height = "75%";
    img.style.margin = "0%";
    img.style.padding = "0%";
    img.setAttribute("alt", "You have been trolled!");
    img.setAttribute("id", "trollface-extension-image")

    const overlay = document.createElement("div");
    wrapper.style.position = "absolute"
    overlay.style.top = "0px";
    overlay.style.left = "0px";
    overlay.style.zIndex = "100";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.margin = "0%";
    overlay.style.padding = "0%";
    overlay.style.background = "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)";
    overlay.setAttribute("id", "trollface-extension-overlay");
    // inject the Trollface Me content into the page
    document.body.prepend(wrapper);
    document.getElementById("trollface-extension-wrapper").append(img);
    document.getElementById("trollface-extension-wrapper").append(overlay);

  }


  function randomInterval() {
    let min = 1;
    let max = 45; // min and max interval parameters in seconds
    myInterval = (Math.floor(Math.random() * (max - min + 1) + min)) * 1000;
    return myInterval
  }

  //show-hide the Troll Me extension overlay
  function show() {
    clearInterval(showHide);
    checkIfTrollFaceMeIsOnTop();
    document.getElementById("trollface-extension-wrapper").style.display = "block";
    setTimeout(function () {
      document.getElementById("trollface-extension-wrapper").style.display = "none";
      myInterval = randomInterval();
      showHide = setInterval(show, myInterval);
    }, 500);
  }

  // main
  createTrollOverlay();
  let myInterval = 0;
  setTimeout(function () { showHide = setInterval(show, myInterval); }, randomInterval());

})();