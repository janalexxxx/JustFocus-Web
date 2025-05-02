/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2321661690")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_484305853",
    "hidden": false,
    "id": "relation1553183652",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "projects",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_113564862",
    "hidden": false,
    "id": "relation3447874133",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "todos",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2321661690")

  // remove field
  collection.fields.removeById("relation1553183652")

  // remove field
  collection.fields.removeById("relation3447874133")

  return app.save(collection)
})
