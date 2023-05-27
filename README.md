### Correr API de Python

1. Development
   source envDev/bin/activate
   python 3 server.py

2. Production (using gunicorn)
   pip install gunicorn
   gunicorn server:app --bind 0.0.0.0:443 --certfile /home/ftpuser/ftp_dir/backend/fullchain.pem --keyfile /home/ftpuser/ftp_dir/backend/api.tecnoartesanos.com.key

### Crear Certificado para el API de Python

1. Crear el certificado con Acme.sh
   acme.sh --issue --dns -d api.domain.com --yes-I-know-dns-manual-mode-enough-go-ahead-please
   acme.sh --toPkcs -d api.domain.com

1. Convertirlo a PEM para su uso por Flask.

   openssl x509 -inform der -in fullchain.cer -out fullchain.pem

   **usé este**
   openssl pkcs12 -in your_certificate.pfx -out fullchain.pem -nodes

1. Crear la unidad de servicio
   sudo nano /etc/systemd/system/gunicorn.service

1. Contenido unidad de servicio.

[Unit]
Description=Gunicorn service
After=network.target

[Service]
User=ec2-user
WorkingDirectory=/path/to/your/project
ExecStart=/usr/local/bin/gunicorn server:app --bind 0.0.0.0:443 --certfile /path/to/certificate.crt --keyfile /path/to/privatekey.key

[Install]
WantedBy=multi-user.target

3. Administrar Unidad de Servicio
   sudo systemctl daemon-reload
   sudo systemctl start gunicorn
   sudo systemctl status gunicorn
