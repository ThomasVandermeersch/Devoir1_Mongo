#!/bin/bash
echo "-------------- Loading the data in the database --------------"
mongoimport --db $DB_NAME --collection $DB_COLLECTION_NAME --file "../datastore/vdq-panneauxstationnement.geojson" --jsonArray

