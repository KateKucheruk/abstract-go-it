// const sectionFirst = document.querySelector(`.js-list`);

// console.dir(sectionFirst);
// console.log(sectionFirst.children);
// console.log(sectionFirst.childNodes);
// console.log(sectionFirst.parentNode);
// console.log(sectionFirst.firstChild);
// console.log(sectionFirst.firstElementChild);
// console.log(sectionFirst.lastChild);
// console.log(sectionFirst.lastElementChild);
// console.log(sectionFirst.previousSibling);
// console.log(sectionFirst.previousElementSibling);
// console.log(sectionFirst.nextSibling);
// console.log(sectionFirst.nextElementSibling);
//якщо потрібно звернутись до атрибуту, н-д: alt, src, то використовуємо console.log(sectionFirst.getAttribute(`alt`));
//setAttribute(`height`, 320), н-д:
//sectionFirst.setAttribute(`height`, 320); додаємо значення в атрибут, спочатку зазначаємо ім`я, а потім значення
//більше використовуємо для посилань та зображень, там де є атрибути
//а можемо просто зробити запис таким чином: .sectionFirst.height = 320;
//клас повинен міститись в тезі img class" ", тоді будуть додані сюди атрибути
//є ще removeAttribute, який видаляє значення атрибуту, н-д width
//ще є значення hasAttribute, перевіряє чи є в наявності такий атрибут.
//Повертає значення або tru або false

//data- відповідає за ідентифікацію дії кнопки
//щоб дізнатись на яку кнопку натиснув користувач

// const listElTwo = document.querySelector(`.js-btn`);

// console.dir(listElTwo);

// listElTwo.style.color = `teal`;
// listElTwo.style.backgroundColor = `black`;
const createCard = (addLi) => {
  const galleryItemEl = document.createElement(`li`);
  //   galleryItemEl.classList.add(`.js-list`);

  const galleryListEl = document.querySelecto(`.js-list`);
  galleryListEl.append(galleryItemEl);
};

console.dir(galleryItemEl);

// const galleryListEl = document.querySelecto(`.js-list`);
// galleryListEl.append(galleryItemEl);

//append в середину кінця списку
//prepend початок в списку
//before перед списком
//after після сптску ul ol
