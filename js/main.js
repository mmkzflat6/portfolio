const body = document.body

/* ハンバーガーメニューの制御 */
const menu = document.querySelector(".hamburger-menu")
const buttons = document.querySelector(".button")

const toggleMenu = () => {
  menu.classList.toggle("menuIsOpen")     //.menuにmenuIsOpenクラスを付与
  buttons.classList.toggle("buttonIsOpen") //.buttonにbuttonIsOpenクラスを付与
  body.classList.toggle("scroll-off")     //bodyにscroll-offクラスを付与
}

buttons.addEventListener("click", () => {  //buttonをクリックした時、toggleMenuを実行する
  toggleMenu()
})

menu.addEventListener("click", () => {  //menuをクリックした時も、toggleMenuを実行しメニューを閉じる
  toggleMenu()
})
/* ハンバーガーメニューの制御 */


/* スクロールアニメーションの制御 */
const sections = document.querySelectorAll(".sec-wrap")
const skills = document.querySelectorAll(".skill-item")

window.addEventListener("scroll",() => {
  animationByScroll()
})

function animationByScroll() {
  const scrollY = window.scrollY //スクロール量
  const windowHeidht = window.innerHeight //画面の高さ
  const inViewHeight = 200  //ずらす用の高さ

  sections.forEach((section) => {
    const offsetTop = section.offsetTop //要素の縦方向の位置

    if (scrollY + windowHeidht > offsetTop + inViewHeight) {
      section.classList.add("sectionIsActive")
    }
  })

  skills.forEach((skill) => {
    const offsetTop = skill.offsetTop //要素の縦方向の位置

    if (scrollY + windowHeidht > offsetTop + inViewHeight) {
      skill.classList.add("skillIsActive")
    }
  })
}

/* モーダルの処理 */
const buttonOpen = document.querySelector('.works');
const modal = document.querySelector('.modal');
const buttonClose = document.querySelector('.close-icon');

// ボタンがクリックされた時
buttonOpen.addEventListener('click', function(){
  modal.style.display = 'block';
  body.classList.add('modal-open');
});


// バツ印がクリックされた時
buttonClose.addEventListener('click',function(){
  modal.style.display = 'none';
  body.classList.remove('modal-open');
});

// モーダルコンテンツ以外がクリックされた時
modal.addEventListener('click', function(){
    modal.style.display = 'none';
    body.classList.remove('modal-open');
});
