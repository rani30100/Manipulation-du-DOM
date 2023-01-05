//  CONSIGNE -- don't forget to "prevent" the form from being sent--



    //Méthode utilisé sur Javascript : 
// j'ai séléctionner l'élément avec querySelector, j'ai rajouté un event click pour fonction event.
// Ensuite je l'ai affiche sur la console, j'ai rajouté à la function la méthode .preventDefault qui permet de ne 
// pas exécuter la commande par défault.

// document.querySelector("#comment-submit").addEventListener("click", function(e) {
//         console.log("Mouhahaha tu t'ai fais avoir !!!!!");
//         e.preventDefault();
//     }, false);  

        //Méthode utilisé avec fonction 
function prevDefault(e){
    e. preventDefault();
        const username = document.getElementById("comment-username").value;
        const text = document.getElementById("comment-content").value;
       

        var li2 = document.createElement('li');

            var ul= document.getElementById('comments-list');
            ul.appendChild(li2);
    

            
            var h5 = document.createElement('h5');
            h5.textContent=username;
            ul.appendChild(h5);
            
            
            var h6 = document.createElement('h6');
            ul.appendChild(h6);
            h6.textContent=new Date().toLocaleDateString("fr");
    
    
            var p = document.createElement('p');
            ul.appendChild(p);
            p.textContent=text;
        

        li2.append(h5);
        li2.append(h6);
        li2.append(p);

        
        ul.append(li2);
        console.log(li2.outerHTML)
       
    }

document.getElementById("comment-submit").addEventListener("click",prevDefault);



    //Méthode HTML :
// On rajoute a coté de l'ID form la commande (onsubmit="return false;")

    //Méthode JQuery
// $(document).ready(function() {
//     $('form').submit(function(e) {
//     e.preventDefault();
//     // ou return false;
//     });
//     });
// //Ne pas oublier de mettre le script JQuery 






// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

// new comments must have the same HTML structure as existing comments.


