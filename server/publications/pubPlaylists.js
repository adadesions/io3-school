import { Meteor } from 'meteor/meteor';

// Collections
import { Playlists } from '../../imports/apis/models/Playlists.js';

Meteor.publish('allPlaylists', () => {
  return Playlists.find();
})
