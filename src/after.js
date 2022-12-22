// this code will be executed after page load
(function () {

  //Verifies that the Troll Me content is still on top in case of other dynamic scripts running in the page
  function checkIfTrollFaceMeIsOnTop() {
    let trollfaceMe = document.getElementById("trollface-extension-wrapper");
    let topDiv = document.body.getElementsByTagName("div")[0];
    //DIST REMOVE: console.log("trollfaceMe = "+trollfaceMe.getAttribute("id") + " , topDiv = " + topDiv.getAttribute("id"));
    if (trollfaceMe !== topDiv) {
      //DIST REMOVE: console.log("trollface Me is not the top layer => NOK");
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
    //DIST REMOVE: wrapper.style.backgroundColor = "transparent";
    //DIST REMOVE: console.log("wrapper const ok")
    //DIST REMOVE: wrapper.innerHTML = "";

    const img = document.createElement("img");
    img.setAttribute("src", "D:\\apprentissage\\chrome extension\\trollface-me\\src\\assets\\trollface.svg"); // DIST CHANGE : use relative path "assets/trollface.svg";
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
    //DIST REMOVE: console.log("image const ok")

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
    //DIST REMOVE:console.log("overlay const ok")

    // inject the Trollface Me content into the page
    document.body.prepend(wrapper);
    document.getElementById("trollface-extension-wrapper").append(img);
    document.getElementById("trollface-extension-wrapper").append(overlay);

    //DIST REMOVE: see if the following check make sense out of test
    /*if (document.body.getAttribute.height === "0") {
      document.body.setAttribute.height = "500"
    }*/

    //DIST REMOVE: console.log("Trollface Me extension is ready :-)");
  }
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
    console.log('See my trollface? ' + " @" + logDate());//DIST REMOVE:
    setTimeout(function () {
      document.getElementById("trollface-extension-wrapper").style.display = "none";
      console.log("Now you don't :-/");//DIST REMOVE
      myInterval = randomInterval();
      showHide = setInterval(show, myInterval);
    }, 500);
  }

  // main
  console.log('Page loaded....');  //DIST REMOVE
  createTrollOverlay();
  let myInterval = 0;
  console.log('first interval = ' + myInterval);  //DIST REMOVE:

  setTimeout(function () { showHide = setInterval(show, myInterval); }, randomInterval());
  //DIST REMOVE: no "()" syntax for show because this function does not return a value while show does not
  //DIST REMOVE: console.log('SetTimeOut interval = ' + myInterval + " @" + logDate());

  setTimeout(function () {
    let trollFaceMe = document.getElementById("trollface-extension-wrapper");
    document.body.append(trollFaceMe);
  }, 10000);//DIST REMOVE: this is a test
})();