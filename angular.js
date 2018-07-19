var app = angular.module("atlasApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
  .when("/", {
        templateUrl : "templates/decalogue.html"
    })
    .when("/wiosna", {
        templateUrl: "templates/wiosna.html"
    })
    .when("/lato", {
        templateUrl: "templates/lato.html"
    })
    .when("/jesien", {
        templateUrl: "templates/jesien.html"
    })
    .when("/zima", {
        templateUrl: "templates/zima.html"
    })
    .when("/las-iglasty", {
        templateUrl: "templates/las-iglasty.html"
    })
    .when("/las-mieszany", {
        templateUrl: "templates/las-mieszany.html"
    })
    .when("/ogrody-oraz-laki", {
        templateUrl: "templates/ogrody-oraz-laki.html"
    })
    .when("/tereny-podmokle", {
        templateUrl: "templates/tereny-podmokle.html"
    })
    .when("/drewno", {
        templateUrl: "templates/drewno.html"
    })
    .when("/jadalny", {
        templateUrl: "templates/jadalny.html"
    })
    .when("/niezdatny", {
        templateUrl: "templates/niezdatny.html"
    })
    .when("/trujacy", {
        templateUrl: "templates/trujacy.html"
    })
    .when("/abc-b", {
        templateUrl: "templates/abc-b.html"
    })
    .when("/abc-g", {
        templateUrl: "templates/abc-g.html"
    })
    .when("/abc-l", {
        templateUrl: "templates/abc-l.html"
    })
    .when("/abc-m", {
        templateUrl: "templates/abc-m.html"
    })
    .when("/abc-o", {
        templateUrl: "templates/abc-o.html"
    })
    .when("/abc-p", {
        templateUrl: "templates/abc-p.html"
    })
    .when("/abc-w", {
        templateUrl: "templates/abc-w.html"
    })
    .when("/no-mushroom", {
        templateUrl: "templates/no-mushroom.html"
    })
    .when("/o-mnie", {
        templateUrl: "templates/o-mnie.html"
    });
})
app.controller('myCtrl', function($scope) {
    $scope.menuSmall = false;
    $scope.displayMenuSmall = function() {
        $scope.menuSmall = !$scope.menuSmall;
    }
    
    $scope.timeContainer = false;
    $scope.displayTime = function() {
        $scope.timeContainer = !$scope.timeContainer;
    }
    
    $scope.timeItemSpring = false;
    $scope.displayTimeSpring = function() {
        $scope.timeItemSpring = !$scope.timeItemSpring;
    }

    $scope.timeItemSummer = false;
    $scope.displayTimeSummer = function() {
        $scope.timeItemSummer = !$scope.timeItemSummer;
    }

    $scope.timeItemAutumn = false;
    $scope.displayTimeAutumn = function() {
        $scope.timeItemAutumn = !$scope.timeItemAutumn;
    }

    $scope.timeItemWinter = false;
    $scope.displayTimeWinter = function() {
        $scope.timeItemWinter = !$scope.timeItemWinter;
    }

/*MENU MIEJSCE*/

    $scope.placeContainer = false;
    $scope.displayPlace = function() {
        $scope.placeContainer = !$scope.placeContainer;
    }

     $scope.placeItemIglasty = false;
    $scope.displayPlaceIglasty = function() {
        $scope.placeItemIglasty = !$scope.placeItemIglasty;
    }

    $scope.placeItemMieszany = false;
    $scope.displayPlaceMieszany = function() {
        $scope.placeItemMieszany = !$scope.placeItemMieszany;
    }

    $scope.placeItemOgrodki = false;
    $scope.displayPlaceOgrodki = function() {
        $scope.placeItemOgrodki = !$scope.placeItemOgrodki;
    }

    $scope.placeItemPodmokle = false;
    $scope.displayPlacePodmokle = function() {
        $scope.placeItemPodmokle = !$scope.placeItemPodmokle;
    }

    $scope.placeItemDrewno = false;
    $scope.displayPlaceDrewno = function() {
        $scope.placeItemDrewno = !$scope.placeItemDrewno;
    }

/*MENU GASTRO*/

     $scope.gastroContainer = false;
    $scope.displayGastro = function() {
        $scope.gastroContainer = !$scope.gastroContainer;
    }

     $scope.gastroItemJadalne = false;
    $scope.displayGastroJadalne = function() {
        $scope.gastroItemJadalne = !$scope.gastroItemJadalne;
    }

     $scope.gastroItemNiejadalne = false;
    $scope.displayGastroNiejadalne = function() {
        $scope.gastroItemNiejadalne = !$scope.gastroItemNiejadalne;
    }

     $scope.gastroItemTrujace = false;
    $scope.displayGastroTrujace = function() {
        $scope.gastroItemTrujace = !$scope.gastroItemTrujace;
    }

/*MENU ABC*/

     $scope.abcContainer = false;
    $scope.displayAbc = function() {
        $scope.abcContainer = !$scope.abcContainer;
    }

});



