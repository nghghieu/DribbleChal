const barsElement = document.querySelector(".barsItem");
const navMobileElement = document.querySelector(".nav__mobile");
const sideBarElement = document.querySelector(".sideBar");
const sideBarItemList = document.querySelectorAll(".sideBar__list--item");
const searchParent = document.querySelector(".nav__search");
const searchElement = document.querySelector(".fa-search");
const input = document.querySelector("input");

barsElement.addEventListener("click", (e) => {
  navMobileElement.classList.toggle("active");
  sideBarElement.classList.toggle("active");
});

sideBarItemList.forEach((item) =>
  item.addEventListener("click", () => {
    navMobileElement.classList.remove("active");
    sideBarElement.classList.remove("active");
  })
);

if (window.innerWidth <= 1200) {
  searchElement.addEventListener("click", () => {
    searchParent.classList.toggle("active");
  });
}

input.addEventListener("blur", (e) => {
  searchParent.classList.remove("active");
  e.target.value = "";
});
