Hooks.on("renderItemSheet", (app, html, options) => {
            html.find('.swade-book').click((ev) => {
                
                    let buttons = {
                        close: {
                            icon: '<i class="fas fa-times"></i>',
                            label: game.i18n.localize('SWADE.Cancel'),
                        },
                    };
                    let dialogOptions = {
                        width: 620,
                        height: 500,
                    };
                    return new Promise(resolve => {
                        new Dialog({
                            title: 'pdf',
                            content: '<canvas id="swade-pdf-canvas"></canvas>',
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
//     alert('renderCanvas');
//     console.log(app);
//     console.log(html);
//     console.log(options);
            html.find('#swade-pdf-canvas').click((ev) => {
                
//                     alert('canvas');
                    ShowPdfPage('swade', 44);
                    
            });
});






function ShowPdfPage(pdfFile, page) {
   
    
    var loadingTask = pdfjsLib.getDocument('/modules/swade-es/pdf/swade.pdf');
//         alert(pdfFile);
        console.log(loadingTask);

    loadingTask.promise.then(function(pdf) {
//         alert('intoLoading');
        pdf.getPage(44).then(function(page) {
            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale, });
// alert('kkk');
            var canvas = document.getElementById('swade-pdf-canvas');
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
