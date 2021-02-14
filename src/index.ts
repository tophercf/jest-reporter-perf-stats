import { Reporter, Context, AggregatedResult, Test, TestResult, ReporterOnStartOptions } from '@jest/reporters';
import { AssertionResult } from '@jest/types/build/TestResult';
import {Config} from '@jest/types';
import * as fs from 'fs';
import minimist from 'minimist';
const WORKER_COUNT = minimist(process.argv.slice(2))["maxWorkers"];

class JestTestReporter implements Reporter {
  _globalConfig: Config.GlobalConfig
  _options: any
  workers: any

    /**
     * constructor for the reporter
     *
     * @param {Object} globalConfig - Jest configuration object
     * @param {Object} options - Options object defined in jest config
     */
    constructor(globalConfig: Config.GlobalConfig, options: any) {

      this._globalConfig = globalConfig
      this._options = options
    }
  onTestResult?: (test: Test, testResult: TestResult, aggregatedResult: AggregatedResult) => void | Promise<void>;
  onTestFileResult?: (test: Test, testResult: TestResult, aggregatedResult: AggregatedResult) => void | Promise<void>;
  onTestCaseResult?: (test: Test, testCaseResult: AssertionResult) => void | Promise<void>;
  onRunStart: (results: AggregatedResult, options: ReporterOnStartOptions) => void | Promise<void>;
  onTestStart?: (test: Test) => void | Promise<void>;
  onTestFileStart?: (test: Test) => void | Promise<void>;
  getLastError: () => void | Error;
    /**
     * Hook to process the test run results after all the test suites have been
     * executed
     *
     * @param {string} test - The Test last run
     * @param {JestTestRunResult} - Results from the test run
     */
    async onRunComplete(contexts: Set<Context>, results: AggregatedResult) {
      const time = (Date.now() - results.startTime) / 1000;

      console.log(`---------------\ntotal time for run is ${time} seconds for ${WORKER_COUNT} maxWorkers.\nTotal tests: ${results.numTotalTests} Total suites: ${results.numTotalTestSuites}.\n---------------`)
      fs.writeFile('./log.csv', `${results.numTotalTests},${results.numTotalTestSuites},${time},${WORKER_COUNT}\n`, { flag: 'a+' }, function (err) {
        if (err) throw err;
        console.log("Finished test run");
      });
    }
  }
  
  module.exports = JestTestReporter;