function initMap() {
    var center = { lat: 37.7749, lng: -122.4194 };

    var mapOptions = {
        center: center,
        zoom: 12
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Localização'
    });
}

window.onload = function () {
    initMap();
};
document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obter os valores dos campos do formulário
    var newsId = document.getElementById('newsId').value;
    var newsTitle = document.getElementById('newsTitle').value;
    var newsContent = document.getElementById('newsContent').value;
    var authorName = document.getElementById('authorName').value;
    
    // Criar um objeto de notícia com os valores obtidos
    var news = {
      id: newsId,
      title: newsTitle,
      content: newsContent,
      author: authorName
    };
    
    // Exibir a notícia registrada no console (você pode substituir esta linha com o código para enviar a notícia para um servidor, por exemplo)
    console.log('Notícia registrada:', news);
    
    // Limpar os campos do formulário
    document.getElementById('newsId').value = '';
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsContent').value = '';
    document.getElementById('authorName').value = '';
  });
  