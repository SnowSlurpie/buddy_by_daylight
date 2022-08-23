const factory = require("./handlerFactory");
const SurvivorPerk = require("./../models/survivorPerk");
const KillerPerk = require("./../models/killerPerk");

exports.getAllSurvPerks = factory.getAll(SurvivorPerk);
exports.getRandomSurvPerk = factory.getRandom(SurvivorPerk, 1);
exports.getRandomSurvPerks = factory.getRandom(SurvivorPerk, 5);
exports.getAllKillerPerks = factory.getAll(KillerPerk);
exports.getRandomKillerPerk = factory.getRandom(KillerPerk, 1);
exports.getRandomKillerPerks = factory.getRandom(KillerPerk, 5);