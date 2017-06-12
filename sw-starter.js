if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        if(navigator.onLine){
            navigator.serviceWorker.register('./service-worker.js').then(function(reg) {
            }).catch(function(error) {
                console.log('Registration failed with ' + error);
            });
        }
    });
};
