from django.urls import re_path

from .consumers import ChatConsumer

websocket_urlpatterns = [
    re_path(r'^ws/chat/(?P<room_name>[^/]+)/$',ChatConsumer),
]

from channels.routing import ProtocolTypeRouter

application = ProtocolTypeRouter({
    # (http->django views is added by default)
})