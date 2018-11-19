/**
 * A module that manage menu actions
 * @module Menu
 * @description Class to manage all behavior of menu application
 */
class Menu {
    /**
     * Method to initialize the Menu
     * @function init
     * @description Apply the listiners on the apropriate elements
     * */
    init() {
        document
            .querySelector(".nav__hamburguer-button")
            .addEventListener("click", e => {
                this.openMenu();
            });

        document
            .querySelector(".hamburguer-menu__close")
            .addEventListener("click", e => {
                this.closeMenu();
            });
    }

    /**
     * Open Menu
     * @function openMenu
     * @description Manage the toggle of menu visibility/slide (Modifier --is-open)
     * */
    openMenu() {
        document
            .querySelector(".hamburguer-menu")
            .classList.remove("hamburguer-menu--is-close");
        document
            .querySelector(".hamburguer-menu")
            .classList.add("hamburguer-menu--is-open");
    }

    /**
     * Close Menu
     * @function closeMenu
     * @description Manage the toggle of menu visibility/slide (Modifier --is-close)
     * */
    closeMenu() {
        document
            .querySelector(".hamburguer-menu")
            .classList.remove("hamburguer-menu--is-open");
        document
            .querySelector(".hamburguer-menu")
            .classList.add("hamburguer-menu--is-close");
    }
}

// export default Menu;
