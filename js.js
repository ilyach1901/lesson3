do {
    var continueOrStop = false
    var userName = prompt("Введите Имя")
    userName = userName[0].toUpperCase() + userName.substring(1).toLowerCase ();   
    for (var i = 0; i < userName.length; i++) {                     
        if (isNaN(userName[i]) == true){
            continueOrStop = false
            break
        }
    }        
    } while (continueOrStop) 
    alert(userName)

 
