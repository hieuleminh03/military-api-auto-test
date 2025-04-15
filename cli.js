#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();

program
    .name("military-test")
    .description("CLI to manage military student violations tests")
    .version("1.0.0");

const flowsDir = path.join(__dirname, "flows");

async function runFlow(flowPath) {
    console.log(`Starting flow: ${flowPath}...`);
    try {
        const flowModule = await import(flowPath);
        const flowFunction = typeof flowModule.default === 'function' 
            ? flowModule.default 
            : Object.values(flowModule)[0];
            
        if (typeof flowFunction === 'function') {
            console.log(`-----------------------------------------------`);
            console.log(`🚀 Running flow ${flowPath}...`);
            await flowFunction();
            console.log(`⭐ Flow ${flowPath} finished`);
        } else {
            throw new Error(`Flow doesn't export a function`);
        }
    } catch (err) {
        console.error(`❌ Error in ${flowPath}:`, err.message);
    }
}

program
    .command("all")
    .description("Run all test flows in the flows directory")
    .action(async () => {
        const allFlows = await getAllFlows();
        for (const flow of allFlows) {
            await runFlow(flow);
        }
    });

program
    .command("flow <flow_name>")
    .alias("f")
    .description("Run a specific test flow")
    .action(async (flowName) => {
        const flowPath = await findFlowByName(flowName);
        if (flowPath) {
            await runFlow(flowPath);
        } else {
            console.error(`❌ Flow ${flowName} not found!`);
        }
    });

async function getAllFlows() {
    const flows = [];
    const files = await fs.readdir(flowsDir, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path.join(flowsDir, file.name);
        if (file.isDirectory()) {
            const nestedFiles = await fs.readdir(fullPath);
            nestedFiles.forEach((nestedFile) => {
                if (nestedFile.endsWith(".js")) {
                    flows.push(path.join(fullPath, nestedFile));
                }
            });
        } else if (file.isFile() && file.name.endsWith(".js")) {
            flows.push(fullPath);
        }
    }
    return flows;
}

async function findFlowByName(flowName) {
    const allFlows = await getAllFlows();
    const matchingFlow = allFlows.find((flow) => path.basename(flow, '.js').includes(flowName) || 
                                               path.dirname(flow).includes(flowName));
    return matchingFlow ? new URL(matchingFlow, import.meta.url).pathname : null;
}

program.parse(process.argv);
