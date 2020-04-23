var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite_0',
            'type': 'base',
            'opacity': 0.801000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_CassilndiaPermetro_1 = new ol.format.GeoJSON();
var features_CassilndiaPermetro_1 = format_CassilndiaPermetro_1.readFeatures(json_CassilndiaPermetro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CassilndiaPermetro_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CassilndiaPermetro_1.addFeatures(features_CassilndiaPermetro_1);var lyr_CassilndiaPermetro_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CassilndiaPermetro_1, 
                style: style_CassilndiaPermetro_1,
                title: '<img src="styles/legend/CassilndiaPermetro_1.png" /> Cassilândia Perímetro'
            });var format_CassilndiaQuadras_2 = new ol.format.GeoJSON();
var features_CassilndiaQuadras_2 = format_CassilndiaQuadras_2.readFeatures(json_CassilndiaQuadras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CassilndiaQuadras_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CassilndiaQuadras_2.addFeatures(features_CassilndiaQuadras_2);var lyr_CassilndiaQuadras_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CassilndiaQuadras_2, 
                style: style_CassilndiaQuadras_2,
                title: '<img src="styles/legend/CassilndiaQuadras_2.png" /> Cassilândia Quadras'
            });var format_Hidrogrfia_3 = new ol.format.GeoJSON();
var features_Hidrogrfia_3 = format_Hidrogrfia_3.readFeatures(json_Hidrogrfia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrogrfia_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hidrogrfia_3.addFeatures(features_Hidrogrfia_3);var lyr_Hidrogrfia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrogrfia_3, 
                style: style_Hidrogrfia_3,
                title: '<img src="styles/legend/Hidrogrfia_3.png" /> Hidrográfia'
            });var format_Ruas_4 = new ol.format.GeoJSON();
var features_Ruas_4 = format_Ruas_4.readFeatures(json_Ruas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruas_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ruas_4.addFeatures(features_Ruas_4);var lyr_Ruas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ruas_4, 
                style: style_Ruas_4,
                title: '<img src="styles/legend/Ruas_4.png" /> Ruas'
            });var format_Rodovia_5 = new ol.format.GeoJSON();
var features_Rodovia_5 = format_Rodovia_5.readFeatures(json_Rodovia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodovia_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rodovia_5.addFeatures(features_Rodovia_5);var lyr_Rodovia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rodovia_5, 
                style: style_Rodovia_5,
                title: '<img src="styles/legend/Rodovia_5.png" /> Rodovia'
            });var format_PontosTursticos_6 = new ol.format.GeoJSON();
var features_PontosTursticos_6 = format_PontosTursticos_6.readFeatures(json_PontosTursticos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosTursticos_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PontosTursticos_6.addFeatures(features_PontosTursticos_6);var lyr_PontosTursticos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PontosTursticos_6, 
                style: style_PontosTursticos_6,
    title: 'Pontos Turísticos<br />\
    <img src="styles/legend/PontosTursticos_6_0.png" /> Arquitetura oficial<br />\
    <img src="styles/legend/PontosTursticos_6_1.png" /> Arquitetura religiosa<br />\
    <img src="styles/legend/PontosTursticos_6_2.png" /> Atrativos naturais<br />\
    <img src="styles/legend/PontosTursticos_6_3.png" /> Cachoeira<br />\
    <img src="styles/legend/PontosTursticos_6_4.png" /> Cultural<br />\
    <img src="styles/legend/PontosTursticos_6_5.png" /> Eventos programados<br />\
    <img src="styles/legend/PontosTursticos_6_6.png" /> Instalacoes esportivas<br />\
    <img src="styles/legend/PontosTursticos_6_7.png" /> Outros<br />\
    <img src="styles/legend/PontosTursticos_6_8.png" /> Parque<br />\
    <img src="styles/legend/PontosTursticos_6_9.png" /> Quiosque<br />'
        });var format_Supermercados_7 = new ol.format.GeoJSON();
var features_Supermercados_7 = format_Supermercados_7.readFeatures(json_Supermercados_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermercados_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Supermercados_7.addFeatures(features_Supermercados_7);var lyr_Supermercados_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Supermercados_7, 
                style: style_Supermercados_7,
                title: '<img src="styles/legend/Supermercados_7.png" /> Supermercados'
            });var format_Estabelecimentosalimentcios_8 = new ol.format.GeoJSON();
var features_Estabelecimentosalimentcios_8 = format_Estabelecimentosalimentcios_8.readFeatures(json_Estabelecimentosalimentcios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estabelecimentosalimentcios_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Estabelecimentosalimentcios_8.addFeatures(features_Estabelecimentosalimentcios_8);var lyr_Estabelecimentosalimentcios_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estabelecimentosalimentcios_8, 
                style: style_Estabelecimentosalimentcios_8,
    title: 'Estabelecimentos alimentícios<br />\
    <img src="styles/legend/Estabelecimentosalimentcios_8_0.png" /> Restaurante<br />\
    <img src="styles/legend/Estabelecimentosalimentcios_8_1.png" /> Panificadora<br />\
    <img src="styles/legend/Estabelecimentosalimentcios_8_2.png" /> Lanchonete<br />'
        });var format_Postodecombustvel_9 = new ol.format.GeoJSON();
var features_Postodecombustvel_9 = format_Postodecombustvel_9.readFeatures(json_Postodecombustvel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postodecombustvel_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Postodecombustvel_9.addFeatures(features_Postodecombustvel_9);var lyr_Postodecombustvel_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Postodecombustvel_9, 
                style: style_Postodecombustvel_9,
                title: '<img src="styles/legend/Postodecombustvel_9.png" /> Posto de combustível'
            });var format_Hotis_10 = new ol.format.GeoJSON();
var features_Hotis_10 = format_Hotis_10.readFeatures(json_Hotis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotis_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hotis_10.addFeatures(features_Hotis_10);var lyr_Hotis_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hotis_10, 
                style: style_Hotis_10,
                title: '<img src="styles/legend/Hotis_10.png" /> Hotéis'
            });var format_Hospitais_11 = new ol.format.GeoJSON();
var features_Hospitais_11 = format_Hospitais_11.readFeatures(json_Hospitais_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitais_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hospitais_11.addFeatures(features_Hospitais_11);var lyr_Hospitais_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitais_11, 
                style: style_Hospitais_11,
                title: '<img src="styles/legend/Hospitais_11.png" /> Hospitais'
            });var format_Farmcias_12 = new ol.format.GeoJSON();
var features_Farmcias_12 = format_Farmcias_12.readFeatures(json_Farmcias_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Farmcias_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Farmcias_12.addFeatures(features_Farmcias_12);var lyr_Farmcias_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Farmcias_12, 
                style: style_Farmcias_12,
                title: '<img src="styles/legend/Farmcias_12.png" /> Farmácias'
            });var format_Bancos_13 = new ol.format.GeoJSON();
var features_Bancos_13 = format_Bancos_13.readFeatures(json_Bancos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bancos_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bancos_13.addFeatures(features_Bancos_13);var lyr_Bancos_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bancos_13, 
                style: style_Bancos_13,
                title: '<img src="styles/legend/Bancos_13.png" /> Bancos'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CassilndiaPermetro_1.setVisible(true);lyr_CassilndiaQuadras_2.setVisible(true);lyr_Hidrogrfia_3.setVisible(true);lyr_Ruas_4.setVisible(true);lyr_Rodovia_5.setVisible(true);lyr_PontosTursticos_6.setVisible(true);lyr_Supermercados_7.setVisible(true);lyr_Estabelecimentosalimentcios_8.setVisible(true);lyr_Postodecombustvel_9.setVisible(true);lyr_Hotis_10.setVisible(true);lyr_Hospitais_11.setVisible(true);lyr_Farmcias_12.setVisible(true);lyr_Bancos_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CassilndiaPermetro_1,lyr_CassilndiaQuadras_2,lyr_Hidrogrfia_3,lyr_Ruas_4,lyr_Rodovia_5,lyr_PontosTursticos_6,lyr_Supermercados_7,lyr_Estabelecimentosalimentcios_8,lyr_Postodecombustvel_9,lyr_Hotis_10,lyr_Hospitais_11,lyr_Farmcias_12,lyr_Bancos_13];
lyr_CassilndiaPermetro_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CassilndiaQuadras_2.set('fieldAliases', {'fid': 'fid', });
lyr_Hidrogrfia_3.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'GEOMETRIAA': 'GEOMETRIAA', 'COINCIDECO': 'COINCIDECO', 'DENTRODEPO': 'DENTRODEPO', 'COMPARTILH': 'COMPARTILH', 'EIXOPRINCI': 'EIXOPRINCI', 'NAVEGABILI': 'NAVEGABILI', 'CALADOMAX': 'CALADOMAX', 'REGIME': 'REGIME', 'LARGURAMED': 'LARGURAMED', 'VELOCIDADE': 'VELOCIDADE', 'PROFUNDIDA': 'PROFUNDIDA', 'NOMEABREV': 'NOMEABREV', });
lyr_Ruas_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Rodovia_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Tipo': 'Tipo', });
lyr_PontosTursticos_6.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'tipo de ponto turistico': 'tipo de ponto turistico', 'Possui atendimento ao publico': 'Possui atendimento ao publico', 'mecanismos de acessibilidade': 'mecanismos de acessibilidade', });
lyr_Supermercados_7.set('fieldAliases', {'fid': 'fid', 'Carimbo de data/hora': 'Carimbo de data/hora', 'Nome': 'Nome', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Endereço': 'Endereço', 'Horário de abertura': 'Horário de abertura', 'Horário de fechamento': 'Horário de fechamento', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_Estabelecimentosalimentcios_8.set('fieldAliases', {'fid': 'fid', 'Carimbo de data/hora': 'Carimbo de data/hora', 'Nome': 'Nome', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Horario de funcionamento': 'Horario de funcionamento', 'Tipo de estabelecimento': 'Tipo de estabelecimento', 'tip-estab': 'tip-estab', });
lyr_Postodecombustvel_9.set('fieldAliases', {'fid': 'fid', 'Carimbo de data/hora': 'Carimbo de data/hora', 'Nome': 'Nome', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Horario de funcionamento': 'Horario de funcionamento', 'Aceita cartao de credito e debito': 'Aceita cartao de credito e debito', 'Tipo de combustivel oferecido': 'Tipo de combustivel oferecido', 'Pos_estacio_onibus_caminhões': 'Pos_estacio_onibus_caminhões', 'Possui_loja_conve': 'Possui_loja_conve', 'field_10': 'field_10', 'field_11': 'field_11', });
lyr_Hotis_10.set('fieldAliases', {'fid': 'fid', 'Carimbo de data/hora': 'Carimbo de data/hora', 'Nome': 'Nome', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Horário de funcionamento': 'Horário de funcionamento', 'Aceita cartão de crédito e débito?': 'Aceita cartão de crédito e débito?', 'Faz reservas pela internet?': 'Faz reservas pela internet?', 'Endereço': 'Endereço', 'Numero de quartos disponiveis': 'Numero de quartos disponiveis', 'Lotacao maxima': 'Lotacao maxima', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_Hospitais_11.set('fieldAliases', {'fid': 'fid', 'Carimbo de data/hora': 'Carimbo de data/hora', 'Nome': 'Nome', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Horario de funcionamento': 'Horario de funcionamento', 'Tipo': 'Tipo', 'Planos de saude aceitos': 'Planos de saude aceitos', 'Endereco': 'Endereco', 'Numero de leitos': 'Numero de leitos', 'Outras informacoes relevantes': 'Outras informacoes relevantes', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', });
lyr_Farmcias_12.set('fieldAliases', {'fid': 'fid', 'Carimbo de data/hora': 'Carimbo de data/hora', 'Nome': 'Nome', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Horario de funcionamento': 'Horario de funcionamento', 'Aceita cartao de credito e debito': 'Aceita cartao de credito e debito', 'É farmacia de manipulacao': 'É farmacia de manipulacao', 'É Farmacia popular': 'É Farmacia popular', });
lyr_Bancos_13.set('fieldAliases', {'fid': 'fid', 'Carimbo de data/hora': 'Carimbo de data/hora', 'Nome': 'Nome', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Horario de comercial': 'Horario de comercial', 'aceita cartões de outros bancos': 'aceita cartões de outros bancos', 'Horario  funcionamento caixas eletronicos': 'Horario  funcionamento caixas eletronicos', });
lyr_CassilndiaPermetro_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_CassilndiaQuadras_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_Hidrogrfia_3.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'GEOMETRIAA': 'TextEdit', 'COINCIDECO': 'TextEdit', 'DENTRODEPO': 'TextEdit', 'COMPARTILH': 'TextEdit', 'EIXOPRINCI': 'TextEdit', 'NAVEGABILI': 'TextEdit', 'CALADOMAX': 'TextEdit', 'REGIME': 'TextEdit', 'LARGURAMED': 'TextEdit', 'VELOCIDADE': 'TextEdit', 'PROFUNDIDA': 'TextEdit', 'NOMEABREV': 'TextEdit', });
lyr_Ruas_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Rodovia_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_PontosTursticos_6.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'tipo de ponto turistico': 'TextEdit', 'Possui atendimento ao publico': 'TextEdit', 'mecanismos de acessibilidade': 'TextEdit', });
lyr_Supermercados_7.set('fieldImages', {'fid': 'TextEdit', 'Carimbo de data/hora': 'TextEdit', 'Nome': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Endereço': 'TextEdit', 'Horário de abertura': 'TextEdit', 'Horário de fechamento': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_Estabelecimentosalimentcios_8.set('fieldImages', {'fid': 'TextEdit', 'Carimbo de data/hora': 'TextEdit', 'Nome': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Horario de funcionamento': 'TextEdit', 'Tipo de estabelecimento': 'TextEdit', 'tip-estab': 'TextEdit', });
lyr_Postodecombustvel_9.set('fieldImages', {'fid': 'TextEdit', 'Carimbo de data/hora': 'TextEdit', 'Nome': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Horario de funcionamento': 'TextEdit', 'Aceita cartao de credito e debito': 'TextEdit', 'Tipo de combustivel oferecido': 'TextEdit', 'Pos_estacio_onibus_caminhões': 'TextEdit', 'Possui_loja_conve': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', });
lyr_Hotis_10.set('fieldImages', {'fid': 'TextEdit', 'Carimbo de data/hora': 'TextEdit', 'Nome': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Horário de funcionamento': 'TextEdit', 'Aceita cartão de crédito e débito?': 'TextEdit', 'Faz reservas pela internet?': 'TextEdit', 'Endereço': 'TextEdit', 'Numero de quartos disponiveis': 'TextEdit', 'Lotacao maxima': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', });
lyr_Hospitais_11.set('fieldImages', {'fid': 'TextEdit', 'Carimbo de data/hora': 'TextEdit', 'Nome': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Horario de funcionamento': 'TextEdit', 'Tipo': 'TextEdit', 'Planos de saude aceitos': 'TextEdit', 'Endereco': 'TextEdit', 'Numero de leitos': 'TextEdit', 'Outras informacoes relevantes': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', });
lyr_Farmcias_12.set('fieldImages', {'fid': 'TextEdit', 'Carimbo de data/hora': 'TextEdit', 'Nome': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Horario de funcionamento': 'TextEdit', 'Aceita cartao de credito e debito': 'TextEdit', 'É farmacia de manipulacao': 'TextEdit', 'É Farmacia popular': 'TextEdit', });
lyr_Bancos_13.set('fieldImages', {'fid': 'TextEdit', 'Carimbo de data/hora': 'TextEdit', 'Nome': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Horario de comercial': 'TextEdit', 'aceita cartões de outros bancos': 'TextEdit', 'Horario  funcionamento caixas eletronicos': 'TextEdit', });
lyr_CassilndiaPermetro_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CassilndiaQuadras_2.set('fieldLabels', {'fid': 'no label', });
lyr_Hidrogrfia_3.set('fieldLabels', {'fid': 'no label', 'NOME': 'no label', 'GEOMETRIAA': 'no label', 'COINCIDECO': 'no label', 'DENTRODEPO': 'no label', 'COMPARTILH': 'no label', 'EIXOPRINCI': 'no label', 'NAVEGABILI': 'no label', 'CALADOMAX': 'no label', 'REGIME': 'no label', 'LARGURAMED': 'no label', 'VELOCIDADE': 'no label', 'PROFUNDIDA': 'no label', 'NOMEABREV': 'no label', });
lyr_Ruas_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Rodovia_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', 'Tipo': 'no label', });
lyr_PontosTursticos_6.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'tipo de ponto turistico': 'no label', 'Possui atendimento ao publico': 'no label', 'mecanismos de acessibilidade': 'no label', });
lyr_Supermercados_7.set('fieldLabels', {'fid': 'no label', 'Carimbo de data/hora': 'no label', 'Nome': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Endereço': 'no label', 'Horário de abertura': 'no label', 'Horário de fechamento': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_Estabelecimentosalimentcios_8.set('fieldLabels', {'fid': 'no label', 'Carimbo de data/hora': 'no label', 'Nome': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Horario de funcionamento': 'no label', 'Tipo de estabelecimento': 'no label', 'tip-estab': 'no label', });
lyr_Postodecombustvel_9.set('fieldLabels', {'fid': 'no label', 'Carimbo de data/hora': 'no label', 'Nome': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Horario de funcionamento': 'no label', 'Aceita cartao de credito e debito': 'no label', 'Tipo de combustivel oferecido': 'no label', 'Pos_estacio_onibus_caminhões': 'no label', 'Possui_loja_conve': 'no label', 'field_10': 'no label', 'field_11': 'no label', });
lyr_Hotis_10.set('fieldLabels', {'fid': 'no label', 'Carimbo de data/hora': 'no label', 'Nome': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Horário de funcionamento': 'no label', 'Aceita cartão de crédito e débito?': 'no label', 'Faz reservas pela internet?': 'no label', 'Endereço': 'no label', 'Numero de quartos disponiveis': 'no label', 'Lotacao maxima': 'no label', 'field_11': 'no label', 'field_12': 'no label', });
lyr_Hospitais_11.set('fieldLabels', {'fid': 'no label', 'Carimbo de data/hora': 'no label', 'Nome': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Horario de funcionamento': 'no label', 'Tipo': 'no label', 'Planos de saude aceitos': 'no label', 'Endereco': 'no label', 'Numero de leitos': 'no label', 'Outras informacoes relevantes': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', });
lyr_Farmcias_12.set('fieldLabels', {'fid': 'no label', 'Carimbo de data/hora': 'no label', 'Nome': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Horario de funcionamento': 'no label', 'Aceita cartao de credito e debito': 'no label', 'É farmacia de manipulacao': 'no label', 'É Farmacia popular': 'no label', });
lyr_Bancos_13.set('fieldLabels', {'fid': 'no label', 'Carimbo de data/hora': 'no label', 'Nome': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Horario de comercial': 'no label', 'aceita cartões de outros bancos': 'no label', 'Horario  funcionamento caixas eletronicos': 'no label', });
lyr_Bancos_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});