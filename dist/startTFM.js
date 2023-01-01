(function () {

  //DIST REMOVE: get a formatted timestamp
  function logDate() {
    let today = new Date();
    let ss = today.getSeconds();
    ss = ("0" + ss).slice(-2);
    let mi = today.getMinutes();
    mi = ("0" + ss).slice(-2);
    let hh = today.getHours();
    hh = ("0" + ss).slice(-2);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd + '-' + hh + '-' + mm + '-' + ss;
    return today;
  }

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
    console.log('Trollface Me extension: content activation...');

    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.margin = "0%";
    wrapper.style.padding = "0%";
    wrapper.style.zIndex = "10000";
    wrapper.style.position = "fixed"
    wrapper.style.display = "none";
    wrapper.setAttribute("id", "trollface-extension-wrapper");

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("assets/trollface.svg"); //gets the local source from the project
    img.style.position = "fixed"
    img.style.top = "12.5%";
    img.style.left = "12.5%";
    img.style.width = "75%";
    img.style.height = "75%";
    img.style.margin = "0%";
    img.style.padding = "0%";
    img.setAttribute("alt", "You have been trolled!");
    img.setAttribute("id", "trollface-extension-image")

    const overlay = document.createElement("div");
    wrapper.style.position = "fixed"
    overlay.style.top = "12.5%";
    overlay.style.left = "12.5%";
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
    let max = 10; // min and max interval parameters in seconds
    myInterval = (Math.floor(Math.random() * (max - min + 1) + min)) * 1000;
    return myInterval
  }

  //show-hide the Troll Me extension overlay
  function show() {
    clearInterval(showHide);
    checkIfTrollFaceMeIsOnTop();
    document.getElementById("trollface-extension-wrapper").style.display = "block";
    console.log('showing trollface' + logDate());
    setTimeout(function () {
      document.getElementById("trollface-extension-wrapper").style.display = "none";
      showHide = setInterval(show, randomInterval());
    }, 250);
  }

  // main
  function stopTFM(){
  const trollFaceMeContent = document.getElementById("trollface-extension-wrapper");
  if (trollFaceMeContent) {
    trollFaceMeContent.remove();
    console.log('... Trollface Me extension: content removed from startTFM');
  }
  if (showHide) {
    clearInterval(showHide);
    console.log('... Trollface Me extension: interval removed from startTFM');
  }}

  stopTFM();
  createTrollOverlay();
  showHide = setInterval(show, randomInterval());
})();