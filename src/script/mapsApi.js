
    function GetMap() {
        var map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'AsR2Ylci3ob1wGimRArjHwzGb8PuuByKGfeuthw0pHYLkMMWw_Af2Md0zSpmhK32',
            center: new Microsoft.Maps.Location(43.856430, 18.413029),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 7
        });

        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        infobox.setMap(map);

      }
   
