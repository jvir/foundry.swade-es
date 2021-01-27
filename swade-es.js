const compendiumLangs = ['es', 'ca'];
const swadeES = {
    'initSkills': {//TODO
        'es': [],
        'gl': [],
        'ca': [],
        'eu': []
    },
    'vehicleSkills': {//TODO
        'es': ['', 'Navegar', 'Conducir', 'Pilotar', 'Cabalgar'],
        'ca': ['', 'Navegar', 'Conduir', 'Pilotar', 'Cavalcar']
    }
};


Hooks.once('ready', () => {
    if (compendiumLangs.includes(game.i18n.lang)){
            CONFIG.SWADE.vehicles.opSkills = swadeES.vehicleSkills[game.i18n.lang];
    }
});
