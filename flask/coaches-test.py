import unittest
import json
from app import app, nba_coaches

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
    unittest.main()