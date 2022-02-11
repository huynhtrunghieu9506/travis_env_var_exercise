require('dotenv').config();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const favoriteFood = process.env.FAVORITE_FOOD;
    console.log("Microservices rock!");
    console.log(`My favorite food is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
