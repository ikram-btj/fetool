function setupInput(boxId)
{
  var numbers = document.getElementById(boxId);
  for (var i = 1; i <= 99; i++) {
    var span = document.createElement('span');
    span.textContent = i;
    numbers.appendChild(span);
  }

  var num = numbers.getElementsByTagName('span');
  var index = 0;

  function nextNum()
  {
    num[index].style.display = 'none';
    index = (index + 1) % num.length;
    num[index].style.display = 'initial';
  }

  function prevNum()
  {
    num[index].style.display = 'none';
    index = (index - 1 + num.length) % num.length;
    num[index].style.display = 'initial';
  }

  var nextButton = numbers.parentNode.querySelector('.next');
  nextButton.onclick = nextNum;

  var prevButton = numbers.parentNode.querySelector('.prev');
  prevButton.onclick = prevNum;
}

setupInput('box1');
setupInput('box2');
setupInput('box3');
setupInput('box4');
setupInput('box5');
setupInput('box6');
setupInput('box7');
setupInput('box8');
setupInput('box9');
setupInput('box10');

