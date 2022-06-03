$(document).ready(function() {
    var weapons = [
        {
        "name": "44_pistol",
        "damage": 48,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    },
    {
        "name": "10mm_pistol",
        "damage": 18,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    },
    {
        "name": "assault_rifle",
        "damage": 30,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    },
    {
        "name": "frag_grenade",
        "damage": 151,
        "fire_rate": 1,
        "range": 10,
        "accuracy": 50,
        "weight": 0.5,
        "value": 100
    },
    {
        "name": "minigun",
        "damage": 8,
        "fire_rate": 272,
        "range": 131,
        "accuracy": 35,
        "weight": 27.4,
        "value": 382
    },
    {
        "name": "molotov_cocktail",
        "damage": 51,
        "fire_rate": 1,
        "range": 10,
        "accuracy": 35,
        "weight": 0.5,
        "value": 100
    },
    {
        "name": "short_double_barrel_shotgun",
        "damage": 45,
        "fire_rate": 162,
        "range": 47,
        "accuracy": 16,
        "weight": 9,
        "value": 39
    },
    {
        "name": "good_intentions",
        "damage": 21,
        "fire_rate": 113,
        "range": 194,
        "weight": 7.9,
        "value": 393
    },
    {
        "name": "plasma_gun",
        "damage": 24+24,
        "fire_rate": 136,
        "range": 119,
        "weight": 3.9,
        "value": 123
    },
    {
        "name": "tesla_rifle",
        "damage": 38,
        "fire_rate": 40,
        "range": 83,
        "weight": 8.1,
        "value": 90
    },
    {
        "name": "frag_mine",
        "damage": 301,
        "fire_rate": 1,
        "range":"-",
        "weight": 0.5,
        "value": 50
    },
    {
        "name": "fat_man",
        "damage": 468,
        "fire_rate": 1,
        "range": 117,
        "weight": 30.7,
        "value": 512
    },
    {
        "name": "nuka_nuke",
        "damage": 794,
        "fire_rate": 1,
        "range": 117,
        "weight": 36,
        "value": 650
    },
    {
        "name": "pipe_gun",
        "damage": 13,
        "fire_rate": 55,
        "range": 83,
        "weight": 2.3,
        "value": 20
    },
    {
        "name": "railway_rifle",
        "damage": 100,
        "fire_rate": 10,
        "range": 119,
        "weight": 14.4,
        "value": 290
    },
    {
        "name": "early_retirement",
        "damage": "-",
        "fire_rate": "-",
        "range": 119,
        "weight": "-",
        "value": "-"
    }
    ]

    $('.item-list a').on('click', function(e) {
        $('.item-list a').removeClass('active')
        $(e.currentTarget).addClass('active')
    })

    $('.item-list a').hover (function(e){
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item)

        for(item in weapons){
            if(weapons[item].name == current_item){
                console.log(weapons[item])

                var container = $('.item-stats')
                container.find('.damage').html(weapons[item].damage)
                container.find('.fire_rate').html(weapons[item].fire_rate)
                container.find('.accuracy').html(weapons[item].accuracy)
                container.find('.range').html(weapons[item].range)
                container.find('.weight').html(weapons[item].weight)
                container.find('.value').html(weapons[item].value)
            }
        }
    })

})
