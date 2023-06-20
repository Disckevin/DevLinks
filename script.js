function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")){
    // se tiver light mode, adicionar a imgagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute("alt", "Foto de Kevin usando óculos")
  }
  else{
    // se estiver sem o light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Kevin sem óculos")
  }
    

}