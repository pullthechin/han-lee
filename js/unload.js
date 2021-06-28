(function(){
    window.addEventListener('beforeunload', function(event) {
        this.history.pushState({}, '', '/index.html#');
    });
})();