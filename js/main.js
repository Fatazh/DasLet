const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
    SubMenus.forEach((menu) => {
      menu.style.height = "0px";
    });

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    sidebar.classList.toggle("collapsed");
}

const SubMenus =
    document.querySelectorAll(".sub-menu"),
    buttons=
    document.querySelectorAll(".sidebar ul button");

const onClick= (item)=>{
        SubMenus.forEach((menu) => (menu.style.height ="0px"));

        buttons.forEach((btn) => (btn.classList.remove('active')));
       
        if(!item.nextElementSibling){
            item.classList.add("active");
            return;
        }

        const subMenu = item.nextElementSibling,
            ul = subMenu.querySelector('ul');

        if(!subMenu.clientHeight){
            subMenu.style.height = `${ul.clientHeight}px`;
            item.classList.add("active");
        }else{
            subMenu.style.height = "0px";
            item.classList.remove("active");
        }
    };

sidebar.addEventListener("mouseleave", () => {
    if (sidebar.classList.contains("collapsed")){
        SubMenus.forEach((menu) => {
            menu.style.height = "0px";
        });

        buttons.forEach((button) => {
            button.classList.remove("active");
        });
    }
});