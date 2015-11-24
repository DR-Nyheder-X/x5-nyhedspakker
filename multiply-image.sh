#!/bin/bash

if [ ! $(which convert) ]; then
  echo "ImageMagick is required"
  echo "  $ brew install imagemagick"
  exit 1
fi

if [ "$#" -ne 4 ]; then
  echo "usage: multiply-image.sh IMAGE FROM_COLOR TO_COLOR OUTPUT"
  exit 1
fi

in="$1"
overlay_color="$2"
gradient_color="$3"
out="$4"

# Get the size of the input image
size=$(identify -format '%wx%h' "$in")

# Create a temporary image with just the gradient
gradient=tmp-gradient.png

convert -size "$size" \
  gradient:$gradient_color-$overlay_color \
  "$gradient"

# Multiply the gradient on top of the input image
composite \
  -gravity center \
  -compose multiply \
  "$gradient" "$in" "$out"

# Remove temporary gradient image
rm "$gradient"
