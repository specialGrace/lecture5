
import express from express
const app=express()


// NODE Timers Module-Methods and clear methods
app.get('/', (req, res) => {
//    setImmediate
    function sayHi() {
        console.log('This will be called immediately')
    }
    const immediate=setImmediate(sayHi)
    clearImmediate(immediate)

    //setInterval
     function sayHi() {
        console.log('This will be called after the delay time')
    }
    const interval=setInterval(sayHi, 2000)
    clearInterval(interval)

    // setTimeout
    function sayHi() {
        console.log('This will be called only once after the delay time')
    }
    const timeout=setTimeout(sayHi, 2000)
    clearTimeout(timeout)
    res.send('working')
})
app.listen(4000, ()=>console.log('server'))