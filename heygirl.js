function Gosling(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getGosling = {
  init: function(myGosling){
    this.myGosling = myGosling;
  },

  horizontal: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "vertical";
    });
  }, 

  square: function (){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "square";
    });  
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myGosling = [ 
new Gosling("horizontal", "http://i.imgur.com/OssBH7I.gif"), 
new Gosling("horizontal", "http://i.imgur.com/GtFCCoI.gif"), 
new Gosling("horizontal", "http://i.imgur.com/oYoFXFo.gif"),
new Gosling("horizontal", "http://i.imgur.com/B18sFQs.gif"),
new Gosling("horizontal", "http://i.imgur.com/di7We3t.gif"),
new Gosling("vertical", "http://i.imgur.com/WpvXO9Y.gif"), 
new Gosling("vertical", "http://i.imgur.com/1rAYg8s.gif"), 
new Gosling("vertical", "http://i.imgur.com/yA1iwu2.gif"),
new Gosling("vertical", "http://i.imgur.com/hMJg9QI.gif"),
new Gosling("vertical", "http://i.imgur.com/JAIjHjr.gif"),
new Gosling("square", "http://i.imgur.com/SLGx4yh.gif"),
new Gosling("square", "http://i.imgur.com/KKM2aWG.gif"),
new Gosling("square", "http://i.imgur.com/v8HDenG.gif")
]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}     
           
(function (document) {
  
  getGosling.init(myGosling);
  var images = document.getElementsByTagName('img'), length = images.length
 
  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getGosling[ratio]());
    var img = getGosling[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
