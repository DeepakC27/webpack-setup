const root = document.createElement('div');
root.innerHTML = 'Content elements entry point ok';
document.body.appendChild(root);

const renderEle = function () {
  const ar = [1, 2, 3, 4];
  const arTag = document.createElement('ul');
  ar.map(function (data) {
    let nestTag = document.createElement('li');
    nestTag.innerHTML = data;
    arTag.appendChild(nestTag);
  });
  root.appendChild(arTag);
};

renderEle();
