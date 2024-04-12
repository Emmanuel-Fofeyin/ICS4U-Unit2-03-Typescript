/**
 * This is the standard index.ts starting point.
 *
 * author  Emmanuel.FN
 * version 1.0
 * since   2024-04-12
 */
import { EmmanuelStack } from './EmmanuelStack'

let fruits = new EmmanuelStack()
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack)
console.log("popped: " + fruits.popItem())
console.log("fruits: " + fruits.showStack)
console.log("length: " + fruits.size)
console.log("is empty: " + fruits.isEmpty)
console.log("")

let colours = new EmmanuelStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.showStack)
console.log("popped: " + colours.popItem())
console.log("popped: " + colours.popItem())
console.log("colours: " + colours.showStack)
console.log("length: " + colours.size)
console.log("is empty: " + colours.isEmpty)
console.log("")

let shapes = new EmmanuelStack()
shapes.push("square")
shapes.push("triangle")
shapes.push("circle")
console.log("shapes: " + shapes.showStack)
console.log("popped: " + shapes.popItem())
console.log("popped: " + shapes.popItem())
console.log("popped: " + shapes.popItem())
console.log("popped: " + shapes.popItem())
console.log("shapes: " + shapes.showStack)
console.log("length: " + shapes.size)
console.log("is empty: " + shapes.isEmpty)
console.log("")

console.log("\nDone.")
