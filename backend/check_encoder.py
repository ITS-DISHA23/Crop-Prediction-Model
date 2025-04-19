import joblib
import numpy as np
import os

# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Load the encoder
print("Loading encoder...")
encoder_path = os.path.join(script_dir, 'ohe_encoder.pkl')
ohe = joblib.load(encoder_path)

print("\nExact State categories (with lengths):")
for state in ohe.categories_[0]:
    print(f"'{state}' (length: {len(state)})")

print("\nExact Season categories (with lengths):")
for season in ohe.categories_[1]:
    print(f"'{season}' (length: {len(season)})")

print("\nRaw season values (showing any hidden characters):")
for season in ohe.categories_[1]:
    print(f"ASCII values: {[ord(c) for c in season]}")
    print(f"Repr: {repr(season)}") 