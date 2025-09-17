@echo off
echo Current directory is: %CD%
powershell -Command ". .\.venv\Scripts\Activate.ps1; fastapi dev main.py"
