import { Command } from "commander";
import { printBanner } from "./ui/banner.js";
import { requireApiKey } from "./config/env.js";
import chalk from "chalk";

export function createCli() {

    const program = new Command();
    
    program
    .name("Agent-cli")
    .description("An agent cli like claude code")
    .version("0.1.0");

    program
    .command("hello")
    .description("Print a greeting")
    .action(()=>{
        console.log("hello from Agent cli")
    });

    program
    .command("banner")
    .description("show the welcome banner")
    .action(()=>{
        printBanner();
    })

    program
    .command("doctor")
    .description("Check enviroment is ready")
    .action( async ()=>{
        const {execa} = await import("execa")
        const {stdout} = await execa("node", ["-v"])

        if(Number(stdout.slice(1)) < 18){
            throw new Error("Node.js version 18 or higher is required")
        }

        const apiKey = requireApiKey()
        if(!apiKey){
            throw new Error("AI_API_KEY is not set")
        }

        console.log(chalk.green("✓ Node.js is >= 18"))
        console.log(chalk.green("✓ AI API key is set"))
    })

    program.action(()=>{
        program.help()
    });

    return program;
}