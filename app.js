// 待办清单的逻辑
// 第 3 个提交：标记完成、删除任务、用 localStorage 持久化（刷新不丢）。

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyHint = document.getElementById("empty-hint");

const STORAGE_KEY = "my-todo-app.tasks";

/** 列表里有任务时，隐藏“还没有任务”的提示 */
function updateEmptyHint() {
  emptyHint.classList.toggle("hidden", list.children.length > 0);
}

/** 把当前列表写进 localStorage（保存 [{ text, done }]） */
function saveTasks() {
  const tasks = [...list.querySelectorAll(".task-item")].map((li) => ({
    text: li.querySelector(".task-text").textContent,
    done: li.classList.contains("done"),
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/** 把一段文字变成一个任务条目 <li> */
function createTaskElement(text, done = false) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (done) li.classList.add("done");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;
  // 点任务文字：切换“完成 / 未完成”
  span.addEventListener("click", () => {
    li.classList.toggle("done");
    saveTasks();
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.type = "button";
  deleteButton.textContent = "×";
  deleteButton.setAttribute("aria-label", "删除任务");
  deleteButton.addEventListener("click", () => {
    li.remove();
    saveTasks();
    updateEmptyHint();
  });

  li.append(span, deleteButton);
  return li;
}

/** 从 localStorage 恢复上次打开时的任务 */
function loadTasks() {
  try {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    tasks.forEach((task) => {
      list.append(createTaskElement(task.text, task.done));
    });
  } catch {
    // 存储里是坏数据时，就当没有任务，不影响页面打开
  }
  updateEmptyHint();
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 阻止表单默认的整页刷新

  const text = input.value.trim();
  if (!text) return; // 空内容直接忽略

  list.append(createTaskElement(text));
  input.value = "";
  input.focus();
  updateEmptyHint();
  saveTasks();
});

loadTasks();
