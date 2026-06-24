import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    playerWalk: new ImageSource('images/player_walk.png'),
    // Player: new ImageSource('images/player.png'),
    bg: new ImageSource('images/background2.png'),
    enemy: new ImageSource('images/enemy1.png')

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }