class Menu {

    init() {
        document.querySelector('.wrapper-page__hamburguer-button').addEventListener('click', (e) => {
            this.openMenu();
        });

        document.querySelector('.hamburguer-menu__close').addEventListener('click', (e) => {
            this.closeMenu();
        });
    }

    openMenu() {
        document.querySelector('.hamburguer-menu').classList.remove('hamburguer-menu--is-close');
        document.querySelector('.hamburguer-menu').classList.add('hamburguer-menu--is-open');
    }

    closeMenu() {
        document.querySelector('.hamburguer-menu').classList.remove('hamburguer-menu--is-open');
        document.querySelector('.hamburguer-menu').classList.add('hamburguer-menu--is-close');
    }
}

export default Menu;
