const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  url: {
    type: String,
    required: 'Url сайта не должен быть пустым.',
    unique: 'Сайт с таким url уже существует'
  },
  name: {
    type: String,
    required: 'У сайта должно быть название'
  },
  token: {
    type: String,
    unique: true,
    required: true
  },
  idYaMetrika: {
    type: String
  },
  nicheId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Niche',
    required: 'Не указана ниша'
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: 'Не указан город'
  },
  oauthTokenYandex: {
    type: 'String',
    default: ''
  },
  directCompanyId: {
    type: 'String'
  }
}, {
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

siteSchema.virtual('siteElements', {
  ref: 'SiteElement', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'siteId' // is equal to `foreignField`s
});
siteSchema.virtual('siteScripts', {
  ref: 'SiteScript', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'siteId' // is equal to `foreignField`s
});

siteSchema.statics.publicFields = ['url', 'name', 'token', 'idYaMetrika', 'nicheId', 'cityId', 'oauthTokenYandex', 'directCompanyId'];

module.exports = mongoose.model('Site', siteSchema);
