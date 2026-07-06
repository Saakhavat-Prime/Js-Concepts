
function saveDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
        // console.log("your data was saved", data);
    } else {
        failure();

    }

};

saveDb("apna college", () => {
    console.log("success : your data was saved");
    saveDb("hello world", () => {
        console.log("success2 : your data2 was saved");
        saveDb("Shardha", () => {
            console.log("success3 : your data3 was saved");
        }, () => {
            console.log("failure3 : weak connection. data not saved");

        });
    }, () => {
        console.log("failure2 : weak connection. data not saved");
    });
},
    () => {
        console.log("failure : weak connection. data not saved");
    });