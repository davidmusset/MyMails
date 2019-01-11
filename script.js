var nbligne = $(".row").length;
document.getElementById('nb').textContent = nbligne;
var firsttimenom = 0
var firsttimemsg = 0
var row = document.getElementsByClassName('row');



// Ajout du clic sur la corbeille
$(".trash").each(
  function()
  {
    console.log("hh");
    $("#test").click(
    function(){
      console.log("hello");
      this.parentNode.parentNode.remove();
      nbligne = nbligne -1;
      document.getElementById('nb').textContent = nbligne ;
    }
    )
  }
)

// Ajout du nouveau message
document.getElementById('submit').addEventListener("click",function()
{
  //vérification que le message et le nom sont corrects
  if ((document.getElementById("nom").value != "") && (document.getElementById("message").value != "")){

    //creation de la nouvelle div
    var newrow = document.createElement("div");
    newrow.className="row";

    //creation du nouvel avatar
    var newavatar = document.createElement('img');
    //numero random
    var numeroAvatar = Math.floor(Math.random()*3 + 1);
    newavatar.src="avatar-"+numeroAvatar+".jpg";
    newavatar.className="avatar";
    newrow.appendChild(newavatar);

    //creation du nouveau div text
    var newtext = document.createElement("div");
    newtext.className="text";
    newrow.appendChild(newtext);

    //recuperation du nom
    var newh6 = document.createElement("h6");
    newh6.innerHTML= document.getElementById("nom").value;
    newtext.appendChild(newh6);

    //récupération du message
    var newp = document.createElement("p");
    newp.innerHTML=document.getElementById("message").value;
    newtext.appendChild(newp);

    //nouvel icone poubelle
    var newlink = document.createElement("a");
    newlink.href="#";
    newrow.appendChild(newlink);

    var newtrash = document.createElement("img");
    newtrash.className="trash";
    newtrash.src="trash.png";
    newtrash.alt="poubelle";
    newlink.appendChild(newtrash);

    // On insert tout au tout début
    var eElement = document.getElementById('allchat')
    eElement.insertBefore(newrow,eElement.firstChild);
    nbligne = nbligne + 1;
    document.getElementById('nb').textContent = nbligne;

    //ajout du clic de suppression sur la poubelle et mise à jour du counter
    newlink.addEventListener("click",function(){
      this.parentNode.remove();
      nbligne = nbligne -1;
      document.getElementById('nb').textContent = nbligne ;
    }
    )

    //reinitialisation du message de l'input à ""
    document.getElementById("nom").value = "";
    document.getElementById("message").value = "";

  }
else {
      alert("Nom ou Message incorrect");
}

}
)


// disparition de l'élement intérieur
// document.getElementById('nom').addEventListener("click",function()
// {
//   if(firsttimenom == 0){
//     document.getElementById('nom').value = "";
//     firsttimenom =1;
//   }
// }
// )
//
// document.getElementById('message').addEventListener("click",function()
// {
//   if(firsttimemsg == 0){
//     document.getElementById('message').value = "";
//     firsttimemsg =1;
//   }
// }
// )
