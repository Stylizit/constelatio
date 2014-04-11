Template.login.events({
	'submit #login-form' : function(e, t){
		e.preventDefault();

		// Get input values
		var email = t.find('#login-email').value;
		var pwd = t.find('#login-pwd').value;

		// Log with meteor

		Meteor.loginWithPassword(email, pwd, function(error){
			if(error){
				// Error found
				$('.error-password').text("Email or password invalid");
			}
			else{
				// Login ok
				//alert("login ok");
				Router.go('/');
			}
		});

		return false;
	}
	/*,
	'click .facebook-login' : function(e, t){
		e.preventDefault();

		Meteor.loginWithFacebook(requestPermissions)
	},
	'click .twitter-login' : function(e, t){
		e.preventDefault();

		Meteor.loginWithTwitter()
	}
	*/
});
Template.menuLogout.events({
	'click #logout-link' : function(e,t){
		Meteor.logout(function(error){
			if(error){
				// Show error message
			}
			else{
				// Logout Ok
			}
		});
	}
});