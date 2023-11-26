//1. Find all animals with type "Bird"

db.animals.find({ "type": 'Bird'});

//2. List of all animals found in Australia

db.animals.find({'found_in_countries': "Australia"});

//3. List of all animals with conservation status "Critically Endangered"

db.animals.find({'conservation_status': "Critically Endangered"});

//4. Select animals herbivores and habitat "forest"

db.animals.find({'diet': "Herbivore", 'habitat': "Forest"});

//5. All animals with weight grater than 400 kg

db.animals.find({"physical_characteristics.weight": {"$gt": "400"}});

//6. Find all animals with height grater than 1 m

db.animals.find({"physical_characteristics.height": {"$gt": "1"}});

//7. List of all animals found in China

db.animals.find({'found_in_countries': "China"});

//8. Find animals with an "omnivorous" diet and "endangered"

db.animals.find({"$and": [{ "diet": 'Omnivore'}, {"conservation_status": 'Endangered'}]});

//9. Shows all animals that have "Lion" as a common name

db.animals.find({"common_name": {"$regex": '^Lion'}});

//10. Extracts all entries that are longer than 2 meters

db.animals.find({"physical_characteristics.length": {"$gt": '2'}});

//11. Find all animals that found in Africa

db.animals.find({'found_in_countries': {"$in": ["África"]}});

//12. List all animals whose scientific_name begins with the letter "A"

db.animals.find({'scientific_name': {"$regex": "^A"}});

//13. Find animals that are "Carnivores" and weigh less than 50 kg

db.animals.find({"$and": [{"diet": 'Carnivore'}, {"physical_characteristics.weight": {"$lt": '50'}}]});

//14. Retrieves all animals that have a conservation status of "Vulnerable" and a habitat of "Desert"

db.animals.find({"$and": [{"conservation_status": 'Vulnerable'}, {"habitat": 'Desert'}]});

//15. Find the animals whose common_name contains the word "Tiger"

db.animals.find({'common_name': {"$regex": "Tiger"}});