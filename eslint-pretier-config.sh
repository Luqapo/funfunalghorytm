#!/bin/bash

YELLOW='\033[1;33m'
GREEN='\033[1;32m'
LCYAN='\033[1;36m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Style Formatting Configuration... ${NC}"

echo -e "1/5 ${LCYAN}Local ESLint & Prettier Installation... ${NC}"
npm install -D eslint@5.6.0 prettier

echo -e "2/5 ${YELLOW}Airbnb Configuration Installation... ${NC}"
npm i -D eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-promise

echo -e "3/5 ${LCYAN}Disabling ESLint Formatting... ${NC}"
npm install -D eslint-config-prettier eslint-plugin-prettier

echo -e "4/5 ${YELLOW}Creating ESLint JSON... ${NC}"
touch .eslintrc.json

echo '{
  "env": {
    "node": true
  },
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["promise", "prettier"],
  "rules": {
    "no-console": "error",
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-callback-in-promise": "error",
    "promise/no-return-in-finally": "error",
    "prefer-arrow-callback": "error"
  }
}' >> .eslintrc.json

echo -e "5/5 ${YELLOW}Creating Custom Prettier Config... ${NC}"
touch .prettierrc

echo '{
  "printWidth": 100,
  "singleQuote": true
}' >> .prettierrc

echo -e "${GREEN}Done! ${NC}"
