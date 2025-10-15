const sidebar = document.querySelector(".sidebar");
const SubMenus = document.querySelectorAll(".sub-menu");
const buttons = document.querySelectorAll(".sidebar ul button");

function toggleSidebar() {
  SubMenus.forEach((menu) => {
    menu.style.height = "0px";
  });
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  sidebar.classList.toggle("collapsed");
}

const onClick = (item) => {
  document.querySelectorAll(".sub-menu").forEach((menu) => {
    if (item.nextElementSibling !== menu) {
      menu.style.height = "0px";
    }
  });

  buttons.forEach((btn) => {
    if (btn !== item) {
      btn.classList.remove("active");
    }
  });

  if (!item.nextElementSibling) {
    item.classList.toggle("active");
    return;
  }

  const subMenu = item.nextElementSibling;
  const ul = subMenu.querySelector("ul");

  if (!subMenu.clientHeight) {
    subMenu.style.height = `${ul.clientHeight}px`;
    item.classList.add("active");
  } else {
    subMenu.style.height = "0px";
    item.classList.remove("active");
  }
};

sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("collapsed")) {
    SubMenus.forEach((menu) => {
      menu.style.height = "0px";
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  }
});
