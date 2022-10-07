
const getDraftkings = document.querySelector('.get-draftkings');
const getFanduel = document.querySelector('.get-fanduel');
const getBetMgm = document.querySelector('.get-betmgm');
const getFoxbet = document.querySelector('.get-foxbet');
const getBarstool = document.querySelector('.get-barstool');
const getBetRivers = document.querySelector('.get-betrivers');
const getSugarHouse = document.querySelector('.get-sugarhouse');
const infoCard = document.querySelector('.info-card');


//get home team
function createCard(bookmaker){
        fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=6f537a177ac342ff6c5350ede4e9f7af&regions=us&markets=h2h&bookmakers=${bookmaker}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            //get home team names
            for(let i = 0; i < data.length; i++){
                let bkMakerTitle = data[i].bookmakers[0].title;
                let homeTeam = data[i].home_team;
                let awayTeam = data[i].away_team
                let homeOdds = data[i].bookmakers[0].markets[0].outcomes[0].price;
                let awayOdds = data[i].bookmakers[0].markets[0].outcomes[1].price;
                // convert decimal odds to american odds
                if(homeOdds > 2.00) {
                    homeOdds = (homeOdds - 1) * 100;
                } else if(homeOdds < 1.99) {
                    homeOdds = -100 / (homeOdds -1);
                }
                if(awayOdds > 2.00) {
                    awayOdds = (awayOdds - 1) * 100;
                } else if(awayOdds < 1.99) {
                     awayOdds = -100 / (awayOdds -1);
                }
                //create card
                // let card = document.querySelector('.card');
                let card = document.createElement('div');
                card.classList.add('card');
                infoCard.append(card);
                let cardContent = document.createElement('div');
                cardContent.classList.add('card-content','card-border');
                card.append(cardContent)
                //bookmaker tite
                let bookermakerTitle = document.createElement('h3');
                cardContent.append(bookermakerTitle);
                bookermakerTitle.classList.add('bookmaker-title');
                bookermakerTitle.textContent = bkMakerTitle;
                //moneyline
                let moneyLineTitle = document.createElement('h3');
                cardContent.append(moneyLineTitle);
                moneyLineTitle.classList.add('money-line-title')
                moneyLineTitle.textContent = 'MONEYLINE';
                //home team
                let homeTeamTitle = document.createElement('h4');
                cardContent.append(homeTeamTitle);
                homeTeamTitle.classList.add('home-team-title')
                homeTeamTitle.textContent = homeTeam;
                console.log(homeTeam)
                // away team
                let awayTeamTitle = document.createElement('h4');
                cardContent.append(awayTeamTitle);
                awayTeamTitle.classList.add('away-team-title')
                awayTeamTitle.textContent = awayTeam;
                //home team odds
                let homeTeamOdds = document.createElement('h4');
                cardContent.append(homeTeamOdds);
                homeTeamOdds.classList.add('home-team-odds')
                homeTeamOdds.textContent = parseInt(homeOdds);
                // away team odds
                let awayTeamOdds = document.createElement('h4');
                cardContent.append(awayTeamOdds);
                awayTeamOdds.classList.add('away-team-odds')
                awayTeamOdds.textContent = parseInt(awayOdds);
            }
            
        })
    };



// button clicks
getDraftkings.addEventListener('click', function(){
        infoCard.innerHTML = '';
        createCard('draftkings'); 
});
getFanduel.addEventListener('click', function(){
    infoCard.innerHTML = '';
    createCard('fanduel');
});
getBetMgm.addEventListener('click', function(){
    infoCard.innerHTML = '';
    createCard('betmgm');
});
getFoxbet.addEventListener('click', function(){
    createCard('foxbet');
    infoCard.innerHTML = '';
});
getBarstool.addEventListener('click', function(){
    infoCard.innerHTML = '';
    createCard('barstool');
});
getBetRivers.addEventListener('click', function(){
    infoCard.innerHTML = '';
    createCard('betrivers');
});
getSugarHouse.addEventListener('click', function(){
    infoCard.innerHTML = '';
    createCard('sugarhouse');
});
// TESTING ------------------------------------------------------------------------------------

// console.log(createCard('draftkings'))
// console.log('----------------------------------------------------')


//  this hides card div ---> 
// hideCard.addEventListener('click', function(){
//     infoCard.innerHTML = '';
// })