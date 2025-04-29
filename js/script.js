const body = document.querySelector("body")
async function apresentaPersonagem() {
    for(let pagina = 1; pagina <=42; pagina++) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        const data = await response.json()
        data.results.forEach((personagem)=>{
            const img = document.createElement("img")
            img.setAttribute("src", `${personagem.image}`)
    
            body.appendChild(img)
        })
        
    }
}

apresentaPersonagem()