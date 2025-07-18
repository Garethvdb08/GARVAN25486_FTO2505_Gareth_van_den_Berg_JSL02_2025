# Kanban – Todo Lists and Task Manager -

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

This project enhances a responsive Kanban board, transforming it from a static UI into a fully interactive task management app using **JavaScript**.

---

## 🎯 Key Objectives

This project involves implementing a JavaScript-based task entry system where users can input two tasks with complete details, ensuring data consistency and validation. The system will guide users through entering valid task titles, descriptions, and statuses, enforcing correct formatting while maintaining clean and well-documented code.

### ✅ Project Requirements

- [x] Ensure the JavaScript file is correctly linked to the HTML document.
- [x] Prompt the user to enter details (title, description, status) for two separate tasks and store them in variables.
- [x] Convert all status inputs to lowercase automatically for consistency.
- [x] Validate the status input to allow only `todo`, `doing`, or `done` and repeatedly prompt the user until a valid status is entered.
- [x] Display the title and status of completed tasks (status: `done`) in the console.
- [ ] If no tasks are marked as `done`, show a motivational message in the console: "No tasks completed, let's get to work!".

### Code Quality & Maintainability

- [x] Use descriptive variable names to enhance readability and maintainability.
- [x] Include clear comments explaining complex logic and functionality for easier understanding.

---

## 📸 Usage Examples

The application interacts with the user through a series of prompts and provides feedback in the browser console.

| Scenario                   | Output                                                                                                                               |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| **Task Input**             | The program prompts the user for the task title, description, and status. <br> !Title Prompt                                         |
| **Invalid Status**         | If the user enters a status other than `todo`, `doing`, or `done`, an alert is shown, and the prompt reappears. <br> !Invalid Status |
| **Completed Task Log**     | When at least one task is marked as `done`, its details are logged to the console. <br> !Completed Task Log                          |
| **No Completed Tasks Log** | If no tasks are marked as `done`, a motivational message is displayed instead. <br> !No Completed Tasks Log                          |
