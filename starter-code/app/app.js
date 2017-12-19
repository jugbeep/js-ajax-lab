
let bookObj = $.get ('https://den-super-crud.herokuapp.com/books')
	.done(function (data) {
		console.log(data);
		

let bookArr = bookObj.responseJSON.books;
console.log(bookObj);

function makeList(value, index, ar){

}

bookArr.forEach(function(){
	$('#books').append('<li>'+bookArr+'</li>');
});

});



