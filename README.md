# library-project
Javascript practice to track read/unread books. 
This is a project that is part of the Odin project, and I wanted to try out for review to refresh myself local storage, creating divs in the DOM, event listeners and more.</br>
Features:
- A popup form that lets you enter in a new book with title/author/pages/read.</br>
- Being able to toggle read/not read </br>
- Local storage to save books when you come back to the page</br>
- A Remove button to remove a book</br>

Challenges:
- For an app that may seem simple, there are a lot of steps here: getting the book info from the form and storing it in the library array with local storage. Then turning local storage back into an object that can be displayed in the DOM, with buttons. The library objects must be looped through and created. 
- You also must plan out your classes/IDs of your created elements, and think ahead to how you want the classes organized.
- The biggest challenge was figuring out how best to remove a selected book. The simplest way to do that is created the remove button without the "createBook" function, therefore that Remove button event listener is assigned to that book only. It is then spliced from the library. In the future, I'd like to look into another way of doing this, maybe by accessing an ID.

