let tabs = document.querySelectorAll(".tabs .tabs-title");
let tabContents = document.querySelectorAll(".tab-content-container .tab-content");

tabs.forEach((tab,index) => {
  tab.addEventListener("click",() => {
    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});