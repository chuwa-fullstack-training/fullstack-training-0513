// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
    function delay() {
        return new Promise(resolve => setTimeout(resolve, 1000))
    }
    delay().then(()=>{
        console.log(1)
        return delay()
    }).then(()=> {
        console.log(2)
        return delay()
    }).then(() => {
        console.log(3)
    })
}

async function print2() {
    function delay() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    await delay();
    console.log(1);
    await delay();
    console.log(2);
    await delay();
    console.log(3);
}


// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
    function delay(){
        return new Promise(resolve => setTimeout(resolve, 1000))
    }

    nums.reduce((promise, num) => {
        return promise.then(() => {
            console.log(num)
            return delay()
        })
    }, Promise.resolve())
}

async function printList2(){
    function delay() {
        return new Promise(resolve => setTimeout(resolve, 1000))
    }

   for (let num of nums){
       console.log(num)
       await delay()
   }
}


// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
    const lights = [
        { color: "red", delay: 3 },
        { color: "green", delay: 3 },
        { color: "yellow", delay: 1 },
    ];

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time*1000))
    }

    function cycle(){
        lights.reduce((promise, light) => {
            return promise.then(() => {
                console.log(light.color)
                return delay(light.delay)
            })
        }, Promise.resolve()).then(cycle)
    }

    cycle()

}

async function trafficLight2(){
    const lights = [
        { color: "red", delay: 3 },
        { color: "green", delay: 3 },
        { color: "yellow", delay: 1 },
    ];
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time*1000));
    }

    while (true){
        for(let light of lights){
            console.log(light.color)
            await delay(light.delay)
        }
    }


}
trafficLight2()