@echo off
title Fandom Clone Server
echo.
echo  ==========================================
echo   FANDOM CLONE - Starting Server...
echo  ==========================================
echo.
echo  Opening browser at: http://localhost:5500
echo  Press Ctrl+C to stop the server
echo.

:: Kill any existing server on port 5500
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":5500" 2^>nul') do taskkill /F /PID %%a >nul 2>&1

:: Open browser after 2 seconds
start /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:5500"

:: Start the Python server
python -m http.server 5500

pause
