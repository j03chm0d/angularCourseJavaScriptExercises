
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {const myPromise  = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("pink");
        resolve();},3000)});

        console.log("blue");
};

sleep()

module.exports = {sleep};