#!/bin/bash

# Requires https://www.google.com/settings/security/lesssecureapps for gmail.


MAIL_SERVER="imap.gmail.com:993"
MAIL_USER="denizsydgl@gmail.com"
MAIL_PASSWORD=""
MAIL_FOLDER="INBOX"

MAIN_DOMAIN=$(expr match "${MAIL_SERVER}" '.*\.\(.*\..*\)' | awk -F ':' '{print $1}')

# Add https so xdg knows that it's a website
if [[ "${MAIN_DOMAIN}" != http* ]]; then
  MAIN_DOMAIN="https://${MAIN_DOMAIN}"
fi

# Left click
if [[ "${BLOCK_BUTTON}" -eq 1 ]]; then
  xdg-open "${MAIN_DOMAIN}"
fi

MAIL_FILE="/tmp/.mail"
URGENT_VALUE="1000000"

GET_UNREAD=$(cat<<EOF
? LOGIN "${MAIL_USER}" "${MAIL_PASSWORD}"
? STATUS "${MAIL_FOLDER}" (unseen)
? LOGOUT
EOF
)

echo "${GET_UNREAD}" | openssl s_client -connect "${MAIL_SERVER}" -crlf -ign_eof > "${MAIL_FILE}" 2>/dev/null 
UNREAD_COUNT=$(cat "${MAIL_FILE}" | grep -i "UNSEEN" | grep -oE "[0-9]*" | head -n 1)

# For security reasons
rm "${MAIL_FILE}"

if [[ "${UNREAD_COUNT}" = "" ]]; then
  exit
fi

echo " ${UNREAD_COUNT}"

if [[ "${UNREAD_COUNT}" -ge URGENT_VALUE ]]; then
  exit 33
fi