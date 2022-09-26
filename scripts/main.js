const footnote = document.getElementsByClassName("footnote")[0];
const currentDate = new Date();
footnote.innerHTML += " " + currentDate.getFullYear();

let totalClick = 0;
const spinningCallback = () => {
  totalClick++;
  if (totalClick >= 5) {
    const profilePicture = document.getElementById("profile-picture");
    profilePicture.classList.add("rotate");
    console.log("HAPPY CODING!");
  }
};
