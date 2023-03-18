
//https://github.com/collinhover/impactplusplus/issues/123
ig.module('game.main')
.requires(
    'plusplus.core.plusplus',
    'game.levels.test'
    )
   
.defines(function () {
    let myGameClass = ig.GameExtended.extend({
        init: function () {
            this.parent();
            this.loadLevel(ig.global.LevelTest);
        }
    });
    ig.main( '#canvas', myGameClass, 60, 320, 240, 1, ig.LoaderExtended );
});