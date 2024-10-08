#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <seedCore|seedUSN>"
    exit 1
fi

# Set the command based on the argument
COMMAND=$1

# Run the corresponding seeder based on the input
if [ "$COMMAND" == "seedCore" ]; then
    echo "Seeding core data..."
    node ./seed/coreDataSeeder.js
elif [ "$COMMAND" == "seedUSN" ]; then
    echo "Seeding USN data..."
    node ./seed/usnSeeder.js
else
    echo "Invalid command. Use seedCore or seedUSN."
    exit 1
fi
