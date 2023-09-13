let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos .get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function(){
    getRepos();
}

function getRepos(){

    if(theInput.value == ''){

        reposData.innerHTML = "<span>Please Enter GitHub UserName</sapn>"

    }else{

        fetch('https://api.github.com/users/ElzeroWebSchool/repos')

        .then((res) =>res.json())

        .then((repositories) => {

            reposData.innerHTML = '';



            repositories.array.forEach(repo => {
                
                
            });

        }); 

    }

}