mod-timer
=========

Find the total run time for a module with specified conditions and inputs. Use to compare the performance of different algorithms.

## Useage

+ Add the timer file to the top level of the module directory. 
+ Edit the file to set the required input array size, array contents and number of trials to run.
+ To run, 
```bash
node compute-test.js 
```

Time taken will print to the terminal.

## Requirements

Both timers require:
+ [Node.js](http://nodejs.org/)
+ [seedrandom](https://www.npmjs.org/package/seedrandom)

stream-test.js also requires:
+ [event-stream](https://www.npmjs.org/package/event-stream)
