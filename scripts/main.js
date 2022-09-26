const footnote = document.getElementsByClassName("footnote")[0];
const currentDate = new Date();

footnote.innerHTML += " " + currentDate.getFullYear();
