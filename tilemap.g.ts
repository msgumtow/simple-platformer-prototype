// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000500000000000000000000000000000000000000000007000000010000000005000000000000000500000000000500000000000105000000000000000000000000000000000000000000000000000000010505080000000000000000000001010000000000000000000100000001050505050505050505060606060505050506060606060606060505050605050505`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 . . . . . . . . 2 2 2 . 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile9":
            case "tile1":return tile1;
            case "tile10":
            case "tile2":return tile2;
            case "tile11":
            case "tile3":return tile3;
            case "tile":
            case "tile4":return tile4;
            case "tile0":
            case "tile5":return tile5;
            case "tile12":
            case "tile6":return tile6;
            case "tile13":
            case "tile7":return tile7;
            case "tile14":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
