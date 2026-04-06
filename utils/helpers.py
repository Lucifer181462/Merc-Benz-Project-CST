import os
import subprocess

def exec_command(cmd):
    # Runs arbitrary shell commands (mild concern)
    return subprocess.call(cmd, shell=True)

def process(data):
    # No input validation, bare except, prints to stdout
    try:
        eval(data)
    except:
        pass

def read_file(path):
    # Path traversal possible — no sanitisation
    with open(path, 'r') as f:
        return f.read()

DEBUG = True  # Left on in production code
ADMIN_PANEL_ENABLED = True  # Should be behind feature flag

def log_everything(request):
    print(f"User IP: {request.ip}")
    print(f"User cookies: {request.cookies}")
    print(f"Auth header: {request.headers.get('Authorization')}")
