var db = [
{name:'Bharadwaj',email:'bharadwaj@gmail.com',age:25},
{name:'Maji Lara',email:'Maji@gmail.com',age:19},
{name:'comi sandra',email:'comi@gmail.com',age:32}
];
(function avatars(db) {
this.init = function() {
this.generateList();
this.enteruser();
};


this.generateList = function() {
var parent = document.querySelector('#parentavatars');
var template = "";
for(i = 0; i < db.length; i++) {
template += '<div class="col-sm-4">';
template += '<div class="card">';
template += '<div class="carddelete" data-card="' + i + '">x</div>';
template += '<div class="cardblock">';
template += '<h3 class="cardtitle">'+ db[i].name +'</h3>';
template += '<p class="cardtext"><strong>Email: </strong>'+ db[i].email +'</p>';
template += '<p class="cardtext"><strong>Age: </strong>'+ db[i].age +'</p>';
template += '</div> </div> </div>';
}
parent.innerHTML = '';
parent.insertAdjacentHTML('afterbegin',template);
deleteuser();
};


this.enteruser = function() {
	function grabuser() {
		var name = document.querySelector('#username').value;
		var email = document.querySelector('#email').value;
		var age = document.querySelector('#age').value;
		var elements = [name,email,age];
		if(validateuser(elements)) {
			document.querySelector('#myform').reset();
			db.push({name:name,email:email,age:age});
			generateList();
		}else {
			document.querySelector('#errortext').style.display = 'block';
			setTimeout(function(){document.querySelector('#errortext').style.display = 'none';},4000);
		}
	}
	document.querySelector('#myform').addEventListener('submit',function(e) {
		e.preventDefault();
		grabuser();
	});
};
this.validateuser = function(inputs) {
for(var i =0; i<inputs.length;i++) {
	if(inputs[i] == '') {
		return false;
	}
	}
return true;
};


this.deleteuser = function() {
 var buttons = document.querySelectorAll('.carddelete');
 function deletethis(element) {
 	var obj = parseInt(element.getAttribute('data-card'));
 	db.splice(obj,1);
 	generateList();
 }
 for(var i = 0;i<buttons.length;i++) {
 	buttons[i].addEventListener('click',function(e){
 	deletethis(this);
 });
 }
 
};


this.init();
})(db);