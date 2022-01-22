#include <napi.h>
#include <string>
#include "greeting.h"

// Native C++ function that is assigned to 'greetHello' property on exports object
Napi::String greetHello(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    // Call 'helloUser' from 'greeting.cpp' file
    std::string result = helloUser("Mike");

    return Napi::String::New(env, result);
}

//Callback method when module is registered
Napi::Object Init(Napi::Env env, Napi::Object exports) {

    // Set key on exports object
    exports.Set(Napi::String::New(env, "greetHello"), Napi::Function::New(env, greetHello));

    return exports;
}

NODE_API_MODULE(greet, Init);