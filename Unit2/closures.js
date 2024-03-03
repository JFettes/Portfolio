function createFunction() {
   var hp = 10;
   var name = "orc"
   var moves = [];
    return{
        getName: function(){
            return name;
        },
        getHp: function(){
            return hp;
        },
        setMoves: function(...movement) {
            moves = movement;

            var movesDiv = document.getElementById("moves");

            for (const move of moves) {
                var closures = document.createElement("p");
                closures.textContent = move;
                movesDiv.appendChild(closures);
            }
        }
       
    };
}

var player = createFunction();
player.setMoves("Move 1", "Move 2", "Move 3");

console.log(player.getHp());
console.log(player.getName());