// 待办清单的逻辑
// 第 2 个提交：添加任务。
// 现在任务只存在页面里，刷新会丢——持久化留到下一个提交。

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyHint = document.getElementById("empty-hint");

/** 列表里有任务时，隐藏“还没有任务”的提示 */
function updateEmptyHint() {
  emptyHint.classList.toggle("hidden", list.children.length > 0);
}

/** 把一段文字变成一个任务条目 <li> */
function createTaskElement(text) {
  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  li.append(span);
  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 阻止表单默认的整页刷新

  const text = input.value.trim();
  if (!text) return; // 空内容直接忽略

  list.append(createTaskElement(text));
  input.value = "";
  input.focus();
  updateEmptyHint();
});
