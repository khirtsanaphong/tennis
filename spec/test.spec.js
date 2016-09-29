function Tennis(){
  var scoreA = 0;
  var scoreB = 0;
  this.starts = function() {
    scoreA = 0;
    scoreB = 0;
  }
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
      this.scoreB = function() {
      if(scoreB == 0){
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
    else if(scoreA == 30 && scoreB == 15){
      return 'Fifteen - Fifteen';
    }
 }
};

var tennis = new Tennis();

describe('The Game', function(){

  it('The Games "Love - Love" Starting', function(){
    tennis.starts();
    expect(tennis.echo()).toEqual('Love - Love');
  })
  it('The Games "Fifteen - Love" Starting', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  })
  it('The Games "Thirty - Love" Starting', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Thirty - Love');
  })
  it('The Games "Forty - Love" Starting', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Forty - Love');
  })
  it('The Games "Player A won" Starting', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('A Winnnn');
    tennis.starts();
  })
  it('The Games "Love - Fifteen" Starting', function(){
    tennis.scoreB();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  })
  it('The Games "Love - Thirty" Starting', function(){
    tennis.scoreB();
    expect(tennis.echo()).toEqual('Love - Thirty');
  })
  it('The Games "Love - forty" Starting', function(){
    tennis.scoreB();
    expect(tennis.echo()).toEqual('Love - Forty');
  })
});
