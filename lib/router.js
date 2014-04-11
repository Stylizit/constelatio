Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		return Meteor.subscribe('result');
	}
});

Router.map(function(){
	this.route('homepage', {path: '/'});
	this.route('explore', {path: '/explore/'});
	this.route('login', {path: '/login/'});
	this.route('register', {path: '/register/'});
	this.route('welcome', {path: '/welcome/'});
	this.route('profile', {
		path: '/profile/',
		data: function(){ return Meteor.user(); }
	});
	/*
	this.route('userProfile', {
		path: '/user/:_id',
		waitOn: function(){
    	    return Meteor.subscribe('singleUser', this.params._id);
 	    },
		data: function(){
			var findById = Meteor.users.findOne(this.params._id);
			if(typeof findById !== "undefined"{
				Router.go(getProfileUrlById(findById), {replaceState: true});
			}
		}
	});
	*/
	
	this.route('resultPage', {
		path: '/explore/results/:_id',
		data: function(){
			return Result.findOne(this.params._id);
		}
	});
});

getProfileUrlById = function(id) {
    return Meteor.absoluteUrl()+'user/' + id;
}