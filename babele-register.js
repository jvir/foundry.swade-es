
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
