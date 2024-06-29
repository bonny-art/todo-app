# TODO APP

## Project Overview

The **TODO App** is a modern, user-friendly application designed to help you manage your tasks efficiently and effectively. Whether you're tracking personal goals, organizing work projects, or planning daily activities, this app provides a seamless experience across different devices.

## Key Features

### 1. **Comprehensive Todo Management**

- **Create, Read, Update, Delete (CRUD)**: Easily add new tasks, edit existing ones, mark them as complete, or remove them when they're no longer needed.
- **Search and Filter**: Quickly locate tasks by title or description and filter them by their status (private, public, completed, or pending).
- **Pagination**: Browse through extensive lists of tasks with simple pagination controls, adapted for both desktop? tablet and mobile experiences.

### 2. **Cross-Device Compatibility**

- **Responsive Design**: Enjoy a tailored interface for desktop, tablet, and mobile views:
  - **Desktop**: View your tasks in a detailed table format.
  - **Tablet**: Navigate through your tasks using a smooth slider interface.
  - **Mobile**: Manage your tasks in a compact, easy-to-use list format.

### 3. **Secure Authentication**

- **User Accounts**: Sign up with a username, email, and password to start managing your tasks.
- **JWT Authentication**: Ensure secure access to your data with JSON Web Token (JWT) based authentication.
- **Account Management**: Easily reset your password, update account information, and verify your email.

### 4. **User-Centric Privacy Settings**

- **Public and Private Tasks**: Choose whether your tasks are visible to others or keep them private.
- **Access Control**: Only you can access and modify your private tasks, while public tasks can be viewed by all users.

### 5. **Adaptive and Intuitive UI**

- **Theme-Based Design**: Consistent and appealing visual experience with font sizes, colors, margins, and paddings based on a predefined theme.
- **Emotion CSS**: Aesthetic and performance-oriented styling to ensure a smooth user experience.

### 6. **Interactive Forms**

- **Final Form Integration**: Utilize efficient forms for task creation and editing, ensuring data validation and smooth user interaction.

### 7. **Efficient State Management**

- **Zustand for State Management**: A streamlined approach to manage your application's state, providing a fast and intuitive user experience.

## Benefits

- **Enhanced Productivity**: Streamline your task management process, making it easier to stay organized and on top of your responsibilities.
- **Flexibility and Accessibility**: Manage your tasks anytime, anywhere, with a responsive design that works perfectly on any device.
- **Privacy Control**: Decide who sees your tasks with simple privacy settings, giving you control over your personal and shared to-dos.
- **Secure and Reliable**: Trust in the security of your data with robust authentication mechanisms and user account management.

## Technologies Used

- **Backend**: Express, TypeScript, PostgreSQL, Prisma ORM, Passport
- **Frontend**: React, TypeScript, Zustand, React Final Form, Blueprint, Emotion CSS

---

Experience a better way to manage your tasks with the TODO App—designed for simplicity, adaptability, and security.

---

## Required features

1. **Todo list - CRUD operations on backend**;

- _Each `PUT` `POST` rout should has validation of `req.body` and throw `400` error in case of failed validation_
- _Separate your logic from routes. You should perform all interactions with `DB` inside your `services/<filename>.service.ts` file and import it to `controllers/<filename>.controller.ts`. After that you can call your controllers in routes_
- _Create GENERIC validator, isExist (for put, delet and get by id), tryCatch middlewares_

2. **Todo list - Connect your CRUD operations with frontend**;

- _You should split your code on logical components ( `<TodoContainer />`, `<TodoElement/>` etc);_
- _For Edit/Add you should use forms written with [React Final Form](https://final-form.org/docs/react-final-form/getting-started);_
- _Put logic related to server interactions inside `service/http.ts` file (check [Our Documentation](https://github.com/CodeGeneration-2020/code-generation-code-style/blob/main/docs/javascript.md#server-interactions-))_
- _Use Zustand for managing your application state [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction);_
- _Todo list page should have different behaviors on different devices. Desktop - should be displayed as a table, Tablet - should be as slider, Mobile - list._
- _Your font sizes, colors, margins, paddings should be in THEME const_
- _Create ROUTER_KEYS const for routing_
- _Use [Emotion CSS](https://emotion.sh/docs/introduction) in order to style your components_
- _Design should be tablet and mobile adaptive_

3. **Authorization (login/signup) backend;**

- _Use jwt [authorization](https://nodejsdev.ru/doc/jwt/) and [Passport](http://www.passportjs.org/) for that_
- _User should have username, password and email_
- _Logic related to token processing should be stored in `middlewares/auth.middleware.ts`_
- _Private todos should be accessible only for Todo creators_
- _Public todos should be accessible for all users_
- _You should implement account verification functionallity via email_
- _Change password endpoint_
- _Forgot password endpoint. Reseting password demands a special link, which you should send via email_

4. **Authorization (login/signup) frontend;**

- _Should store token in localStorage_
- _You have to devide your routes into 2 groups: public and private. Private routes should be accessible only for user, who is logged in. Public routes should be accessible for all users_
- _Use React Final Form for handling validation and submit func_
- _Extend your http service for interacting with auth requests (check our codestyle)_
- _Integrate logout and edit user information UI (like username and password)_

5. **Filters for todo list by title and statuses (private and completed);**

- _You should pass filter params through `req.params`(`localhost:3000/todo?search=test&status=completed`)_
- _Connect backend filtration with UI components_

6. **Button pagination;**

- _All pagination should be handled by backend_
- _Change frontend request with pagination params_
- _Pagination should be done differently on different devices. Desktop - button pagination, Tablet - horizontal scroll pagination, Mobile - vertical scroll pagination_

### NOTES

> Backend should have stored in `backend` dir, mobile should be stored in `fronted` dir.

Design: [drive.google](https://drive.google.com/file/d/1PcusGdHTmD4qzhKRJnd9pk2jLAUyLIiX/view?usp=sharing)
