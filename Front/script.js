window.onLoad = init();


function init() 
    {
        async function runTest() {
            const htmlElement = document.getElementById('content');
            console.log(htmlElement);
            const resp = await fetch('http://localhost:4000/api/Spelers');
            const data = await resp.json(); 
            this.players = data.forEach(player => {
                htmlElement.insertAdjacentHTML("beforeend", `<li>${player.name}</li>`);
            })
            function buttons(){
                document.getElementById('home').addEventListener("click")
            }
        }
        runTest();
    }