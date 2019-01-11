var nbligne = $(".row").length;
$("#nb").text(nbligne);
var firsttimenom = 0;
var firsttimemsg = 0;
var row = $('.row');

// Ajout du clic sur la corbeille
$(".trash").each(
  function()
  {
    $(this).click(
    function(){
      $(this).parent().parent().remove();
      nbligne = nbligne -1;
      $("#nb").text(nbligne); ;
    }
    )
  }
)


// Ajout du nouveau message en JQUERY
$("#submit").click(
  function(){
    //récupération des inputs
    var newnom = $("#nom").val();
    var newdescr = $("#message").val();

    //on récupère le paragraphe
    var para = $("#allchat");
  //vérification que le message et le nom sont corrects
  if ((newnom != "") && (newdescr != "")){

    //numero avatar random
    var numeroAvatar = Math.floor(Math.random()*3 + 1);
    var avatar="avatar-"+numeroAvatar+".jpg";

    //creation de la nouvelle div en jquery et ajout
    var newdiv = '<div class="row"> <img class="avatar" src="'+avatar+'"><div class="text"><h6>'+newnom+'</h6> <p>'+newdescr+'</p> </div> <a href=#> <img class="trash" src="trash.png" alt="poubelle"></a></div>';
    para.prepend(newdiv);

    //ajout clic suppression poubelle
    $('.trash').click(
      function(){
        $(this).parent().parent().remove();
        nbligne = nbligne -1;
        $("#nb").text(nbligne); ;
      }
    );

    //reinitialisation du message de l'input à ""
    document.getElementById("nom").value = "";
    document.getElementById("message").value = "";

  }
else {
      alert("Nom ou Message incorrect");
}
}
)


//Code du champ de Recherche
  //bouton search
  var idsearch=$('#submitsearch');

  function rechercher(){
      //récupération de l'input
      var valuesearch=$('#search').val();
      $("h6").each(function(){
        if(!$(this).text().toLowerCase().includes(valuesearch.toLowerCase())){
          $(this).parent().parent().hide()
        }
        else{
          $(this).parent().parent().show();
        }
      })
    }

  idsearch.click(rechercher);

  var input = document.getElementById("search");
  //idem pour appui sur bouton entrée
  input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    rechercher();
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
