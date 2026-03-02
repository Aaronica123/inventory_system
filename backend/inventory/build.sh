#!/usr/bin/env bash
# exit on error
set -o errexit

# Install the production requirements we locked earlier
pip install -r requirements.txt

# Convert CSS/JS for production (WhiteNoise)
python manage.py collectstatic --no-input

# Push your Veneva Supermarket tables to Supabase
python manage.py migrate