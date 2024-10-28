//Promise State
// As you know, a promise is in one of these states: pending, fulfilled, rejected.

// Implement the async function getState that determines a state of a promise.

// const p = Promise.resolve();
// const state = await getState(p); // === "fulfilled"

// const p = Promise.reject();
// const state = await getState(p); // === "rejected"

// const p = new Promise(() => {});
// const state = await getState(p); // === "pending"

// function getState(promise) {
//     return promise
//         .then(() => 'fulfilled')
//         .catch((err) => {
//             console.log('err', err);
//             return 'rejected';
//         }) & 'pending';
// }
function getState(promise) {
    return new Promise((res) => {
        promise.then(
            () => res('fulfilled'),
            () => res('rejected')
        );
        Promise.resolve('pending').then((data) => res(data));
    });
}

const p = Promise.resolve();
const state1 = await getState(p); // === "fulfilled"
console.log(state1);

const d = Promise.reject();
const state2 = await getState(d); // === "rejected"
console.log(state2);

const v = new Promise(() => {});
const state3 = await getState(v); // === "pending"
console.log(state3);
