var gamesText = `{
    "games":[
        {
            "name":"Alien Hominid",
            "img":"img/alienh.png",
            "path":"lbannana-assets/flash/index.html?swf=alien_hominid.swf"
      
        }
    ]
}`;
var gameObject = JSON.parse(gamesText);
for (i in gameObject.games) {
  let elem1 = document.createElement("div");
  elem1.className = "game-button";
  document.getElementById("gameSelect").appendChild(elem1);
  console.log("div made");
  let elem2 = document.createElement("a");
  
    elem2.href = gameObject.games[i].path;
  
  elem1.appendChild(elem2);
  console.log("a made");
  let elem3 = document.createElement("img");
  elem3.src = gameObject.games[i].img;
  elem3.alt = gameObject.games[i].name;
  elem2.appendChild(elem3);
  console.log("img made");
  let elem4 = document.createElement("p");
  elem4.innerHTML = gameObject.games[i].name;
  elem2.appendChild(elem4);
  console.log("p made");
}
