
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
            Babele.get().register({
                module: 'swade_es-ES',
                lang: 'es',
                dir: 'compendium'
            });
		}
});
