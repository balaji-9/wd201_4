/* eslint-disable no-undef */
const todoList = require("../todo");
const {
  all,
  markAsComplete,
  add,
  today,
  yesterday,
  tomorrow,
  overdue,
  dueToday,
  dueLater,
} = todoList();

describe("TodoLIst Test Suite ", () => {
  beforeAll(() => {
    add(
      { title: "Service Vehicle", dueDate: today, completed: false },
      { title: "Pay rent", dueDate: today, completed: true },
      { title: "File taxes", dueDate: tomorrow, completed: false },
      { title: "Pay electric bill", dueDate: tomorrow, completed: false }
    );
  });

  test("Should add new todo", () => {
    const len = all.length;
    add({
      title: "Test",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(len + 1);
  });

  test("Should mark as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    let temp = overdue;
    let index;
    for (index = 0; index < temp.length; index++) {
      expect(temp[index].dueDate).toBe(yesterday);
    }
  });

  test("Should retrieve due today items", () => {
    let temp = dueToday;
    let index;
    for (index = 0; index < temp.length; index++) {
      expect(temp[index].dueDate).toBe(today);
    }
  });

  test("Should retrieve due Later items", () => {
    let temp = dueLater;
    let index;
    for (index = 0; index < temp.length; index++) {
      expect(temp[index].dueDate).toBe(tomorrow);
    }
  });
});
