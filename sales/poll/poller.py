import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO


def vin_poll():
    response = requests.get('http://project-beta-inventory-api-1:8000/api/automobiles/')
    content = json.loads(response.content)
    print(content)
    for automobile in content["autos"]:
        try:
            obj, created = AutomobileVO.objects.update_or_create(
                import_href=automobile["href"],
                defaults={"vin": automobile["vin"]},
            )
            if created:
                print('created the stuff', obj)
            else:
                print('i updated the stuff', obj, content)
        except Exception as e:
            print('i got da error', e)


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
