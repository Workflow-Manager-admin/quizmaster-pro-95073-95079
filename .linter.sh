#!/bin/bash
cd /home/kavia/workspace/code-generation/quizmaster-pro-95073-95079/quizmaster_pro
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

