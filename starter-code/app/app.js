
let bookObj = $.get ('https://den-super-crud.herokuapp.com/books')
	.done(function (data) {
		console.log(data);
		

let bookArr = bookObj.responseJSON.books;
console.log(bookObj);

function makeList(value, index, ar){

}

bookArr.forEach(function(i){
	$('#books').append('<li>'+i.author+'</li>');
	$('#books').append('<li>'+i.title+'</li>');
	$('#books').append('<img src='+i.image+'>');
	$('#books').append('<li>'+i.releaseDate+'</li>');
});



$('form').submit(function(){
	event.preventDefault();
	let xtitle = $('#book-title').val();
	let xauthor = $('#book-author').val();
	let ximage = $('#book-image').val();
	let xdate = $('#book-release-date').val();
	$.post('https://den-super-crud.herokuapp.com/books',{ 
		image: ximage,
		author: xauthor,
		title: xtitle,
		releaseDate: xdate
	});
})

});

// title: 'Booky McBookface',
// 		image: 'https://images-na.ssl-images-amazon.com/images/I/51wmbpnvlNL.jpg',
// 		author: 'David K. Fuller',
// 		releaseDate: 'April 27th, 2016',