namespace SpriteKind {
    export const Stars = SpriteKind.create()
    export const PE = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 1000, function () {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 5 . . . . . . . . . . . 
            2 2 2 5 5 5 5 5 5 5 5 . . . . . 
            . . 5 5 5 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy(effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 . . . . . . . . . 
    . 9 9 . . 9 9 9 9 . . . . . . . 
    . . 9 9 6 9 6 9 6 9 9 6 9 6 . . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . . 9 9 9 9 . . . . . . . 
    . . . . . 9 9 9 . . . . . . . . 
    . . . . . 9 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(99)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.setPosition(160, randint(10, 110))
        mySprite2.setVelocity(-10, 0)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
    } else {
        mySprite3 = sprites.create(img`
            . . . . . . . . 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 5 2 2 4 4 4 4 2 4 2 . . 
            . . 2 2 5 5 5 5 4 4 4 2 4 4 2 . 
            . . 2 2 4 5 5 4 4 4 5 5 5 4 4 2 
            . . 2 2 4 4 4 4 e 4 5 5 5 4 4 2 
            . 2 2 2 2 4 2 2 e 4 5 4 4 4 2 2 
            2 4 5 5 2 2 2 4 e e 4 e e e 2 2 
            2 4 5 5 5 5 2 2 2 4 e e e 4 4 2 
            2 4 4 4 5 5 2 4 4 4 e e e 4 4 2 
            2 2 e 4 4 4 4 e 4 e e 4 e e 4 . 
            . 2 2 e e e e e e e 4 2 2 e 4 . 
            . . 2 2 2 e 4 4 4 e 4 4 b 2 . . 
            . . . . 2 e 4 4 4 e e e 2 . . . 
            . . . . 2 e e 4 4 4 e 2 . . . . 
            . . . . . . e 4 4 2 2 . . . . . 
            `, SpriteKind.Food)
        mySprite3.setPosition(160, randint(10, 110))
        mySprite3.setVelocity(-10, 0)
        mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.percentChance(30)) {
            mySprite5 = sprites.create(img`
                . . c b a c . . 
                c c b c f a c . 
                a f b b b a c . 
                a f f b a f c c 
                c b b a f f c . 
                . b b a f a . . 
                . . c b b . . . 
                `, SpriteKind.PE)
            mySprite5.setPosition(value.x, value.y)
            mySprite5.setVelocity(-100, 0)
            mySprite5.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
})
game.onUpdateInterval(500, function () {
    mySprite4 = sprites.create(img`
        1 
        `, SpriteKind.Stars)
    mySprite4.setPosition(randint(10, 160), randint(10, 110))
    mySprite4.setVelocity(randint(-15, -10), 0)
    mySprite4.setFlag(SpriteFlag.AutoDestroy, true)
    mySprite4.setFlag(SpriteFlag.Ghost, true)
    mySprite4.z = -1
})
