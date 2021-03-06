const mongoose = require('mongoose');

// uniqueValidator validation is not atomic! unsafe!
const siteElementValueSchema = new mongoose.Schema({
  value: {
    type: String,
    default: ''
  },
  isEmpty: {
    type: Boolean,
    default: false
  },
  siteElementId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SiteElement',
    required: 'Неуказан id эклемента'
  },
  scriptVersionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ScriptVersion',
    required: 'Неуказан сценарий'
  }
}, {
  toObject: {
    virtuals: true
  }
});

siteElementValueSchema.statics.publicFields = ['value', 'siteElementId', 'isEmpty', 'scriptVersionId'];

module.exports = mongoose.model('SiteElementValue', siteElementValueSchema);
