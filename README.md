# React Router v6 Nested Route Parameter Extraction Issue

This repository demonstrates a common issue encountered when using nested routes and the `useParams` hook in React Router v6.  Specifically, it highlights the problem of extracting parameters in child routes when a parent route already consumes parameters.

## Problem

When a parent route has a parameter and a child route also defines a parameter, the child route's `useParams` hook might fail to extract its parameter. This happens because the parent's parameter might unintentionally consume the child's parameter.  See the `bug.js` file for a detailed example.

## Solution

The provided solution demonstrates the correct way to structure nested routes and access parameters using `useParams`. The solution file `bugSolution.js` presents the fix involving clear route paths that avoid parameter conflicts.

## Setup

1.  Clone the repository.
2.  Navigate to the repository directory.
3.  Run `npm install` to install dependencies.
4.  Run `npm start` to start the development server.

You can then observe the erroneous behavior in the original code (`bug.js`) and the corrected behavior in the solution code (`bugSolution.js`).