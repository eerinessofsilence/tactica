from django.conf import settings
from django.http import HttpResponse


class SimpleCorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        origin = request.headers.get('Origin')
        is_preflight = request.method == 'OPTIONS'

        if is_preflight:
            response = HttpResponse(status=204)
        else:
            response = self.get_response(request)

        if not origin or origin not in settings.CORS_ALLOWED_ORIGINS:
            return response

        response['Access-Control-Allow-Origin'] = origin
        response['Vary'] = 'Origin'
        response['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = (
            'Content-Type, Authorization, X-Requested-With'
        )

        if settings.CORS_ALLOW_CREDENTIALS:
            response['Access-Control-Allow-Credentials'] = 'true'

        return response
