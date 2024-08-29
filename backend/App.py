from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

orig_redirects = [
    "http://localhost:8100",  # Replace with your frontend origin
    "http://127.0.0.1:8100",  # Replace with your frontend origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=orig_redirects,
    allow_credentials=True,
    allow_methods=["*"],  # Or specify allowed methods e.g., ["GET", "POST"]
    allow_headers=["*"],  # Or specify allowed headers e.g., ["Content-Type", "Authorization"]
)

class User(BaseModel):
    username: str  
    password: str

users_db = {
    "student@example.com":{"password":"studentpass","role":"student"},
    "faculty@example.com":{"password":"facultypass","role":"faculty"},
    "admin@example.com":{"password":"adminpass","role":"admin"},
}

@app.post("/login")
async def login(user: User):
    print(user)
    if user.username in users_db and users_db[user.username]["password"]==user.password:
        return {"username": user.username, "role":users_db[user.username]["role"]}
    raise HTTPException(status_code=400, detail="invalid username or password")