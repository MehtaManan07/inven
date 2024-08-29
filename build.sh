#!/bin/bash

androidbuild() {
  local build_type=$1
  local should_clean=$2

  # Check if Android directory exists
  if [ ! -d "android" ]; then
    echo "Error: Android directory not found."
    return 1
  fi

  # Change directory to android/
  cd android || return 1

  # If both build type and clean option are not provided, prompt the user
  if [ -z "$build_type" ] && [ -z "$should_clean" ]; then
    echo "Please select a build type:"
    echo "1. debug    : Build debug APK"
    echo "2. release  : Build release APK"
    echo "3. bundle   : Build release bundle"
    read -p "Enter the number corresponding to your choice: " choice

    case $choice in
      1) build_type="debug" ;;
      2) build_type="release" ;;
      3) build_type="bundle" ;;
      *) echo "Invalid choice"; cd ..; return 1 ;;
    esac

    read -p "Do you want to clean the project? (yes/no): " clean_choice

    case $clean_choice in
      yes|y|Y)
        should_clean="clean"
        ;;
      *)
        should_clean="noclean"
        ;;
    esac
  fi

  # Clean the project if specified
  if [ "$should_clean" = "clean" ]; then
    echo "Cleaning project"
    ./gradlew clean || { echo "Failed to clean project"; cd ..; return 1; }
  fi

  # Build based on the selected build type
  if [ "$build_type" = "debug" ]; then
    echo -e "Building debug APK"
    ./gradlew :app:assembleDebug | tee build.log || { echo -e "\e[1;31mFailed to build debug APK\e[0m"; cd ..; return 1; }
  elif [ "$build_type" = "release" ]; then
    echo -e "Building release APK"
    ./gradlew assembleRelease | tee build.log || { echo -e "\e[1;31mFailed to build release APK\e[0m"; cd ..; return 1; }
  elif [ "$build_type" = "bundle" ]; then
    echo -e "Building release bundle"
    ./gradlew bundleRelease | tee build.log || { echo -e "\e[1;31mFailed to build release bundle\e[0m"; cd ..; return 1; }
  else
    echo -e "\e[1;31mInvalid build type\e[0m"
    cd ..
    return 1
  fi

  echo -e "Build completed. Check android/build.log for details."
  cd ..
  #!/bin/bash

  # Upload the file and capture the output
  output=$(gdrive files upload android/app/build/outputs/apk/release/app-release.apk)

  # Extract the URL from the output
  file_url=$(echo "$output" | grep "ViewUrl" | awk '{print $2}')

  # Print the URL
  echo "File URL: $file_url"

  qrencode -t ANSI $file_url

  # Change back to the root directory
}

# Entry point
androidbuild "$1" "$2"
