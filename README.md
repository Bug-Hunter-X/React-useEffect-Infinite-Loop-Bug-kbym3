# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook.  The `useEffect` hook is used to perform side effects, but without a proper cleanup function, it can lead to an infinite loop and significant performance problems.

## Bug Description

The `bug.js` file contains a React component that uses `useEffect` to increment a counter every 100 milliseconds. However, it lacks a cleanup function to stop the `setInterval` when the component unmounts. This results in the `setInterval` continuing to run indefinitely, causing the component to re-render constantly. 

## Solution

The `bugSolution.js` file provides a corrected version of the component. The solution includes a cleanup function that uses `clearInterval` to stop the interval when the component unmounts, preventing the infinite loop.