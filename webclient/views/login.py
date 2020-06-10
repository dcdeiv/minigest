import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import View

from django.contrib.auth import authenticate, login

from django.utils.decorators import method_decorator


class LoginView(View):
    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        user = request.user

        # AUTH context
        auth = {
            "user": False,
            "status": {
                "error": True,
                "message": "Accedi per visualizzare questa pagina!",
            },
        }

        if user.is_authenticated:
            auth = {
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "is_staff": user.is_staff,
                },
                "status": {
                    "error": True,
                    "message": "Il tuo account non può accedere a questa pagina!",
                },
            }

        return render(
            request,
            "webclient/index.html",
            context={
                "user": json.dumps(auth["user"]),
                "status": json.dumps(auth["status"]),
            },
        )

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        email = data["email"]
        password = data["password"]
        user = authenticate(request, email=email, password=password)

        if user is None:
            auth = {
                "user": False,
                "status": {"error": True, "message": "Credenziali non valide!"},
            }
            status_code = 401
        else:
            login(request, user)
            auth = {
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "is_staff": user.is_staff,
                },
                "status": {"error": False, "message": None},
            }
            status_code = 200

        return JsonResponse(
            {"user": auth["user"], "status": auth["status"]}, status=status_code
        )
