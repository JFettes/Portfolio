async function race() {
    var runner1 = false;
    var runner2 = false;
    var loser = '';

    var runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, 5000); 
    });

    var runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, 4000); 
    });

    console.log("Waiting on Results");

    await Promise.all([runner1Go, runner2Go]);

    return [runner1, runner2, loser];
}

race().then((result) => {
    console.log("The loser is:", result[2]);
});

