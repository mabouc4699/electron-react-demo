#include <napi.h>
#include <string>
#include "modules.h"

using namespace Napi;

/*
    greeting and printNumber are Napi functions used to wrap the c++ functions (greetUser and printNum - in this example)
    Env = The opaque data structure containing the environment in which the request is being run.
        The Env object is usually created and passed by the Node.js runtime or node-addon-api infrastructure.
    Number class is a representation of the JavaScript Number object
    Init function creates the key value pairs ("Greeting", greeting function) that are then located in the DLL.node 
*/

// Native C++ function that is assigned to 'greetHello' property on exports object
String greeting(const CallbackInfo& info) {
    Env env = info.Env();

    // Call 'helloUser' from 'greeting.cpp' file
    std::string result = greetUser("Mike");

    return String::New(env, result);
}

Number printNumber(const CallbackInfo& info) {
    Env env = info.Env();

    Number num = Number::New(env, printNum(8.4));

    return Number::New(env, num);
}

Number printUserInput(const CallbackInfo& info) {
    Env env = info.Env();

    Number num = Number::New(env, printUserInputNum());

    return Number::New(env, num);
}

//Callback method when module is registered
Object Init(Env env, Object exports) {

    // Set key on exports object
    exports.Set(String::New(env, "Greeting"), Function::New(env, greeting));
    exports.Set(String::New(env, "PrintDouble"), Function::New(env, printNumber));
    exports.Set(String::New(env, "UserInput"), Function::New(env, printUserInput));
    return exports;
}

NODE_API_MODULE(dll, Init);