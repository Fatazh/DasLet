document.addEventListener("DOMContentLoaded", function () {
  // --- Sidebar Toggle Logic ---
  const sidebar = document.querySelector(".sidebar");
  const sidebarBurger = document.querySelector(".sidebar-burger");
  const menuItems = document.querySelectorAll(".sidebar ul li > a");
  const subMenuItems = document.querySelectorAll(".sub-menu ul li a");
  const userMenuWrapper = document.querySelector(".user-menu");
  const userMenuButton = document.getElementById("userMenuButton");
  const userMenuCard = document.querySelector(".user-menu-card");

  const collapseAllSubMenus = ({ preserveActive = true } = {}) => {
    document.querySelectorAll(".sub-menu").forEach((subMenu) => {
      subMenu.style.height = "0px";

      const parentLink = subMenu.previousElementSibling;
      if (!parentLink) return;

      if (preserveActive && subMenu.querySelector(".active")) {
        return;
      }

      parentLink.classList.remove("active");
    });
  };

  if (sidebarBurger && sidebar) {
    sidebarBurger.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");

      if (sidebar.classList.contains("collapsed")) {
        collapseAllSubMenus();
      }
    });
  }

  if (sidebar) {
    sidebar.addEventListener("mouseleave", () => {
      if (sidebar.classList.contains("collapsed")) {
        collapseAllSubMenus();
      }
    });
  }

  // --- Sidebar Menu Item Logic ---

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      const clickedItem = this;
      const subMenu = clickedItem.nextElementSibling;
      const isSubMenu = subMenu && subMenu.classList.contains("sub-menu");

      if (isSubMenu) {
        const isSubMenuOpen = subMenu.style.height && subMenu.style.height !== "0px";

        if (isSubMenuOpen) {
          subMenu.style.height = "0px";
          clickedItem.classList.remove("active");
        } else {
          const subMenuHeight = subMenu.querySelector("ul").offsetHeight;
          subMenu.style.height = `${subMenuHeight}px`;
          clickedItem.classList.add("active");
        }
      } else {
        menuItems.forEach((i) => i.classList.remove("active"));
        clickedItem.classList.add("active");
      }
    });
  });

  subMenuItems.forEach((subItem) => {
    subItem.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      subMenuItems.forEach((i) => i.classList.remove("active"));

      this.classList.add("active");

      const parentMenuLink = this.closest(".sidebar > ul > li")?.querySelector("a");
      if (parentMenuLink) {
        menuItems.forEach((i) => {
          if (i !== parentMenuLink) {
            i.classList.remove("active");
          }
        });

        parentMenuLink.classList.add("active");
      }
    });
  });

  if (userMenuWrapper && userMenuButton && userMenuCard) {
    const closeUserMenu = () => {
      userMenuWrapper.classList.remove("open");
      userMenuButton.setAttribute("aria-expanded", "false");
    };

    userMenuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = userMenuWrapper.classList.toggle("open");
      userMenuButton.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
      if (!userMenuWrapper.contains(event.target)) {
        closeUserMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeUserMenu();
      }
    });
  }
});
