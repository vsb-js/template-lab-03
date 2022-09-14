#! /bin/bash
node task-read.js > read_output.txt
cmp __tests__/read_output.txt read_output.txt