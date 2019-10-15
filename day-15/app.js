const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const clearBtn = document.querySelector('.clear-all');
const checkBtn = document.querySelector('.check-all');
const uncheckBtn = document.querySelector('.uncheck-all');

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map(
      (plate, i) =>
        `<li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
          plate.done ? 'checked' : ''
        }/>
          <label for="item${i}">${plate.text}</label>
        </li>`
    )
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAll(e) {
  items = [];
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAll() {
  items.forEach(item => {
    item.done = true;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAll() {
  items.forEach(item => {
    item.done = false;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearBtn.addEventListener('click', clearAll);
checkBtn.addEventListener('click', checkAll);
uncheckBtn.addEventListener('click', uncheckAll);

populateList(items, itemsList);
