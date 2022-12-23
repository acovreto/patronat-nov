const td = document.querySelector("td");
const h2 = document.querySelector(".container-header2 h2");
const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");
const tableHead = document.querySelector("thead");
const btn = document.querySelector(".btn");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const predmet = document.querySelector(".predmet");
const close = document.querySelector("#close");
const header = document.querySelector(".header");
const classHeader = document.querySelector(".class-header");
const randomStudent = document.querySelector(".random-student");
const modalContainer = document.querySelector(".modal-container");
const tableContainer = document.querySelector(".table-container");
const ucenik = document.querySelector(".ucenik");
const modalOpen = document.querySelector("#sign-in");
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const headerText = document.querySelector(".header-text");
const signIn = document.querySelector("#sign-in");
const signOut = document.querySelector("#sign-out");
const home = document.querySelector(".home");
const studentTable = document.querySelector(".student-table");
const tajmer = document.querySelector(".tajmer");

// classHeader.innerHTML = localStorage.getItem("class");

let classes = [
  {
    name: "I1",
    students: `1. Биџос Хадис
    2. Дуртаноски Филип
    3. Јованоски Давид
    4. Јорданоски Димитар
    5. Котоски Владимир
    6. Куртиши Блерон
    7. Лазороски Христијан
    8. Лолески Стефан
    9. Лошкоски Александар
    10. Митески Бошко
    11. Наумоски Мартин Ристе
    12. Наумоски Мартин Ристо
    13. Недески Матео
    14. Петрески Никола
    15. Печој Димитрија
    16. Ризвановиќ Трајче
    17. Ристески Никола
    18. Рустем Саид
    19. Сиљаноски Христијан
    20. Симоноски Златко
    21. Стојковски Никола
    22. Трпоски Бојан
    23. Хасан Асан`,
  },
  {
    name: "III3",
    students: `1. Апостоловски Марко
  2. Бајрам Ален
  3. Бакулески Дамјан
  4. Гиноски Јован
  5. Димитријески Мартин
  6. Димоски Димитар
  7. Дуклески Александар
  8. Ѓорѓиески Андреј
  9. Ѓоршески Виктор
  10. Ѓоршески Марио
  11. Завојчевски Илија
  12. Здравковиќ Владимир
  13. Иловски Бојан
  14. Јовчески Иво
  15. Кочески Бобан
  16. Марков Марио
  17. Марков Никола
  18. Маркоска Марта
  19. Маркоски Јован
  20. Модева Климентина
  21. Настески Виктор
  22. Павлески Марио
  23. Петрески Кристијан
  24. Попов Виктор
  25. Сејдиноски Ерен
  26. Трпески Александар
  27. Тупаноски Јорданчо
  28. Цаноски Христијан
  29. Цацаноски Андреј
  30. Целески Христијан`,
  },
  {
    name: "III4",
    students: `1. Башукоски Даниел
    2. Блажески Виктор
    3. Вучетиќ Дејан
    4. Димоска Емилија
    5. Илијевска Софија
    6. Јузмески Мартин
    7. Каланоски Никола
    8. Колушоски Филип
    9. Кочоски Христијан
    10. Кутаноски Драган
    11. Маџар Марино
    12. Милошоски Горазд
    13. Митревски Наум
    14. Настовски Марко
    15. Новеска Ана
    16. Палитов Стефан
    17. Палитова Сара
    18. Петрески Давор
    19. Речкоски Наум
    20. Рушан Енис
    21. Симоновски Давид
    22. Симоноски Мартин
    23. Смилевски Владимир
    24. Србакоски Христијан
    25. Стефаноски Петар
    26. Стојанов Благојче
    27. Стрезовска Бојана
    28. Танаскоски Петар
    29. Трифуновски Филип
    30. Трпески Антониј
    31. Целески Никола`,
  },
  {
    name: "I4",
    students: `1. Богојовски Благоја
    2. Брдароска Марија
    3. Гугоски Филип
    4. Димиќ Лука
    5. Донев Стефан
    6. Донески Филип
    7. Ѓорески Климент
    8. Јанески Виктор
    9. Јованоски Бојан
    10. Јованчев Андреј
    11. Јоноска Кети
    12. Каланоски Владимир
    13. Крстаноски Дарко
    14. Кузманоска Јана
    15. Мајкиќ Мартин
    16. Маркоски Марио
    17. Мешкоски Андреј
    18. Митревски Христијан
    19. Мургоски Славчо
    20. Мурџоски Борјан
    21. Новаков Павел
    22. Палоски Бојан
    23. Попоски Марко
    24. Ристевски Мартин
    25. Савиќ Андреа
    26. Стевановски Стефан
    27. Стојаноски Александар
    28. Тасеска Мелани
    29. Тодороски Лука
    30. Толески Борис
    31. Трифуноски Кристијан
    32. Трпески Бојан`,
  },
  {
    name: "I3",
    students: `1. Андоноски Антонио
    2. Апостоловски Михаил
    3. Бандулиев Бојан
    4. Велкоски Димитар
    5. Вељановски Боби
    6. Гиноски Дејан
    7. Деспотоски Леон
    8. Димоски Марко
    9. Ѓоршески Бојан
    10. Ѓулејиќ Дарко
    11. Калаческа Маријана
    12. Камнароски Александар
    13. Кироски Андреј
    14. Костадиноски Јоаким
    15. Костески Христијан
    16. Кочоски Петар
    17. Курто Леонид
    18. Манговски Филип Атанас
    19. Мирчески Давид
    20. Наумоски Климент
    21. Раковиќ Марко
    22. Сандрески Андреј
    23. Саревски Јован
    24. Спасеска Маја
    25. Стевоски Марко
    26. Стефаноска Анабела
    27. Стефаноски Филип
    28. Стојаноска Александра
    29. Стојаноски Васил
    30. Хаџиев Константин
    31. Цветаноски Петар
    32. Цоцески Марко`,
  },
];
let classNb;
if (localStorage.getItem("class")) {
  classNb = localStorage.getItem("class").split("-").join("");
}
// toggle.disabled = true;
const profNum = ["6", " 21", "25", "32", "37", " 42", "47", "50", "51", "81"];
const predmeti = [
  "ОДС",
  "ПУ",
  "СПОРТ",
  "ООП",
  "МАКДОНСКИ",
  "АНГЛИСКИ",
  "УВС",
  "МАТЕМАТИКА",
  "ВЕБ-ПРОГРАМИРАЊЕ",
  "САУ",
  "ПРАКСА",
];
const passwords = [
  "prof",
  "prof",
  "prof",
  "prof",
  "prof",
  "prof",
  "prof",
  "prof",
  "prof",
  "prof",
];
let brojUcenici;

// -----------------display table function------------
function displayTable(tabelaName, novKlas) {
  table.classList.add("show-table");
  let klas = [];

  if (!localStorage.getItem(tabelaName)) {
    novKlas.forEach((ucenik) => {
      klas.push({
        ucenik,
        oceni: ["", "", "", "", "", "", "", "", "", ""],
      });
    });
    localStorage.setItem(tabelaName, JSON.stringify(klas));
  }
  let data = JSON.parse(localStorage.getItem(tabelaName));

  let html = ``;

  data.forEach((item) => {
    let html1 = ``;
    let html0 = ``;
    tableHead.innerHTML = `<tr>
    <th>Име и Презиме</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th>Оцена</th>
    <th><button class="close-btn" id="close">
    <i class="fa fa-times"></i>
  </button></th>
  </tr>`;
    html0 = `<tr><td>${item.ucenik}</td>`;
    item.oceni.forEach((oce, index) => {
      html1 += `<td><input type="text" name="ocena${index}" value="${
        oce ? oce : ""
      }" /></td> `;
    });
    html1 += `<td><button class="btn">зачувај</button></td></tr>`;
    html += html0 + html1;
  });

  tableBody.insertAdjacentHTML("afterbegin", html);
}
modalOpen.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.classList.add("show-modal");
});
// --------------get class---------------------
const dropdownList = document.querySelector(".ucilnica-dropdown");
const clasNumbHeader = document.querySelector(".class-number-header");

dropdownList.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName == "A") {
    localStorage.setItem("class", e.target.textContent);
    classHeader.innerHTML = localStorage.getItem("class");
    headerText.textContent = "";
    body.classList.remove("show-nav");
    // dropdownList.style.display = "none";
    if (localStorage.getItem("class")) {
      let classNb = localStorage.getItem("class").split("-").join("");

      let klas = classes.find((k) => k.name == classNb);

      h2.innerHTML = `ДОБРЕ ДОЈДОВТЕ ВО УЧИЛНИЦА ${klas.name}`;
      let novKlas = [];
      klas.students.split("\n").forEach((student) => {
        let s1 = student.split(".");
        novKlas.push(s1[1].trim());
      });
      brojUcenici = novKlas.length;
      console.log(brojUcenici);
      table.classList.add("show-table");
      displayTable(`tabela${klas.name}`, novKlas);
    }
  }
});
// --------form submition---------
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (form.broj.value && form.password.value) {
    if (
      profNum.includes(form.broj.value) &&
      form.password.value == passwords[profNum.indexOf(form.broj.value)]
    ) {
      localStorage.setItem("formFill", true);
      localStorage.setItem("profesor", form.broj.value);
      // toggle.disabled = false;
      signIn.classList.remove("show-btn");
      signOut.classList.add("show-btn");
      headerText.textContent = "Добре дојдовте во училница";
      modalContainer.classList.remove("show-modal");
    } else return;
  } else {
    return;
  }
});
// -------------Sign out---------------
signOut.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.setItem("formFill", false);
  signIn.classList.add("show-btn");
  signOut.classList.remove("show-btn");
  // toggle.disabled = true;
  table.innerHTML = "";
  table.classList.remove("show-table");
  body.classList.remove("show-nav");
  headerText.textContent = "Да влезете во училница треба да се најавите!";
  window.location.reload();
});
// ---------toggle button------------
toggle.addEventListener("click", (e) => {
  e.preventDefault();
  // dropdownList.style.display = "grid";
  // console.log(localStorage.getItem("formFill"));
  let ls = localStorage.getItem("formFill");

  if (ls == "true") {
    body.classList.toggle("show-nav");
  }
});
// ------------home button--------------
home.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.remove("show-nav");
  // toggle.disabled = true;
  window.location.assign("index.html");
});
// ----------table creation-----------------

studentTable.addEventListener("click", (e) => {
  e.preventDefault();

  body.classList.remove("show-nav");
  if (localStorage.getItem("class")) {
    let classNb = localStorage.getItem("class").split("-").join("");

    let klas = classes.find((k) => k.name == classNb);

    console.log(klas);
    h2.innerHTML = `ДОБРЕ ДОЈДОВТЕ ВО УЧИЛНИЦА ${klas.name}`;
    let novKlas = [];
    klas.students.split("\n").forEach((student) => {
      let s1 = student.split(".");
      novKlas.push(s1[1].trim());
    });

    displayTable(`tabela${klas.name}`, novKlas);
  }
});
// -------------data saving button------------------
tableBody.addEventListener("click", (e) => {
  // let profesor = localStorage.getItem("profesor");
  console.log("tabela");
  if (e.target.nodeName == "BUTTON") {
    let row = e.target.closest("tr");
    let ime = row.querySelector("td:first-child").textContent;
    console.log(ime);
    let tableRowInput = row.querySelectorAll("td input");
    console.log(tableRowInput);
    let oceRow = [];
    tableRowInput.forEach((el) => {
      oceRow.push(el.value);
    });
    let data = JSON.parse(localStorage.getItem(`tabela${classNb}`));
    let index = data.findIndex((obj) => obj.ucenik == ime);
    data[index].oceni = oceRow;
    console.log(data[index].oceni);

    localStorage.setItem(`tabela${classNb}`, JSON.stringify(data));
    alert("Податоците се зачувани!");
  }
});

// --------------closing form--------------
close.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("formFill", false);
  modalContainer.classList.remove("show-modal");
});
// --------------closing table--------------
tableHead.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName == "I") {
    table.classList.remove("show-table");
  }
});
window.addEventListener("load", (e) => {
  modalContainer.classList.add("show-modal");
});
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   modalContainer.classList.remove("show-modal");
//   tableContainer.classList.add("show-table");
//   let value = form.broj.value;
//   let index = profNum.indexOf(Number(value));
//   console.log(predmeti[index]);
//   // header.innerHTML = `<h1>Трето-3:${predmeti[index]}</h1><button class="btn predmet ucenik">Одбери ученик</button><button class="btn nazad ucenik">Назад</button>`;
//   // nazad.classList.add("show-button");
//   ucenik.classList.add("show-button");
//   nazad.classList.add("show-button");
//   displayTable(value);
// });
// nazad.addEventListener("click", () => {
//   console.log("nazad");
//   tableContainer.classList.remove("show-table");
//   ucenik.classList.remove("show-button");
//   nazad.classList.remove("show-button");
// });
const cube = document.getElementById("cube");
const sides = [...document.querySelectorAll(".dot")];
const cubeWraper = document.querySelector(".cube-wraper");
const closeCube = document.querySelector(".close-cube");
const minCube = document.querySelector(".min-cube");
const maxCube = document.querySelector(".max-cube");

let min = 10;
let max = 24;

// let novKlas = [];
// if (localStorage.getItem("class")) {
//   let className = localStorage.getItem("class").split("-").join("");
//   let klas = classes.find((k) => k.name == className);

//   klas.students.split("\n").forEach((student) => {
//     let s1 = student.split(".");
//     novKlas.push(s1[1].trim());
//   });
//   brojUcenici = novKlas.length;
// }

cube.onclick = function () {
  let randomArr = [];
  for (let i = 1; i <= 6; i++) {
    randomArr.push(getRandomNum(1, brojUcenici + 1));
  }
  randomArr.forEach((n, i) => {
    sides[i].textContent = `${n}.`;
  });
  let xRand = getRandom(max, min);
  let yRand = getRandom(max, min);

  cube.style.transform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
};

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}
function getRandomNum(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
randomStudent.addEventListener("click", (e) => {
  e.preventDefault();
  cubeWraper.classList.add("min-cube");
  body.classList.remove("show-nav");
});

// tajmer.addEventListener("click", (e) => {
//   e.preventDefault();
//   counterWraper.style.display = "flex";
//   body.classList.remove("show-nav");
// });
closeCube.addEventListener("click", () => {
  cubeWraper.style.display = "none";
});
minCube.addEventListener("click", () => {
  cubeWraper.classList.add("min-cube-wraper");
});
maxCube.addEventListener("click", () => {
  cubeWraper.classList.remove("min-cube-wraper");
});
