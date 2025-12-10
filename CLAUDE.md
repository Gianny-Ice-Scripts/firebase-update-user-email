# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Node.js utility script for updating Firebase user emails using the Firebase Admin SDK.

## Commands

```bash
# Install dependencies
npm install

# Run the script
node updateUserEmail.js
```

## Setup

Requires a `serviceKey.json` file in the project root containing Firebase Admin SDK credentials (check LastPass for the key). This file is gitignored.

## Usage

Edit `updateUserEmail.js` to set:
1. `uid` - The Firebase user ID to update
2. The new email address passed to `updateUserEmail()`
