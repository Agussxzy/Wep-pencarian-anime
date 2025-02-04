function searchanime(){
  
  
$('#cari-anime').on('click', function () {
  
  
    $.ajax({
    url: 'https://api.jikan.moe/v4/anime',
    type: 'get',
    dataType: 'json',
    data: {
      'q': $('#nilai-input').val(),
      'sfw': false
    },
    success: function (data) {
      let menu = data.data;
      let conten = ``;
      $.each(menu, function(i, detail){
        if(detail.type == "Movie" || detail.type == "TV"){
          conten += `<div class="col-md-4">
          <div class="card">
        <img src="${detail.images.jpg.image_url}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${detail.title}</h5>
          <p class="card-text"><b>synopsis:</b> ${detail.synopsis}</p>
          <a href="${detail.url}" class="btn btn-primary">Tonton</a>
        </div>
      </div>
      </div>`
          
            
        }
      });
      $('#detail-anime').html(conten);
      $('#nilai-input').val('');
    }
  });
});
}
searchanime();

$('.nav-link').on('click', function(){
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
  $('#judul').html($(this).html());
  let kategori = $(this).html();
  if(kategori == "Search Anime"){
    $('.inputtttt').html(`<input type="text" class="form-control" placeholder="Ketik judul Anime" aria-label="Recipient's username" aria-describedby="button-addon2" id="nilai-input">
  <button class="btn btn-outline-secondary" type="button" id="cari-anime">Cari</button>`)
    $('#detail-anime').html('');
    searchanime();
  }
  let conten = ``;
  if(kategori == "Top Anime"){
    
    $.ajax({
      url: 'https://api.jikan.moe/v4/top/anime',
      type: 'get',
      dataType: 'json',
      data: {
        'type': "movie",
        "filter": "favorite",
        "sfw": false,
      },
      success: function(data){
        let menu = data.data;
        $.each(menu, function(i, detail){
          conten += `<div class="col-md-4">
          <div class="card">
        <img src="${detail.images.jpg.image_url}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${detail.title}</h5>
          <p class="card-text"><b>synopsis:</b> ${detail.synopsis}</p>
          <a href="${detail.url}" class="btn btn-primary">Tonton</a>
        </div>
      </div>
      </div>`;
        })
        $('.inputtttt').html('');
        $('#detail-anime').html(conten);
      }
    })
  
          
  }
  
})

