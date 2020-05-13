const btnrepos=document.getElementById("btnrepos");
btnrepos.addEventListener("click",getRepos)

async function getRepos(){

    if(document.getElementById("name").value==""){
        alert("Enter name")
    }
    else{
    const name=document.getElementById("name").value;
    const url=`https://api.github.com/users/${name}`
    const response= await fetch(url)
    const result=await response.json()
    
    
    var table=document.getElementById("tab");
    var newRow=table.insertRow(1);

    var cell=newRow.insertCell(0);
    var cell1=newRow.insertCell(1);
    var cell2=newRow.insertCell(2);

    cell.innerHTML=result.public_repos;
    cell1.innerHTML=result.location;
    cell2.innerHTML=result.followers;
    document.getElementById("user").reset();
}
}
    
