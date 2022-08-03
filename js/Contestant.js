class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');

     contestantCountRef.on("value",data=>{
      contestantCount = data.val();
    })


    // contestantCountRef.on("value",()=>{
    //   contestantCount = data.val();
    // })

    // contestantCountRef.on("value",(data)=>{
    //   contestantCount = data();
    // })

  }
/*getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }}*/
  updateCount(count){
    // database.ref('/').update({
      // count: contestantCount
    //});


    // database.ref('/').update({
    //   contestantCount: 0
    // });


    // database.ref('').update({
    //   contestantCount: counts
    // });

database.ref('/').update({
      contestantCount: count
    });

  }

 
}