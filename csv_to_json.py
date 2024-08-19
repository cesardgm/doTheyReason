import csv
import json
import sys

def csv_to_json(csv_filepath, json_filepath):
    # Open the CSV file
    with open(csv_filepath, mode='r', newline='', encoding='utf-8') as file:
        # Read the CSV data
        csv_reader = csv.DictReader(file)
        # Convert to list of dictionaries
        data = list(csv_reader)

    # Open the JSON file and write the data
    with open(json_filepath, mode='w', encoding='utf-8') as file:
        json.dump(data, file, indent=4)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python csv_to_json.py <csv_file>")
        sys.exit(1)
    
    csv_file = sys.argv[1]
    json_file = 'output.json'  # You can modify this path if needed
    csv_to_json(csv_file, json_file)
    print("Conversion complete. JSON saved to output.json")
