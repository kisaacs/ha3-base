var ha3 = {
    svgNS: 'http://www.w3.org/2000/svg',
    signals: {
    }
};

window.addEventListener('load', function () {
    // YOU MAY MODIFY THIS FUNCTION
    var model = createScatterModel(drinks);


    var d1 = createScatterView('scatter1', model, 
	'Calories', 'Total Fat (g)', 'Beverage_category');
    var d2 = createScatterView('scatter2', model, 
	'Sugars (g)', 'Protein (g)', 'Beverage_category');
    var details = createDetailView('details', model);
});

// This is the makeSignaller from class
var makeSignaller = function() {
    var _subscribers = []; // Private member

    // Return the object that's created
    return {
	// Register a function with the notification system
	add: function(handlerFunction) { _subscribers.push(handlerFunction); },

	// Loop through all registered function snad call them with passed
	// arguments
	notify: function(args) {
	    for (var i = 0; i < _subscribers.length; i++) {
		_subscribers[i](args);
	    }
	}
    };
}

// Create an object that handles UI object
var createController = function(model) {
    var _model = model;

    return {
	// All types of events run through a central dispatch
	// function. The dispatch function decides what to do.
	dispatch: function(evt) {
	    switch(evt.type) {
		default:
		    console.log('Unknown event type', evt.type);
	    }
	}
    };
}

var createScatterModel = function(data) {
    _data = data;
    _categories = [];

    // YOUR CODE HERE
	

    var _getCategories = function() {
	var tmpObj = {};
	for (var i = 0; i < _data.length; i++)  {
	    tmpObj[_data[i]['Beverage_category'] ] = 1;
	}
	return Object.keys(tmpObj);
    }
    _categories = _getCategories();

    return {
	// YOUR CODE HERE
	
	getCategories: function() {
	    return _categories;
	}
    } 
}

var createDetailView = function(elm, model) {
    // YOUR CODE HERE

    return {
	// YOUR CODE HERE
    }

}

var createScatterView = function(elm, model, x, y, color) {

    // YOUR CODE HERE


    return {

	// YOUR CODE HERE
    }
}
