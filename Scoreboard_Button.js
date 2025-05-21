import Scoreboard_View from "./Scoreboard/Scoreboard_View.js";
let Team1Score = 0;
let Team2Score = 0;

const root = document.querySelector("#app");
const view = new Scoreboard_View(root, "Team 1", "Team 2", (team, direction)=> {
    const difference = direction === "single" ? 1 : direction === "double" ? 2 : direction === "triple" ? 3 : direction === "homerun" ? 4 : direction === "walk" ? 1 : direction === "putout" ? -1 : direction === "error" ? -1 : direction === "strikeout" ? -1 : direction === "stolen base" ? 1 : direction === "caught stealing" ? -1 : 0;

    if (team === "1") {
        Team1Score += difference;
        view.update(Team1Score, Team2Score);
    } else if (team === "2") {
        Team2Score += difference;
        view.update(Team1Score, Team2Score);
    }
});
