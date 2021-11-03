$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.barra_nav').addClass('fixada')
    } else {
      $('.barra_nav').removeClass('fixada')
    }
  })

  //script da barra de navegação
  $('.barra_nav #menu .botao-menu').click(function () {
    $('.barra_nav #menu .lista_menu').toggleClass('active')
    $('#menu .botao-menu i').toggleClass('active')
  })
})

//Esconde a aba de navegação pós "active" quando o nome de uma seção é clicado
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll(
    ".barra_nav #menu .lista_menu li a:not([href='#'])"
  )
  for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
      document.querySelector('#menu .botao-menu i').click()
    }
  }
})

//Faz com que o site vá para a seção clicada, se a seção estiver no mesmo html, com rolagem suave
$('.barra_nav #menu .lista_menu li a').click(function () {
  $('html').css('scrollBehavior', 'smooth')
})
