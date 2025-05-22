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
    this.loadScore();

    this.root.querySelectorAll('.scoreboard__control-button').forEach(controlButton => {
        controlButton.addEventListener('click', () => {
            const team = controlButton.closest(".scoreboard__controls").dataset.forTeam;
            const action = controlButton.textContent.toLowerCase();
            onControlButtonClick(team, action);
            /*const difference = 
                action === 'Single' ? 1 :
                action === 'Double' ? 2 :
                action === 'Triple' ? 3 :
                action === 'Homerun' ? 4 :
                action === 'Walk' ? 1 :
                action === 'Put-Out' ? -1 :
                action === 'Error' ? -1 :
                action === 'Strikeout' ? -1 :
                action === 'Stolen Base' ? 1 :
                action === 'Caught Stealing' ? -1 : 0;

                if (team === "1") {
                    Team1Score += difference;
                    this.update(Team1Score, Team2Score);
                } else if (team === "2") {
                    Team2Score += difference;
                    this.update(Team1Score, Team2Score);
                }*/
                /*
            switch (controlButton.textContent) {
                case "Single":
                    currentScore += 1;
                    break;
                case "Double":
                    currentScore += 2;
                    break;
                case "Triple":
                    currentScore += 3;
                    break;
                case "Homerun":
                    currentScore += 4;
                    break;
                case "Walk":
                    currentScore += 1;
                    break;
                case "Put-Out":
                    currentScore += 1;
                    break;
                case "Error":
                    currentScore -= 1;
                    break;
                case "Strikeout":
                    currentScore -= 1;
                    break;
                case "Stolen Base":
                    currentScore += 1;
                    break;
                case "Caught Stealing":
                    currentScore -= 1;
                    break;
            }
            */
           /* onControlButtonClick(team, direction);*/
    
            //scoreElement.textContent = direction.toString(); #as of rn

        });
    });
    }
    saveScore() {
        const team1Score = this.root.querySelector('.scoreboard__score[data-for-team="1"]').textContent;
        const team2Score = this.root.querySelector('.scoreboard__score[data-for-team="2"]').textContent;
        localStorage.setItem('team1Score', team1Score);
        localStorage.setItem('team2Score', team2Score);
    }

    loadScore() {
        const team1Score = localStorage.getItem('team1Score');
        const team2Score = localStorage.getItem('team2Score');
        if (team1Score && team2Score) {
            this.root.querySelector('.scoreboard__score[data-for-team="1"]').textContent = team1Score;
            this.root.querySelector('.scoreboard__score[data-for-team="2"]').textContent = team2Score;
        }
    }
    update(Team1Score, Team2Score) {
        this.root.querySelector('.scoreboard__score[data-for-team="1"]').textContent = Team1Score;
        this.root.querySelector('.scoreboard__score[data-for-team="2"]').textContent = Team2Score;
        this.saveScore();
    }
    
}