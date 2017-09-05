# Cyresume
A really cool resume template.

I've decided to open source this.

Inside `console/` you will find several files. The entrypoint, `index.html`, is actually almost entirely blank. `console.js` manages the homepage.
This is a typeout resume modeled after consoles and terminals such as the bash environment.

Inside `console.js`, you can use the add function and add_normal function to append typeable lines.

```javascript
add("This is a typeable line that will be typed word by word."); //prints out like this: > This is a typeable line that will be typed word by word.<br />
add_normal("This is a line that will be typed out all at once."); //prints out like this: This is a line that will be typed out all at once.<br />
```

Right now it is typed automatically, you can uncomment a section of code shown in `console.js` to have the user type it out.

There is also a pacman based and tetris based template, but they are not in use.