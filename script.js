fetch("demons.json")
.then(response => response.json())
.then(demons => {


    let table = document.getElementById("demon-table");


    if(table){

        demons.forEach(demon => {

            let row = document.createElement("tr");

            row.innerHTML = `
            <td>${demon.position}</td>
            <td>${demon.name}</td>
            <td>${demon.creator}</td>
            <td>${demon.verifier}</td>
            <td>${demon.points}</td>
            `;

            table.appendChild(row);

        });

    }



    let top = document.getElementById("top-demons");


    if(top){

        demons.slice(0,3).forEach(demon=>{

            let card=document.createElement("div");

            card.className="card";

            card.innerHTML=`
            <h3>#${demon.position} ${demon.name}</h3>
            <p>${demon.points} points</p>
            `;

            top.appendChild(card);

        });

    }



});
