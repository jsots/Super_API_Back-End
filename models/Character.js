import mongoose from 'mongoose';
const { Schema } = mongoose;

const powerstatsSchema = new Schema({
 intelligence: { type: String },
 strength: { type: String },
 speed: { type: String },
 durability: { type: String },
 power: { type: String },
 combat: { type: String },
});

const appearanceSchema = new Schema({
 gender: { type: String },
 race: { type: String },
 height: [{ type: String }],
 weight: [{ type: String }],
 eyeColor: { type: String },
 hairColor: { type: String },
});

const biographySchema = new Schema({
 fullName: { type: String },
 alterEgos: { type: String },
 aliases: [{ type: String }],
 placeOfBirth: { type: String },
 firstAppearance: { type: String },
 publisher: { type: String },
 alignment: { type: String },
});

const imagesSchema = new Schema({
 xs: { type: String },
 sm: { type: String },
 md: { type: String },
 lg: { type: String }
});

const characterSchema = new Schema({
 name: { type: String },
 powerstats: powerstatsSchema,
 appearance: appearanceSchema,
 biography: biographySchema,
 work: {
   occupation: { type: String },
   base: { type: String },
 },
 connections: {
   relatives: { type: String },
 },
 images: imagesSchema
})


const Character = mongoose.model('Character', characterSchema);
export default Character;