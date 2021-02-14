# Jest Performance Test Logger

A small custom reporter to optimize the worker count on your laptop, computer, containers, or servers. 
Log simple stats to a `log.csv` file in the root of the repo that is using the custom reporter.
I thought logging to a csv file would be useful, if user wanted to keep info beyond the command line output, for analysis in a spreadsheet program.

Stats recorded: total tests, total suites, total time in seconds, max workers for the run 

## Installing
1. install custom reporter to your repo that you want to benchmark test duration 
`npm i --save-dev jest-reporter-perf-stats`

2. add custom reporters to your `jest.config.js` 
```
module.exports = {
  ...
  reporters: ['default', '<rootDir>node_modules/jest-reporter-perf-stats/build/index.js'],
  ...
};
```
See https://jestjs.io/docs/en/configuration#reporters-arraymodulename--modulename-options for more background on adding custom jest reporters.

3. run the performance benchmark with the included script `node_modules/jest-reporter-perf-stats/scripts/perf.sh`.
Usage: `node_modules/jest-reporter-perf-stats/scripts/perf.sh <maxWorkers> <number of iterations>`
Example: `node_modules/jest-reporter-perf-stats/scripts/perf.sh 23 3` to run up to 23 max workers in the benchmark, each maxWorker test run will be done 3 times.

## Contributing
PRs welcome!  Would be curious to know how to alias the reporter with just a name, similiar to other reporters like `jest-stare` or `default`.
