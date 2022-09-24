const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );

  const overdue = () => {
    let due3 = all.filter((item) => item.dueDate == yesterday);
    return due3;
  };

  const dueToday = () => {
    let due = all.filter((item) => item.dueDate === today);
    return due;
  };

  const dueLater = () => {
    let due1 = all.filter((item) => item.dueDate === tomorrow);
    return due1;
  };

  const toDisplayableList = (list) => {
    let ans = [],
      index;
    for (index = 0; index < list.length; index++) {
      let box = list[index].completed == true ? "[x]" : "[ ]";
      let adddate = list[index].dueDate == today ? "" : list[index].dueDate;
      ans.push(`${box} ${list[index].title} ${adddate}`);
    }
    let res = ans.join("\n");
    ans = res.trim();
    return ans;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
