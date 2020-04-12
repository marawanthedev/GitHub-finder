const searchUser=document.getElementById("searchUser");

const github= new GitHub;
const ui= new UI;

// eventlistner
searchUser.addEventListener("keyup",(e)=>{


    const userText=e.target.value;

    if(userText!==""){

        // innit github
        
        
        
        // makehttpcall
        github.getUser(userText)
        .then(data => {
            if(data.profileData.message==="Not Found"){
               ui.clearProfile();
            }
            else{
                ui.showProfile(data.profileData);
                github.getRepo(userText)
                .then(data => ui.showRepository(data));
            }

        })
        

    }

    else{
        // clearui

       
    }
});

