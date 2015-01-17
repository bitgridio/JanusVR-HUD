room.onLoad = function () {
  // create our text object
  room.createObject('Text', {
    js_id : 'JanusVR-HUD',
    text : 'JanusVR-HUD',
    pos : Vector(0, 0, 0),
    fwd : scalarMultiply(player.view_dir, -1) // face player
  });

  // create our vector references
  var player_facing = Vector(1);
  var hud_pos = Vector(0, 1.40, 0);
};

room.update = function (dt) {
  // keep the object in the user's view
  var console_pos = translate(player.pos, player_facing);

  // pos, xdir, ydir, zdir, fps, size, tris, userid, face, connection, address
  // the above are already shown by hitting \ so put something else useful here
  var hud_info = 'Whatever you like here.';
  room.objects['JanusVR-HUD'].text = hud_info;

  // follows and faces the player
  room.objects["JanusVR-HUD"].pos = translate(translate(player.pos, player.view_dir), hud_pos);
  room.objects["JanusVR-HUD"].fwd = scalarMultiply(player.view_dir, -1);
};