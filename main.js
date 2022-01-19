// // Utils

// const noop = () => {};

// // Select

// const defaultOptions = {
//   onChange: noop,
// };

// class Select {
//   constructor(select, options) {
//     this.select = select;
//     this.options = { ...defaultOptions, ...options };
//   }
// }

// // Exemples of using

// new Select(document.querySelector('select[name="region"]'), {
//   onChange: (selectedOptions) => {
//     console.log("selectedOptions", selectedOptions);
//   },
// });

// const div = document.createElement("div");
// div.className = "redBox";

// const body = document.querySelector("body");
// body.appendChild(div);

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");
  let buttonsClear = document.querySelectorAll(".buttons__clear");
  let buttonsAcept = document.querySelectorAll(".buttons__acept");
  let buttonsBack = document.querySelectorAll(".component__buttonBack");
  let buttonsShowSelected = document.querySelectorAll(
    ".component__buttonShowSelected"
  );

  buttonsShowSelected.forEach((item) => {
    item.addEventListener("click", showSelected);
  });

  buttonsBack.forEach((item) => {
    item.addEventListener("click", buttonBack);
  });

  buttonsClear.forEach((item) => {
    item.addEventListener("click", buttonClear);
  });

  buttonsAcept.forEach((item) => {
    item.addEventListener("click", buttonAcept);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectActive);
  });

  function selectActive() {
    this.parentElement.classList.add("component__select_active");
    this.parentElement.parentElement.classList.add("component_active");
  }

  function selectChoose() {
    let text = this.innerText;
    select = this.closest(".component__select");
    let currentText =
      this.closest(".component__select").querySelector(".select__current");
    if (this.classList.value === "select__item") {
      if (currentText.innerText === "") {
        currentText.innerText += ` ${text}`;
      } else {
        currentText.innerText += `, ${text}`;
      }
    } else {
      let currentText =
        this.closest(".component__select").querySelector(
          ".select__current"
        ).innerText;

      if (
        this.closest(".component__select")
          .querySelector(".select__current")
          .innerText.indexOf(`${this.innerText}, `) !== -1
      ) {
        this.closest(".component__select").querySelector(
          ".select__current"
        ).innerText = currentText.replace(`${this.innerText}, `, "");
      } else if (
        this.closest(".component__select")
          .querySelector(".select__current")
          .innerText.indexOf(`, ${this.innerText}`) !== -1
      ) {
        this.closest(".component__select").querySelector(
          ".select__current"
        ).innerText = currentText.replace(`, ${this.innerText}`, "");
      } else {
        this.closest(".component__select").querySelector(
          ".select__current"
        ).innerText = currentText.replace(this.innerText, "");
      }
    }

    this.classList.toggle("select__item_active");
    calcEcepted(this);
  }
  let p = document.querySelectorAll("select");
  console.log(p);
};

function buttonBack() {
  this.parentElement
    .querySelector(".component__select")
    .classList.remove("component__select_active");
  this.parentElement.classList.remove("component_active");
}

function buttonClear() {
  select = this.closest(".component__select");
  let Items =
    this.closest(".component__select").querySelectorAll(".select__item");
  Items.forEach((item) => {
    item.classList.remove("select__item_active");
  });
  this.parentElement.parentElement.parentElement.parentElement.querySelector(
    ".component__buttonShowSelected"
  ).innerText = `Показать выбранное (0)`;
  this.parentElement.parentElement.parentElement.parentElement.querySelector(
    ".component__countSelected"
  ).innerText = `Выбранное (0)`;
  this.parentElement.parentElement.parentElement.parentElement
    .querySelector(".component__buttonShowSelected")
    .classList.add("component__buttonShowSelected_disable");
  this.parentElement.parentElement.parentElement.parentElement.querySelector(
    ".select__current"
  ).innerText = "";
  this.parentElement.parentElement.parentElement.parentElement
    .querySelector(".select__current")
    .classList.remove("select__current_active");
}

function buttonAcept() {
  select = this.closest(".component__select");
  select.classList.remove("component__select_active");
  select.parentElement.classList.remove("component_active");
}

function calcEcepted(t) {
  size = t.parentElement.querySelectorAll(".select__item_active");
  if (size.length === 0) {
    t.parentElement.parentElement.parentElement
      .querySelector(".component__buttonShowSelected")
      .classList.add("component__buttonShowSelected_disable");
    t.parentElement.parentElement.parentElement
      .querySelector(".select__current")
      .classList.remove("select__current_active");
  } else {
    t.parentElement.parentElement.parentElement
      .querySelector(".component__buttonShowSelected")
      .classList.remove("component__buttonShowSelected_disable");
    t.parentElement.parentElement.parentElement
      .querySelector(".select__current")
      .classList.add("select__current_active");
  }
  t.parentElement.parentElement.parentElement.querySelector(
    ".component__buttonShowSelected"
  ).innerText = `Показать выбранное (${size.length})`;
  t.parentElement.parentElement.parentElement.querySelector(
    ".component__countSelected"
  ).innerText = `Выбранное (${size.length})`;
}

function showSelected() {
  this.parentElement.classList.add("component_active");
  this.parentElement
    .querySelector(".component__select")
    .classList.add("component__select_active");
}

select();
