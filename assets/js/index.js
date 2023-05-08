// Dire

const number_id = JSON.parse(localStorage.getItem("number_id"));
const usrjoin = document.getElementById("usrjoin");
document.getElementById("usrjoin").onclick = function () {
  if (number_id === null) {
    window.location.href = "./pages/CLIENT/clientloginpage.html";
  } else {
    window.location.href = "./pages/CLIENT/client main page.html";
  }
};
