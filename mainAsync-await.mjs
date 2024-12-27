//untuk mengurutkan eksekusi kode sesuai keinginan
import {doSomething} from './anotherAsync-await.mjs';

async function promiseWithAsyncAwait() {
    try {
        console.log('Start');

        const result = await doSomething();
        console.log(result);

        console.log('End.');
    } catch (error) {
        console.log(error.message);
    }
}

promiseWithAsyncAwait();