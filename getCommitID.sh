#!/bin/sh
SHORT_COMMIT_ID=$(git rev-parse --short HEAD)
REPO_URL=$(git config --get remote.origin.url)
REPO_NAME=$(basename -s .git "$REPO_URL")
REPO_OWNER=$(basename $(dirname "$REPO_URL"))
COMMIT_URL="https://github.com/$REPO_OWNER/$REPO_NAME/commit/$SHORT_COMMIT_ID"

echo "VITE_COMMIT_ID=$SHORT_COMMIT_ID" > .env
echo "VITE_COMMIT_URL=$COMMIT_URL" >> .env