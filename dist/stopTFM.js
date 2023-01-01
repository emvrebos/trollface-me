(function () {

  const trollFaceMeContent = document.getElementById("trollface-extension-wrapper");
  if (trollFaceMeContent) {
    trollFaceMeContent.remove();
    console.log('... Trollface Me extension: content removed from startTFM');
  }

  if (showHide) {
    clearInterval(showHide);
    console.log('... Trollface Me extension: interval removed from startTFM');
  }
}) ();