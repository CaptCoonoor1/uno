deckList <-- [unoDeck];
playerList <-- [playerId];
...
...
...
procedure shuffleCards(){
  for(players in playerList){
    playerList[n].hand = deckList[n];
    remove deckList[n] from deck;
  }}

procedure playCard(){
  for(cards in playerList[n].hand){
    deckTop = playerList[n].hand
    remove playerList[n].hand from hand;
  }}

procedure endTurn(){
  if (playerTurn >= maxPlayers) {
    turn[0];
  }
  else {
    turn[++];
  }}

procedure playerUno(){
//when a player only have two cards left, they have to "say uno"
  createButton("UNO!", unoPressed);
  if (!buttonPressed) {
    player[i].drawCards(2);
  }
}
