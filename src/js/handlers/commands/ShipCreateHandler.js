class ShipCreateHandler {
  static get ID() {
    return 12695;
  }

  constructor() {
    this._handler = function (e, a) {
      e.detail = e.wholeMessage.split("|").slice(1).join("");

      let shipCreateCmd = JSON.parse(e.detail);
      if (!a.ships.hasOwnProperty(shipCreateCmd.userId)){
        a.ships[shipCreateCmd.userId] = new Ship(shipCreateCmd.x, shipCreateCmd.y, shipCreateCmd.userId, shipCreateCmd.npc, shipCreateCmd.userName, shipCreateCmd.factionId, shipCreateCmd.modifier, shipCreateCmd[Variables.clanDiplomacy].type, shipCreateCmd.cloaked);
      }
    }
  }

  get handler() {
    return this._handler;
  }
}