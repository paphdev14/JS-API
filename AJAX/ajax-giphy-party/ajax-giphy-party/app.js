// Get the Gifs UI
const gifContainer = document.getElementById('img-container');
function gifUI(gifInput){
    const singleGif = document.createElement('img');
    singleGif.setAttribute('src', `${gifInput}`);
    gifContainer.append(singleGif)
}

// Get random Gif
async function RandGifs(){
    const response2 = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
    const gifs = response2.data.data; 
    const rand = Math.floor(Math.random() * gifs.length);
    gifUI(gifs[rand].images.original.url);
}

// Get Gif with search
async function getGif(search) {
    try {
        const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        const gifs = response.data.data; 
        const rand = Math.floor(Math.random() * gifs.length);
        if(search){
        gifUI(gifs[rand].images.original.url);
    }
    } catch (error) {
        RandGifs();
    }
}

// Event listener
const form = document.querySelector('.form-giphy');
let gifInput = document.getElementById('search-input');
form.addEventListener('submit', e =>{
    e.preventDefault();
    getGif(gifInput.value);
    gifInput.value = '';
});

// Remove all gifs
const removeGifs = document.querySelector('.remove-gif');
removeGifs.addEventListener('click', function(){
   const imgs = document.querySelectorAll('img');
   for(let img of imgs){
       img.remove();
   }
  });

