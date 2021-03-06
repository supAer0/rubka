const mongoose = require('mongoose');

const siteScriptSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Новый сценарий'
  },
  utm_term: {
    type: String,
    default: 'test'
  },
  siteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site'
  },
  directGroupId: {
    type: String,
    unique: 'Эта группа объявлений уже привязана к сценарию'
  }
}, {
  toObject: {
    virtuals: true
  }
});

siteScriptSchema.virtual('scriptVersions', {
  ref: 'ScriptVersion',
  localField: '_id',
  foreignField: 'siteScriptId'
});

siteScriptSchema.statics.publicFields = ['name', 'utm_term', 'siteId', 'directGroupId'];

module.exports = mongoose.model('SiteScript', siteScriptSchema);
