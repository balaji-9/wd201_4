/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, today } = todoList();

describe("TodoLIst Test Suite ", () => {
  beforeAll(() => {
    add({
      title: "Test",
      completed: false,
      dueDate: today,
    });
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
});
