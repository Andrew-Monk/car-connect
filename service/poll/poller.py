import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import AutomobileVO


def vin_poll():
    response = requests.get('http://project-beta-inventory-api-1:8000/api/automobiles/')
    content = json.loads(response.content)
    for auto in content["autos"]:
        try:
            obj, created = AutomobileVO.objects.update_or_create(
                import_href=auto["href"],
                defaults={
                    "vin": auto["vin"],
                },
            )
            if created:
                print('Created Value Object', obj)
            else:
                print('I updated the Value Object', obj, content)

        except Exception as e:
            print('I got an error!', e)


def poll():
    while True:
        print("Searching for vin data")
        try:
            vin_poll()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
