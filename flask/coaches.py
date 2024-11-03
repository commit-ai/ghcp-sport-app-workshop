from flask import Flask, jsonify, request, abort
import unittest
import json

app = Flask(__name__)

# Sample data for NBA coaches
nba_coaches = [
    {
        "id": 1,
        "name": "Steve Kerr",
        "age": 57,
        "team": "Golden State Warriors",
        "history": [
            {"year": 2015, "achievement": "NBA Champion"},
            {"year": 2017, "achievement": "NBA Champion"},
            {"year": 2018, "achievement": "NBA Champion"}
        ]
    },
    {
        "id": 2,
        "name": "Erik Spoelstra",
        "age": 53,
        "team": "Miami Heat",
        "history": [
            {"year": 2012, "achievement": "NBA Champion"},
            {"year": 2013, "achievement": "NBA Champion"}
        ]
    },
    {
        "id": 3,
        "name": "Doc Rivers",
        "age": 62,
        "team": "Philadelphia 76ers",
        "history": [
            {"year": 2008, "achievement": "NBA Champion (with Boston Celtics)"}
        ]
    }
]

# Helper function to find a coach by ID
def find_coach(coach_id):
    return next((coach for coach in nba_coaches if coach["id"] == coach_id), None)

# Get all coaches
@app.route('/api/coaches', methods=['GET'])
def get_coaches():
    return jsonify(nba_coaches)

# Get a specific coach by ID
@app.route('/api/coaches/<int:coach_id>', methods=['GET'])
def get_coach(coach_id):
    coach = find_coach(coach_id)
    if coach is None:
        abort(404, description="Coach not found")
    return jsonify(coach)

# Create a new coach
@app.route('/api/coaches', methods=['POST'])
def create_coach():
    if not request.json or not "name" in request.json:
        abort(400, description="Name is required")

    new_coach = {
        "id": nba_coaches[-1]["id"] + 1 if nba_coaches else 1,
        "name": request.json.get("name"),
        "age": request.json.get("age"),
        "team": request.json.get("team"),
        "history": request.json.get("history", [])
    }
    nba_coaches.append(new_coach)
    return jsonify(new_coach), 201

# Update an existing coach
@app.route('/api/coaches/<int:coach_id>', methods=['PUT'])
def update_coach(coach_id):
    coach = find_coach(coach_id)
    if coach is None:
        abort(404, description="Coach not found")
    if not request.json:
        abort(400, description="Invalid data")

    coach["name"] = request.json.get("name", coach["name"])
    coach["age"] = request.json.get("age", coach["age"])
    coach["team"] = request.json.get("team", coach["team"])
    coach["history"] = request.json.get("history", coach["history"])
    return jsonify(coach)

# Delete a coach
@app.route('/api/coaches/<int:coach_id>', methods=['DELETE'])
def delete_coach(coach_id):
    coach = find_coach(coach_id)
    if coach is None:
        abort(404, description="Coach not found")
    nba_coaches.remove(coach)
    return jsonify({"result": True})


class CoachesAPITestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        # Add a sample coach to the list
        self.coach = {
            "id": 1,
            "name": "John Doe",
            "age": 50,
            "team": "Lakers",
            "history": "Former assistant coach"
        }
        nba_coaches.append(self.coach)

    def tearDown(self):
        # Clear the coaches list after each test
        nba_coaches.clear()

    # Test updating a coach successfully
    def test_update_coach_success(self):
        update_data = {
            "name": "Jane Smith",
            "age": 55
        }
        response = self.app.put(
            f"/api/coaches/{self.coach['id']}",
            data=json.dumps(update_data),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        updated_coach = json.loads(response.data)
        self.assertEqual(updated_coach["name"], "Jane Smith")
        self.assertEqual(updated_coach["age"], 55)

    # Test updating a non-existent coach
    def test_update_coach_not_found(self):
        update_data = {
            "name": "Jane Smith",
            "age": 55
        }
        response = self.app.put(
            "/api/coaches/999",
            data=json.dumps(update_data),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 404)

    # Test updating a coach with invalid data
    def test_update_coach_invalid_data(self):
        response = self.app.put(
            f"/api/coaches/{self.coach['id']}",
            data="",
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 400)

    # Test deleting a coach successfully
    def test_delete_coach_success(self):
        response = self.app.delete(f"/api/coaches/{self.coach['id']}")
        self.assertEqual(response.status_code, 200)
        result = json.loads(response.data)
        self.assertTrue(result["result"])

    # Test deleting a non-existent coach
    def test_delete_coach_not_found(self):
        response = self.app.delete("/api/coaches/999")
        self.assertEqual(response.status_code, 404)

if __name__ == '__main__':
    # unittest.main()
    app.run(debug=True, host='0.0.0.0', port=8080)
