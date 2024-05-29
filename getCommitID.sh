#!/bin/sh
echo "export VITE_COMMIT_ID=$(git rev-parse HEAD)" > .env