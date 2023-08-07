#!/bin/sh

echo "Migrating the database..."
npm run db:up

echo "Starting the server..."
npm start
