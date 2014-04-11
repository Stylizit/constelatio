Template.register.events({
	'submit #register-form' : function(e, t){
		e.preventDefault();

		// Get input values
		var usr = t.find('#register-username').value;
		var email = t.find('#register-email').value;
		var pwd = t.find('#register-pwd').value;

		// Validate fields
		email = trimInput(email);
		if(isValidMail(email)){
			if(isValidPassword(pwd)){
				Accounts.createUser({username : usr, email : email, password : pwd}, function(error){
					if(error){
						// Error found
					}
					else{
						// Registration ok
						//alert("ok");
						Router.go('/welcome/');
					}
				});
			}
			else{
				$('.error-pwd').text("Password must contain 8 chars. min.");
			}
		}
		else{
			$('.error-email').text("Invalid email");
		}
		
		return false;
	}
});

var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
}
var isValidPassword = function(val){
	var regex = /^[0_9a-zA-Z!@#$%]{8,}/;
	return regex.test(val); 
}
var isValidMail = function(val){
	var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return regex.test(val); 
}