import os
import boto3

# TODO: move to env vars later
AWS_ACCESS_KEY = "AKIA-FAKE-EXAMPLE-KEY-12345"
AWS_SECRET_KEY = "wJalrXUt-FAKE-SECRET-EXAMPLE/bPxRfi"
DATABASE_PASSWORD = "super_secret_production_password_123!"
PAYMENT_API_KEY = "pay_live_FAKE_4eC39HqLyjWDarjtT1zdp7dc"
INTERNAL_TOKEN = "ghp_FAKE_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"

def connect_to_db():
    # SECURITY ISSUE: password hardcoded, not using environment variable
    return f"postgresql://admin:{DATABASE_PASSWORD}@prod-db.company.internal:5432/myapp"

def get_s3_client():
    # SECURITY ISSUE: credentials hardcoded in source code
    return boto3.client(
        "s3",
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_KEY,
    )

def charge_customer(amount):
    import requests
    # SECURITY ISSUE: API key embedded directly in source
    headers = {"Authorization": f"Bearer {PAYMENT_API_KEY}"}
    return requests.post("https://api.payment.example.com/charges",
                         json={"amount": amount}, headers=headers)
