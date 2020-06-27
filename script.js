//scroll effect

$(document).on("scroll", function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  const $art1 = $(".art1");
  const art1FromTop = $art1.offset().top;
  const art1Height = $art1.outerHeight();

  const $art2 = $(".art2");
  const art2FromTop = $art2.offset().top;
  const art2Height = $art2.outerHeight();

  const $art3 = $(".art3");
  const art3FromTop = $art3.offset().top;
  const art3Height = $art3.outerHeight();

  if (scrollValue > art1FromTop + art1Height - windowHeight) {
    $art1.addClass("active");
  }
  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    $art2.addClass("active");
  }
  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    $art3.addClass("active");
  }

  //clear
  if (scrollValue < 100) {
    $("article").removeClass("active");
  }
});

//header writing effect

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = "Scroll down for more informations...";

let indexTxt = 0;

const addLetter = () => {
  spnText.textContent += txt[indexTxt];
  indexTxt++;
  if (indexTxt === txt.length) {
    return setTimeout(() => {
      indexTxt = 0;
      spnText.textContent = "";
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 100);
};

addLetter(); //first call

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
