angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fish-name">{{$ctrl.fish.name}}</span>
      <span>
        <img ng-src={{$ctrl.fish.image}} />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">Does anyone know where my dad is?</span>
      <span class="fish-description" *ngif="$ctrl.showDescription">{{$ctrl.fish.description}}</span>
     
    </div>
    `
});
 