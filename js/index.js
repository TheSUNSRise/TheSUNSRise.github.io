window.onload = function () {
  var ul = document.querySelector('.test');
  var li = document.querySelector('.test').querySelectorAll('li');
  var bg = document.querySelector('.background');

  for (var i = 0; i < ul.children.length; i++) {

    li[i].addEventListener('mouseenter', function () {
      var bgimg = this.querySelector('img').getAttribute("src");
      bg.style.background = 'url("' + bgimg + '") no-repeat';
      bg.style.backgroundSize = 'cover';
      for (var j = 0; j < li.length; j++) {
        li[j].style.opacity = '.2';
      }
      this.style.opacity = '1';
    })
    li[i].addEventListener('mouseleave', function () {
      bg.style.background = '';
      for (var j = 0; j < li.length; j++) {
        li[j].style.opacity = '1';
      }
    })
  }

}



