import {doSomething} from './anotherPromise.mjs';

function onFulfilled(doSomethingData) {
    //do your job when 'fullfilled' happen..
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    //do your jobs when 'rejected' happens...
    console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);