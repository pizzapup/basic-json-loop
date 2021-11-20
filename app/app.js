//
var GAMES = [
  {
    gameTitle: "Crash",
    gameThumbImg: "crash_150.jpg",
    gameFullImg: "crash_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Super Metroid",
    gameThumbImg: "metroid_150.jpg",
    gameFullImg: "metroid_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Spyro",
    gameThumbImg: "spyro_150.jpg",
    gameFullImg: "spyro_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Custom Robo",
    gameThumbImg: "custom_150.jpg",
    gameFullImg: "custom_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Crash",
    gameThumbImg: "crash_150.jpg",
    gameFullImg: "crash_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Super Metroid",
    gameThumbImg: "metroid_150.jpg",
    gameFullImg: "metroid_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Spyro",
    gameThumbImg: "spyro_150.jpg",
    gameFullImg: "spyro_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Custom Robo",
    gameThumbImg: "custom_150.jpg",
    gameFullImg: "custom_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Spyro",
    gameThumbImg: "spyro_150.jpg",
    gameFullImg: "spyro_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  {
    gameTitle: "Custom Robo",
    gameThumbImg: "custom_150.jpg",
    gameFullImg: "custom_300.jpg",
    gameBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    gameDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    gameRating: "E",
  },
  // 4 objects/length 4; crash index value 0 - zelda index value 4
];

function loadData() {
  $.each(GAMES, function (idx, game) {
    // console.log(game.gameTitle);
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

  // javascript for loop
  // i stands for integer (increases with more for loop i, j, k, etc ...); starting at 0 index
  // iterates as long as the value of i is less than the array length (4) then adds 1 to current number
  // square brackets targets the specific index
  // for(let i = 0; i < GAMES.length; i++) {
  //     console.log(GAMES[i].gameTitle)
  // }
}
function initListeners() {}
$(document).ready(function () {
  loadData();
});
