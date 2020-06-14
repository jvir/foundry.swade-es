import { createActionCardTable } from "/systems/swade/module/util.js";

Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
            Babele.get().register({
                module: 'swade-es',
                lang: 'es',
                dir: 'compendium'
            });
            console.log("swade_es compendiums translate enabled");
		}
});

Hooks.on('ready', () => {
    console.log(`Repopulating action cards Table with cards from deck.` + game.settings.get('swade', 'cardDeck'));
    createActionCardTable(true);
});

Hooks.on('createActor', async (actor, options, userId) => {
    if (actor.data.type === 'character' && options.renderSheet) {
        const skillsToFind = [
            'Atletismo',
            'Conocimientos generales',
            'Notar',
            'Persuadir',
            'Sigilo',
        ];
        const skillIndex = (await game.packs
            .get('swade.skills')
            .getContent());
        actor.createEmbeddedEntity('OwnedItem', skillIndex.filter((i) => skillsToFind.includes(i.data.name)));
    }
});
