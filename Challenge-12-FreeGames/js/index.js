fetch("https://gamerpower.p.rapidapi.com/api/giveaways?platform=pc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "gamerpower.p.rapidapi.com",
		"x-rapidapi-key": "347d8b3bd2mshb0759f24998ec48p1bd671jsneb05af2245d5"
	}
})
.then(response => {
	console.log(response);
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(err => {
	console.error(err);
});


fetch("https://dota2stefan-skliarovv1.p.rapidapi.com/getHeroes", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "Dota2stefan-skliarovV1.p.rapidapi.com",
		"x-rapidapi-key": "347d8b3bd2mshb0759f24998ec48p1bd671jsneb05af2245d5"
	},
	"body": {
		"apiKey": "<REQUIRED>"
	}
}).then(response => {
	console.log(response);
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(err => {
	console.error(err);
});