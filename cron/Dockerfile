FROM node:10.19.0-slim

RUN apt-get update && apt-get -y install -qq --force-yes cron

# Copy app-cron file to the cron.d directory
COPY app-cron /etc/cron.d/app-cron

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/app-cron

# Apply cron job
RUN crontab /etc/cron.d/app-cron

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# Run the command on container startup
CMD ["cron", "-f"]
