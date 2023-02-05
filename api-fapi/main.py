from fastapi import FastAPI
from data import *
from fastapi.middleware.cors import CORSMiddleware


# In order to run app run "uvicorn main:app --reload" in the terminal
app = FastAPI()
origins = ["http://localhost:3000","localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/')
def home():
    return {'hello':'world'}

@app.get("/{value}/{amount}")
def index(value,amount):
    if value == 'goals':
        return goal_arr[:int(amount)]
    else:
        return assist_arr[:int(amount)]


