@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to build this static gallery.
  exit /b 2
)
node build.mjs
exit /b %errorlevel%
