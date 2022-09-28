fetch("../gamesData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    loadData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function loadData(DATA) {
  $("#app").html(
    `<h2>Available Games</h2><div id="card-gallery" class='card-gallery'></div>`
  );
  $.each(DATA, function (idx, data) {
    $("#card-gallery").append(
      `
        <div id="${idx}" class="card">
        <h3 class="card__title">${data.title}</h3>
          <img src="images/games_thumb/${data.thumbImg}" alt="${data.title}" class='card__media'/>
        <div class="card__info">
          <div class="card__info-desc">
            ${data.briefDescription}
          </div>
            <div class="card__info-rating">
              <span class='card__info-rating-tag'>Rating: </span>
              <span class='card__info-rating-data'>${data.rating}</span>
            </div>
            <div class="card__info-price">
              <span class='card__info-rating-tag'>Price: </span>
              <span class='card__info-price-data'>${data.price}</span>
            </div>
        </div>
      </div>
      `
    );
  });
  initListeners(DATA);
}

function initListeners(DATA) {
  $(".card").click(function (e) {
    let index = e.currentTarget.id;
    $("#app").html(
      `<h2>Product Info</h2><div id='product-page' class='product-page'></div>`
    );
    $("#product-page").html(`
    
          <div class="product">
        <h3>${DATA[index].title}</h3>
        <div class="product__media">
          <img src="images/${DATA[index].fullImg}" alt="crash" class="product__media-img" />
        </div>
        <div class="product__info-desc">
        ${DATA[index].description}
        </div>
        <div class="product__info-price"><span class='product__info-price-tag'>Price:</span> ${DATA[index].price}</div>
        <div class="product__info-rating"><span class='product__info-rating-tag'>Rating:</span> ${DATA[index].rating}</div>
      </div><button class="close btn">Go Back to Available Games</button>
       `);
    addCloseListener(DATA);
  });
}

function addCloseListener(DATA) {
  $(".close").click(function () {
    $("#app").html("");
    loadData(DATA);
  });
}
//
$(document).ready(function () {
  loadData();
});
