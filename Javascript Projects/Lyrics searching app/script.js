const results = document.getElementById("results");
const search = document.getElementById("search");
const submitButton = document.querySelector("#submit");

const getSongs = async (songName) => {
	const { data } = await axios.get(
		`https://api.lyrics.ovh/suggest/${songName}`
	);

	console.log(data);

	results.innerHTML = `
    <ul class="songs">
    ${data?.data.map(
			(song) => `
      <li>
        <div class='item'>${song.artist.name} - ${song.title}</div>
        <button class="btn btn-primary" artist="${song.artist.name}" title="${song.title}">Lyrics</button>
      </li>
    `
		).join('')
  }
  <button class="btn bg-primary text-white">Next</button>
    </ul>
  `;
};

submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	const songName = search.value;

	if (!songName) {
		console.log("Please enter something");
	}

	getSongs(songName);
});

results.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    var title = e.target.getAttribute('title')
    var artist = e.target.getAttribute('artist')
  }
  
  if (!title || !artist) {
    console.log("Title and artist name is required");
  }

  console.log(title);
  console.log(artist);

  const getLyrics = async(artist, title) => {
    try {
      var {data} = await axios.get(`https://api.lyrics.ovh/v1/${title}/${artist}`)

    console.log(data.lyrics);

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '</br>');

    results.innerHTML = `
      <h3>${artist} - ${title}</h3>
      <p>${lyrics}</p>
    ` 
    } catch (error) {
        alert("Sorry, this song doesnt have lyrics choose another one.")
    }
    }
    
    getLyrics(title, artist)
})