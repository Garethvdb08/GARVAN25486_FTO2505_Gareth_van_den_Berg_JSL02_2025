//An array to hold all of the task data.
const tasks = [];
//-- Get the details for the First task --
const title1 = window.prompt("Enter task 1 title:") || "No title";
const description1 =
  window.prompt("Enter task 1 description:") || "No description";
const status1 = window.prompt("Enter task 1 status") || "No status";
// -- Group the first task's details into a single object --
const task1 = {
  title: title1,
  description: description1,
  status: status1.toLowerCase(),
};
// -- Add (or "push") the first taks object into the task array --
tasks.push(task1);
// -- Get details for the Second task --
const title2 = window.prompt("Enter task 2 title:") || "No title";
const description2 =
  window.prompt("Enter task 2 description:") || "No description";
const status2 = window.prompt("Enter task 2 status") || "No status";
// -- Group the second task")
const task2 = {
  title: title2,
  description: description2,
  status: status2.toLowerCase(),
};
// -- Add (or "push") the second taks object into the task array --
tasks.push(task2);
// To prove that the data  is being stored.
console.log("All task have been stored:", tasks);
