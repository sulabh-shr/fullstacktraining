// creating a journal array of objects of array events and status
// journal structure is :
// array[ object{ events: [arrayofevents], squirrel: boolean}]
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  // adding object with events and squirrel status
  journal.push({
  	// events is array of strings
    events: events,				
    squirrel: didITurnIntoASquirrel
  });
}

function hasEvent(event, entry) {
	// accessing journal's object[i]'s events's event 
  return entry.events.indexOf(event) != -1;
}

// selecting particular event's all occurrences in the journal
function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  // iterating over journal object-wise:
  for (var i = 0; i < journal.length; i++) {
	// entry is 1 days' report    
    var entry = journal[i], index = 0;		
    // calculating the index of table to update
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    // updating the phi co-eff measuring table
    table[index] += 1;
  }
  return table;
}

// measuring phi co-eff for an event from it's table
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}