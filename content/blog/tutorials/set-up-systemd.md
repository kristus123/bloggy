# daily-habit-helper

## Set up systemd

`sudo nano /etc/systemd/system/daily-habit-helper.service`

```
[Unit]
Description=3g-v2 webhook
After=multi-user.target
[Service]
User=kristian
Type=simple
Restart=always
RestartSec=30
ExecStart=webhook --hooks /home/kristian/3g-v2/webhooks.json -hotreload -verbose
[Install]
WantedBy=multi-user.target
```

```
sudo systemctl enable daily-habit-helper.service
sudo systemctl start daily-habit-helper.service
```


## read logs

**NB!** You need to use `print("msg", flush=True)`

```sh
sudo journalctl -u daily-habit-helper.service
```
