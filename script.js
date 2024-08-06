// Adiciona um evento de movimento do mouse (mousemove) ao documento
document.addEventListener('mousemove',
  function(e){
    // Seleciona o elemento body do documento
    let body = document.querySelector('body');
    
    // Cria um novo elemento span
    let circle = document.createElement('span');
    
    // Obtém as coordenadas X e Y do mouse em relação ao elemento pai
    let x = e.offsetX;
    let y = e.offsetY;
    
    // Define a posição do elemento span em relação às coordenadas X e Y do mouse
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    
    // Gera um tamanho aleatório entre 0 e 100 para o elemento span
    let size = Math.random() * 100;
    
    // Define a largura e altura do elemento span com base no tamanho gerado
    circle.style.width = 20 + size + "px";
    circle.style.height = 20 + size + "px";
    
    // Adiciona o elemento span ao corpo do documento
    body.appendChild(circle);
    
    // Define um tempo de espera de 1800 milissegundos (1,8 segundos) para remover o elemento span
    setTimeout(function(){
      // Remove o elemento span do documento
      circle.remove();
    }, 1800);
  });