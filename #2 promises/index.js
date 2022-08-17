/**
 * This is a mock function that mocks async behavior
 * by calling Promise.resolve and Promise.reject.
 */
async function getAllUsers() {
    return new Promise((resolve, reject) => {
        // Our mock function will throw an error with a likelihood of about 50%.
        if(Math.random() >= 0.5) {
            // We resolve the promise and return the data.
            resolve([
                {
                    id: 1,
                    name: "Ken",
                },
                {
                    id: 2,
                    name: "Kaitlyn",
                },
                {
                    id: 3,
                    name: "Eno",
                }
            ])
        } else {
            // We reject the promise which will throw an error.
            reject();
        }
    })
}

/**
 * This is a mock function that mocks async behavior
 * by calling Promise.resolve.
 * It further emulates a slow async function by waiting 
 * for 10 seconds before it resolves.
 */
async function getAllTweets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([]);
        }, 10000) // 10 seconds!
    })
}


async function main() {
    try {
        console.log("I get excuted second");
        console.log("getting tweets...")
        console.log("getting users...")
        // Use Promise.all to trigger both database requests at the same time.
        // This only works if the two calls are not depenent on each other.
        // If we need some data from the user request to fetch the tweets,
        // then we have to call them in a sequence instead.
        const [tweets, users] = await Promise.all([getAllTweets(), getAllUsers()]);
        console.log("I get excuted fourth");
        console.log(users);
        console.log(tweets);
    } catch(error) {
        // try/catch blocks can be used to capture Promise.reject errors
        // to gracefully handle error cases.
        console.log("I get excuted fourth");
        console.log("Oh snap, our database again!");
    } finally {
        console.log("I get excuted fiths");
    }
}

console.log("I get excuted first");
// Call the main function
main();
console.log("I get excuted third");