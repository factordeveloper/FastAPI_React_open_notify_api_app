from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/iss-now")
def get_iss_position():
    # Hacemos la petición a la API de la ISS
    response = requests.get("http://api.open-notify.org/iss-now.json")
    if response.status_code == 200:
        data = response.json()
        return {
            "timestamp": data['timestamp'],
            "latitude": data['iss_position']['latitude'],
            "longitude": data['iss_position']['longitude']
        }
    return {"error": "Could not retrieve data"}
