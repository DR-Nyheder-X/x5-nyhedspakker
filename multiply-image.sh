#!/bin/bash

# usage:
#   $ multiply-image.sh IMAGE.JPG

in="$1"
out=`basename $in`-result.jpg

convert "$in" \
  -grayscale rec709luma \
  \( -clone 0 -fill red -draw "color 0,0 reset" \) \
  -compose multiply \
  -composite \
  -quality 100% \
  "$out"
