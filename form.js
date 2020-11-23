 class Form{
     constructor(){

     }

     display(){
            var title = createElement('h2');
            title.html('Car racing game');
            title.position(520,20);

            var input = createInput("name");
            var button = createButton('play');
            var greeting  = createElement('h3');

            input.position(400,160);
            button.position(400,200);
            button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            greeting.html("hello"+ name);
            greeting.position(500,160);
         }
         )
     }

 }  