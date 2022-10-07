function createCard(bookmaker,homeTeam,homeOdds,awayTeam,awayOdds){
    //create card info wrapper
    let card = document.querySelector('.card');
    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.append(cardContent)
    //creating bookmaker title - arugments come from api function call

    let bookermakerTitle = document.createElement('h3');
    cardContent.append(bookermakerTitle);
    bookermakerTitle.classList.add('bookmaker-title');
    bookermakerTitle.textContent = bookmaker;
    //create moneyline title

    let moneyLineTitle = document.createElement('h3');
    cardContent.append(moneyLineTitle);
    moneyLineTitle.classList.add('money-line-title')
    moneyLineTitle.textContent = 'MONEYLINE';

    //create home team title

    let homeTeamTitle = document.createElement('h4');
    cardContent.append(homeTeamTitle);
    homeTeamTitle.classList.add('home-team-title')
    homeTeamTitle.textContent = homeTeam;

    //create home team odds

    let homeTeamOdds = document.createElement('h4');
    cardContent.append(homeTeamOdds);
    homeTeamOdds.classList.add('home-team-odds')
    homeTeamOdds.textContent = homeOdds;

    //away team title

    let awayTeamTitle = document.createElement('h4');
    cardContent.append(awayTeamTitle);
    awayTeamTitle.classList.add('away-team-title')
    awayTeamTitle.textContent = awayTeam;

    //home away odds
    let awayTeamOdds = document.createElement('h4');
    cardContent.append(awayTeamOdds);
    awayTeamOdds.classList.add('away-team-odds')
    awayTeamOdds.textContent = awayOdds;  
}