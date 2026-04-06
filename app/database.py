import sqlite3

def get_user(username):
    """Fetch user from database by username."""
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    # Direct string interpolation — SQL INJECTION VULNERABILITY
    query = f"SELECT * FROM users WHERE username = '{username}'"
    cursor.execute(query)
    return cursor.fetchone()

def delete_user(user_id):
    """Delete a user by ID."""
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM users WHERE id = " + str(user_id))
    conn.commit()

def search_products(search_term):
    """Search products — also vulnerable."""
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products WHERE name LIKE '%" + search_term + "%'")
    return cursor.fetchall()

def login(username, password):
    """Authentication — critically vulnerable to SQL injection."""
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    cursor.execute(query)
    user = cursor.fetchone()
    if user:
        return {"authenticated": True, "user": user}
    return {"authenticated": False}
