//Who is the killer?
// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// function killer(suspectInfo, dead) {
//     let result = '';
//     Object.keys(suspectInfo).forEach((element) => {
//         let friend = [];
//         dead.forEach((el) => {
//             if (suspectInfo[element].includes(el)) friend.push(el);
//         });
//         if (friend.length === dead.length) result = element;
//     });
//     return result;
// }

function killer(suspectInfo, dead) {
    for (let key in suspectInfo) {
        if (
            suspectInfo[key].length > dead.length &&
            [...new Set(suspectInfo[key].concat(dead))].length ===
                suspectInfo[key].length
        )
            return key;
    }
}

console.log(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben'])); //'Megan'
console.log(
    killer(
        {
            James: ['Jacob', 'Bill', 'Lucas'],
            Johnny: ['David', 'Kyle', 'Lucas'],
            Peter: ['Lucy', 'Kyle'],
        },
        ['Lucas', 'Bill']
    )
); //'James'
