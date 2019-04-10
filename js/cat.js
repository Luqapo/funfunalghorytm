const imgSrc = ['img/cat.jpg', 'img/cat2.jpg', 'img/cat3.jpg'];
const catsArr = ['Filemon', 'Mruczek', 'Garfild', 'Scala', 'Haskel'];
const counter = [];

const div = document.querySelector('.cats-container');
const catsList = document.createElement('ul');
const nodeList = document.createElement('div');

nodeList.className = 'cats-list';
div.appendChild(nodeList);

catsArr.forEach(cat => {
  const catItem = document.createElement('li');
  catItem.innerText = cat;
  catsList.appendChild(catItem);
  createCat(cat);
  counter.push(0);
});
div.appendChild(catsList);

const paragraphs = document.querySelectorAll('p');
const images = document.querySelectorAll('img');

images.forEach((image, index) => {
  image.setAttribute('src', imgSrc[random()]);
  image.addEventListener('click', () => {
    counter[index] += 1;
    paragraphs[index].innerText = counter[index];
  });
});

const catsDivs = document.querySelectorAll('.cat');
const catMenu = document.querySelectorAll('li');
catMenu.forEach((item, index) => {
  item.addEventListener('click', () => {
    catsDivs[index].style.display = 'block';
    catsDivs.forEach((catDiv, i) => {
      if (i !== index) {
        catDiv.style.display = 'none';
      }
    });
  });
});

function createCat(catName) {
  const catDiv = document.createElement('div');
  const paragraph = document.createElement('p');
  const name = document.createElement('span');
  name.innerText = catName;
  const image = document.createElement('img');
  catDiv.appendChild(image);
  catDiv.appendChild(name);
  catDiv.appendChild(paragraph);
  catDiv.className = 'cat';
  nodeList.appendChild(catDiv);
}

function random() {
  return Math.floor(Math.random() * 3);
}
