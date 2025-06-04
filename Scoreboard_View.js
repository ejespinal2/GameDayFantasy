export default class Scoreboard_View{
    constructor(root, Team1Name, Team2Name, onControlButtonClick) {
        this.root = root;
        this.root.innerHTML = `
        <div class="scoreboard">
        <div class="scoreboard__name scoreboard__name--1">${Team1Name}</div>
        <div class="scoreboard__name scoreboard__name--2">${Team2Name}</div>
        
        <div class="scoreboard__score" data-for-team="1">0</div>
        <div class="scoreboard__score" data-for-team="2">0</div>
        <div class="scoreboard__controls" data-for-team="1">
            <button class="scoreboard__control-button">Single</button>
            <button class="scoreboard__control-button">Double</button>
            <button class="scoreboard__control-button">Triple</button>
            <button class="scoreboard__control-button">Homerun</button>
            <button class="scoreboard__control-button">Walk</button>
            <button class="scoreboard__control-button">PutOut</button>
            <button class="scoreboard__control-button">Error</button>
            <button class="scoreboard__control-button">Strikeout</button>
            <button class="scoreboard__control-button">Stolen Base</button>
            <button class="scoreboard__control-button">Caught Stealing</button>
        </div>
        <div class="scoreboard__controls" data-for-team="2">
            <button class="scoreboard__control-button">Single</button>
            <button class="scoreboard__control-button">Double</button>
            <button class="scoreboard__control-button">Triple</button>
            <button class="scoreboard__control-button">Homerun</button>
            <button class="scoreboard__control-button">Walk</button>
            <button class="scoreboard__control-button">PutOut</button>
            <button class="scoreboard__control-button">Error</button>
            <button class="scoreboard__control-button">Strikeout</button>
            <button class="scoreboard__control-button">Stolen Base</button>
            <button class="scoreboard__control-button">Caught Stealing</button>
        </div>
        <div class="scoreboard__team scoreboard__team--1">
            <h2>Team 1</h2>
            <ul id="team1Players"></ul>
        </div>
        <div class="scoreboard__team scoreboard__team--2">
            <h2>Team 2</h2>
            <ul id="team2Players"></ul>
        </div>
    </div>
    `;
    // Load saved score from localStorage
    const saveScore = localStorage.getItem('team1Score') && localStorage.getItem('team2Score');
    if (saveScore) {
        this.update(parseInt(localStorage.getItem('team1Score')), parseInt(localStorage.getItem('team2Score')));
    } else {
        this.update(0, 0); // default to 0-0 if no saved score
    }

    this.root.querySelectorAll('.scoreboard__control-button').forEach(controlButton => {
        controlButton.addEventListener('click', () => {
            const team = controlButton.closest(".scoreboard__controls").dataset.forTeam;
            const action = controlButton.textContent.toLowerCase();
            onControlButtonClick(team, action);
        });
    });
    }
    saveScore() {
        const team1Score = this.root.querySelector('.scoreboard__score[data-for-team="1"]').textContent;
        const team2Score = this.root.querySelector('.scoreboard__score[data-for-team="2"]').textContent;
        localStorage.setItem('team1Score', team1Score);
        localStorage.setItem('team2Score', team2Score);
    }

    
    update(Team1Score, Team2Score) {
        this.root.querySelector('.scoreboard__score[data-for-team="1"]').textContent = Team1Score;
        this.root.querySelector('.scoreboard__score[data-for-team="2"]').textContent = Team2Score;
        this.saveScore();
    }
    
}