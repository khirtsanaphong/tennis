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
      else if(scoreA == 30){
        scoreA = 40;
      }
      else if(scoreA == 40){
        scoreA = 41;
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
    if(scoreA == 40 && scoreB == 0){
      return 'Forty - Love';
    }
    if(scoreA > 40 && scoreB == 0){
      return 'A Winnnn ';
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
  it('The Gameeeeeee "Thirty - Love" Start !!!!', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Thirty - Love');
  })
  it('The Gameeeeeee "Forty - Love" Start !!!!', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Forty - Love');
  })
});
