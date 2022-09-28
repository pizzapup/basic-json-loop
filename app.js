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

function loadData(GAMES) {
  $.each(GAMES, function (idx, game) {
    $("#app").append(
      `
        <div id="${idx}" class="game-holder">
        <h4>${game.gameTitle}</h4>
        <div class="game-image">
          <img src="images/games_thumb/${game.gameThumbImg}" alt="${game.gameTitle}" />
        </div>
        <div class="brief-rating">
          <div class="brief-des">
            ${game.gameBriefDescription}
          </div>
          <div class="rating">Rating: ${game.gameRating}</div>
        </div>
      </div>
      `
    );
  });
  initListeners(GAMES);
}

function initListeners(GAMES) {
  $(".game-holder").click(function (e) {
    let campingIndex = e.currentTarget.id;
    $("#app").html(`
          <div class="camping">
        <h4>${GAMES[campingIndex].gameTitle}</h4>
        <div class="campingImg">
          <img src="images/${GAMES[campingIndex].gameFullImg}" alt="crash" />
        </div>
        <div class="campingDes">
        ${GAMES[campingIndex].gameDescription}
        </div>
        <div class="price">Price: ${GAMES[campingIndex].gameRating}</div>
      </div><button class="close">Back</button>`);
    addCloseListener(GAMES);
  });
}

function addCloseListener(GAMES) {
  $(".close").click(function () {
    $("#app").html("");
    loadData(GAMES);
  });
}
//
$(document).ready(function () {
  loadData();
});
