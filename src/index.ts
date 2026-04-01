#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import path from 'path';
import os from 'os';
import fs from 'fs-extra';

const program = new Command();

program
  .name('antigravity-flow')
  .description('Management and installation tool for the Antigravity Skills ecosystem')
  .version('1.0.0');

program
  .command('init')
  .description('Install all Antigravity skills to the current machine')
  .option('-l, --local', 'Install to the current local directory (./.agent/skills) for Antigravity IDE')
  .action(async (options) => {
    console.log(chalk.cyan('🚀 Initializing Antigravity Flow...'));

    // Determine destination
    const targetDir = options.local
      ? path.join(process.cwd(), '.agent', 'skills')
      : path.join(os.homedir(), '.gemini', 'antigravity', 'skills');

    // Determine source
    const sourceDir = path.join(__dirname, '..', 'skills');

    if (!fs.existsSync(sourceDir)) {
      console.error(chalk.red(`❌ Source skills directory not found at ${sourceDir}`));
      process.exit(1);
    }

    try {
      console.log(chalk.blue(`📂 Copying skills to: ${targetDir}`));

      // Ensure target exists
      await fs.ensureDir(targetDir);

      // Copy files
      await fs.copy(sourceDir, targetDir, { overwrite: true });

      console.log(chalk.green('✅ Done! DNA Injection successful.'));
      console.log(chalk.yellow(`You can now use thousands of Antigravity skills!`));

    } catch (err) {
      console.error(chalk.red('❌ An error occurred during the copy process:'), err);
      process.exit(1);
    }
  });

program.parse();
