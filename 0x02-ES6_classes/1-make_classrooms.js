import ClassRoom from './0-classroom';

function initializeRooms() {
  const room1 = new ClassRoom(10);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(30);
  return [room1, room2, room3];
}
export default initializeRooms;
