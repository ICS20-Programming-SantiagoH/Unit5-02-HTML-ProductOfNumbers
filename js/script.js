// Copyright (c) 2023 Santiago All rights reserved
//
// Created by: Santiago Hewett
// Created on: May 2023
// This file contains the JS functions for index.html
"use strict";

function enterClicked () {
  //message for the user
  let message = ""
  // Use first and second number user has entered for results
  let firstNumber = parseInt(document.getElementById('firstNumber').value);
  
  let secondNumber = parseInt(document.getElementById('secondNumber').value);

  //initialize sum

  let product = 0;

  //loop for when second number is positive
  for (let counter = 0; counter < secondNumber; counter++){
    product = product + firstNumber;
  }

  //loop for when second number is negative
  for (let counter = 0; counter > secondNumber; counter--){
    product = product - firstNumber;
  }

  //loop for when second number is 0
  for (let counter = 0; counter == secondNumber; counter++){
    product = product;
  }
  message = message + firstNumber + " x " + secondNumber + " = " + product;
  
  // Display Results back to User
  document.getElementById("result").innerHTML = message
}