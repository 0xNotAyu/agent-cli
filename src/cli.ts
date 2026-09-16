import { Command } from "commander";

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

    program.action(()=>{
        program.help()
    });

    return program;
}