#!/bin/bash

cpu_count=$1
run_count=$2
for (( i = 1; i <= $cpu_count; i++ ));
do 
for ((j =1; j <= $run_count; j++));
do
       echo "run tests with maxWorker set to $i and run iteration $j"
       eval "jest --maxWorkers=${i}"
done;
done;