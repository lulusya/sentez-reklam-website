from livereload import Server
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

server = Server()
# İzlenecek dosyalar
server.watch(os.path.join(ROOT, '*.html'))
server.watch(os.path.join(ROOT, '**/*.html'))
server.watch(os.path.join(ROOT, 'css/*.css'))
server.watch(os.path.join(ROOT, 'js/*.js'))
server.watch(os.path.join(ROOT, 'assets/**/*.*'))

# 5501 portundan servis et (5500 halihazırda http.server tarafından kullanılabilir)
server.serve(root=ROOT, port=5501, liveport=35729, host='127.0.0.1', restart_delay=0.2, open_url_delay=0.5)