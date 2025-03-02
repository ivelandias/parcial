var map = L.map('map').setView([4.613622147268676, -74.15558080896226], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon (){
    let myData = await fetch('timiza.geojson');
    let myPolygon = await myData.json();
    L.geoJSON(myPolygon, 
        {
            style: {
                color: 'blue'
            }
        }
    ).addTo(map);
}

loadPolygon();



let btnTrees = document.getElementById('btnTrees');
btnTrees.addEventListener('click', 
    async ()=> {
        let response= await fetch("arboles_timiza.geojson");
        let datos=await response.json();
        //Agregar la capa al mapa

        L.geoJSON(
            datos,
            {
                pointToLayer: (feature, latlong)=>{

                    return L.circleMarker(latlong,{
                        radius:5,
                        fillColor:'green',
                        weight: 1
                    })

                }
            }
        ).addTo(map)
    })