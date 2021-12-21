function myfetch() {
        return new Promise(function (resolve, reject) {
                let success = true;
                setTimeout(() => {
                        if (success) {
                                resolve("Successfully Fetched");
                        }
                        reject("error in fetching");
                }, 600);
        });
}

function mypost() {
        return new Promise(function (resolve, reject) {
                let success = true;
                setTimeout(() => {
                        if (success) {
                                resolve("Successfully Posted");
                        }
                        reject("error in posting");
                }, 500);
        });
}

// 1 ---- separately executing
// myfetch().then(
//         a=>{
//                 console.log(a);

//         }

// )
// mypost().then(
//         a=>{
//                 console.log(a);

//         }
// )

// 2 ---- Promises Way of back to back callbacks
// myfetch().then(
//         a=>{
//                 console.log(a);
//                 return mypost();
//         }

// )
// .then(
//         a=>{
//                 console.log(a);

//         }
// ).catch(a=>console.log(a))

// 3 ---- Async Way of back to back callbacks
async function fetch_post() {
        res_fetch = await myfetch();
        console.log(res_fetch);

        res_post = await mypost();
        console.log(res_post);

        return "all success";
}

fetch_post().then((a) => console.log(a));









