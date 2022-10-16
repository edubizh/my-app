import os


import os
from dotenv import load_dotenv
load_dotenv()

PRVIATE_KEY = os.getenv('SECRET')

print(PRVIATE_KEY)
