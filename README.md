# Jest Performance Test Logger

A small custom reporter to optimize the worker count on your laptop, computer, containers, or servers. 
Log simple stats to a `log.csv` file in the root of the repo that is using the custom reporter.
I thought logging to a csv file would be useful, if user wanted to keep info beyond the command line output, for analysis in a spreadsheet program.

Stats recorded: total tests, total suites, total time in seconds, max workers for the run 

## Installing & Usage with Jest
1. Install: `npm i --save-dev jest-reporter-perf-stats`  

2. add the custom reporter to your `jest.config.js` 
```
module.exports = {
  ...
  reporters: ['default', 'jest-reporter-perf-stats'],
  ...
};
```

3. Run the performance benchmark with the included script:  
`./node_modules/jest-reporter-perf-stats/perf.sh <maxWorkers> <number of iterations>`  

Example: `./node_modules/jest-reporter-perf-stats/perf.sh 23 3`  

4. View the results in log.csv, logging the following attributes: 
- total tests
- total suites
- test run duration in seconds
- number of workers  
  
![Image of log.csv File Output](https://github.com/tophercf/jest-reporter-perf-stats/blob/main/img/log_csv.PNG)

## Contributing
PRs welcome! 

Sanity check that reporter works:
1. Clone repo and install dependencies `npm i`  
2. Run `npm run test_one_worker`  
3. Ensure log.csv outputs correctly and CLI outputs something akin to:  

![Image of log.csv File Output](https://github.com/tophercf/jest-reporter-perf-stats/blob/main/img/log_csv.PNG)

```
Test Suites: 1 failed, 1 passed, 2 total
Tests:       2 failed, 2 skipped, 1 todo, 3 passed, 8 total
Snapshots:   0 total
Time:        0.815 s, estimated 1 s
Ran all test suites.
---------------
total time for run is 0.818 seconds for 1 maxWorkers.
Total tests: 8 Total suites: 2.
---------------
```