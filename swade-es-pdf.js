Hooks.once('init', () => {
    game.settings.register('swade-es', 'pdfDirectory', {
        name: 'Ubicación de los libros en PDF',
        hint: 'Indica la carpeta donde estan los libros en pdf',
        type: window.Azzu.SettingsTypes.DirectoryPicker,
        default: ' ',
        scope: 'world',
        config: true,
        onChange: directory => {
            window.location.reload();
        }
    });
});

Hooks.on("renderItemSheet", (app, html, options) => {
            html.find('.swade-book').click((ev) => {
                    let element = ev.currentTarget;
//                     console.log (element.dataset);
                    let buttons = {
                        close: {
                            icon: '<i class="fas fa-times"></i>',
                            label: game.i18n.localize('SWADE.Cancel'),
                        },
                    };
                    let dialogOptions = {
                        width: 630,
                        height: 500,
                    };
                    
                    let dialogContent = "";
                    
                    for(var i=element.dataset.pageStart; i<= element.dataset.pageEnd; i++) {
                        dialogContent += `<canvas class="swade-pdf-canvas" data-book="${element.dataset.book}" data-page="${i}"></canvas>`;
                    }
                    
                    return new Promise(resolve => {
                        new Dialog({
                            title: 'pdf',
                            content: dialogContent,
                            buttons: buttons,
                            default: 'close',
                            close: () => {
                                false;
                            }
                        }, dialogOptions).render(true);
                    }).then(
                          result => alert('result'), // shows "done!" after 1 second
                          error => alert('error') // doesn't run
                    );
                    
            });
});


Hooks.on("renderDialog", (app, html, options) => {
            html.find('.swade-pdf-canvas').each((index, element) => {
                    console.log(element.dataset);
                    ShowPdfPage(element, element.dataset.book, Number(element.dataset.page));                    
            });
});






function ShowPdfPage(element, pdfFile, page) {
   
    var loadingTask = pdfjsLib.getDocument(`/${game.settings.get('swade-es', 'pdfDirectory')}/${pdfFile}.pdf`);

    loadingTask.promise.then(function(pdf) {
            pdf.getPage(page).then(function(page) {
                var scale = 1.5;
                var viewport = page.getViewport({ scale: scale, });
                var canvas = element;//document.getElementById('swade-pdf-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                var renderContext = {
                canvasContext: context,
                viewport: viewport
                };
                page.render(renderContext);
            });
            
    });
}
