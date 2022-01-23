#include <napi.h>
#include <string>
#include "modules.h"

using namespace Napi;

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

//Callback method when module is registered
Object Init(Env env, Object exports) {

    // Set key on exports object
    exports.Set(String::New(env, "Greeting"), Function::New(env, greeting));
    exports.Set(String::New(env, "PrintDouble"), Function::New(env, printNumber));
    return exports;
}

NODE_API_MODULE(dll, Init);