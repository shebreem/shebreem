
const games_list = ["Patterns"];
const games_list_element = document.getElementById("games list");

games.list.forEach((game)) => {
  const li = document.createElement("li");
  li.textContent = game;
  games_list_element.appendChild(li);
}
