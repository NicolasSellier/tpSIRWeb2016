
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	this.initialX = 0;
	this.initialY = 0;
	this.endX = 0;
	this.endY = 0;

	// Developper les 3 fonctions gérant les événements
	this.pression = function(evt){
		
	}
	
	this.deplacement = function(evt){
		
	}
	
	this.relachement = function(evt){
		
	}

	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



