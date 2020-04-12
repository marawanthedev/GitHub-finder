class GitHub{

    constructor(){
        this.client_id="3736d69a28000df62362";
        this.client_secret="baef719ab7d1e43547bf277f2637e1fa8fd21499";
        this.repos_count=5;
        this.repos_sort="created: asc";
    }

    async getUser(user){


        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData=await profileResponse.json();

        return{

            profileData
            
        }
    }

    async getRepo(user){

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoData=await repoResponse.json();
        
        return{

            repoData
            
        }
    }


    
}