let main;
function activateSubNav(options) {
  
  main = document.getElementById("main-panel");
  checkForURLDirectLink();

  // I believe the code below should work for any sub-nav items we may want to put in there
  let navs = document.getElementsByClassName("sub-nav__item");
  for (let i = 0; i < navs.length; i++) {
    let n = navs[i];
    n.addEventListener("click", function () {
      // console.log(this);
      this.classList.remove("sub-nav__item");
      // if we remove that class name, then the only one left is the key for the dataStruct
      // The event listener will still exist on the DOMobject even without the classname that added it
      // console.log(dataStruct[this.classList[0]]);
      let _html = dataStruct[this.classList[0]];

      // we can add in conditional page footer/headers here based on the passed through argument. Without one, it's ignored. 
      if (options === "assignments") {
        _html += "<hr><h1>How to turn in your work</h1><ol><li>Save your sketch on <a href='https://editor.p5js.org/'>p5js's web editor</a>.</li><li>Title your sketch in this format:<br>&ldquo;Code 1, Assignment 1: Instructional Drawing&rdquo; or &ldquo;Code 1, Assignment 3: Personal Time&rdquo;</li><li>In a comment at the top of your sketch include:<br><ul><li>Your name</li><li>Your faculty (Xin, Courtney, or Ben)</li></ul></li><li>Place a link to your sketch on Canvas</li></ol>";
      }

      main.innerHTML = _html;
    });
  }
}

function checkForURLDirectLink() {
  let autoPopulate = document.location.href.split("section=")[1];
  console.log(dataStruct[autoPopulate], autoPopulate);

  if (autoPopulate != undefined && dataStruct[autoPopulate] != undefined) {
    main.innerHTML = dataStruct[autoPopulate];
  }
}