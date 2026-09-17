import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

export function printBanner() {
    const title = figlet.textSync("Agent-cli", {font: "Slant"})
    const panel = boxen(
        chalk.green("Agent-cli like claude code\n") + 
        chalk.dim("Full Production Ready"),
        {padding: 1, borderColor: "gray"}
    )

    console.log(title)
    console.log(panel)
}