import SimpleSchema from 'meteor/aldeed:simple-schema';
import { Mongo } from 'meteor/mongo';

export const Playlists = new Mongo.Collection('playlists');


// PlaylistsSchema = new SimpleSchema({
//   playlistName: {
//     type: String,
//     label: 'Playlist Name'
//   },
//   createdAt: {
//     type: Date,
//     label: 'date this playlist was created'
//   }
// });
