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
      else if(scoreB == 0){
        scoreB = 15;
      }
      else if(scoreB == 15){
      scoreB = 30;
      }
      else if(scoreB == 30){
        scoreB = 40;
      }
      else if(scoreB == 40){
        scoreB = 41;
      }

    }
  };
  this.echo = function() {
    if(scoreA === 0 && scoreB === 0){
      return 'Love - Love';
    }
    else if(scoreA == 15 && scoreB == 0){
      return 'Fifteen - Love';
    }
    else if(scoreA == 30 && scoreB == 0){
      return 'Thirty - Love';
    }
    else if(scoreA == 40 && scoreB == 0){
      return 'Forty - Love';
    }
    else if(scoreA > 40 && scoreB == 0){
      return 'A Winnnn';
    }
    else if(scoreA == 0 && scoreB == 15){
      return 'Love - Fifteen';
    }
    else if(scoreA == 0 && scoreB == 30){
      return 'Love - Thirty';
    }
    else if(scoreA == 0 && scoreB == 40){
      return 'Love - Forty';
    }
    else if(scoreA == 0 && scoreB > 40){
      return 'B Winnnn';
    }
    else if(scoreA == 15 && scoreB == 15){
      return 'Fifteen - Fifteen';
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
  it('The Gameeeeeee "Player A won" Start !!!!', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('A Winnnn');
  })
});
