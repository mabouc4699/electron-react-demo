#include <iostream>
#include <string>
#include "modules.h"
#include <stdlib.h>

std::string greetUser( std::string name ) {
  return "Hello " + name + "!";
}

int printNum(int num) {
  return num;
}

int printUserInputNum() {
  std::cout << "Please enter a digit you would like logged to the console: " << std::endl;
  int num;
  std::cin >> num;
  return num;
}