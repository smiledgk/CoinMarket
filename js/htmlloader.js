const htmlToLoad = ['headHTML', 'navbarHTML', 'footerHTML'];
$(function() {
    for (let html of htmlToLoad) {
        $(`#${html}`).load(`${html.replace('HTML', '.html')}`);
    }
});