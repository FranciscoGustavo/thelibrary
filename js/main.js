class menu {
  constructor(selector) {
    this.btnMenu = document.querySelector(selector);
    this.bindEvents();
  }

  bindEvents(){
      this.btnMenu.addEventListener("click", () => {
        document.querySelector(".menu-items").classList.toggle("menu-action");
      });
  }
}

(function(){
  new menu(".btn-menu");
})();
