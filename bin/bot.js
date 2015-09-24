#!/usr/bin/env node

'use strict';

const path = require('path');

const shell = require('shelljs');

const gulp = path.join(__dirname, '..', 'node_modules', '.bin', 'gulp');
const gulpfile = path.join(process.cwd(), 'roboter.js');

const args = process.argv.slice(2).join(' ');

/* eslint-disable no-process-exit */
if (args.length === 0) {
  const result = shell.exec(`${gulp} --gulpfile ${gulpfile} --color true --tasks-simple`, { silent: true });

  const tasks = result.output.split('\n').filter(task => task && !task.startsWith('_')).join('\n');

  /* eslint-disable no-console */
  console.log(tasks);
  /* eslint-enable no-console */

  process.exit(0);
}

process.exit(shell.exec(`${gulp} --gulpfile ${gulpfile} --color true ${args}`).code);
/* eslint-enable no-process-exit */
