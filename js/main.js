const body = document.body

/* ローディング 2回目以降ローディングしない */
const sessionKey = "accesed";
const sessionValue = true;

if (!sessionStorage.getItem(sessionKey)) {
  document.querySelector(".js-loading").classList.add(".loaded");
} else {
  window.onload = function() {
  const shutter = document.querySelector(".js-garage");
  shutter.classList.add("open");
  document.querySelector(".loading").classList.add("loaded");
  }
  sessionStorage.setItem(sessionKey, sessionValue);
}



/* ヘッダーの色変更 */
window.addEventListener("scroll", function() {
  const mvHeight = document.querySelector(".js-mv").offsetHeight;
  if (window.pageYOffset > mvHeight) {
    document.querySelector(".js-nav").classList.add("gnav-change");
    document.querySelector(".js-hm").classList.add("hm-change");
  } else {
    document.querySelector(".js-nav").classList.remove("gnav-change");
    document.querySelector(".js-hm").classList.remove("hm-change");
  }
});


/* ハンバーガーメニューの制御 */
const menu = document.querySelector(".hamburger-menu")
const buttons = document.querySelector(".hm-button")

const toggleMenu = () => {
  menu.classList.toggle("menuIsOpen")     //.menuにmenuIsOpenクラスを付与
  buttons.classList.toggle("buttonIsOpen") //.buttonにbuttonIsOpenクラスを付与
}

buttons.addEventListener("click", () => {  //buttonをクリックした時、toggleMenuを実行する
  toggleMenu()
});

menu.addEventListener("click", () => {  //menuをクリックした時も、toggleMenuを実行しメニューを閉じる
  toggleMenu()
});


/* スクロールアニメーションの制御 */
const sections = document.querySelectorAll(".sec-wrap")
const skills = document.querySelectorAll(".skill-item")
const works = document.querySelectorAll(".works-item")

window.addEventListener("scroll",() => {
  animationByScroll()
});

function animationByScroll() {
  const scrollY = window.scrollY //スクロール量
  const windowHeidht = window.innerHeight //画面の高さ
  const inViewHeight = 900  //ずらす用の高さ

  sections.forEach((section) => {
    const offsetTop = section.offsetTop //要素の縦方向の位置

    if (scrollY + windowHeidht > offsetTop + inViewHeight) {
      section.classList.add("sectionIsActive")
    }
  });

  skills.forEach((skill) => {
    const offsetTop = skill.offsetTop //要素の縦方向の位置

    if (scrollY + windowHeidht > offsetTop + inViewHeight) {
      skill.classList.add("skillIsActive")
    }
  });

  works.forEach((work) => {
    const offsetTop = work.offsetTop //要素の縦方向の位置

    if (scrollY + windowHeidht > offsetTop + inViewHeight) {
      work.classList.add("workIsActive")
    }
  });
}
