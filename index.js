const app = "I don't do much."

function bumpCounter() {
  let counter = 0

  return {
    addBump: () => counter += 1,

    getBumps: () => counter
  }
}

function createAnimal(animalType) {
  let type = animalType
  return (deadlyDevice) => {
    return {
      animalType: type,
      deadlyDevice: deadlyDevice
      }
    }
  }

var sharkCreator = createAnimal("Shark")
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
