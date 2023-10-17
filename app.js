let inp = document.getElementById('inp')
let main = document.getElementById('main')


let search = () => {
fetch(`https://newsapi.org/v2/everything?q=${inp.value}&from=2023-09-17&sortBy=publishedAt&apiKey=e35433df7753482d8791cb8ebd101b24`)
.then(data => data.json())
.then(data => {
    console.log(data.articles[0])
    for(let i = 0 ; i<data.articles.length ; i++){
        main.innerHTML += `
        
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].author}</h5>
        </div>
        <img src="${data.articles[i].urlToImage}" class="card-img-bottom img" alt="...">
        </div>
        <br>
        
        `

    }


})

.catch((err) => console.log(err)) 
}