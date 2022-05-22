import { Arguments, Process, Ramda, Remeda } from "./deps.js"
import { main } from "./src/app/main.js"

main(
  Remeda.pick(Arguments.parsing(Ramda.slice(2, Infinity, Process.argv)), [
    "cache",
    "dataset",
    "destination",
  ]),
)
