//
//  main.m
//  sdk-output
//
//  Created by joeks on 2/7/15.
//  Copyright (c) 2015 js. All rights reserved.
//

#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
//        NSLog(@"Hello, World!");
        printf("\n\
        {  \n\
              \"hello\": \"hi\", \n\
              \"obj\": {  \n\
                  \"thing\": [1, 2, 3, 4], \n\
                  \"otherThing\": {}  \n\
              }    \n\
        }    \n\
              ");
    }
    return 0;
}
