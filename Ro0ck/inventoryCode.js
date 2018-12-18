

var playerInventory = [];
var rockInventory = ["Emahroodz!", "Ruby Rose the Red Ore!", "magenta mineral!", "Diamond beck", "Crystal", "plastic?"];
    
 startGame();

function startGame(){
    console.log(playerInventory);
    
        console.log(rockInventory);
}

function update()
{
    if(rockInventory.length < 1)
        {
        gameOver();
        }
}

function clickingText()
{
    if(rockInventory.length>0)
        {
            var change = rockInventory.pop();
playerInventory.push(change);
console.log(playerInventory);
         console.log("lets mine some Sheets! " +playerInventory+ " !")
    update();
        }

}
function gameOver()
{
    var button = document.getElementById("DRILL!"); 
    button.disabled = false;

    console.log("Congratulations you got stones, good JARB!");
}