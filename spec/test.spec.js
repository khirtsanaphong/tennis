function Tennis(){
  var scoreA = 0;
  var scoreB = 0;
  this.start = function() {
    this.scoreA = function() {
      if(scoreA == 0){
        scoreA = 15;
      }
    }
  };
  this.echo = function() {
    if(scoreA === 0 && scoreB === 0){
      return 'Love - Love';
    }
    if(scoreA == 15 && scoreB == 0){
      return 'Fifteen - Love';
    }
  }
}

  var tennis = new Tennis();

describe('The Game', function(){
  it('The Gameeeeeee "Love - Love" Start !!!! ', function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })
});
