document.addEventListener("DOMContentLoaded", function () {
  // --- Sidebar Toggle Logic ---
  const sidebar = document.querySelector(".sidebar");
  const sidebarBurger = document.querySelector(".sidebar-burger");
  const menuItems = document.querySelectorAll(".sidebar ul li > a");
  const subMenuItems = document.querySelectorAll(".sub-menu ul li a");

  if (sidebarBurger && sidebar) {
    sidebarBurger.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");

      if (sidebar.classList.contains("collapsed")) {
        document.querySelectorAll(".sub-menu").forEach(sm => {
          sm.style.height = "0px";
        });
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
          clickedItem.classList.add("active")
        }
      } else {
        menuItems.forEach(i => i.classList.remove("active"));
        clickedItem.classList.add("active");
      }
    });
  });

  subMenuItems.forEach((subItem => {
    subItem.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      subMenuItems.forEach(i => i.classList.remove("active"));

      this.classList.add("active");

      const parentMenuLink = this.closest(".sidebar > ul > li").querySelector("a");
      if(parentMenuLink){
        menuItems.forEach(i => {
          if(i !== parentMenuLink){
            i.classList.remove("active");
          }
        });

        parentMenuLink.classList.add("active");
      }
    })
  }))

  if (typeof window.Chart !== "undefined") {
    const salesChartEl = document.getElementById("salesChart");
    if (salesChartEl) {
      new window.Chart(salesChartEl, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Revenue",
              data: [35, 42, 38, 50, 62, 69, 72, 78, 74, 81, 88, 95],
              fill: true,
              tension: 0.4,
              backgroundColor: "rgba(102, 4, 221, 0.12)",
              borderColor: "rgba(102, 4, 221, 0.9)",
              borderWidth: 2,
              pointRadius: 3,
              pointBackgroundColor: "rgba(102, 4, 221, 1)",
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              grid: {
                color: "rgba(107, 114, 128, 0.1)",
              },
              ticks: {
                color: "#6B7280",
                callback: (value) => `$${value}k`
              }
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#6B7280"
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: (context) => `Revenue: $${context.parsed.y}k`
              }
            }
          }
        }
      });
    }

    const channelChartEl = document.getElementById("channelChart");
    if (channelChartEl) {
      new window.Chart(channelChartEl, {
        type: "doughnut",
        data: {
          labels: ["Online", "In-Store", "Partners"],
          datasets: [
            {
              data: [58, 27, 15],
              backgroundColor: [
                "rgba(102, 4, 221, 0.9)",
                "rgba(46, 204, 113, 0.9)",
                "rgba(46, 134, 222, 0.9)"
              ],
              borderWidth: 0,
              hoverOffset: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "65%",
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#6B7280",
                usePointStyle: true
              }
            }
          }
        }
      });
    }
  }
});