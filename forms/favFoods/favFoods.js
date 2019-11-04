let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  lsgFood.clear()
  for (i = 0; i<= goodFoods.length - 1; i++)
    lsgFood.addItem(goodFoods[i])
    
}



lsgFood.onclick=function(choice){
  if (typeof(choice) == "object")   // user clicked the control
  return
  lblMessage.value = ("You picked " + choice + " -that is a great choice!")
}



btnNextForm2.onclick=function(){
  ChangeForm(dessertVoting)
}