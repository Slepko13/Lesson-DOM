let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];
//Task 1
class MyPlayList {
  constructor() {
    this.myPlayList = playList;
  }

  showMyPlayList() {
    let strPrint = "";
    this.myPlayList.map(function(item) {
      strPrint += `<li>${item.author} : ${item.song}</li>`;
    });
    document.getElementById("ListMusic").innerHTML = strPrint;
  }

  hideButton() {
    let buttons = document.getElementsByClassName("button");
    let arrayButtons = Array.from(buttons);
    arrayButtons.map(function(item) {
      item.style.display = "none";
    });
  }
}

function getShowList() {
  let musicList = new MyPlayList();
  musicList.showMyPlayList();
  musicList.hideButton();
}
//Task 2
class ModalWindow {
  constructor() {}

  showModalWindow() {
    document.getElementById("modal").style.display = "block";
  }
  hideModalWindow() {
    document.getElementById("modal").style.display = "none";
  }
}

function getOpenWindow() {
  let modalWindow = new ModalWindow();
  modalWindow.showModalWindow();
}

function closeWindow() {
  let modalWindow = new ModalWindow();
  modalWindow.hideModalWindow();
}

//Task 3

class Circle {
  constructor(_color) {
    this.color = _color;
  }

  showCircle() {
    document.getElementById(`${this.color}`).style.display = "block";
    document.getElementById(`${this.color}`).style.background = `${this.color}`;
  }

  hideCircle() {
    document.getElementById(`${this.color}`).style.display = "none";
  }
}

let circleRed = new Circle("red");
let circleYellow = new Circle("yellow");
let circleGreen = new Circle("green");
let randomColor = Math.floor(1 + Math.random() * 3);
let i = randomColor;
let j = Math.round(Math.random());

function turnOn() {
  document.getElementById("turnOn").style.display = "none";
  document.getElementById("change").style.display = "block";
  document.getElementById("turnOff").style.display = "block";
  switch (i) {
    case 1:
      circleRed.showCircle();
      circleYellow.hideCircle();
      circleGreen.hideCircle();
      break;
    case 2:
      circleRed.hideCircle();
      circleYellow.showCircle();
      circleGreen.hideCircle();
      break;
    case 3:
      circleRed.hideCircle();
      circleYellow.hideCircle();
      circleGreen.showCircle();
      break;
  }
}

function changeLight() {
  if (i == 1) {
    j = true;
  }

  if (i == 3) {
    j = false;
  }

  if (j == true) {
    i++;
  }

  if (j == false) {
    i--;
  }

  switch (i) {
    case 1:
      circleRed.showCircle();
      circleYellow.hideCircle();
      circleGreen.hideCircle();
      break;
    case 2:
      circleRed.hideCircle();
      circleYellow.showCircle();
      circleGreen.hideCircle();
      break;
    case 3:
      circleRed.hideCircle();
      circleYellow.hideCircle();
      circleGreen.showCircle();
      break;
  }
}
function turnOff() {
  document.getElementById("turnOn").style.display = "block";
  document.getElementById("change").style.display = "none";
  document.getElementById("turnOff").style.display = "none";
  circleRed.hideCircle();
  circleYellow.hideCircle();
  circleGreen.hideCircle();
  i = Math.floor(1 + Math.random() * 3);
}
