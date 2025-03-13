# Just configuration file for running commands.
#
# For more information, visit https://just.systems.

set script-interpreter := ["nu"]
set shell := ["nu", "--commands"]
set unstable := true
set windows-shell := ["nu", "--commands"]
export PATH := if os() == "windows" {
  env_var("LocalAppData") / "Deno;" + env_var("LocalAppData") / "Nushell;" 
  + env_var("Path")
} else {
  home_dir() / ".local/bin:" + env_var("PATH")
}

# List all commands available in justfile.
list:
  just --list

all: setup format build

# Build website.
build:
  deno run --allow-all npm:vitepress build .

# Launch website in developer mode.
dev *flags:
  deno run --allow-all npm:vitepress dev . {{flags}}

# Check code formatting.
format:
  deno run --allow-all npm:prettier --check .

# Run code analyses.
lint:
  deno lint .

# Serve built website.
serve *flags: build
  deno run --allow-all npm:vitepress serve . {{flags}}

# Install development dependencies.
[script]
setup: _setup-nushell
  if (which deno | is-empty) {
    let arch = $nu.os-info | get arch
    let os = $nu.os-info | get name
    let target = match $os {
      "linux" => $"($arch)-unknown-linux-gnu"
      "macos" => $"($arch)-apple-darwin"
      "windows" => $"($arch)-pc-windows-msvc"
    }
    let bin_name = if $os == "windows" { "deno.exe" } else { "deno" }
    let dst_dir = if $os == "windows" {
      $"($env.LocalAppdata)/Deno"
    } else {
      $"($env.HOME)/.local/bin"
    }
    mkdir $dst_dir
    let tmp_dir = mktemp --directory
    http get $"https://github.com/denoland/deno/releases/latest/download/deno-($target).zip"
    | save $"($tmp_dir)/deno.zip"
    unzip -d $tmp_dir $"($tmp_dir)/deno.zip"
    mv $"($tmp_dir)/($bin_name)" $"($dst_dir)/($bin_name)" 
  }
  deno --version
  deno install --frozen

[unix]
_setup-nushell:
  #!/usr/bin/env sh
  set -eu
  if [ ! -x "$(command -v nu)" ]; then
    curl -LSfs \
      https://raw.githubusercontent.com/scruffaluff/shell-scripts/main/scripts/install-nushell.sh |
      sh -s -- --user
  fi
  echo "Nushell $(nu --version)"

[windows]
_setup-nushell:
  #!powershell.exe
  $ErrorActionPreference = 'Stop'
  $ProgressPreference = 'SilentlyContinue'
  $PSNativeCommandUseErrorActionPreference = $True
  If (-Not (Get-Command -ErrorAction SilentlyContinue nu)) {
    powershell { 
      iex "& { $(iwr -useb https://raw.githubusercontent.com/scruffaluff/shell-scripts/main/scripts/install-nushell.ps1) } --user"
    }
  }
  Write-Output "Nushell $(nu --version)"

