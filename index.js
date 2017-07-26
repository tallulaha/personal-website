$(document).ready(function(){
	displayNotes();

});

var textPosts = [
	{
		"title": "Hello",
		"text": "Text Post #1",
		"page":"tech"
	},
	{
		"title": "Hello",
		"text": "Text Post #2",
		"page":"art"
	},
	{
		"title": "Hello",
		"text": "Text Post #3",
		"page":"food"
	}
]

function displayNotes() {
	divnotes = $("#divnotes");
	for (var i=0; i< textPosts.length; i++) {
		notesHtml = "";
		notesHtml += '<div class="post">';
		notesHtml += '<span class="notesTitle">' + textPosts[i].title + '</span>';
		notesHtml += '<br>';
		notesHtml += '<span class="notesText">' + textPosts[i].text + '</span>';
		notesHtml += "</div>";
		divnotes.append(notesHtml);
	}
};