#!/bin/bash
amixer get Master | awk -F'[]%[]' '/%/ {if ($2 == 0){print "  " 0}else if($2 <=50){print " "$2}else{print " "$2}}' | tail -n 1
