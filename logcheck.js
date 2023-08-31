import logs from "./dist/logs.js"

let a = await logs("a")

a.log("this is bulls", Date.now() - 100)
a.error("t", Date.now() + 100)
a.info("NOT INFORMATIVE", Date.now() * 100)
a.warn("warn", (Date.now() ^ 100)/1000)
