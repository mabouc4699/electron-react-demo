#include <napi.h>
#include <string>
#include "greeting.h"

using namespace Napi;

// Native C++ function that is assigned to 'greetHello' property on exports object
String greetHello(const CallbackInfo& info) {
    Env env = info.Env();

    // Call 'helloUser' from 'greeting.cpp' file
    std::string result = helloUser("Mike");

    return String::New(env, result);
}

//Callback method when module is registered
Object Init(Env env, Object exports) {

    // Set key on exports object
    exports.Set(String::New(env, "greetHello"), Function::New(env, greetHello));

    return exports;
}

NODE_API_MODULE(greet, Init);