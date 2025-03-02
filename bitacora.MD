# Problema 1

Crear un  repositorio local

# Problema 2 

Crear un repositorio remoto 
sincronizar los repositorios
configurar user.name e email .
publish branch 

# problema 3
crer una página que muestre un mapa centrado en mi barrio,

## Solución

Utiizar una biblioteca de visor geográfico: leaflet, openlayers,mapopen

## Problema 4

Mostrar el polígono de i barrio 

# Solución 
Buscar geoJSON de terceros
cargar el geoJSOn con leaflet (crear función asincrónica) async usando await 

## Problema 5

Crear un botón y asignarle un manejador de eventos 

## Problema 6
dónde conseguir árboles de la ciudad https://datosabiertos.bogota.gov.co/dataset/censo-arbolado-urbano
recortar los árboles del barrio 

## Problema 7
crear el bbox de mi barro con geojson.io

## Problema 8 
descargar los datos filtrados desde la API (Servicio REST) get y post 
usar la libreria json, requests, shapely.geometry (shape mapping), con el fin de obtener la información de árboles del bounding box. Conectarme a la api con requests.get e intersectar el gj de árboles y timiza

## Problema 9 
Generar un manejador de eventos para el botón de distancias donde se genere un pdf con la distancias obtenidas entre los árboles. 

Pasos.
Usar librerías jspdf para generar un pdf y jspdf autotable para que los datos sean ordenados en tablas
Usar turf para calcular las distancias entre árboles 

# ProBLEMA 10.
Obtener información acerca de los siniestros- información encontrada: siniestros viales en el barrio,
A partir del Bounding box, generar la interección de la información encontrada en la API https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/HistoricoSiniestros/FeatureServer/0/query 

# PROBLEMA 11
Generar un manejador de eventos en el botón de incidentes que muestre la distribución de los siniestros en el barrio 
