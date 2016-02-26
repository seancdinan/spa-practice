// DEFINE THE SECTIONS
var header = document.getElementById('header');
var sidebar = document.getElementById('sidebar');
var content = document.getElementById('content');
var postList = document.getElementById('postList');
sidebar.style.height = window.innerHeight - 150 + 'px';
content.style.width = window.innerWidth - 300 + 'px';
content.style.height = window.innerHeight - 150 + 'px';

// PLACE THE TITLE
var title = document.createElement('H1');
title.innerHTML = DATA[0]['title'];
header.appendChild(title);
header.style.backgroundColor = DATA[0]['headerColor'];
sidebar.style.backgroundColor = DATA[0]['sidebarColor'];
document.body.style.backgroundColor = DATA[0]['contentColor'];
//h2.style.color = DATA[0]['contentTitleColor'];

// SIDEBAR LIST OF POSTS
var postTitleArray = getPostTitles(DATA[0]['posts']);
for (var i in postTitleArray){
	var postListContent = document.createElement('li');
	postListContent.innerHTML = postTitleArray[i];
	postList.appendChild(postListContent);
}

postList.addEventListener('click', function(event){
	fetchPost(event.target.innerHTML);
})


// PLACE THE CONTENT
function fetchPost(x){
	var postTitle = document.createElement('H2');
	var postDate = document.createElement('H3');
	var postText = document.createElement('P');

	var pullContent = DATA[0]['posts'][findEntry(DATA[0]['posts'], 'title', x)];
	console.log(pullContent);
	postTitle.innerHTML = pullContent['title'];
	postDate.innerHTML = pullContent['date'];
	postText.innerHTML = pullContent['content'];

	while (content.firstChild){content.removeChild(content.firstChild)}
	content.appendChild(postTitle);
	content.appendChild(postDate);
	content.appendChild(postText);
}
function getPostTitles(array){
	var result = [];
	for (var i in array){
		result.push(array[i]['title'])
	}
	return result;
}


function findEntry(array, key, value){
	for (var i in array){
		if (array[i][key] == value){
			return i;
		}
	}
	return console.log('ERROR --> findEntry: value not found')
}

