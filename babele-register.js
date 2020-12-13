import { createActionCardTable } from "/systems/swade/module/util.js";

Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
            Babele.get().register({
                module: 'swade-es',
                lang: 'es',
                dir: 'compendium/es'
            });
            Babele.get().register({
                module: 'swade-es',
                lang: 'ca',
                dir: 'compendium/ca'
            });
            Babele.get().register({
                module: 'swade-es',
                lang: 'gl',
                dir: 'compendium/gl'
            });
            console.log("swade-es compendiums translate enabled");
		}
});

Hooks.on('ready', () => {
    console.log(`Repopulating action cards Table with cards from deck.` + game.settings.get('swade', 'cardDeck'));
    createActionCardTable(true);
});

Hooks.on('createActor', async (actor, options, userId) => {
    
    let swadeRbActive = game.modules.get("swade-rb")?.active;
    
    if (actor.data.type === 'character' && options.renderSheet && !swadeRbActive) {
        const skillsToFind = [
            'Atletismo',
            'Conocimientos generales',
            'Notar',
            'Persuadir',
            'Sigilo',
            'Sin entrenar'
        ];
        const skillIndex = (await game.packs
            .get('swade.skills')
            .getContent());
        actor.createEmbeddedEntity('OwnedItem', skillIndex.filter((i) => skillsToFind.includes(i.data.name)));
    }
    
    
});
