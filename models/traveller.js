const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => {return journey.startLocation})
  return result ;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => {return journey.endLocation})
  return result ;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter((journey) =>{return journey.transport === transport })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter((journey) =>{return journey.distance >= minDistance })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = this.journeys.reduce((sum ,journey) =>{return sum + journey.distance } ,0)
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
  let result = this.journeys.map((journey) =>{return journey.transport})
  return result.filter(onlyUnique);
};


module.exports = Traveller;
