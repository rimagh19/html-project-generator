#!/usr/bin/env node
import inquirer from 'inquirer';
import Generate from './generateProject.js';
const nameQuestion = {
  type: "input",
  name: "name",
  message: "Enter the name of your project:",
  validate: (input) => {
    if (!input || input.trim() === '') {
      return 'Project name cannot be empty. Please provide a valid name.';
    }
    return true; // Proceed if the input is valid
  }
};
const filesQuestion = {
  type: 'checkbox',
  name: 'files', // Better name: reflects what the question is about
  message: 'Select files to include:', // More descriptive message
  choices: [
    // Add other directory options as needed
    { name: 'index.html', value: 'html' },
    { name: 'style.css', value: 'css' },
    { name: 'script.js', value: 'js' },
  ],
};
const imagesQuestion = {
  type: 'confirm',
  name: 'images', // Better name: reflects what the question is about
  message: 'Do you want an ./images directory?', // More descriptive message
};
const dataQuestion = {
  type: 'confirm',
  name: 'data', // Better name: reflects what the question is about
  message: 'Do you want an ./data directory?', // More descriptive message
};
console.log("Welcome to html project generator!")
inquirer
  .prompt([nameQuestion, filesQuestion, imagesQuestion, dataQuestion])
  .then((answers) => {
    console.log(`- Project: ${answers.name}`);
    console.log(`- Files: ${answers.files}`);
    console.log(`- ./images: ${answers.images}`);
    console.log(`- ./data: ${answers.data}`);
    Generate(answers.name, answers.files, answers.images, answers.data);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });