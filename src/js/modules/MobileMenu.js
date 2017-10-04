import $ from 'jquery';
class MobileMenu {
     
     constructor() {
         this.mainMenu = $('.main-menu');
         this.menuIcon = $('.main-nav__menu-icon');
         this.menuLinks = $('.main-menu__link');
         this.events();
     }
     events() {
        this.menuIcon.click(
            this.toggleTheMenu.bind(this)
        );
        this.menuLinks.click(
            this.toggleTheMenu.bind(this)
        );  
        this.menuLinks.on('tap',
            this.toggleTheMenu.bind(this)
        );
     

     }
     toggleTheMenu() {
         this.mainMenu.toggleClass('main-menu--shown');
         this.menuIcon.toggleClass('main-nav__menu-icon--close-x');
     }
 }

 export default MobileMenu;