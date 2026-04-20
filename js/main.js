const tabsContainer = document.querySelector(".tabs");
const addBtn = document.getElementById("addTab");

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 70%, 80%)`;
}

tabsContainer.addEventListener("click", function (e) {

  if (e.target.classList.contains("close")) {
    const tab = e.target.parentElement;

    const tabs = Array.from(tabsContainer.querySelectorAll(".tab"));
    const contents = tabsContainer.querySelectorAll(".tab-content");

    const index = tabs.indexOf(tab);

    tab.remove();
    contents[index].remove();

    // تفعيل أول تاب بعد الحذف
    const newTabs = tabsContainer.querySelectorAll(".tab");
    const newContents = tabsContainer.querySelectorAll(".tab-content");

    if (newTabs.length > 0) {
      newTabs[newTabs.length-1].classList.add("active");
      newContents[newContents.length-1].classList.add("active");
    }

    return; 
  }

  if (!e.target.classList.contains("tab")) return;

  const tabs = tabsContainer.querySelectorAll(".tab");
  const contents = tabsContainer.querySelectorAll(".tab-content");

  const index = Array.from(tabs).indexOf(e.target);

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));

  tabs[index].classList.add("active");
  contents[index].classList.add("active");
});

addBtn.addEventListener("click", function () {
  const tabButtons = document.querySelector(".tab-buttons");

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  const newIndex = tabs.length + 1;
  const color = getRandomColor();

  const newTab = document.createElement("button");
  newTab.classList.add("tab");

 
  newTab.innerHTML = `Tab ${newIndex} <span class="close">❌</span>`;

  newTab.style.setProperty("--tab-color", color);

  const newContent = document.createElement("div");
  newContent.classList.add("tab-content");
  newContent.textContent = "Content for Tab " + newIndex;
  newContent.style.background = color;

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(c => c.classList.remove("active"));

  newTab.classList.add("active");
  newContent.classList.add("active");

  tabButtons.insertBefore(newTab, addBtn);
  tabsContainer.appendChild(newContent);
});