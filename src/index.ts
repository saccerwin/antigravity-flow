#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import path from 'path';
import os from 'os';
import fs from 'fs-extra';

const program = new Command();

program
  .name('antigravity-flow')
  .description('Trình quản lý và cài đặt hệ sinh thái Antigravity Skills')
  .version('1.0.0');

program
  .command('init')
  .description('Cài đặt toàn bộ skills của Antigravity vào máy hiện tại')
  .option('-l, --local', 'Cài đặt vào thư mục local hiện tại (./.agent/skills) cho Antigravity IDE')
  .action(async (options) => {
    console.log(chalk.cyan('🚀 Bắt đầu khởi tạo Antigravity Flow...'));

    // Determine destination
    const targetDir = options.local
      ? path.join(process.cwd(), '.agent', 'skills')
      : path.join(os.homedir(), '.gemini', 'antigravity', 'skills');

    // For IDE support, if it is local, we also check if .gemini is preferred, but user explicitly asked for .agent
    // We can also copy to both if we want to be safe, but lets stick to .agent for local as requested.

    // Determine source
    const sourceDir = path.join(__dirname, '..', 'skills');

    if (!fs.existsSync(sourceDir)) {
      console.error(chalk.red(`❌ Không tìm thấy thư mục skills mẫu tại ${sourceDir}`));
      process.exit(1);
    }

    try {
      console.log(chalk.blue(`📂 Đang copy skills đến: ${targetDir}`));

      // Ensure target exists
      await fs.ensureDir(targetDir);

      // Copy files
      await fs.copy(sourceDir, targetDir, { overwrite: true });

      console.log(chalk.green('✅ Hoàn tất! Quá trình DNA Injection thành công.'));
      console.log(chalk.yellow(`Bạn đã có thể sử dụng hàng ngàn kỹ năng Antigravity!`));

    } catch (err) {
      console.error(chalk.red('❌ Đã xảy ra lỗi trong quá trình copy:'), err);
      process.exit(1);
    }
  });

program.parse();
