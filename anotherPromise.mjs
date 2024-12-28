//untuk error handling 
function promiseExecutor(resolve, rejected) {
    setTimeout(() => {
        console.log(`Melakukan sesuatu sebelum Promise dijalankan.`);

        //penentuan hasil dari asinkron
        const number = Math.random();

        //nilai fullfilment dari Promise
        if (number > 0.5) {
            resolve('You did it!');
        }

        //nilai rejected dari Promise
        else {
            rejected(new Error('Sorry, something went wrong!'));
        }
    }, 2000);
}

export function doSomething() {
    return new Promise(promiseExecutor);
}