import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    // Fish: new ImageSource('images/fish.png'),
 Player: new ImageSource('images/player.png'),
    bg: new ImageSource('images/background.png'),
    enemy: new ImageSource('images/enemy.png')

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }