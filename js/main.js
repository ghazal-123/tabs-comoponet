const tabsContainer = document.querySelector(".tabs");
const addBtn = document.getElementById("addTab");

// توليد لون عشوائي
function getRandomColor() {
  return `hsl(${Math.random() * 360}, 70%, 80%)`;
}

// التنقل بين التابات
tabsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tab")) return;

  const tabs = tabsContainer.querySelectorAll(".tab");
  const contents = tabsContainer.querySelectorAll(".tab-content");

  const index = Array.from(tabs).indexOf(e.target);

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));

  tabs[index].classList.add("active");
  contents[index].classList.add("active");
});

// ➕ إضافة Tab جديدة
addBtn.addEventListener("click", function () {
  const tabButtons = document.querySelector(".tab-buttons");

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  const newIndex = tabs.length + 1;
  const color = getRandomColor();

  // إنشاء tab
  const newTab = document.createElement("button");
  newTab.classList.add("tab");
  newTab.textContent = "Tab " + newIndex;
  newTab.style.setProperty("--tab-color", color);

  // إنشاء content
  const newContent = document.createElement("div");
  newContent.classList.add("tab-content");
  newContent.textContent = "Content for Tab " + newIndex;
  newContent.style.background = color;

  // إزالة active
  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(c => c.classList.remove("active"));

  // تفعيل الجديد
  newTab.classList.add("active");
  newContent.classList.add("active");

  // إضافة للعناصر
  tabButtons.insertBefore(newTab, addBtn);
  tabsContainer.appendChild(newContent);
});