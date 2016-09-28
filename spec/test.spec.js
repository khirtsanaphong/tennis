function Tennis(){
  var scoreA = 0;
  var scoreB = 0;
  this.start = function() {
    this.scoreA = function() {
      if(scoreA == 0){
        scoreA = 15;
      }
      else if(scoreA == 15){
      scoreA = 30;
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
    if(scoreA == 30 && scoreB == 0){
      return 'Thirty - Love';
    }
    
 }
}

  var tennis = new Tennis();

describe('The Game', function(){
  it('The Gameeeeeee "Love - Love" Start !!!! ', function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })
  it('The Gameeeeeee "Fifteen - Love" Start !!!!', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  })


});
