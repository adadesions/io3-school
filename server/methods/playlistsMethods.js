import { Meteor } from 'meteor/meteor';

// Collections
import { Playlists } from '../../imports/apis/models/Playlists.js';

Meteor.methods({
  insertPlaylists(playlist) {
    Playlists.insert(playlist);
  }
})
